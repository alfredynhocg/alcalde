import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-home-one',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-one.component.html',
  styleUrl: './home-one.component.scss'
})
export class HomeOneComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
