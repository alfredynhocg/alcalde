import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setTitle(title: string): void {
    this.title.setTitle(`${title} | Damaso`);
  }

  setMeta(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }
}
