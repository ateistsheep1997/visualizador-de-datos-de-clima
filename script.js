document.addEventListener('DOMContentLoaded', () => {
    // Código para cargar y visualizar los datos climáticos
    const svg = d3.select('#chart').append('svg')
        .attr('width', '100%')
        .attr('height', '400');

    // Ejemplo de visualización
    svg.append('circle')
       .attr('cx', 50)
       .attr('cy', 50)
       .attr('r', 40)
       .style('fill', 'blue');
});