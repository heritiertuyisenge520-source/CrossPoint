export type ServiceSceneId =
  | 'sourcing'
  | 'ocean'
  | 'air'
  | 'customs'
  | 'warehouse'
  | 'ticketing';

export type LatLng = { lat: number; lng: number };

export type GlobeMarker = LatLng & {
  name: string;
  country: string;
  showLabel?: boolean;
};

export type GlobeArc = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  alt: number;
};

export type GlobeVehicle = {
  kind: 'jet' | 'cargo' | 'ship';
  path: LatLng[];
  duration: number;
  phase: number;
  alt: number;
};

export type GlobeScene = {
  id: ServiceSceneId;
  kicker: string;
  caption: string;
  footnote: string;
  lat: number;
  lng: number;
  altitude: number;
  spin: number;
  markers: GlobeMarker[];
  arcs: GlobeArc[];
  vehicles: GlobeVehicle[];
  stats: { value: string; label: string }[];
};

const city = {
  guangzhou: { lat: 23.13, lng: 113.26, name: 'Guangzhou', country: 'China' },
  shenzhen: { lat: 22.54, lng: 114.06, name: 'Shenzhen', country: 'China' },
  yiwu: { lat: 29.3, lng: 120.07, name: 'Yiwu', country: 'China' },
  shanghai: { lat: 31.23, lng: 121.47, name: 'Shanghai', country: 'China' },
  ningbo: { lat: 29.87, lng: 121.55, name: 'Ningbo', country: 'China', showLabel: false },
  foshan: { lat: 23.02, lng: 113.12, name: 'Foshan', country: 'China', showLabel: false },
  singapore: { lat: 1.35, lng: 103.82, name: 'Singapore', country: 'Singapore' },
  mombasa: { lat: -4.04, lng: 39.67, name: 'Mombasa', country: 'Kenya' },
  addis: { lat: 8.98, lng: 38.76, name: 'Addis Ababa', country: 'Ethiopia' },
  kigali: { lat: -1.94, lng: 30.06, name: 'Kigali', country: 'Rwanda' },
  nairobi: { lat: -1.29, lng: 36.82, name: 'Nairobi', country: 'Kenya' },
  entebbe: { lat: 0.05, lng: 32.44, name: 'Entebbe', country: 'Uganda', showLabel: false },
  dar: { lat: -6.79, lng: 39.21, name: 'Dar es Salaam', country: 'Tanzania' },
  johannesburg: { lat: -26.13, lng: 28.24, name: 'Johannesburg', country: 'South Africa' },
  lagos: { lat: 6.58, lng: 3.32, name: 'Lagos', country: 'Nigeria' },
  dubai: { lat: 25.25, lng: 55.36, name: 'Dubai', country: 'UAE' },
  brussels: { lat: 50.9, lng: 4.48, name: 'Brussels', country: 'Belgium' },
} as const;

function link(from: LatLng, to: LatLng, alt: number): GlobeArc {
  return {
    startLat: from.lat,
    startLng: from.lng,
    endLat: to.lat,
    endLng: to.lng,
    alt,
  };
}

function flight(
  kind: GlobeVehicle['kind'],
  path: LatLng[],
  duration: number,
  phase: number,
  alt: number,
): GlobeVehicle {
  return { kind, path, duration, phase, alt };
}

