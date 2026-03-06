import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-blog-right',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './blog-right.component.html',
  styleUrl: './blog-right.component.scss'
})
export class BlogRightComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
