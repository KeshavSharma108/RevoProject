import React, { useRef } from 'react';
import { TouchableOpacity, Text, ActivityIndicator, Animated, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { color } from '../../const/color';
import MyIcon from '../MyIcon/MyIcon';
import { SvgProps } from 'react-native-svg';

interface CustomButtonProps {
  title?: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  isLoaderColor?: string;
  icon?: React.FC<SvgProps>;
  btnType?: 'lg' | 'sm' | 'icon'
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  isLoading = false,
  disabled = false,
  containerStyle,
  textStyle,
  isLoaderColor = '#fff',
  btnType = 'lg',
  icon
}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.95] });

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    setTimeout(() => {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }, 200);
  };

  const myStyle = btnType === 'lg' ? lgStyles : btnType === 'sm' ? smStyles : iconStyle;

  const TextOrICon = () => {
    return <>
      {(btnType === 'icon' && icon) ?
        <MyIcon
          IconName={icon}
          TouchableStyle={myStyle?.btnTextLg}
          onPressIcon={onPress}
        />
        :
        <Text style={
          [
            myStyle?.btnTextLg,
            textStyle
          ]
        }>
          {title}
        </Text>
      }
    </>
  }

  return (
    <Animated.View
      style={[
        myStyle?.button,
        containerStyle,
        disabled && disableStyle?.bg,
        { transform: [{ scale }] }]}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        disabled={disabled || isLoading}
        style={[myStyle?.button,
          containerStyle,
        disabled && disableStyle?.bg,
          // { backgroundColor: 'pink' }
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={isLoaderColor} />
        ) : (
          <TextOrICon />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CustomButton;

const disableStyle = StyleSheet.create({
  bg: {
    backgroundColor: '#aaa'
  }
})

const lgStyles = StyleSheet.create({
  //large Btn
  button: {
    backgroundColor: color.secondaryBtn,
    borderRadius: 6,
  },
  btnTextLg: {
    color: '#fff',
    fontSize: 21,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8
  },


});

const smStyles = StyleSheet.create({
  button: {
    backgroundColor: color.secondaryBtn,
    borderRadius: 12,
  },
  btnTextLg: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8
  }
})

const iconStyle = StyleSheet.create({
  button: {
    backgroundColor: color.primaryBtn,
    borderRadius: 6,
    width: 62,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTextLg: {
    // fontSize: 15,
    // color: '#fff',
    // alignSelf: 'center',
    // paddingHorizontal: 15,
    // paddingVertical: 8
  }
});
