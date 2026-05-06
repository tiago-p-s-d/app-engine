import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importante para o link funcionar
import { PageBuilder } from '../../services/page-builder';
import { PageConfig, PageSection } from '../../models/page.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {
  existingPages: string[] = []; 
  
  newPage: PageConfig = {
    slug: '',
    title: '',
    sections: []
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Carrega as chaves do JSON para listar as páginas existentes
    this.http.get<any>('/mock-db.json').subscribe(data => {
      this.existingPages = Object.keys(data);
    });
  }

  addSection(type: string) {
    const section: PageSection = {
      type: type as any,
      data: type === 'hero' 
        ? { title: '', subtitle: '' } 
        : { text: '', label: '' }
    };
    this.newPage.sections.push(section);
  }

  removeSection(index: number) {
    this.newPage.sections.splice(index, 1);
  }

  savePage() {
    console.log('Final JSON:', JSON.stringify(this.newPage, null, 2));
    alert('JSON gerado no console! Adicione ao mock-db.json.');
  }
}