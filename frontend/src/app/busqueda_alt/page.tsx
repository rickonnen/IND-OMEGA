'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { mockProperties } from '@/data/properties'

const MapView = dynamic(() => import('./MapView'), { ssr: false })

export default function BusquedaMapaPage() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null)

  // 🔥 NUEVO: filtro por tipo
  const [selectedType, setSelectedType] = useState<string>('todos')

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // 🔍 FILTRO FUNCIONAL
  const filteredProperties = mockProperties.filter((p) => {
    if (selectedType === 'todos') return true
    return p.type === selectedType
  })

  // 🔥 SCROLL AUTOMÁTICO
  useEffect(() => {
    if (selectedPropertyId && itemRefs.current[selectedPropertyId]) {
      itemRefs.current[selectedPropertyId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [selectedPropertyId])

  // 🔥 BONUS: limpiar selección al cambiar filtro
  useEffect(() => {
    setSelectedPropertyId(null)
  }, [selectedType])

  return (
    <div className="flex h-screen">

      {/* SIDEBAR */}
      <aside className={`bg-white border-r overflow-y-auto transition-all ${isSidebarOpen ? 'w-[30%]' : 'w-0'}`}>

        {/* HEADER FILTROS */}
        <div className="p-3 border-b sticky top-0 bg-white z-10">

          {/* BUSCADOR */}
          <div className="flex gap-2">
            <input
              placeholder="Busca por ubicación o palabra clave"
              className="flex-1 border rounded px-3 py-2 text-sm"
            />
            <button className="bg-orange-400 text-white px-3 py-2 rounded">
              Buscar
            </button>
          </div>

          {/* 🔥 BOTONES FILTRO */}
          <div className="flex gap-2 mt-2 flex-wrap">

            {[
              { label: 'Todos', value: 'todos' },
              { label: 'Casa', value: 'casa' },
              { label: 'Departamento', value: 'departamento' },
              { label: 'Terreno', value: 'terreno' },
              { label: 'Local', value: 'local' },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setSelectedType(btn.value)}
                className={`px-3 py-1 rounded-full text-sm border transition ${
                  selectedType === btn.value
                    ? 'bg-orange-400 text-white border-orange-400'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {btn.label}
              </button>
            ))}

          </div>
        </div>

        {/* LISTA DE PROPIEDADES */}
        <div className="p-3 space-y-3">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              ref={(el) => (itemRefs.current[property.id] = el)}
              onClick={() => setSelectedPropertyId(property.id)}
              className={`flex gap-3 p-2 rounded-xl border cursor-pointer transition hover:shadow-md ${
                selectedPropertyId === property.id
                  ? 'bg-green-200 border-green-500'
                  : 'bg-white'
              }`}
            >
              {/* Imagen */}
              <div className="w-28 h-20 rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="https://picsum.photos/200/150"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="font-bold text-sm">
                  US$ {property.price.toLocaleString()}
                </p>

                <p className="text-xs text-gray-500">
                  {property.title}
                </p>

                <p className="text-xs text-gray-400 capitalize">
                  {property.type} • Cochabamba
                </p>

                <div className="flex gap-3 text-xs mt-1 text-gray-500">
                  <span>🛏 2</span>
                  <span>🛁 2</span>
                  <span>📐 110m²</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* MAPA */}
      <div className="flex-1 relative">

        {/* BOTÓN TOGGLE */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-4 left-0 z-[1000] bg-white shadow-md px-3 py-2 rounded-r-xl border"
        >
          {isSidebarOpen ? '←' : '→'}
        </button>

        <MapView
          properties={filteredProperties}
          selectedId={selectedPropertyId}
          onSelect={setSelectedPropertyId}
        />
      </div>
    </div>
  )
}