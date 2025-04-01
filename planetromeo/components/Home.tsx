import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import Header from './utilComponents/Header';
import ThemeToggle from './utilComponents/ThemeToggle';
import UserCard from './userCard/UserCard';
import { UserData } from './userCard/UserData';

export default function Home() {
  const {
    theme,
    enriched,
    loading,
    fetchingMore,
    handleEndReached,
    columns,
  } = UserData();

  /***
   * 
   * 
   */
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]} edges={['top', 'bottom']}>
      {loading ? (
        <ActivityIndicator size="large" color={theme.text} />
      ) : (
        <>
          <View style={styles.container}>
            {/* Theme Toggle at top right */}
            <View style={styles.toggleWrapper}>
              <ThemeToggle />
            </View>
            {/* Header below toggle */}
            <Header />

            {/* FlatList below header */}
            <FlatList
              data={enriched}
              style={{ flex: 1 }}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <UserCard user={item} />}
              onEndReached={handleEndReached}
              onEndReachedThreshold={0.5}
              ListFooterComponent={fetchingMore ? <ActivityIndicator size="small" color={theme.text} /> : null}
              numColumns={columns}
              columnWrapperStyle={columns > 1 ? styles.row : undefined}
              contentContainerStyle={styles.listContent}
            />
          </View></>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  toggleWrapper: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 10
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  listContent: {
    paddingBottom: 40,
  },
});