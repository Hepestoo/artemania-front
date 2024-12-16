import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})
export class HelpCenterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  searchTerm: string = '';

  faqs = [
    {
      question: 'Cual es el proceso de compra?',
      answer: 'El proceso de compra implica varios pasos, que incluyen seleccionar el producto, agregarlo a su carrito, ingresar su información de envío y facturación y completar el pago. Si tiene algún problema o pregunta durante el proceso, no dude en ponerse en contacto con nuestro equipo de atención al cliente.',
      showAnswer: false
    },
    {
      question: 'Mi informacion esta segura?',
      answer: 'Nos tomamos muy en serio la seguridad de su información de pago. Utilizamos protocolos de seguridad y cifrado estándar de la industria para proteger su información personal y financiera. Además, nunca almacenamos la información de su tarjeta de crédito en nuestros servidores y monitoreamos periódicamente nuestros sistemas para detectar posibles violaciones de seguridad.',
      showAnswer: false
    },
    {
      question: 'Como puedo contactarlos?',
      answer: 'Puede ponerse en contacto con el servicio de atención al cliente por teléfono, correo electrónico o chat en vivo. Nuestros representantes de servicio al cliente están disponibles durante el horario comercial habitual para ayudarlo con cualquier pregunta o inquietud que pueda tener.',
      showAnswer: false
    },
  ];

  search(): void {
    if (!this.searchTerm) {
      return;
    }

    const filteredFaqs = this.faqs.filter(faq =>
      faq.question.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (filteredFaqs.length === 0) {
      alert(`No FAQs found for "${this.searchTerm}"`);
    }
  }

  get filteredFaqs() {
    return this.faqs.filter(faq =>
      faq.question.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