export const globeScenes: Record<ServiceSceneId, GlobeScene> = {
  sourcing: {
    id: 'sourcing',
    kicker: 'China sourcing hubs',
    caption: 'Factories we buy from, orbiting in real satellite view',
    footnote: 'Guangzhou office · markers across China',
    lat: 30.5,
    lng: 112,
    altitude: 0.85,
    spin: 0.07,
    markers: [city.guangzhou, city.shenzhen, city.foshan, city.yiwu, city.shanghai, city.ningbo],
    arcs: [],
    vehicles: [],
    stats: [
      { value: '6', label: 'Factory hubs' },
      { value: 'GZ', label: 'Our office' },
      { value: 'China', label: 'Sourcing' },
    ],
  },
  ocean: {
    id: 'ocean',
    kicker: 'Ocean freight lane',
    caption: 'Container ship sailing Shanghai to Mombasa, then inland to Kigali',
    footnote: 'FCL / LCL · China to Rwanda',
    lat: 10,
    lng: 78,
    altitude: 1.75,
    spin: 0.045,
    markers: [city.shanghai, city.singapore, city.mombasa, city.kigali],
    arcs: [
      link(city.shanghai, city.singapore, 0.12),
      link(city.singapore, city.mombasa, 0.16),
      link(city.mombasa, city.kigali, 0.08),
    ],
    vehicles: [flight('ship', [city.shanghai, city.singapore, city.mombasa], 28000, 0, 0.02)],
    stats: [
      { value: 'Sea', label: 'Mode' },
      { value: '3', label: 'Ports' },
      { value: 'KGL', label: 'Delivery' },
    ],
  },
  air: {
    id: 'air',
    kicker: 'Air freight lane',
    caption: 'Cargo aircraft Guangzhou → Addis Ababa → Kigali',
    footnote: 'Fast air cargo · door delivery in Kigali',
    lat: 14,
    lng: 68,
    altitude: 1.55,
    spin: 0.05,
    markers: [city.guangzhou, city.addis, city.kigali],
    arcs: [link(city.guangzhou, city.addis, 0.22), link(city.addis, city.kigali, 0.12)],
    vehicles: [flight('cargo', [city.guangzhou, city.addis, city.kigali, city.guangzhou], 22000, 0.15, 0.08)],
    stats: [
      { value: 'Air', label: 'Mode' },
      { value: '3', label: 'Stops' },
      { value: 'Fast', label: 'Transit' },
    ],
  },
  customs: {
    id: 'customs',
    kicker: 'Customs on both ends',
    caption: 'Clearance handled in China and again on arrival in Rwanda',
    footnote: 'Documents · duties · import permits',
    lat: 16,
    lng: 70,
    altitude: 2.35,
    spin: 0.04,
    markers: [city.guangzhou, city.kigali],
    arcs: [link(city.guangzhou, city.kigali, 0.28)],
    vehicles: [],
    stats: [
      { value: '2', label: 'Borders' },
      { value: 'CN', label: 'Export' },
      { value: 'RW', label: 'Import' },
    ],
  },
  warehouse: {
    id: 'warehouse',
    kicker: 'Kigali warehouse',
    caption: 'Zoomed on Kigali — where cargo is received and handed over',
    footnote: 'Safe storage · last-mile in Rwanda',
    lat: -1.94,
    lng: 30.06,
    altitude: 0.42,
    spin: 0.1,
    markers: [city.kigali],
    arcs: [],
    vehicles: [],
    stats: [
      { value: 'KGL', label: 'Warehouse' },
      { value: 'Door', label: 'Delivery' },
      { value: '24/7', label: 'Support' },
    ],
  },
  ticketing: {
    id: 'ticketing',
    kicker: 'RwandAir routes',
    caption: 'Passenger jets flying the continent from Kigali',
    footnote: 'Nairobi · Entebbe · Lagos · Johannesburg · Dubai · Brussels',
    lat: 6,
    lng: 28,
    altitude: 1.35,
    spin: 0.055,
    markers: [
      city.kigali,
      city.nairobi,
      city.entebbe,
      city.dar,
      city.johannesburg,
      city.lagos,
      city.dubai,
      city.brussels,
    ],
    arcs: [
      link(city.kigali, city.nairobi, 0.08),
      link(city.kigali, city.entebbe, 0.05),
      link(city.kigali, city.dar, 0.1),
      link(city.kigali, city.johannesburg, 0.18),
      link(city.kigali, city.lagos, 0.16),
      link(city.kigali, city.dubai, 0.24),
      link(city.kigali, city.brussels, 0.32),
    ],
    vehicles: [
      flight('jet', [city.kigali, city.nairobi, city.kigali], 14000, 0.05, 0.05),
      flight('jet', [city.kigali, city.entebbe, city.kigali], 11000, 0.4, 0.045),
      flight('jet', [city.kigali, city.johannesburg, city.kigali], 20000, 0.2, 0.07),
      flight('jet', [city.kigali, city.lagos, city.kigali], 18000, 0.55, 0.065),
      flight('jet', [city.kigali, city.dubai, city.kigali], 24000, 0.72, 0.09),
      flight('jet', [city.kigali, city.brussels, city.kigali], 26000, 0.33, 0.11),
    ],
    stats: [
      { value: '7', label: 'Routes' },
      { value: 'KGL', label: 'Hub' },
      { value: 'Live', label: 'Flights' },
    ],
  },
};
