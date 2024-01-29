import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';

import {
  exploreScreenOptions,
  tabScreenOptions,
} from '@/navigation/bottom-tabs/options';
import { TabParamList, TabsGroupProps } from '@/navigation/bottom-tabs/types';
import { ApartmentsScreen } from '@/screens/Apartments';
import { ExploreScreen } from '@/screens/Explore';
import ProfileScreen from '@/screens/Profile';

export const Tab = createBottomTabNavigator<TabParamList>();

export const TabsGroup: FC<TabsGroupProps> = () => (
  <Tab.Navigator screenOptions={tabScreenOptions}>
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={exploreScreenOptions}
    />
    <Tab.Screen name="Apartments" component={ApartmentsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);
