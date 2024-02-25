import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Wort from 'src/app/classes/Wort';
import DatabaseService from 'src/app/services/DatabaseService';
import WordService from 'src/app/services/WordService';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.scss']
})
export class EditWordComponent {
  public updating:boolean = false;
  public updateMessage:string = '';
  public currentWord?: Wort;
  private wordSubscription: Subscription = new Subscription();
  private databaseSubscription:Subscription = new Subscription();

  constructor(private wordService:WordService, private databaseService:DatabaseService, private router:Router){}

  ngOnInit(): void {
    this.databaseSubscription = this.databaseService.$woerter.subscribe(erg => this.currentWord = erg[0]);
    this.wordSubscription = this.wordService.$currentWord.subscribe(erg => this.currentWord = erg);
  }

  ngOnDestroy(): void {
  this.wordSubscription.unsubscribe();
  this.databaseSubscription.unsubscribe();
  }

  navigate(route:string){
    this.router.navigate([route]);
  }

  deleteWord(){
    if(this.currentWord){
      this.databaseService.deleteWord(this.currentWord);
      this.navigate('words');
    }
  }

  updateWord(form:NgForm){
    if(form.valid){
      const updatedWord = new Wort(0, form.value.wort, form.value.artikel, form.value.synonym, form.value.antynom, form.value.bedeutung);
      console.log(updatedWord);
      if(this.currentWord && updatedWord){
        this.updating = true;
        this.databaseService.updateWord(this.currentWord,updatedWord)
        .then(erg => {
          this.updateMessage = 'Wort erfolgreich aktualisiert !';
          setTimeout(() => {
            this.updating = false;
            this.updateMessage = '';
          }, 1000);
        })
        .catch(error => {
          this.updating = false;
          console.log(error.message);
        });
      }
    }
  }

}
