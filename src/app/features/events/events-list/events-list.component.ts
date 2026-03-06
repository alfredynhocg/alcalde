import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

interface ZonaObra {
  icon: string;
  title: string;
  desc: string;
}

interface Zona {
  id: string;
  label: string;
  sub: string;
  obras: ZonaObra[];
}

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [BreadcrumbComponent, FormsModule],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss'
})
export class EventsListComponent {
  selectedZona = '';

  zonas: Zona[] = [
    {
      id: 'calvario',
      label: '📍 Zona El Calvario',
      sub: 'Comunidad de origen del candidato · Distrito Norte',
      obras: [
        { icon: '🛣', title: 'Asfaltado Calle Principal', desc: 'Pavimentación de la vía de acceso principal a la zona' },
        { icon: '💧', title: 'Red de Agua Potable', desc: 'Ampliación de la red domiciliaria de agua potable' },
        { icon: '🔦', title: 'Alumbrado Público', desc: 'Instalación de luminarias LED en calles principales' },
        { icon: '🏞', title: 'Área Verde y Cancha', desc: 'Habilitación de espacio recreativo comunitario' },
      ]
    },
    {
      id: 'pucarani',
      label: '📍 Comunidad Pucarani',
      sub: 'Comunidad rural · Origen del candidato',
      obras: [
        { icon: '🚗', title: 'Mejoramiento Camino Vecinal', desc: 'Mantenimiento y ripiado del acceso a la comunidad' },
        { icon: '💧', title: 'Sistema de Agua Potable', desc: 'Nuevo sistema de captación y distribución' },
        { icon: '🏫', title: 'Infraestructura Educativa', desc: 'Mejoramiento y equipamiento de la unidad educativa' },
        { icon: '🌾', title: 'Apoyo Productivo', desc: 'Maquinaria y asistencia técnica para agricultores' },
      ]
    },
    {
      id: 'central',
      label: '📍 Zona Central — Achocalla',
      sub: 'Centro urbano del municipio',
      obras: [
        { icon: '🏥', title: 'Hospital de Especialidades', desc: 'Gestión del hospital de segundo nivel para todo el municipio' },
        { icon: '🛣', title: 'Adoquinado Vías Principales', desc: 'Mejoramiento del centro urbano con adoquín' },
        { icon: '🏟', title: 'Polideportivo Municipal', desc: 'Construcción del complejo deportivo central' },
        { icon: '💻', title: 'Gobierno Digital', desc: 'Portal de transparencia y atención ciudadana digital' },
      ]
    },
    {
      id: 'cayo',
      label: '📍 Subcentral Cayo',
      sub: 'Zona rural productiva',
      obras: [
        { icon: '🚗', title: 'Caminos Vecinales', desc: 'Apertura y mantenimiento de vías de acceso' },
        { icon: '🐄', title: 'Apoyo Ganadero', desc: 'Fortalecimiento a asociaciones lecheras locales' },
        { icon: '💧', title: 'Reservorio de Agua', desc: 'Construcción de reservorio para riego y consumo' },
        { icon: '🔌', title: 'Electrificación Rural', desc: 'Cobertura eléctrica para comunidades sin servicio' },
      ]
    },
    {
      id: 'tuni',
      label: '📍 Zona Tuni',
      sub: 'Comunidad escolar y vecinal',
      obras: [
        { icon: '🏫', title: 'U.E. Tuni — Infraestructura', desc: 'Construcción de nuevas aulas y equipamiento' },
        { icon: '🛣', title: 'Mejoramiento Vial', desc: 'Ripiado y compactación de accesos principales' },
        { icon: '⚽', title: 'Campo Deportivo', desc: 'Cancha de fútbol con graderías y vestuarios' },
        { icon: '💡', title: 'Alumbrado Público', desc: 'Luminarias solares en calles y accesos' },
      ]
    },
    {
      id: 'lagunas',
      label: '📍 Zona Lagunas',
      sub: 'Patrimonio natural y turístico de Achocalla',
      obras: [
        { icon: '🌊', title: 'Recuperación de Lagunas', desc: 'Plan integral de descontaminación y restauración' },
        { icon: '🚶', title: 'Senderos Turísticos', desc: 'Construcción de senderos y miradores ecológicos' },
        { icon: '🍽', title: 'Infraestructura Gastronómica', desc: 'Quioscos y áreas de servicios turísticos' },
        { icon: '🚗', title: 'Acceso Vial Turístico', desc: 'Mejoramiento del camino de acceso a las lagunas' },
      ]
    },
  ];

  get zonaActiva(): Zona | undefined {
    return this.zonas.find(z => z.id === this.selectedZona);
  }
}
