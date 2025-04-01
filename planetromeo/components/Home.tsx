import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchSearch } from '../api/fetchSearch';
import { fetchProfiles } from '../api/fetchProfiles';
import UserCard from '../components/UserCard';
import { User, Profile } from '../types';
import { useResponsiveColumns } from '../utils/userResponsiveColumns';
import { SORT_OPTIONS } from '../constants/apiConstants';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchingMore, setFetchingMore] = useState(false);
  const columns = useResponsiveColumns();

  /***
   * Load the users cards on the home page
   * Add infinite scroll based on cursor value
   */
  const loadUsers = async (nextCursor?: string) => {
    const isFirst = !nextCursor;
    if (isFirst) setLoading(true);
    else setFetchingMore(true);

    try {
      const res = await fetchSearch(10, SORT_OPTIONS.DISTANCE, nextCursor);
      const nextUsers = res.items;
      const ids = nextUsers.map((u) => u.id);
      const prof = await fetchProfiles(ids);

      setUsers(prev => [...prev, ...nextUsers]);
      setProfiles(prev => [...prev, ...prof]);
      setCursor(res.cursors?.after || null);
    } catch (err) {
      console.error('Pagination error:', err);
    } finally {
      isFirst ? setLoading(false) : setFetchingMore(false);
    }
  };

  /**
   * initial load ; lifecycle with no dependency
   */
  useEffect(() => {
    loadUsers();
  }, []);

  /***
   * Data enriching from the results of 
   * Search Query(Base) and Profile query(Extra)
   * Match data based on id
   * And combine
   */
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
    <View style={styles.container}>
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
  }
});