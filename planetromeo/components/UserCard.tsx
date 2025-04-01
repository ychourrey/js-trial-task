import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import { formatTimeAgo, truncateWords } from '../utils/commonUtlis';
import { User } from '../types';

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 36) / 2;

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <ImageBackground
        source={{ uri: user.picture?.url || 'https://via.placeholder.com/424' }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.name}>{user.name}, {user.personal?.age}</Text>
          {user.headline && (
  <Text style={styles.headline}>
    {truncateWords(user.headline, 8)}
  </Text>
)}
          {user.location?.name && (
            <Text style={styles.location}>
              {user.location.name} • {user.location.distance?.toFixed(0)} km
            </Text>
          )}
          {user.last_login && (
            <Text style={styles.time}>
              Last seen {formatTimeAgo(user.last_login)}
            </Text>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 180,
        margin: 4,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#000',
      },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 10,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingVertical: 6,
  paddingHorizontal: 8,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headline: {
    color: '#eee',
    fontSize: 12,
    lineHeight: 16,
  },
  location: {
    color: '#ccc',
    fontSize: 11,
    marginTop: 2,
  },
  time: {
    color: '#aaa',
    fontSize: 10,
    marginTop: 1,
  }
});