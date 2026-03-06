import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { PreloaderComponent } from '../../shared/components/preloader/preloader.component';

declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PreloaderComponent],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // AOS animations
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, once: true });
    }

    // Back to top progress circle
    if (typeof $ !== 'undefined') {
      const progressPath = document.querySelector('.progress-wrap path') as SVGPathElement;
      if (progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = 'none';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = `${pathLength}`;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = 'stroke-dashoffset 10ms linear';

        const updateProgress = () => {
          const scroll = window.scrollY;
          const height = document.body.scrollHeight - window.innerHeight;
          const progress = pathLength - (scroll * pathLength) / height;
          progressPath.style.strokeDashoffset = `${progress}`;
        };

        window.addEventListener('scroll', updateProgress);

        $('.progress-wrap').on('click', function () {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        $(window).on('scroll', () => {
          if ($(window).scrollTop() > 50) {
            $('.progress-wrap').addClass('active-progress');
          } else {
            $('.progress-wrap').removeClass('active-progress');
          }
        });
      }
    }
  }
}
