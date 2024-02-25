import { BehaviorSubject } from "rxjs";
import Wort from "../classes/Wort";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export default class WordService{
    private placeholderWord:Wort = new Wort(0,'Kompensieren','Das','Ausgleichen','Verstärken','Etwas ausgleichen');
    private currentWordSubject: BehaviorSubject<Wort> = new BehaviorSubject<Wort>(this.placeholderWord);
    $currentWord = this.currentWordSubject.asObservable();

    constructor(){}

    setCurrentWord(wort:Wort){
        this.currentWordSubject.next(wort);
    }

    getCurrentWord():Wort{
        return this.currentWordSubject.value;
    }
}