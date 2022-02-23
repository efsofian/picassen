import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home.screen';
import ColorPalette from './screens/ColorPalette.screen';
import ColorPaletteModal from './screens/ColorPaletteModal.screen';
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({route}) => ({title: route.params.paletteName})}
      />
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown: false, presentation: 'modal'}}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
