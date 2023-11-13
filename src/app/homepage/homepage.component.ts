import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'paw-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  npm = 'npm install -g @paw/cli';

  onClicked() {
    navigator.clipboard.writeText(this.npm);
  }
}
