import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message = '';
  Text_Entrer = '';  
  Liste_msgs: { text: string; color: string }[] = []; 
  colors = ['green', 'blue', 'red'];  
  random = false;  
  buttonLabel = 'Random';  
  afficher_Liste=true;
  displayButtonLabel = 'Hide';
  constructor(public messageService: MessageService) {}

  Ajout_Liste() {
    if (this.Text_Entrer.trim() !== '') {
      const Nouveau_msg = this.Text_Entrer.trim(); 
      const Couleur_Aleatoire = this.random 
        ? this.generer_Couleur_Aleatoire()
        : this.getColor(this.Liste_msgs.length); 
      this.Liste_msgs.push({ text: Nouveau_msg, color: Couleur_Aleatoire }); 
      // this.Text_Entrer = '';  
    }
  }
  generer_Couleur_Aleatoire(): string {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); 
    return `#${randomColor.padStart(6, '0')}`; 
  }

  trierAscendant() {
    this.Liste_msgs.sort((a, b) => a.text.localeCompare(b.text)); 
  }
  Supprimer() {
    if (this.Liste_msgs.length > 0) {
      this.Liste_msgs.pop();
    }
  }
  type_couleur() {
    this.random = !this.random;
    this.buttonLabel = this.random ? 'Liste' : 'Random';  
  }

  getColor(index: number): string {
    return this.colors[index % this.colors.length];
  }
  Affichage() {
    this.afficher_Liste = !this.afficher_Liste; 
    this.displayButtonLabel = this.afficher_Liste ? 'Hide' : 'Show';
  }
  ajouterMessage(nouveauMessage: string) {
    this.messageService.addMessage(nouveauMessage);
  }
  getMessages(): string[] {
    return this.messageService.getMessages();
  }

}
