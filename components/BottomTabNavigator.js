import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import LinksScreen from './LinksScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Decks';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Decks"
        component={HomeScreen}
        options={{
          title: 'Decks',
          tabBarIcon: ({ focused }) => getTabBarIcon("md-code-working", focused),
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={LinksScreen}
        options={{
          title: 'Add Cards',
          tabBarIcon: ({ focused }) => getTabBarIcon("md-book", focused),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getTabBarIcon(name, focused) {
  return (
    <Ionicons
      name={name}
      size={30}
    />
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Decks':
      return 'Deck';
    case 'Add':
      return 'Add Card';
  }
}
