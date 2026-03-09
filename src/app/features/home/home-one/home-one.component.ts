import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ScriptsInitService } from '../../../core/services/scripts-init.service';

@Component({
  selector: 'app-home-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-one.component.html',
  styleUrl: './home-one.component.scss'
})
export class HomeOneComponent implements AfterViewInit {
  hospitalVideoUrl: SafeUrl;
  centroSaludVideoUrl: SafeUrl;
  educacionVideoUrl: SafeUrl;
  normalVideoUrl: SafeUrl;
  guarderiaVideoUrl: SafeUrl;
  policialVideoUrl: SafeUrl;
  seguridadVideoUrl: SafeUrl;

  activeVideoUrl: SafeUrl | null = null;
  activeItem: number | null = null;

  activeVideoUrl2: SafeUrl | null = null;
  activeItem2: number | null = null;

  activeVideoUrl10: SafeUrl | null = null;
  activeItem10: number | null = null;

  constructor(private scripts: ScriptsInitService, private sanitizer: DomSanitizer) {
    this.hospitalVideoUrl    = this.sanitizer.bypassSecurityTrustUrl('assets/img/videos/hospital.mp4');
    this.centroSaludVideoUrl = this.sanitizer.bypassSecurityTrustUrl('assets/img/videos/centro_SALUD.mp4');
    this.educacionVideoUrl   = this.sanitizer.bypassSecurityTrustUrl('assets/img/videos/educacion.mp4');
    this.normalVideoUrl      = this.sanitizer.bypassSecurityTrustUrl('assets/img/videos/normal.mp4');
    this.guarderiaVideoUrl   = this.sanitizer.bypassSecurityTrustUrl('assets/img/videos/guarderia.mp4');
    this.policialVideoUrl    = this.sanitizer.bypassSecurityTrustUrl('assets/img/videos/policial.mp4');
    this.seguridadVideoUrl   = this.sanitizer.bypassSecurityTrustUrl('assets/img/videos/seguridad.mp4');
  }

  selectVideo(item: number, url: SafeUrl): void {
    if (this.activeItem === item) {
      this.activeItem = null;
      this.activeVideoUrl = null;
    } else {
      this.activeItem = item;
      this.activeVideoUrl = url;
    }
  }

  selectVideo2(item: number, url: SafeUrl): void {
    if (this.activeItem2 === item) {
      this.activeItem2 = null;
      this.activeVideoUrl2 = null;
    } else {
      this.activeItem2 = item;
      this.activeVideoUrl2 = url;
    }
  }

  selectVideo10(item: number, url: SafeUrl): void {
    if (this.activeItem10 === item) {
      this.activeItem10 = null;
      this.activeVideoUrl10 = null;
    } else {
      this.activeItem10 = item;
      this.activeVideoUrl10 = url;
    }
  }

  ngAfterViewInit(): void {
    this.scripts.init();

    const pilar1Modal = document.getElementById('pilar1');
    if (pilar1Modal) {
      pilar1Modal.addEventListener('hide.bs.modal', () => {
        pilar1Modal.querySelector('video')?.pause();
      });
      pilar1Modal.addEventListener('hidden.bs.modal', () => {
        this.activeItem = null;
        this.activeVideoUrl = null;
      });
    }

    const pilar2Modal = document.getElementById('pilar2');
    if (pilar2Modal) {
      pilar2Modal.addEventListener('hide.bs.modal', () => {
        pilar2Modal.querySelector('video')?.pause();
      });
      pilar2Modal.addEventListener('hidden.bs.modal', () => {
        this.activeItem2 = null;
        this.activeVideoUrl2 = null;
      });
    }

    const pilar10Modal = document.getElementById('pilar10');
    if (pilar10Modal) {
      pilar10Modal.addEventListener('hide.bs.modal', () => {
        pilar10Modal.querySelector('video')?.pause();
      });
      pilar10Modal.addEventListener('hidden.bs.modal', () => {
        this.activeItem10 = null;
        this.activeVideoUrl10 = null;
      });
    }
  }
}
