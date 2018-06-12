import { Component } from '@angular/core';

//Firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


interface Contacto {
  apellido: string;
  correo: string;
  mensaje: string;
  nombre: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fechaDeseada: string;
  tituloMision: string;
  contenidoMision: string;
  recompensaMision: string;
  fechaPublicacionMision: string;
  
  contactosCol: AngularFirestoreCollection<Contacto>;
  contactos: Observable<Contacto[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.contactosCol = this.afs.collection('contacto');
    this.contactos = this.contactosCol.valueChanges();
  }

  enviar() {
    //Para agregar datos a firestore
    this.afs.collection('misiones').add({
      'rapidez': this.fechaDeseada,
      'titulo': this.tituloMision,
      'contenido': this.contenidoMision, 
      'recompensa': this.recompensaMision,
      'fecha': this.fechaPublicacionMision
    });
    

  }

}
