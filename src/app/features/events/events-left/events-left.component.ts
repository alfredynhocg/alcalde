import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-events-left',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './events-left.component.html',
  styleUrl: './events-left.component.scss'
})
export class EventsLeftComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
