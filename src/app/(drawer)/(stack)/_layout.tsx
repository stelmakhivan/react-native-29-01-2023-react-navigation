import { Stack } from 'expo-router';

import {
  apartmentScreenOptions,
  homeStackScreenOptions,
} from '@/navigation/native-stack/options';

const HomeStackGroup = () => (
  <Stack screenOptions={homeStackScreenOptions}>
    <Stack.Screen name="(tabs)" />
    <Stack.Screen name="apartment/[slug]" options={apartmentScreenOptions} />
  </Stack>
);

export default HomeStackGroup;
