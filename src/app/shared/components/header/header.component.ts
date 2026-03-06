import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Sticky header on scroll
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
        $('.stiky').addClass('scroll-header');
      } else {
        $('.stiky').removeClass('scroll-header');
      }
    });

    // Mobile menu open/close buttons
    const mobile_sidebar = $('.mobile-sidebar');

    $('.mobile-nav-icon').off('click').on('click', () => {
      mobile_sidebar.addClass('mobile-menu-active');
    });

    $('.menu-close').off('click').on('click', () => {
      mobile_sidebar.removeClass('mobile-menu-active');
    });

    // Cerrar sidebar al navegar (Angular SPA — no recarga la página)
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      mobile_sidebar.removeClass('mobile-menu-active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile dropdown toggle
    $('.mobile-nav').menumarker?.({ format: 'multitoggle' });
  }
}
