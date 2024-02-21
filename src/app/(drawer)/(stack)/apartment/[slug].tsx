import {
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLocalSearchParams } from 'expo-router';
import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, useColorScheme } from 'react-native';

import { ApartmentCard } from '@/components/ApartmentCard';
import { APARTMENT_DATA } from '@/constants';

const ApartmentScreen = () => {
  const isDark = useColorScheme() === 'dark';
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase>>();

  const { slug } = useLocalSearchParams<{ slug: string }>();

  const item = APARTMENT_DATA.find((item) => item.name === slug);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item?.name ?? 'Apartment Details',
    });
  }, [navigation, item?.name]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.screenTitle,
          {
            color: isDark ? '#fff' : '#000',
          },
        ]}>
        Apartment Details
      </Text>
      {item && <ApartmentCard {...item} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ApartmentScreen;
