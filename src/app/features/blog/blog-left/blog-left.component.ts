import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-blog-left',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './blog-left.component.html',
  styleUrl: './blog-left.component.scss'
})
export class BlogLeftComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
