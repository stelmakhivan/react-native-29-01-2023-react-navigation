import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

import { ExploreHeaderLeft } from '@/navigation/bottom-tabs/components/ExploreHeaderLeft';
import { TabScreenOptions } from '@/navigation/bottom-tabs/types';

export const tabScreenOptions: TabScreenOptions = ({ route }) => {
  const routeName = route.name;

  return {
    tabBarActiveTintColor: '#1DA1F2',
    tabBarInactiveTintColor: 'gray',
    tabBarIcon: ({ color, size, focused }) => {
      let iconName: ComponentProps<typeof Ionicons>['name'] = 'alert';
      if (routeName === 'Explore') {
        iconName = focused ? 'home' : 'home-outline';
      }

      switch (routeName) {
        case 'Explore': {
          iconName = focused ? 'home' : 'home-outline';
          break;
        }
        case 'Apartments': {
          iconName = focused ? 'albums' : 'albums-outline';
          break;
        }
        case 'Profile': {
          iconName = focused ? 'person-circle' : 'person-circle-outline';
          break;
        }
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};

export const exploreScreenOptions: TabScreenOptions = {
  headerLeft: ExploreHeaderLeft,
  headerTitle: '',
};
