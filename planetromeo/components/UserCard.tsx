import React from 'react';
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native';
import { formatTimeAgo } from '../utils/commonUtlis';
import { useThemeContext } from '../theme/ThemeProvider';
import { User } from '../types';

export default function UserCard({ user }: { user: User }) {
  const { theme } = useThemeContext();
  const { width } = useWindowDimensions();
  const cardWidth = (width - 36) / 2;

  return (
    <View style={[styles.card, { width: cardWidth, backgroundColor: theme.card }]}>
      <ImageBackground
        source={{ uri: user.picture?.url || 'https://via.placeholder.com/424' }}
        style={styles.image}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={[styles.overlay, { backgroundColor: theme.overlay }]}>
          <Text style={[styles.name, { color: theme.text }]}>{user.name}, {user.personal?.age}</Text>
          {user.headline && (
            <Text style={[styles.headline, { color: theme.text }]}>
              {user.headline}
            </Text>
          )}
          {user.location?.name && (
            <Text style={[styles.location, { color: theme.muted }]}>
              {user.location.name} • {user.location.distance?.toFixed(0)} km
            </Text>
          )}
          {user.last_login && (
            <Text style={[styles.time, { color: theme.muted }]}>
              {formatTimeAgo(user.last_login)}
            </Text>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 6,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 8,
  },
  name: { fontWeight: 'bold', fontSize: 14 },
  headline: { fontSize: 12, marginTop: 2 },
  location: { fontSize: 11, marginTop: 2 },
  time: { fontSize: 10, marginTop: 2 },
});