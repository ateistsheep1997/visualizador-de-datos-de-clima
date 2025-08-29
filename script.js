document.addEventListener('DOMContentLoaded', () => {
    // Código para cargar y visualizar los datos climáticos
    const svg = d3.select('#chart').append('svg')
        .attr('width', '100%') // Ancho del elemento SVG
        .attr('height', '400'); // Altura del elemento SVG, fija en 400 píxeles

    // Ejemplo de visualización: crear un círculo azul en el gráfico
    svg.append('circle')
       .attr('cx', 50) // Coordenada X del centro del círculo
       .attr('cy', 50) // Coordenada Y del centro del círculo
       .attr('r', 40) // Radio del círculo en píxeles
       .style('fill', 'blue'); // Color de relleno del círculo

    // Aquí se pueden agregar más visualizaciones o elementos gráficos
    // Para futuras mejoras, considerar agregar interactividad o gráficos adicionales
});