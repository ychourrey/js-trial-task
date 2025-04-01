import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchSearch } from '../api/fetchSearch';
import { fetchProfiles } from '../api/fetchProfiles';
import UserCard from '../components/UserCard';
import { User, Profile } from '../types';
import { useResponsiveColumns } from '../utils/userResponsiveColumns';
import { SORT_OPTIONS } from '../constants/apiConstants';
import { useThemeContext } from '../theme/ThemeProvider';
import ThemeToggle from '../components/ThemeToggle'; // 👈 new toggle with icons
import Header from './Header'

export default function Home() {
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
      console.error('Pagination error:', err);
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

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemeToggle />
      <Header />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={enriched}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <UserCard user={item} />}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            fetchingMore ? <ActivityIndicator size="small" /> : null
          }
          numColumns={columns}
          columnWrapperStyle={columns > 1 ? styles.row : undefined}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});