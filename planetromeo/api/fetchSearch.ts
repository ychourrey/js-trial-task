import { BASE_URL } from '../config';
import { SearchResult } from '../types';
import { SORT_OPTIONS, SortOption } from '../constants/apiConstants';

/**
 * Fetch the list of users
 * SEARCH API
 * input param
 * @length: number
 * @sorting: DISTANCE OR ACTIVITY
 * @cursor: string - a pointer reference for infinite scrolling
 */
export async function fetchSearch(
  length: number = SORT_OPTIONS.LENGTH,
  sort: SortOption = SORT_OPTIONS.DISTANCE,
  cursor?: string
): Promise<SearchResult> {
  const url = new URL(`${BASE_URL}/search`);
  url.searchParams.set('length', length.toString());
  url.searchParams.set('sorting', sort.toString());
  if (cursor) {
    url.searchParams.set('cursor', cursor);
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Failed to load search results');

  return res.json();
}