export interface PageSection {
  type: 'header' | 'hero' | 'cases' | 'cta' | 'footer' | 'features'; 
  data: any;
}

export interface PageConfig {
  slug: string;
  title: string;
  sections: PageSection[];
}