import { Component, AfterViewInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
