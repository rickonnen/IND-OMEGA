/*'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'

import ZoomControls from '@/components/ZoomControls'
import { createGpsIcon } from '@/components/GpsPin'
import { createClusterIcon, CLUSTER_CONFIG } from '@/lib/clusterIcon'

import type { PropertyMapPin } from '@/data/properties'

// Fix Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// 🎨 Configuración visual
const PIN_FILL = {
  casa: '#3b82f6',
  departamento: '#8b5cf6',
  terreno: '#f59e0b',
  local: '#10b981',
}

const PIN_HALO = {
  casa: 'rgba(59,130,246,0.25)',
  departamento: 'rgba(139,92,246,0.25)',
  terreno: 'rgba(245,158,11,0.25)',
  local: 'rgba(16,185,129,0.25)',
}

const PIN_ICON = {
  casa: '/icons/house.svg',
  departamento: '/icons/building.svg',
  terreno: '/icons/land.svg',
  local: '/icons/shop.svg',
}

// 🔥 Icono dinámico
function createPinIcon(type: PropertyMapPin['type'], isSelected: boolean): L.DivIcon {
  const fill = isSelected ? '#ef4444' : PIN_FILL[type]
  const halo = isSelected ? 'rgba(239,68,68,0.35)' : PIN_HALO[type]
  const icon = PIN_ICON[type]

  const size = isSelected ? 42 : 34
  const inner = isSelected ? 30 : 24

  return L.divIcon({
    className: '',
    html: `
      <div style="width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center;">
        <div style="position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:${halo};"></div>
        <div style="width:${inner}px;height:${inner}px;border-radius:50%;background:${fill};display:flex;align-items:center;justify-content:center;border:2px solid white;">
          <img src="${icon}" style="width:16px;height:16px;filter:invert(1);" />
        </div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  })
}

// 🚀 Centrar mapa
function FlyToSelected({ property }: { property?: PropertyMapPin }) {
  const map = useMap()

  useEffect(() => {
    if (property) {
      map.flyTo([property.lat, property.lng], 15, {
        duration: 1.5,
      })
    }
  }, [property, map])

  return null
}

interface MapViewProps {
  properties: PropertyMapPin[]
  selectedId?: string | null
  onSelect?: (id: string) => void
}

export default function MapView({
  properties,
  selectedId,
  onSelect,
}: MapViewProps) {
  const center: [number, number] = [-17.39, -66.15]

  return (
    <div className="w-full h-full">
      <MapContainer center={center} zoom={20} zoomControl={false} className="w-full h-full">
      
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <ZoomControls />

        <FlyToSelected property={properties.find(p => p.id === selectedId)} />

        <Marker position={center} icon={createGpsIcon()}>
          <Popup>Tu ubicación</Popup>
        </Marker>

        <MarkerClusterGroup
          iconCreateFunction={createClusterIcon}
          maxClusterRadius={CLUSTER_CONFIG.maxClusterRadius}
        >
          {properties.map((property) => {
            const isSelected = property.id === selectedId

            return (
              <Marker
                key={property.id}
                position={[property.lat, property.lng]}
                icon={createPinIcon(property.type, isSelected)}
                eventHandlers={{
                  click: () => onSelect?.(property.id),
                }}
              >
                <Popup>
                  <b>{property.title}</b>
                  <br />
                  ${property.price.toLocaleString()} USD
                </Popup>
              </Marker>
            )
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}*/

'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'

import ZoomControls from '@/components/ZoomControls'
import { createGpsIcon } from '@/components/GpsPin'
import { createClusterIcon, CLUSTER_CONFIG } from '@/lib/clusterIcon'

import type { PropertyMapPin } from '@/data/properties'

// Fix Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// 🔥 PIN estilo precio (como portal inmobiliario)
function createPinIcon(property: PropertyMapPin, isSelected: boolean): L.DivIcon {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        background:${isSelected ? '#16a34a' : 'white'};
        color:${isSelected ? 'white' : 'black'};
        padding:4px 8px;
        border-radius:12px;
        font-size:12px;
        font-weight:bold;
        border:1px solid #ccc;
        box-shadow:0 2px 6px rgba(0,0,0,0.2);
      ">
        $${property.price.toLocaleString()}
      </div>
    `,
    iconSize: [60, 30],
    iconAnchor: [30, 30],
  })
}

// 🚀 Centrar mapa
function FlyToSelected({ property }: { property?: PropertyMapPin }) {
  const map = useMap()

  useEffect(() => {
    if (property) {
      map.flyTo([property.lat, property.lng], 15, {
        duration: 1.5,
      })
    }
  }, [property, map])

  return null
}

interface MapViewProps {
  properties: PropertyMapPin[]
  selectedId?: string | null
  onSelect?: (id: string) => void
}

export default function MapView({
  properties,
  selectedId,
  onSelect,
}: MapViewProps) {
  const center: [number, number] = [-17.39, -66.15]

  return (
    <div className="w-full h-full">
      <MapContainer center={center} zoom={13} zoomControl={false} className="w-full h-full">

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <ZoomControls />

        <FlyToSelected property={properties.find(p => p.id === selectedId)} />

        <Marker position={center} icon={createGpsIcon()}>
          <Popup>Tu ubicación</Popup>
        </Marker>

        <MarkerClusterGroup
          iconCreateFunction={createClusterIcon}
          maxClusterRadius={CLUSTER_CONFIG.maxClusterRadius}
        >
          {properties.map((property) => {
            const isSelected = property.id === selectedId

            return (
              <Marker
                key={property.id}
                position={[property.lat, property.lng]}
                icon={createPinIcon(property, isSelected)}
                eventHandlers={{
                  click: () => onSelect?.(property.id),
                }}
              >
                <Popup>
                  <b>{property.title}</b>
                  <br />
                  ${property.price.toLocaleString()} USD
                </Popup>
              </Marker>
            )
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}