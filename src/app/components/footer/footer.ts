import { Component, Input } from '@angular/core'; 

@Component({
  selector: 'app-footer',
  standalone: true, 
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Input() content: any; 
}