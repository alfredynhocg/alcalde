import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-service-right',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './service-right.component.html',
  styleUrl: './service-right.component.scss'
})
export class ServiceRightComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
