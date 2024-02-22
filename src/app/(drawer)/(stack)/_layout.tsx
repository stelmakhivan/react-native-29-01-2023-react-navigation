import { Stack } from 'expo-router';

import {
  apartmentScreenOptions,
  homeStackScreenOptions,
} from '@/navigation/native-stack/options';

const HomeStackGroup = () => (
  <Stack screenOptions={homeStackScreenOptions}>
    <Stack.Screen name="(tabs)" />
    <Stack.Screen
      name="apartment/[slug]"
      options={apartmentScreenOptions}
    />
    <Stack.Screen
      name="animated-header/index"
      options={{
        headerShown: true,
        headerLargeTitle: true,
        headerLargeTitleShadowVisible: true,
        title: 'Animated Header',
        headerTransparent: true,
        headerBlurEffect: 'systemUltraThinMaterial',
      }}
    />
  </Stack>
);

export default HomeStackGroup;
