import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RegisterScreen from './screens/auth/RegisterScreen';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/main/HomeScreen';
import ProfileScreen from './screens/main/ProfileScreen';
import SettingsScreen from './screens/main/SettingsScreen';
import HelpScreen from './screens/shared/HelpScreen';
import AboutScreen from './screens/shared/AboutScreen';
import PhotoScreen from './screens/nests/PhotoScreen';
import MusicScreen from './screens/nests/MusicScreen';
import VideoScreen from './screens/nests/VideoScreen';

import useAuth from './context/useAuth';

const Stack = createNativeStackNavigator();
const NestTab = createBottomTabNavigator();
const HelpTab = createMaterialTopTabNavigator();
const MainStack = createNativeStackNavigator();

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

const Main = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MyProfile"
        component={Nest}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Photos"
        component={PhotoScreen}
        options={{title: 'My photos'}}
      />
      <MainStack.Screen
        name="Video"
        component={VideoScreen}
        options={{title: 'My videos'}}
      />
      <MainStack.Screen
        name="Music"
        component={MusicScreen}
        options={{title: 'My music'}}
      />
    </MainStack.Navigator>
  );
};

const Nest = () => {
  return (
    <NestTab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
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
      <NestTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
        }}
      />
      <NestTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'My profile'}}
      />
      <NestTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'My settings',
        }}
      />
    </NestTab.Navigator>
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
