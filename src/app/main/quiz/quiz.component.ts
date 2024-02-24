import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  quizStarted:boolean = false;


  startQuiz(){
    this.quizStarted = true;
  }

  endQuiz(){
    this.quizStarted = false;
  }

}
