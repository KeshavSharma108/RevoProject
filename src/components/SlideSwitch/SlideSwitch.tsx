import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, PanResponder} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import {color} from '../../const/color';

const {width} = Dimensions.get('window'); // Get the width of the screen

interface SlideSwitchProps {
  initialValue: boolean; // Add a prop for the initial value
  swipeOnOff: (status: boolean) => void; // Callback for toggle status
}

const SlideSwitch: React.FC<SlideSwitchProps> = ({
  initialValue,
  swipeOnOff,
}) => {
  const [isActive, setIsActive] = useState(initialValue); // Set initial state

  useEffect(() => {
    setIsActive(!initialValue); // Update the switch based on initialValue prop
  }, [initialValue]);

  const toggleSwitch = () => {
    const newStatus = !isActive;
    setIsActive(newStatus);
    swipeOnOff(newStatus); // Call the callback function when toggled
  };

  // Set up PanResponder for swipe gestures
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dx) > 30; // Minimum swipe distance
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 0) {
        setIsActive(true);
        swipeOnOff(true); // Call the callback function on swipe right
      } else {
        setIsActive(false);
        swipeOnOff(false); // Call the callback function on swipe left
      }
    },
  });

  return (
    <View style={styles.container}>
      <View {...panResponder.panHandlers} style={styles.switchWrapper}>
        <SwitchToggle
          buttonStyle={styles.button}
          containerStyle={styles.switchContainer}
          circleStyle={styles.circle}
          backgroundColorOn={color.smokyWhite}
          backgroundColorOff={color.primaryBtn}
          onPress={toggleSwitch}
          switchOn={isActive}
        />
        <Text
          style={[
            styles.label,
            isActive ? styles.activeText : styles.inactiveText,
          ]}>
          {isActive ? 'Swipe Left To Punch-In' : 'Swipe Right To Punch-Out'}
        </Text>
      </View>
    </View>
  );
};

export default SlideSwitch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    width: width * 0.9,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#ddd',
    padding: 5,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 12.5,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    position: 'absolute',
    transform: [{translateX: 5}, {translateY: 7}],
    fontWeight: '800',
    fontFamily: 'Roboto',
  },
  activeText: {
    color: color.black,
  },
  inactiveText: {
    color: color.white,
  },
  switchWrapper: {
    width: width * 0.9,
    alignItems: 'center',
    position: 'relative',
  },
});
