import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {NoteContext} from './context/noteContext';
import RegisterScreen from './screens/auth/RegisterScreen';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/main/HomeScreen';
import ProfileScreen from './screens/main/ProfileScreen';
import SettingsScreen from './screens/main/SettingsScreen';
import HelpScreen from './screens/shared/HelpScreen';
import AboutScreen from './screens/shared/AboutScreen';
import AddNoteScreen from './screens/nests/AddNoteScreen';
import AllNoteScreen from './screens/nests/AllNoteScreen';

import useAuth from './context/useAuth';

const Stack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
const HelpTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
        }}
      />
      <Drawer.Screen
        name="Add"
        component={AddNoteScreen}
        options={{
          title: 'Add Note',
        }}
      />
      <Drawer.Screen
        name="All"
        component={AllNoteScreen}
        options={{
          title: 'All Notes',
        }}
      />
    </Drawer.Navigator>
  );
};

const Main = () => {
  const {notes} = useContext(NoteContext);
  return (
    <MainTab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Drawer') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'list';
          } else if (route.name === 'Profile') {
            iconName = 'ios-person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1486ff',
        tabBarInactiveTintColor: '#1e292e',
        tabBarShowLabel: false,
      })}>
      <MainTab.Screen
        name="Drawer"
        component={DrawerStack}
        options={{
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'My profile'}}
        initialParams={{length: notes.length}}
      />
      <MainTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'My settings',
        }}
      />
    </MainTab.Navigator>
  );
};

const Helping = () => {
  const {isAuth} = useAuth();
  return (
    <HelpTab.Navigator navigationKey={isAuth ? 'true' : 'false'}>
      <HelpTab.Screen
        name="Helping"
        component={HelpScreen}
        options={{title: 'Help'}}
      />
      <HelpTab.Screen name="About" component={AboutScreen} />
    </HelpTab.Navigator>
  );
};

const Navigation = () => {
  const {isAuth} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="SignIn"
              component={LoginScreen}
              options={{title: 'Login Form', headerBackTitleVisible: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={RegisterScreen}
              options={{
                title: 'Register Form',
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Group>
        )}
        <Stack.Screen
          name="Help"
          options={{title: 'Help'}}
          component={Helping}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
