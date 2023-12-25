import type { PageLoad } from './$types';

export interface Destination {
  id: string;
  arrival: number; // arrival unix timestamp (UTC)
  departure: number | null; // only null for the final landing
  population: number;
  presentsDelivered: number;
  city: string;
  region: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface ResponseData {
  /**
   * Current Location
   */
  current: Destination;

  /**
   * Next Location
   */
  next: Destination;

  /**
   * History of locations (excluding current)
   */
  history: Destination[];
}
export const load: PageLoad = (async ({fetch}) => {
  const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-twenty-four.json')
  const response: ResponseData = await res.json();
  return { response };
});