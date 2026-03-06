import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-home-two',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-two.component.html',
  styleUrl: './home-two.component.scss'
})
export class HomeTwoComponent implements AfterViewInit {
  constructor(private scripts: ScriptsInitService) {}
  ngAfterViewInit(): void { this.scripts.init(); }
}
