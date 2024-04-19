import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit, AfterViewInit {
  servicios: {
    src: string;
    alt: string;
    title: string;
    titulo: string;
    parrafo: string;
  }[] = [];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.servicios = [
        {
          src: '../../../assets/servicioImg/servicio01.jpg',
          alt: 'servicio01 - Servicio grúa',
          title: 'servicio01 - Servicio grúa',
          titulo: 'Servicio grúa Motocicletas',
          parrafo:
            ' Contamos con una amplia gama de maquinaria rentable, lista para proporcionarte soluciones oportunas y precisas que se ajusten a tus necesidades particulares.',
        },
        {
          src: '../../../assets/servicioImg/servicio02.jpg',
          alt: 'servicio02 - Servicio grúa',
          title: 'servicio02 - Servicio grúa',
          titulo: 'Servicios Livianos',
          parrafo:
            ' Disponemos maquinaria de calidad y ofrecemos los precios más competitivos para brindar una asistencia responsable y eficiente en todos los servicios solicitados.',
        },
        {
          src: '../../../assets/servicioImg/servicio03.jpg',
          alt: 'servicio03 - Servicio grúa',
          title: 'servicio03 - Servicio grúa',
          titulo: 'Servicios medianos',
          parrafo:
            '  Nuestros técnicos altamente capacitados y expertos están listos para brindarte la experiencia en seguridad y profesionalismo que solo <span><strong>Grúas</strong> Higuita</span> puede garantizar.',
        },
        {
          src: '../../../assets/servicioImg/servicio04.jpg',
          alt: 'servicio04 - Servicio grúa',
          title: 'servicio04 - Servicio grúa',
          titulo: 'Servicios grandes',
          parrafo:
            ' Nuestro liderazgo en el mercado se fundamenta en nuestra continua responsabilidad y compromiso con la satisfacción de nuestros clientes.',
        },
        {
          src: '../../../assets/servicioImg/servicio05.jpg',
          alt: 'servicio05 - Servicio grúa',
          title: 'servicio05 - Servicio grúa',
          titulo: 'Servicio para maquinaria',
          parrafo:
            ' Somos aliados de tu tiempo y tu economía. En <span><strong>Grúas</strong> Higuita</span>, garantizamos un transporte sin contratiempos para tu maquinaria, logrando tiempos de entrega increíbles junto con un excelente servicio para máquinas pesadas.',
        },
        {
          src: '../../../assets/servicioImg/servicio06.jpg',
          alt: 'servicio06 - Servicio grúa',
          title: 'servicio06 - Servicio grúa',
          titulo: 'Servicio traslado',
          parrafo:
            ' En nuestro equipo, contamos con profesionales altamente capacitados y la maquinaria especializada necesaria para afrontar con éxito cualquier situación de traslado que se presente.',
        },
      ];
    }, 1500);
  }
}
