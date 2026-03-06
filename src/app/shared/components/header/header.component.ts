import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Sticky header on scroll
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
        $('.stiky').addClass('sticky-menu');
      } else {
        $('.stiky').removeClass('sticky-menu');
      }
    });

    // Mobile menu
    const mobile_nav_open = $('.mobile-nav-icon');
    const mobile_sidebar = $('.mobile-sidebar');
    const mobile_nav_close = $('.menu-close');

    mobile_nav_open.off('click').on('click', function () {
      mobile_sidebar.addClass('mobile-menu-active');
    });

    mobile_nav_close.off('click').on('click', function () {
      mobile_sidebar.removeClass('mobile-menu-active');
    });

    // Mobile dropdown toggle
    $('.mobile-nav').menumarker?.({ format: 'multitoggle' });
  }
}
