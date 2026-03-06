import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-events-right',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './events-right.component.html',
  styleUrl: './events-right.component.scss'
})
export class EventsRightComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
