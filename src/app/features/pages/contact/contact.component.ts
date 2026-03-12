import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BreadcrumbComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;

  form = {
    nombre: '',
    celular: '',
    zona: '',
    fiscal: false,
    difusion: false,
    transporte: false,
    redes: false,
  };

  enviarFormulario(): void {
    const roles: string[] = [];
    if (this.form.fiscal)    roles.push('Fiscal de Mesa');
    if (this.form.difusion)  roles.push('Difusión Comunitaria');
    if (this.form.transporte) roles.push('Transporte de Votantes');
    if (this.form.redes)     roles.push('Redes Sociales');

    const msg = `✊ ¡Quiero ser Voluntario!\n\nNombre: ${this.form.nombre}\nCelular: ${this.form.celular}\nZona: ${this.form.zona}\nCómo ayudo: ${roles.join(', ') || 'Por definir'}`;
    window.open(`https://wa.me/59161000058?text=${encodeURIComponent(msg)}`, '_blank');
    this.submitted = true;
  }

  resetForm(): void {
    this.submitted = false;
    this.form = { nombre: '', celular: '', zona: '', fiscal: false, difusion: false, transporte: false, redes: false };
  }
}
