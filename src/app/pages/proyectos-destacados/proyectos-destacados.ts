import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos-destacados',
  imports: [],
  templateUrl: './proyectos-destacados.html',
  styleUrl: './proyectos-destacados.css',
})
export class ProyectosDestacados {

 
   proyectos = [
    {
      id: 1, 
      nombre: 'Mundial de la Yerba Mate',
      descripcion: 'Desarrollo del sitio oficial para Mundial de la Yerba Mate. Utilicé WordPress y Elementor para diseñar una plataforma moderna y flexible, preparada para integrar una tienda online en el futuro. Me aseguré de que la navegación fuera intuitiva y que la experiencia del usuario destacara la identidad cultural del evento.',
      imagen: '/img/proyecto1.webp',
      url: 'https://mundialyerbamate.com/',
      tecnologias: ['WordPress', 'Elementor']        
    },
    {
      id: 2,
      nombre: 'Argentina Spirits Awards',
      descripcion: 'Desarrollo del sitio oficial para este certamen internacional. Utilicé HTML, CSS y JavaScript para crear una interfaz limpia y funcional que se adapta a cualquier dispositivo. Me enfoqué en que la página cargue rápido y que la información del evento sea clara para los usuarios.',
      imagen: '/img/proyecto2.webp',
      url: 'https://www.argentinaspiritsawards.com/',
      tecnologias: ['HTML', 'JavaScript', 'CSS']
    },
    {
      id: 3,
      nombre: 'Rosana Bustos Inmobiliaria',
      descripcion: 'Desarrollé el sitio institucional para esta inmobiliaria referente en la región de Paravachasca. Mi trabajo se centró en reflejar la identidad profesional y humana de la marca, optimizando la navegación para que los clientes encuentren asesoramiento y propiedades en el valle de forma rápida y sencilla.',
      imagen: '/img/proyecto3.webp',
      url: 'https://rosanabustosinmobiliaria.com/',
      tecnologias: ['HTML', 'JavaScript', 'CSS', 'Bootstrap']
    },
    {
      id: 4,
      nombre: 'Javier Bellomo Coria',
      descripcion: 'Desarrollé este portfolio y catálogo online para un artista visual, priorizando una interfaz minimalista que no compita con la obra. Utilicé HTML y CSS para organizar sus colecciones de forma técnica y profesional, permitiendo una exploración fluida de su proceso de transferencia fotográfica.',  
      imagen: '/img/proyecto4.webp',
      url: 'https://javierbellomo.com/',
      tecnologias: ['HTML', 'JavaScript', 'CSS']
    },
    {
      id: 5,
      nombre: 'Mercado de Bodegas',
      descripcion: 'Desarrollé el sitio web para esta feria enológica y cultural, enfocándome en transmitir la experiencia sensorial del evento. Mi trabajo priorizó una navegación sencilla que facilita la consulta de actividades y la adquisición de entradas para cada edición.',  
      imagen: '/img/proyecto5.webp',
      url: 'https://mercadodebodegas.com.ar/',
      tecnologias: ['HTML', 'JavaScript', 'CSS ', 'Bootstrap']
    },
    {
      id: 6,
      nombre: 'Sevilla Optica',
      descripcion: 'Desarrollé el sitio institucional para esta óptica del Cerro de las Rosas, priorizando una interfaz que transmita confianza y cuidado de la salud visual. Mi trabajo se enfocó en lograr una navegación rápida y un diseño responsivo que facilite a los clientes la consulta y beneficios desde cualquier dispositivo.',
      imagen: '/img/proyecto6.webp',
      url: 'https://sevillaoptica.com/',
      tecnologias: ['HTML', 'JavaScript', 'CSS', 'Bootstrap']
    },
    {
      id: 7,
      nombre: 'Attika House',
      descripcion: 'Desarrollé el sitio web para este sistema innovador de módulos habitacionales transportables. Mi trabajo consistió en maquetar una interfaz que refleje la modernidad y sustentabilidad del producto, utilizando HTML y CSS para organizar la información de los distintos tipos de manera clara y JS para mejorar la experiencia del usuario', 
      imagen: '/img/proyecto7.webp',
      url: 'https://www.attikahouse.com/',
      tecnologias: ['Hosting', 'Deploy']
    },
    {
      id: 8,
      nombre: 'Verónica Caminos Inmobiliaria',
      descripcion: 'Desarrollé el sitio institucional para esta firma de inversiones inmobiliarias, enfocándome en transmitir solidez y profesionalismo. Utilicé HTML y CSS para organizar los servicios de compra, venta y tasaciones, asegurando una estructura de navegación directa y PHP para el formulario de tasaciones',
      url: 'https://veronicacaminosinversionesinmobiliarias.com/',
      tecnologias: ['HTML', 'JS', 'CSS', 'Bootstrap', 'PHP']
    },
    {
      id: 9,
      nombre: 'Maria Guirao',
      descripcion: 'Desarrollé una landing page enfocada en la exhibición y descarga de los catálogos de obras completas de Maria Guirao. Utilicé HTML y CSS para crear una estructura limpia que organiza sus diferentes series artísticas, permitiendo a coleccionistas y curadores visualizar o descargar sus portafolios en PDF de forma rápida.',
      imagen: '/img/proyecto9.webp',
      url: 'https://mariaguirao.com/',
      tecnologias: ['HTML', 'JavaScript', 'CSS', 'Bootstrap']
    },
    {
      id: 10,
      nombre: 'Criadero Canino Rincón de la Rada',
      descripcion: 'Desarrollo del sitio oficial para Criadero Canino Rincón de la Rada. Utilicé HTML, CSS y Bootstrap para crear una interfaz moderna y adaptable a distintos dispositivos. Me enfoqué en que la página mostrara de forma clara la información sobre los ejemplares y que la navegación fuera rápida y sencilla para los usuarios.',
      imagen: '/img/proyecto10.webp',
      url: 'https://rincon-de-la-rada.com/',
      tecnologias: ['HTML', 'JavaScript', 'CSS', 'Bootstrap']
    },
    {
      id: 11,
      nombre: 'Optimizador de Imágenes Webp',
      descripcion: 'Desarrollo de TinyPic, una aplicación para optimizar imágenes. Utilicé HTML, CSS y JavaScript junto con Bootstrap para implementar la conversión de formatos JPG y PNG a WebP y limitar el ancho máximo a 1920 px. Actualmente está en versión beta de pruebas y aún no es responsiva, pero se centra en ofrecer una herramienta rápida y funcional para mejorar el rendimiento de las imágenes',
      imagen: '/img/proyecto11.webp',
      url: 'https://carlos-web.online/html/tinyapp.html',
      tecnologias: ['HTML', 'JavaScript', 'CSS', 'Bootstrap']
    }
  ];

  mensajeNoEncontrado: string = 'No se encontraron proyectos.';

}
