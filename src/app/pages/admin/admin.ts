import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageConfig, PageSection } from '../../models/page.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  // Objeto inicial da nova página
  newPage: PageConfig = {
    slug: '',
    title: '',
    sections: []
  };

  // Lista de componentes disponíveis (nosso catálogo de Legos)
  availableComponents = ['hero', 'cta'];

  addSection(type: string) {
    const section: PageSection = {
      type: type as any,
      data: type === 'hero' 
        ? { title: 'New Hero', subtitle: 'Description goes here' }
        : { text: 'Call to action text', label: 'Click here' }
    };
    this.newPage.sections.push(section);
  }

  removeSection(index: number) {
    this.newPage.sections.splice(index, 1);
  }

  savePage() {
    console.log('Final JSON for Database:', JSON.stringify(this.newPage, null, 2));
    alert('JSON generated in console! Copy it to your mock-db.json to see the result.');
  }
}