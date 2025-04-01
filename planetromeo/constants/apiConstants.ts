/*
* Keep all api related constants here
*/
export const SORT_OPTIONS = {
    DISTANCE: 'DISTANCE',
    ACTIVITY: 'ACTIVITY',
    LENGTH: 10
  } as const;
  
export type SortOption = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS];