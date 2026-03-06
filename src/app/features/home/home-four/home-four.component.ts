import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-home-four',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-four.component.html',
  styleUrl: './home-four.component.scss'
})
export class HomeFourComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
