/*export type PropertyType = 'casa' | 'departamento' | 'terreno' | 'local'

export interface PropertyMapPin {
  id: string
  title: string
  price: number
  currency: 'USD' | 'BOB'
  type: PropertyType
  lat: number
  lng: number
}

export const mockProperties: PropertyMapPin[] = Array.from({ length: 20 }).map((_, i) => {
  const types: PropertyType[] = ['casa', 'departamento', 'terreno', 'local']

  return {
    id: String(i + 1),
    title: `Propiedad ${i + 1}`,
    price: 50000 + Math.floor(Math.random() * 150000),
    currency: 'USD',
    type: types[Math.floor(Math.random() * types.length)],
    lat: -17.39 + (Math.random() - 0.5) * 0.1,
    lng: -66.15 + (Math.random() - 0.5) * 0.1,
  }
})*/
/*export type PropertyType = 'casa' | 'departamento' | 'terreno' | 'local'

export interface PropertyMapPin {
  id: string
  title: string
  price: number
  currency: 'USD'
  type: PropertyType
  lat: number
  lng: number
}

export const mockProperties: PropertyMapPin[] = [
  {
    id: '1',
    title: 'Casa moderna',
    price: 80000,
    currency: 'USD',
    type: 'casa',
    lat: -17.38,
    lng: -66.15,
  },
  {
    id: '2',
    title: 'Departamento céntrico',
    price: 65000,
    currency: 'USD',
    type: 'departamento',
    lat: -17.39,
    lng: -66.14,
  },
  {
    id: '3',
    title: 'Terreno amplio',
    price: 50000,
    currency: 'USD',
    type: 'terreno',
    lat: -17.40,
    lng: -66.16,
  },
  {
    id: '4',
    title: 'Local comercial',
    price: 120000,
    currency: 'USD',
    type: 'local',
    lat: -17.37,
    lng: -66.13,
  },

  // puedes duplicar variando coordenadas 👇
  ...Array.from({ length: 16 }).map((_, i) => ({
    id: String(i + 5),
    title: `Propiedad ${i + 5}`,
    price: 70000 + i * 2000,
    currency: 'USD' as const,
    type: ['casa', 'departamento', 'terreno', 'local'][i % 4] as PropertyType,
    lat: -17.39 + i * 0.005,
    lng: -66.15 + i * 0.005,
  })),
]*/

export type PropertyType = "casa" | "departamento" | "terreno" | "local";

export interface PropertyMapPin {
  id: string;
  title: string;
  price: number;
  currency: "USD";
  type: PropertyType;
  lat: number;
  lng: number;
}

export const mockProperties: PropertyMapPin[] = [
  {
    id: "1",
    title: "Casa moderna",
    price: 80000,
    currency: "USD",
    type: "casa",
    lat: -17.38,
    lng: -66.15,
  },
  {
    id: "2",
    title: "Departamento céntrico",
    price: 65000,
    currency: "USD",
    type: "departamento",
    lat: -17.39,
    lng: -66.14,
  },
  {
    id: "3",
    title: "Terreno amplio",
    price: 50000,
    currency: "USD",
    type: "terreno",
    lat: -17.4,
    lng: -66.16,
  },
  {
    id: "4",
    title: "Local comercial",
    price: 120000,
    currency: "USD",
    type: "local",
    lat: -17.37,
    lng: -66.13,
  },

  ...Array.from({ length: 26 }).map((_, i) => ({
    id: String(i + 5),
    title: `Propiedad ${i + 5}`,
    price: 70000 + i * 2000,
    currency: "USD" as const,
    type: ["casa", "departamento", "terreno", "local"][i % 4] as PropertyType,
    lat: -17.39 + i * 0.005,
    lng: -66.15 + i * 0.005,
  })),
];
