import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  label = input('');

  btnCliked = output();
  constructor() {}

  handleButtonClick() {
    this.btnCliked.emit();
  }
}
