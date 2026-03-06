import { Component, AfterViewInit } from '@angular/core';
import { ScriptsInitService } from '../../core/services/scripts-init.service';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
