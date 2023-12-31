import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen from './TransactionScreen';
import ExpenseScreen from './ExpenseScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function HomePage() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name="Transactions" component={TransactionScreen} />
        <Tab.Screen name="Expenses" component={ExpenseScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomePage;
