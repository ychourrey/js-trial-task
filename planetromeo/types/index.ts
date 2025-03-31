export type User={
    id: number;
    name: string;
    picture?: {
        url?: string;
        comment?: string;
    };
    last_login?: string
};

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

export type SearchResult = {
    items: User[];
    total: number;
    cursors?: {
      after?: string;
    };
  };