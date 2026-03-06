import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-events-single',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './events-single.component.html',
  styleUrl: './events-single.component.scss'
})
export class EventsSingleComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
