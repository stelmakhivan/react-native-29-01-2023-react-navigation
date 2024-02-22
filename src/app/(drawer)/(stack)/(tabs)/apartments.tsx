import { useScrollToTop } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';

import { ApartmentCard } from '@/components';
import { Apartment, APARTMENT_DATA } from '@/constants';
const renderItem: ListRenderItem<Apartment> = ({ item }) => (
  <ApartmentCard {...item} />
);

const ApartmentsScreen = () => {
  const isDark = useColorScheme() === 'dark';

  const router = useRouter();

  const ref = useRef<FlatList>(null);

  useScrollToTop(ref);

  const screenTitleStyle = [
    styles.screenTitle,
    { color: isDark ? '#fff' : '#000' },
  ];

  const handlePress = () => {
    console.log('pressed');
    router.push('/animated-header');
  };

  return (
    <FlatList
      ref={ref}
      ListHeaderComponent={
        <TouchableOpacity onPress={handlePress}>
          <Text style={screenTitleStyle}>Apartments Screen</Text>
        </TouchableOpacity>
      }
      data={APARTMENT_DATA}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ApartmentsScreen;
