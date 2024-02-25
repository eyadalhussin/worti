import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { WordsComponent } from './main/words/words.component';
import { QuizComponent } from './main/quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { EditWordComponent } from './main/edit-word/edit-word.component';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDV_NisI3daesfjmuG_1Lqwi3P5L38PRtc",
  authDomain: "worti-3ebe0.firebaseapp.com",
  projectId: "worti-3ebe0",
  storageBucket: "worti-3ebe0.appspot.com",
  messagingSenderId: "732292618475",
  appId: "1:732292618475:web:7ca2293c32d52ea8f6c6ae",
  measurementId: "G-QFFV8Y095M"
};


initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    WordsComponent,
    QuizComponent,
    EditWordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
