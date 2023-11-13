// YandexMap.jsx
import { createSignal, onCleanup, createEffect } from 'solid-js';
import

function YandexMap() {
  let map;

  const [isMapLoaded, setMapLoaded] = createSignal(false);

  createEffect(() => {
    if (isMapLoaded()) {
      // Initialize the map
      map = new window.ymaps.Map('map', {
        center: [55.7558, 37.6176], // Coordinates of the map center
        zoom: 10, // Zoom level
      });

      // Add markers, lines, etc. if needed

      // Cleanup events and resources on component cleanup
      onCleanup(() => {
        map.destroy();
      });
    }
  });

  createEffect(() => {
    // Load the Yandex.Maps API
    if (!isMapLoaded()) {
      window.ymaps.ready(() => {
        setMapLoaded(true);
      });
    }
  });

  return (
    <div id="map" style={{ width: '100%', height: '400px' }} />
  );
}

export default YandexMap;
