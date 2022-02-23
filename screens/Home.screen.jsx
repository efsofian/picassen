import React, {useEffect} from 'react';
import {Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import PalettePreview from '../components/PalettePreview.component';

const RAINBOW = [
  {colorName: 'Red', hexCode: '#FF0000'},
  {colorName: 'Orange', hexCode: '#FF7F00'},
];

const FRONTEND_MASTERS = [
  {colorName: 'Red', hexCode: '#c02d28'},
  {colorName: 'Black', hexCode: '#3e3e3e'},
];

const COLOR_PALETTES_INIT = [
  {paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS},
  {paletteName: 'Rainbow', colors: RAINBOW},
];

const Home = ({navigation, route}) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [COLOR_PALETTES, setCOLOR_PALETTES] = React.useState(
    () => COLOR_PALETTES_INIT,
  );
  const [isRefresh, setRefresh] = React.useState(false);
  const fetchAsync = React.useCallback(async () => {
    try {
      const response = await fetch(
        'https://color-palette-api.kadikraman.vercel.app/palettes',
      );
      if (response.ok) {
        const paletteFetched = await response.json();
        setCOLOR_PALETTES(paletteFetched);
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);
  const handleRefresh = React.useCallback(async () => {
    setRefresh(true);
    await fetchAsync();
    setRefresh(false);
  }, []);

  useEffect(() => {
    fetchAsync();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setCOLOR_PALETTES((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);
  return (
    <FlatList
      style={styles.list}
      data={COLOR_PALETTES}
      refreshing={isRefresh}
      onRefresh={handleRefresh}
      keyExtractor={(item) => item.paletteName}
      renderItem={({item}) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate('ColorPaletteModal')}
        >
          <Text style={styles.buttonText}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
  },
});

export default Home;
