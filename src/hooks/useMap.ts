import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { CityCoordinates, CityName } from '../const';

const ZOOM_LEVEL = 13;

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: CityName): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: CityCoordinates[city].lat,
          lng: CityCoordinates[city].lng,
        },
        zoom: ZOOM_LEVEL,
      });

      const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      });

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  useEffect(() => {
    map?.setView(CityCoordinates[city], ZOOM_LEVEL);
  }, [city, map]);

  return map;
}

export default useMap;
