import {View, Text, StyleSheet} from 'react-native';

const Box = ({colorName, hexCode}) => {
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, {backgroundColor: hexCode}]}>
      <Text style={textColor}>
        color: {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 5,
    marginHorizontal: 100,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 10,
  },
});

export default Box;
