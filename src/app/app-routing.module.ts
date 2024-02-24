import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { WordsComponent } from './main/words/words.component';
import { QuizComponent } from './main/quiz/quiz.component';
import { EditWordComponent } from './main/edit-word/edit-word.component';

const routes: Routes = [
  {path: '', component : WordsComponent},
  {path: 'home', component : HomeComponent, data: {animation : 'isLeft'}},
  {path: 'words', component : WordsComponent, data: {animation : 'isMiddle'}},
  {path: 'edit-word', component : EditWordComponent, data: {animation : 'isRight'}},
  {path: 'quiz', component : QuizComponent, data: {animation : 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
