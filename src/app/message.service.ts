import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root', 
})
export class MessageService {
  private messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }

  clearMessages() {
    this.messages = [];
  }
}
