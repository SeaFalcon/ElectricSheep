import React, {useCallback, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
// import {useSelector} from 'react-redux';

export default function Content({currentContent, func}) {
  const textArr = currentContent.split(' ');
  const animatedValues = textArr.map((_) => new Animated.Value(0));

  const animated = useCallback(
    (toValue = 1) => {
      const animations = textArr.map((_, i) => {
        return Animated.timing(animatedValues[i], {
          toValue,
          duration: 500,
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
    animated();
  }, [animated]);

  return (
    <View style={styles.textWrapper}>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
});
