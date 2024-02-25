import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CollectionReference, Firestore, addDoc, collection, deleteDoc, getDoc, getFirestore, onSnapshot, where, query, getDocs, updateDoc } from "firebase/firestore";

import Wort from "../classes/Wort";

@Injectable({ providedIn: 'root' })
export default class DatabaseService {
    private woerter: BehaviorSubject<Wort[]> = new BehaviorSubject<Wort[]>([]);
    $woerter = this.woerter.asObservable();

    private db: Firestore;
    private woerterCollectionRef: CollectionReference;

    constructor() {
        this.db = getFirestore();
        this.woerterCollectionRef = collection(this.db, 'woerter');
        this.initWoerter();
    }

    //Fetch the Data from the Database on the start
    // Use Snapshot to keep listening on changes on the database
    async initWoerter() {
        onSnapshot(this.woerterCollectionRef, (snapshot) => {
            //New Array to Store the Data
            const woerterArray: Wort[] = [];

            //Iterate throw each doc and save it in the new array
            snapshot.forEach((doc) => {
                const wortData = doc.data();
                woerterArray.push(new Wort(wortData['id'], wortData['wort'], wortData['artikel'], wortData['synonym'], wortData['antynom'], wortData['bedeutung'],))
            });

            //Sort the new Array
            woerterArray.sort((a, b) => a.id - b.id);

            //Submit the new Array to the Subject
            this.woerter.next(woerterArray);
        }, (error) => {
            console.log(error.message);
        });
    }

    //Add new Word
    async addNewWord(newWort: Wort) {
        const wortID = this.woerter.value.length + 1;
        await addDoc(this.woerterCollectionRef, { id: wortID, wort: newWort.wort, artikel: newWort.artikel, synonym: newWort.synonym, antynom: newWort.antynom, bedeutung: newWort.bedeutung });
    }

    //Delete a word by ID
    async deleteWord(wort: Wort) {
        const wortQuery = query(this.woerterCollectionRef, where('id', '==', wort.id));
        const querySnapshot = await getDocs(wortQuery);
        if (!querySnapshot.empty) {
            deleteDoc(querySnapshot.docs[0].ref);
        } else {
            throw new Error("Wort nicht gefunden !");
        }
    }

    //Update a Word
    async updateWord(currentWord: Wort, newWord: Wort) {
        const wordQuery = query(this.woerterCollectionRef, where('id', '==', currentWord.id));
        const wordSnapshot = await getDocs(wordQuery);
        if (!wordSnapshot.empty) {
            const wordRef = wordSnapshot.docs[0].ref;
            await updateDoc(wordRef, { id: currentWord.id, wort: newWord.wort, artikel: newWord.artikel, synonym: newWord.synonym, antynom: newWord.antynom, bedeutung: newWord.bedeutung });
        }
    }

    //Get Words count
    public getWoerterCount(): number {
        return this.woerter.value.length;
    }
}