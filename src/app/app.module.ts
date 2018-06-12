import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Firestore
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyAX1r3r1V0Tgvqk9asCOCcoqIAEjC13CrY",
  authDomain: "misionesvecinales.firebaseapp.com",
  databaseURL: "https://misionesvecinales.firebaseio.com",
  projectId: "misionesvecinales",
  storageBucket: "misionesvecinales.appspot.com",
  messagingSenderId: "511270768265"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
