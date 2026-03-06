import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-service-left',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './service-left.component.html',
  styleUrl: './service-left.component.scss'
})
export class ServiceLeftComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
