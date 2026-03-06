import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-home-three',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-three.component.html',
  styleUrl: './home-three.component.scss'
})
export class HomeThreeComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
