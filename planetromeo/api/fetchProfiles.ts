import { BASE_URL } from '../config';
import { Profile } from '../types';

export async function fetchProfiles(ids: number[]) {
  if (!ids.length) return [];

  const url = new URL(`${BASE_URL}/profiles`);
  ids.forEach((id) => url.searchParams.append('ids[]', id.toString()));

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Failed to load profiles');

  return res.json() as Promise<Profile[]>;
}