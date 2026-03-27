import { useState, useCallback, useEffect } from 'react'

export interface Filters {
  searchText: string
  types: string[]
  minPrice: number
  maxPrice: number
}

export const DEFAULT_FILTERS: Filters = {
  searchText: '',
  types: [],
  minPrice: 0,
  maxPrice: 1000000
}

const STORAGE_KEY = 'propbol_filters'

export function useFilters() {
  const [filters, setFilters] = useState<Filters>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : DEFAULT_FILTERS
    } catch {
      return DEFAULT_FILTERS
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filters))
    } catch {}
  }, [filters])

  const updateFilter = useCallback(<K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {}
  }, [])

  const hasActiveFilters =
    filters.searchText !== '' ||
    filters.types.length > 0 ||
    filters.minPrice !== DEFAULT_FILTERS.minPrice ||
    filters.maxPrice !== DEFAULT_FILTERS.maxPrice

  return { filters, updateFilter, resetFilters, hasActiveFilters }
}
