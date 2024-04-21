import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css'],
})
export class TestimoniosComponent implements OnInit, AfterViewInit {
  testimonios: { parrafo: string; nombre: string; profesion: string }[] = [];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.testimonios = [
        {
          parrafo:
            'Desde el momento en que contacté su línea de emergencia hasta que mi vehículo fue entregado al taller, quedé por la prontitud y profesionalismo demostrados por el equipo de <span>Grúas Higuita</span>. Su respuesta fue inmediata, y cuestión de minutos, la grúa llegó al lugar del incidente.',
          nombre: 'José Ruiz',
          profesion: 'Taxista',
        },
        {
          parrafo:
            'El equipo de <span>Grúas Higuita</span> llegó al lugar en cuestión de minutos, equipado con la grúa para manejar nuestro vehículo de carga pesada. Lo que más me impresionó fue su capacidad para coordinar el rescate,manteniendo la seguridad de todos los involucrados y minimizando cualquier riesgo, además de ser muy económicos.',
          nombre: 'Ana Gómez',
          profesion: 'Asesora de ventas industriales',
        },
        {
          parrafo:
            '<span>Grúas Higuita</span> es simplemente fenomenal. Mi camión se averió en medio de una entrega urgente, y equipo llegó al rescate sin demora. Su profesionalismo y eficiencia hicieron toda la diferencia. ¡Recomiendo encarecidamente sus servicios a todos los conductores!',
          nombre: 'Sofía García',
          profesion: 'Ingeniera Industrial',
        },
      ];
    }, 1500);
  }
}
