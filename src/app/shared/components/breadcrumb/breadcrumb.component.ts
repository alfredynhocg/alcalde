import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="breadcrumb-bg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6">
            <div class="po-breadcrumb">
              <h1 class="font-bold text-64 leading-64 text-white">{{ title }}</h1>
              <div class="po-breadcrumb-list">
                <span><a routerLink="/">Home</a></span>
                <span class="dvir"><i class="fa-solid fa-angle-right"></i></span>
                <span class="active"><a href="#">{{ title }}</a></span>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="breacrumb-images">
              <div class="breadcrumb-fronts-img">
                <img src="assets/img/banner/po-breadcrumb-hero.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BreadcrumbComponent {
  @Input() title = 'Page';
}
