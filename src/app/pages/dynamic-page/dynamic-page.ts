import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PageBuilder } from '../../services/page-builder';
import { PageConfig } from '../../models/page.model';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Cases } from '../../components/cases/cases'; 
import { Hero } from '../../components/hero/hero';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-dynamic-page',
  imports: [CommonModule, Hero, Cta, Cases, Header, Footer],
  templateUrl: './dynamic-page.html',
  styleUrl: './dynamic-page.css',
})
export class DynamicPage implements OnInit {
  pageData?: PageConfig;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageBuilder
  ) { }

  ngOnInit(): void {
    // We subscribe to paramMap so if the user clicks a link 
    // to another page, the component refreshes automatically.
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || 'home'; // Default to home
      this.loadPageData(slug);
    });
  }

  loadPageData(slug: string): void {
    this.pageService.getPageBySlug(slug).subscribe({
      next: (data: PageConfig) => {
        this.pageData = data;
        
        // Verifica se o código está rodando no navegador antes de acessar o 'document'
        if (data && typeof document !== 'undefined') {
          document.title = data.title;
        }
      },
      error: (err: any) => console.error('Page not found', err)
    });
  }
}
