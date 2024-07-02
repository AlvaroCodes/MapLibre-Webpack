import maplibregl from 'maplibre-gl';

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json', // URL del estilo de Maplibre
  center: [0, 0], // Coordenadas iniciales [longitud, latitud]
  zoom: 2 // Nivel de zoom inicial
});
