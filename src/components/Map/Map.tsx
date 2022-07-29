import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks/hooks';
import { selectActiveFilter } from '../../store/filtersSlice';
import { Icon, Marker } from 'leaflet';
import { Point, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

import useMap from '../../hooks/useMap';

type MapProps = {
  className: string;
  points: Point[];
  selectedPoint: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const Map = ({ className, points, selectedPoint }: MapProps) => {
  const activeFilter = useAppSelector(selectActiveFilter);
  const mapRef = useRef<HTMLElement | null>(null);
  const [map, markerGroup] = useMap(mapRef, activeFilter);

  useEffect(() => {
    if (map && markerGroup) {
      markerGroup.clearLayers();
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.lat === selectedPoint.lat && point.lng === selectedPoint.lng
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });
    }
  }, [activeFilter, map, markerGroup, points, selectedPoint]);

  return <section className={className.concat(' map')} ref={mapRef}></section>;
};

export default Map;
