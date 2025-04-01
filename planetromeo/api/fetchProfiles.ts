import { BASE_URL } from '../config';
import { Profile } from '../types';
import {ERROR_OPTIONS} from '../constants/errorConstants'
/**
 * Fetch Profiles details
 * @param ids 
 * @returns 
 */
export async function fetchProfiles(ids: number[]) {
  if (!ids.length) return [];

  const url = new URL(`${BASE_URL}/profiles`);
  ids.forEach((id) => url.searchParams.append('ids[]', id.toString()));

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(ERROR_OPTIONS.failedToLoadProfiles);

  return res.json() as Promise<Profile[]>;
}