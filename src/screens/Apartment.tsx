import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, useColorScheme } from 'react-native';

import { ApartmentCard } from '@/components/ApartmentCard';
import { HomeStackParamList } from '@/navigation/native-stack/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'ApartmentScreen'>;

const ApartmentScreen = ({ route }: Props) => {
  const isDark = useColorScheme() === 'dark';
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
      <ApartmentCard {...route.params.item} />
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

export { ApartmentScreen };
