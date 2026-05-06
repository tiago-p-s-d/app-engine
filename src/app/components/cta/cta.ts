import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.html',
  styleUrl: './cta.css'
})
export class Cta {
  @Input() content: any;
}