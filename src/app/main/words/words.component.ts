import { Component } from '@angular/core';
import { Router } from '@angular/router';
import WordService from 'src/app/services/WordService';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent {


  numbers:number[] = [0,0,0,0,0,0,0,0,0,0,0];

  constructor(private wordService: WordService, private router:Router){}

  ngOnInit(): void {

  }

  editWord(){
    this.router.navigate(['edit-word']);
  }

}
