"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

interface MapMarker {
  name: string
  coordinates: [number, number]
  value: string
}

interface WorldMapProps {
  markers: MapMarker[]
  className?: string
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export function WorldMap({ markers, className = "" }: WorldMapProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{
          scale: 300,
          center: [0, 0]
        }}
        style={{ width: "100%", height: "100%"}}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(var(--input))"
                stroke="hsl(var(--border))"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" }
                }}
              />
            ))
          }
        </Geographies>
        
        {markers.map((marker) => (
          <Marker key={marker.name} coordinates={marker.coordinates}>
            <circle r={3} fill="hsl(var(--foreground))" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}