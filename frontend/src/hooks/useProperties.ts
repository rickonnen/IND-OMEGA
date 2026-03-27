import { useState, useEffect, useMemo } from 'react'
import { PropertyMapPin } from '@/types/property'
import { MOCK_PROPERTIES } from '@/data/mockProperties'
import { Filters } from './useFilters'

const USE_MOCK = true
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

interface UsePropertiesResult {
  properties: PropertyMapPin[]
  allProperties: PropertyMapPin[]
  isLoading: boolean
  error: string | null
}

export function useProperties(filters?: Filters): UsePropertiesResult {
  const [allProperties, setAllProperties] = useState<PropertyMapPin[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function fetchProperties() {
      setIsLoading(true)
      setError(null)
      try {
        if (USE_MOCK) {
          await new Promise((resolve) => setTimeout(resolve, 400))
          if (!cancelled) setAllProperties(MOCK_PROPERTIES)
        } else {
          const res = await fetch(`${API_URL}/api/properties/map`)
          if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)
          const json = await res.json()
          if (!cancelled) setAllProperties(json.data)
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }
    fetchProperties()
    return () => {
      cancelled = true
    }
  }, [])

  const properties = useMemo(() => {
    if (!filters) return allProperties
    return allProperties.filter((p) => {
      const matchesText =
        filters.searchText === '' ||
        p.title.toLowerCase().includes(filters.searchText.toLowerCase())
      const matchesType = filters.types.length === 0 || filters.types.includes(p.type)
      const matchesPrice = p.price >= filters.minPrice && p.price <= filters.maxPrice
      return matchesText && matchesType && matchesPrice
    })
  }, [allProperties, filters])

  return { properties, allProperties, isLoading, error }
}
