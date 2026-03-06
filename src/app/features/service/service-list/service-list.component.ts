import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss'
})
export class ServiceListComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
