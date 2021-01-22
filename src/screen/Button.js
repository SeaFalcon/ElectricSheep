import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function StoryButton({choices, goNextSequence}) {
  return (
    <View style={{...styles.menuContainer}}>
      {choices.map((choice, i) => {
        return (
          <TouchableOpacity
            style={{...styles.menuButton, ...choice.btnStyle}}
            onPress={() => {
              if (choice.nextSequence) {
                goNextSequence(choice.nextSequence);
              }

              choice.calculate();
            }}
            key={`${choice.text}-${i}`}>
            <Text style={styles.buttonText}>{choice.text}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
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
});
