import { Text, StyleSheet, ScrollView, useColorScheme } from 'react-native';

import { ApartmentCard } from '@/components/ApartmentCard';
import { APARTMENT_DATA } from '@/constants';

const ExploreScreen = () => {
  const isDark = useColorScheme() === 'dark';

  const screenTitleStyle = [
    styles.screenTitle,
    { color: isDark ? '#fff' : '#000' },
  ];

  const sectionTitleStyle = [
    styles.sectionTitle,
    { color: isDark ? '#fff' : '#000' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={screenTitleStyle}>Apartments</Text>

      <Text style={sectionTitleStyle}>Apartments Near You</Text>
      <ApartmentCard {...APARTMENT_DATA[0]} />
      <ApartmentCard {...APARTMENT_DATA[1]} />
      <ApartmentCard {...APARTMENT_DATA[2]} />

      <Text style={sectionTitleStyle}>Most Popular Apartments</Text>
      <ApartmentCard {...APARTMENT_DATA[3]} />
      <ApartmentCard {...APARTMENT_DATA[4]} />
      <ApartmentCard {...APARTMENT_DATA[0]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: 'bold',
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
