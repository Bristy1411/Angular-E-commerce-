import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-light-button',
  standalone: true,
  imports: [],
  templateUrl: './light-button.component.html',
  styleUrl: './light-button.component.scss',
})
export class LightButtonComponent {
  label = input('');

  btnCliked = output();
  constructor() {}

  handleButtonClick() {
    this.btnCliked.emit();
  }
}
