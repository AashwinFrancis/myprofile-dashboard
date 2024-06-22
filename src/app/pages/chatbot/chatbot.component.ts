import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  messages: { text: string, sender: string }[] = [];
  userInput: string = '';

  constructor() {}

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.userInput = '';
      this.getBotResponse();
    }
  }

  getBotResponse() {
    // Simple bot response logic
    const botMessage = 'This is a bot response';
    this.messages.push({ text: botMessage, sender: 'bot' });
  }
}
