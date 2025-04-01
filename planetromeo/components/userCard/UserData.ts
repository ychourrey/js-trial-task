import { useEffect, useState } from 'react';
import { fetchSearch } from '../../api/fetchSearch';
import { fetchProfiles } from '../../api/fetchProfiles';
import { SORT_OPTIONS } from '../../constants/apiConstants';
import { useResponsiveColumns } from '../../utils/userResponsiveColumns';
import { useThemeContext } from '../../theme/ThemeProvider';
import { User, Profile } from '../../types';
import {ERROR_OPTIONS} from '../../constants/errorConstants'

export function UserData() {
  const { theme } = useThemeContext();
  const [users, setUsers] = useState<User[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchingMore, setFetchingMore] = useState(false);
  const columns = useResponsiveColumns();

  const loadUsers = async (nextCursor?: string) => {
    const isFirst = !nextCursor;
    isFirst ? setLoading(true) : setFetchingMore(true);

    try {
      const res = await fetchSearch(10, SORT_OPTIONS.DISTANCE, nextCursor);
      const ids = res.items.map((u) => u.id);
      const prof = await fetchProfiles(ids);

      setUsers((prev) => [...prev, ...res.items]);
      setProfiles((prev) => [...prev, ...prof]);
      setCursor(res.cursors?.after || null);
    } catch (err) {
      console.error(ERROR_OPTIONS.paginationError, err);
    } finally {
      isFirst ? setLoading(false) : setFetchingMore(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const enriched = users.map((u) => ({
    ...u,
    ...(profiles.find((p) => p.id === u.id) || {})
  }));

  const handleEndReached = () => {
    if (cursor && !fetchingMore) {
      loadUsers(cursor);
    }
  };

  return {
    theme,
    enriched,
    loading,
    fetchingMore,
    columns,
    handleEndReached,
  };
}