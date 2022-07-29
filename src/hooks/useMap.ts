import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { LayerGroup, Map, TileLayer } from 'leaflet';
import { CityCoordinates, CityName } from '../const';

const ZOOM_LEVEL = 13;

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityName
): readonly [Map | null, LayerGroup | null] {
  const [map, setMap] = useState<Map | null>(null);
  const [markerGroup, setMarkerGroup] = useState<LayerGroup | null>(null);
  const mapIsInit = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && map === null && !mapIsInit.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: CityCoordinates[city].lat,
          lng: CityCoordinates[city].lng,
        },
        zoom: ZOOM_LEVEL,
        scrollWheelZoom: false,
      });

      const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      });

      instance.addLayer(layer);
      const layerMarkers = new LayerGroup();
      instance.addLayer(layerMarkers);

      setMap(instance);
      setMarkerGroup(layerMarkers);
      mapIsInit.current = true;
    }
  }, [mapRef, map, city]);

  useEffect(() => {
    map?.setView(CityCoordinates[city], ZOOM_LEVEL);
  }, [city, map]);

  return [map, markerGroup] as const;
}

export default useMap;
