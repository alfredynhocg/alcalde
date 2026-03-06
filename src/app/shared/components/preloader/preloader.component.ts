import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit, OnDestroy {
  isVisible = true;
  private routerSub!: Subscription;
  private fallbackTimer!: ReturnType<typeof setTimeout>;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Ocultar al completar la primera navegación
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.hide();
    });

    // Fallback máximo: 4 segundos
    this.fallbackTimer = setTimeout(() => this.hide(), 4000);
  }

  private hide(): void {
    if (!this.isVisible) return;
    this.isVisible = false;
    this.cdr.detectChanges();
    clearTimeout(this.fallbackTimer);
    this.routerSub?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    clearTimeout(this.fallbackTimer);
  }
}
