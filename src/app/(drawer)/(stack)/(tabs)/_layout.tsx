import { Tabs } from 'expo-router';

import { ExploreHeaderLeft } from '@/components/ExploreHeaderLeft';
import { tabScreenOptions } from '@/navigation/bottom-tabs/options';

const TabsGroup = () => (
  <Tabs screenOptions={tabScreenOptions}>
    <Tabs.Screen
      name="index"
      options={{
        headerLeft: ExploreHeaderLeft,
        headerTitle: '',
        tabBarLabel: 'Explore',
      }}
    />
    <Tabs.Screen
      name="apartments"
      options={{
        headerTitle: 'Apartments',
        tabBarLabel: 'Apartments',
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        headerTitle: 'Profile',
        tabBarLabel: 'Profile',
      }}
    />
  </Tabs>
);

export default TabsGroup;
