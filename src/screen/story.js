import React, {useCallback, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {changeSequence} from '../action';

import scripts from './../story/scripts';
import StoryButton from './Button';
import StoryContent from './Content';

export default function Story({navigation}) {
  const dispatch = useDispatch();

  const {stat, talk, tech, think, ghost} = useSelector((state) => state.stats);
  const currentDay = useSelector((state) => state.currentDay);
  const currentSequence = useSelector((state) => state.currentSequence);
  const func = useSelector((state) => state.func);

  const content = scripts[`day${currentDay}`].find((currentScript) => {
    return currentScript.sequence === currentSequence;
  }).content;

  const textArr = content.split(' ');
  const animatedValues = [];
  textArr.forEach((_, i) => animatedValues.push(new Animated.Value(0)));

  const goNextSequence = (nextSequence) => {
    dispatch(changeSequence(nextSequence));
  };

  const animated = useCallback(
    (toValue = 1) => {
      const animations = textArr.map((_, i) => {
        return Animated.timing(animatedValues[i], {
          toValue,
          duration: 1000,
          useNativeDriver: true,
        });
      });

      Animated.stagger(
        500 / 5,
        toValue === 0 ? animations.reverse() : animations,
      ).start(() => {
        // setTimeout(() => animated(toValue === 0 ? 1 : 0), 1000);
        // if (props.onFinish) {
        //   props.onFinish();
        // }
      });
    },
    [animatedValues, textArr],
  );

  useEffect(() => {
    navigation.setOptions({title: `${currentDay}일차`});
    animated();
    console.log(textArr);
    if (func) {
      func();
    }
  }, [navigation, currentDay, animated, textArr, func]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../img/cuteElephant.gif')}
          style={styles.image}
        />
        <Text>
          스탯: {stat} {`${' '}`}
          대화: {talk} {`${' '}`}
          기술: {tech} {`${' '}`}
          생각: {think} {`${' '}`}
          고스트: {ghost} {`${' '}`}
        </Text>
      </View>
      <StoryContent currentContent={content} func={func} />
      {/* <View style={styles.textWrapper}>
        {textArr.map((v, i) => {
          return (
            <Animated.Text
              key={`${v}-${i}`}
              style={[
                styles.animatedText,
                {
                  opacity: animatedValues[i],
                  transform: [
                    {
                      translateY: Animated.multiply(
                        animatedValues[i],
                        new Animated.Value(-1),
                      ),
                    },
                  ],
                },
              ]}>
              {v}
              {`${i < textArr.length ? ' ' : ''}`}
            </Animated.Text>
          );
        })}
      </View> */}

      <StoryButton
        choices={
          scripts[`day${currentDay}`].find(
            (currentScript) => currentScript.sequence === currentSequence,
          ).choices
        }
        goNextSequence={goNextSequence}
      />

      {/* <View style={{...styles.menuContainer}}>
        {scripts[`day${currentDay}`]
          .find((currentScript) => currentScript.sequence === currentSequence)
          .choices.map((choice, i) => {
            return (
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => {
                  if (choice.nextSequence) {
                    dispatch(changeSequence(choice.nextSequence));
                  }
                  choice.calculate();
                }}
                key={`${choice.text}-${i}`}>
                <Text style={styles.buttonText}>{choice.text}</Text>
              </TouchableOpacity>
            );
          })}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginBottom: 50,
  },
  image: {
    width: 300,
    height: 200,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  animatedText: {
    marginTop: 10,
    fontSize: 20,
  },
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
