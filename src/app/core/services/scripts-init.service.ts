import { Injectable } from '@angular/core';

declare var $: any;
declare var AOS: any;

@Injectable({ providedIn: 'root' })
export class ScriptsInitService {
  /** Reinicia los plugins jQuery tras cada navegación */
  init(): void {
    // AOS: inicializar con offset para que los elementos bajo el fold se animen al scroll
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, once: true, offset: 80 });
      // Múltiples refreshes en cascada para que AOS tenga posiciones correctas
      setTimeout(() => typeof AOS !== 'undefined' && AOS.refresh(), 300);
      setTimeout(() => typeof AOS !== 'undefined' && AOS.refresh(), 700);
      setTimeout(() => typeof AOS !== 'undefined' && AOS.refresh(), 1500);
    }

    if (typeof $ === 'undefined') return;

    // Plugins jQuery que necesitan el DOM completamente pintado
    setTimeout(() => this.initJqueryPlugins(), 600);
  }

  private initJqueryPlugins(): void {
    if (typeof $ === 'undefined') return;

    // Slick carousel - testimonial (slider principal)
    if ($('.slider-for').length) {
      if ($('.slider-for').hasClass('slick-initialized')) {
        $('.slider-for').slick('unslick');
      }
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
    }

    if ($('.slider-nav').length) {
      if ($('.slider-nav').hasClass('slick-initialized')) {
        $('.slider-nav').slick('unslick');
      }
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{ breakpoint: 991, settings: { vertical: false, slidesToShow: 3 } }]
      });
    }

    // Slick carousel - history slider (home-2)
    if ($('.po-history-slide-1').length) {
      if ($('.po-history-slide-1').hasClass('slick-initialized')) {
        $('.po-history-slide-1').slick('unslick');
      }
      $('.po-history-slide-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.po-history-nav'
      });
    }

    if ($('.po-history-nav').length) {
      if ($('.po-history-nav').hasClass('slick-initialized')) {
        $('.po-history-nav').slick('unslick');
      }
      $('.po-history-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.po-history-slide-1',
        dots: false,
        arrows: false,
        focusOnSelect: true
      });
    }

    // Slick carousel - pilares Plan de Gobierno
    const initPilarCarousel = () => {
      if (!$('.pilar-carousel').length) return;
      if ($('.pilar-carousel').hasClass('slick-initialized')) {
        $('.pilar-carousel').slick('unslick');
      }
      $('.pilar-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
      });
    };
    initPilarCarousel();

    // Magnific Popup - video
    if ($('.popup-video').length) {
      $('.popup-video').magnificPopup({ type: 'iframe' });
    }

    // CounterUp
    if ($('.counter').length) {
      $('.counter').counterUp({ delay: 10, time: 1000 });
    }

    // Isotope gallery
    if ($('.gallery-grid').length) {
      const $grid = $('.gallery-grid').isotope({ itemSelector: '.grid-item', layoutMode: 'fitRows' });
      $('.filter-button-group').on('click', 'button', (e: Event) => {
        const btn = $(e.currentTarget);
        const filterValue = btn.attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.filter-button-group button').removeClass('active');
        btn.addClass('active');
      });
    }

    // Nice select
    if (typeof ($ as any).fn.niceSelect !== 'undefined' && $('select').length) {
      $('select').niceSelect();
    }
  }
}
