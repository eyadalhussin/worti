import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Wort from 'src/app/classes/Wort';
import WordService from 'src/app/services/WordService';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.scss']
})
export class EditWordComponent {

  public currentWord?: Wort;
  private wordSubscription: Subscription = new Subscription;

  constructor(private wordService:WordService, private router:Router){}

  ngOnInit(): void {
    this.wordSubscription = this.wordService.$currentWord.subscribe(erg => this.currentWord = erg);
  }

  ngOnDestroy(): void {
  this.wordSubscription.unsubscribe();
  }

  navigate(route:string){
    this.router.navigate([route]);
  }

}
