import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const PalettePreview = ({handlePress, colorPalette}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({item}) => (
          <View style={[{backgroundColor: item.hexCode}, styles.box]}></View>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 10,
  },
  list: {
    marginBottom: 20,
    flexDirection: 'row',
  },
});

export default PalettePreview;
