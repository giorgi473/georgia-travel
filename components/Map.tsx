"use client";

import { useState, useEffect } from "react";

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  count: number;
  type: "location" | "building";
}

const mockMarkers: MapMarker[] = [
  { id: "tbilisi", lat: 41.7151, lng: 44.8271, count: 3, type: "location" }, // Tbilisi
  { id: "batumi", lat: 41.6168, lng: 41.6367, count: 2, type: "location" }, // Batumi
  { id: "kutaisi", lat: 42.2679, lng: 42.7064, count: 34, type: "location" }, // Kutaisi
  { id: "gori", lat: 41.9707, lng: 43.5095, count: 5, type: "location" }, // Gori
  { id: "zugdidi", lat: 42.0954, lng: 41.8709, count: 14, type: "location" }, // Zugdidi
  { id: "rustavi", lat: 41.5591, lng: 45.0095, count: 6, type: "location" }, // Rustavi
  { id: "poti", lat: 42.4964, lng: 41.8781, count: 7, type: "location" }, // Poti
  { id: "mtskheta", lat: 41.8518, lng: 43.4424, count: 12, type: "location" }, // Mtskheta
  { id: "telavi", lat: 41.9167, lng: 45.4733, count: 8, type: "location" }, // Telavi
  { id: "akhaltsikhe", lat: 41.6394, lng: 42.9831, count: 4, type: "location" }, // Akhaltsikhe
  { id: "ozurgeti", lat: 41.9244, lng: 42.0058, count: 9, type: "location" }, // Ozurgeti
  { id: "senaki", lat: 42.2667, lng: 42.0667, count: 6, type: "location" }, // Senaki
  { id: "marneuli", lat: 41.4775, lng: 44.8097, count: 11, type: "location" }, // Marneuli
  { id: "gardabani", lat: 41.4581, lng: 45.0931, count: 7, type: "location" }, // Gardabani
  { id: "kaspi", lat: 41.9167, lng: 44.4167, count: 3, type: "location" }, // Kaspi
  { id: "khashuri", lat: 41.9944, lng: 43.6019, count: 5, type: "location" }, // Khashuri
  { id: "borjomi", lat: 41.8444, lng: 43.3831, count: 15, type: "location" }, // Borjomi
  { id: "akhalkalaki", lat: 41.4069, lng: 43.4831, count: 2, type: "location" }, // Akhalkalaki
  { id: "lagodekhi", lat: 41.8267, lng: 46.2733, count: 4, type: "location" }, // Lagodekhi
  { id: "signagi", lat: 41.6167, lng: 45.9167, count: 13, type: "location" }, // Signagi
  { id: "gurjaani", lat: 41.7433, lng: 45.7967, count: 6, type: "location" }, // Gurjaani
  { id: "sagarejo", lat: 41.7267, lng: 45.3267, count: 8, type: "location" }, // Sagarejo
  { id: "dusheti", lat: 42.0767, lng: 44.7267, count: 5, type: "location" }, // Dusheti
  { id: "tianeti", lat: 42.0633, lng: 44.9633, count: 3, type: "location" }, // Tianeti
  { id: "sachkhere", lat: 42.3433, lng: 43.4067, count: 7, type: "location" }, // Sachkhere
  { id: "chiatura", lat: 42.2967, lng: 43.2833, count: 9, type: "location" }, // Chiatura
  { id: "zestaponi", lat: 42.1067, lng: 43.0533, count: 12, type: "location" }, // Zestaponi
  { id: "khoni", lat: 42.3167, lng: 42.4167, count: 4, type: "location" }, // Khoni
  { id: "samtredia", lat: 42.1633, lng: 42.3333, count: 8, type: "location" }, // Samtredia
  { id: "abasha", lat: 42.2033, lng: 42.2167, count: 6, type: "location" }, // Abasha
  { id: "mestia", lat: 43.0444, lng: 42.7281, count: 17, type: "location" }, // Mestia
  { id: "oni", lat: 42.5833, lng: 43.4433, count: 5, type: "location" }, // Oni
  { id: "ambrolauri", lat: 42.5167, lng: 43.1533, count: 3, type: "location" }, // Ambrolauri
  { id: "tsalenjikha", lat: 42.6167, lng: 42.0833, count: 4, type: "location" }, // Tsalenjikha
  { id: "jvari", lat: 42.5833, lng: 42.1167, count: 2, type: "location" }, // Jvari
  { id: "khobi", lat: 42.3167, lng: 41.9167, count: 6, type: "location" }, // Khobi
];

const buildingMarkers = [
  { id: "b1", lat: 41.7151, lng: 44.8371 },
  { id: "b2", lat: 41.6268, lng: 41.6467 },
  { id: "b3", lat: 42.2779, lng: 42.7164 },
  { id: "b4", lat: 41.9807, lng: 43.5195 },
  { id: "b5", lat: 42.1054, lng: 42.9987 },
  { id: "b6", lat: 41.5691, lng: 45.0195 },
  { id: "b7", lat: 42.5064, lng: 41.8881 },
  { id: "b8", lat: 41.8618, lng: 43.4524 },
  { id: "b9", lat: 41.9267, lng: 45.4833 },
  { id: "b10", lat: 41.6494, lng: 42.9931 },
  { id: "b11", lat: 41.9344, lng: 42.0158 },
  { id: "b12", lat: 42.2767, lng: 42.0767 },
  { id: "b13", lat: 41.4875, lng: 44.8197 },
  { id: "b14", lat: 41.4681, lng: 45.1031 },
  { id: "b15", lat: 41.8544, lng: 43.3931 },
];

export function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const loadLeaflet = async () => {
      if (typeof window !== "undefined") {
        // Load Leaflet CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);

        // Load Leaflet JS
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => {
          setMapLoaded(true);
        };
        document.head.appendChild(script);
      }
    };

    loadLeaflet();
  }, []);

  useEffect(() => {
    if (!mapLoaded || typeof window === "undefined") return;

    const L = (window as any).L;

    const map = L.map("map", { zoomControl: false }).setView(
      [41.7151, 44.8271],
      7
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    mockMarkers.forEach((marker) => {
      const markerElement = L.divIcon({
        html: `<div class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold shadow-lg border-2 border-white" style="display: flex; align-items: center; justify-content: center;">${marker.count}</div>`,
        className: "custom-marker",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      L.marker([marker.lat, marker.lng], { icon: markerElement }).addTo(map);
    });

    buildingMarkers.forEach((building) => {
      const buildingIcon = L.divIcon({
        html: `<div class="bg-gray-700 text-white rounded p-1 shadow-lg" style="display: flex; align-items: center; justify-content: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/></svg></div>`,
        className: "custom-building-marker",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      L.marker([building.lat, building.lng], { icon: buildingIcon }).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [mapLoaded]);

  return (
    <div className="h-[620px] bg-slate-50">
      <div className="w-full h-full relative">
        <div id="map" className="w-full h-full" />
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
            <div className="text-slate-600">მაპის ჩატვირთვა...</div>
          </div>
        )}
      </div>
    </div>
  );
}
