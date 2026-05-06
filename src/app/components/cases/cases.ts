import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cases.html',
  styleUrl: './cases.css'
})
export class Cases {
  @Input() content: any;
}