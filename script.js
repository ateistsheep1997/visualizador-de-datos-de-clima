document.addEventListener('DOMContentLoaded', () => {
    // Código para cargar y visualizar los datos climáticos
    const svg = d3.select('#chart').append('svg')
        .attr('width', '100%')
        .attr('height', '400');

    // Ejemplo de visualización: crear un círculo azul en el gráfico
    svg.append('circle')
       .attr('cx', 50) // Coordenada X del centro del círculo
       .attr('cy', 50) // Coordenada Y del centro del círculo
       .attr('r', 40) // Radio del círculo
       .style('fill', 'blue'); // Color de relleno del círculo
});