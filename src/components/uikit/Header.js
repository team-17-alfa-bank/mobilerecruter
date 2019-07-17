//Первая часть IMPORT
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Вторая часть BODY
const Header = props => {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    height: 116,
    justifyContent: 'center',
    paddingLeft: 22,
    paddingTop: 70,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'AvenirNext-DemiBold'
  },
});

//Третья часть EXPORT
export default Header
