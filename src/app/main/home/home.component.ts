import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import Wort from 'src/app/classes/Wort';
import DatabaseService from 'src/app/services/DatabaseService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  submitErg:string = "";
  errorMessage:string = "";
  woerterCount:number = 0;
  private countSubscription:Subscription = new Subscription();

  constructor(private databaseService: DatabaseService){}

  ngOnInit(): void {
  this.countSubscription = this.databaseService.$woerter.subscribe(erg => this.woerterCount = erg.length); 
  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe();
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.submitErg = '';
      const wort = new Wort(0, form.value.wort, form.value.artikel, form.value.synonym, form.value.antynom, form.value.bedeutung);
      this.databaseService.addNewWord(wort)
      .then(erg => {
        this.submitErg = 'success';
        this.errorMessage = 'Ein Wort wurd erfolgreich hinzugefügt ! du hast jetzt ' + this.databaseService.getWoerterCount() + ' Wörter !';
      })
      .catch(error => {
        console.log(error.message);
        this.errorMessage = 'Das Wort konnte nicht hinzugefügt werden !';
        this.submitErg = 'error';
      });
      form.reset();
    } else {
      this.errorMessage = 'Invalid Input !';
      this.submitErg = 'error';
    }
  }
}
