import React from 'react';
import {SafeAreaView, View, FlatList, Platform, StatusBar} from 'react-native';
import Box from '../components/Box.component';

const ColorPalette = ({
  route: {
    params: {colors: arr},
  },
}) => {
  const rendering = ({item}) => {
    return <Box colorName={item.colorName} hexCode={item.hexCode} />;
  };
  // const {arr} = props.navigation.route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View>
        <FlatList
          data={arr}
          keyExtractor={(item) => item.colorName}
          renderItem={rendering}
        />
      </View>
    </SafeAreaView>
  );
};

export default ColorPalette;
