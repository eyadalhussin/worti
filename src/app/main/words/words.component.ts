import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Wort from 'src/app/classes/Wort';
import DatabaseService from 'src/app/services/DatabaseService';
import WordService from 'src/app/services/WordService';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent {

  woerter:Wort[] = [];

  constructor(private wordService: WordService, private router:Router, private databaseService: DatabaseService){}

  ngOnInit(): void {
    this.databaseService.$woerter.subscribe(erg => this.woerter = erg);
  }

  editWord(wort:Wort){
    this.wordService.setCurrentWord(wort);
    this.router.navigate(['edit-word']);
  }
  
  deleteWord(wort:Wort){
    this.databaseService.deleteWord(wort);
    this.router.navigate(['words']);
  }

}
