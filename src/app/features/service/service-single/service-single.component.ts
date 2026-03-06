import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-service-single',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './service-single.component.html',
  styleUrl: './service-single.component.scss'
})
export class ServiceSingleComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
