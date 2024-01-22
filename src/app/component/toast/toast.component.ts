// toast.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'danger' | 'info' | 'warning' = 'info';
  show: boolean = false;

  display(message: string, type: 'success' | 'danger' | 'info' | 'warning' = 'info') {
    this.message = message;
    this.type = type;
    this.show = true;
    setTimeout(() => this.show = false, 7000); // auto-hide after 3 seconds
  }

  hide() {
    this.show = false;
  }
}
