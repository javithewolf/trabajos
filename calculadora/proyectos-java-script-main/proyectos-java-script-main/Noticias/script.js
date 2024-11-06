document.addEventListener("DOMContentLoaded", () => {
    const articleTitles = [
      "La nueva era de la inteligencia artificial",
      "Cambio climático: acciones urgentes",
      "Economía global: predicciones para 2025",
      "Innovaciones en medicina del futuro",
      "El impacto de las redes sociales en la sociedad",
      "Cultura y arte en la era digital",
      "Nuevas políticas para un mundo sostenible",
      "Los avances en tecnología espacial",
      "Transformación de la educación online",
      "Salud mental en tiempos modernos"
    ];
  
    const articleDescriptions = [
      "Descubre cómo la IA está revolucionando diversas industrias alrededor del mundo.",
      "Expertos discuten medidas para mitigar los efectos del cambio climático.",
      "Economistas predicen una evolución inesperada en el panorama financiero global.",
      "Las tecnologías médicas que están transformando el cuidado de la salud.",
      "Un análisis profundo sobre cómo las redes sociales influyen en nuestras vidas.",
      "La evolución del arte y la cultura en una sociedad cada vez más conectada digitalmente.",
      "Nuevas regulaciones para garantizar un futuro más ecológico y sostenible.",
      "Un vistazo a las misiones espaciales que están redefiniendo la exploración espacial.",
      "El auge de las plataformas de aprendizaje online y su impacto en la educación.",
      "Cómo la sociedad está abordando los crecientes desafíos de la salud mental."
    ];
  
    const articleDetails = [
      "La IA ha comenzado a implementarse en múltiples sectores, como la medicina, la robótica, y la automatización industrial, entre otros.",
      "El calentamiento global está afectando todos los continentes, lo que requiere una colaboración urgente entre países.",
      "Según expertos, la economía mundial sufrirá importantes cambios debido a los avances tecnológicos y el envejecimiento de la población.",
      "Las nuevas tecnologías, como la edición genética y los implantes biomédicos, están mejorando los tratamientos médicos.",
      "Las redes sociales han transformado la manera en que nos comunicamos, afectando la opinión pública y las interacciones personales.",
      "El arte digital ha abierto nuevas oportunidades para los creadores de contenido, mientras las plataformas en línea democratizan su acceso.",
      "Países están implementando leyes para reducir las emisiones de carbono, pero los desafíos políticos y económicos persisten.",
      "Nuevas misiones planean explorar Marte y la Luna, con el objetivo de establecer bases permanentes fuera de la Tierra.",
      "La educación en línea ha democratizado el acceso al aprendizaje, pero plantea desafíos en la calidad y la experiencia de los estudiantes.",
      "La salud mental ha ganado atención en los últimos años debido a su impacto en el bienestar general de la población, especialmente en jóvenes."
    ];
  
    const articlesContainer = document.getElementById('articulos');
    const detallesSection = document.getElementById('detalles');
    const tituloDetalle = document.getElementById('titulo-detalle');
    const descripcionDetalle = document.getElementById('descripcion-detalle');
  
    for (let i = 0; i < 10; i++) {
      const article = document.createElement('article');
      article.classList.add('articulo');
  
      const title = document.createElement('h2');
      title.textContent = articleTitles[i];
  
      const description = document.createElement('p');
      description.textContent = articleDescriptions[i];
  
      article.appendChild(title);
      article.appendChild(description);
      articlesContainer.appendChild(article);
  
      // Agregar interacción al hacer clic
      article.addEventListener('click', () => {
        tituloDetalle.textContent = articleTitles[i];
        descripcionDetalle.textContent = articleDetails[i];
        detallesSection.classList.remove('detalles-oculto');
        detallesSection.classList.add('detalles-visible');
      });
    }
  });
  