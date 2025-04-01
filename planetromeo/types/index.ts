/**
 * User Type
 */
export type User = {
    id: number;
    name: string;
    headline: string;
    picture?: {
      url?: string;
      comment?: string;
    };
    location?: {
      name?: string;
      distance?: number;
    };
    personal?: {
      age?: number;
    };
    last_login?: string;
  };

/***
 * Profile Type
 */
export type Profile = {
    id: number;
    location?:{
        city?: string;
        name?: string;
        country?: string;
    };
    headline?: string;
    distance?: number;
};

/***
 * Search Result Type
 */
export type SearchResult = {
    items: User[];
    total: number;
    cursors?: {
      after?: string;
    };
  };