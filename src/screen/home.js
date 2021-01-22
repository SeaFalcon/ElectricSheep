import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
  const [state, setState] = useState(false);

  function fadeIn() {
    setState(true);
  }

  return (
    <View style={styles.container}>
      <View style={state ? styles.none : styles.titleContainer}>
        <Text style={styles.title}>끼리끼리 코끼리!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../img/runElephant.gif')} // first way (local)
          style={styles.image}
        />
      </View>
      <View style={state ? styles.none : styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate('Story');
            // fadeIn();
          }}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.buttonText}>Achievement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.buttonText}>Shop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 350,
    height: 250,
  },
  menuContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  menuButton: {
    width: '40%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'rgb(52, 152, 219)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 20,
  },
  none: {
    display: 'none',
  },
});
