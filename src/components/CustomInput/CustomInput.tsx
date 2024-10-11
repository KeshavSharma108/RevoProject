import React from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import CustomText from '../CustomText/CustomText';

interface CustomInputProps {
  name: string;
  value: string | number;
  onChangeText: (value: string) => void;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  inputProps?: TextInputProps;
  inputStyle?: StyleProp<TextStyle>;
  marginBottom?: number;
  errors?: Record<string, string | string[]>;
  touched?: Record<string, boolean | boolean[]>;
  onBlur?: (e: any) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  value,
  onChangeText,
  label,
  containerStyle,
  placeholder,
  inputProps,
  inputStyle,
  marginBottom,
  touched,
  errors,
  onBlur,
  ...props
}) => {
  return (
    <View style={[{ marginBottom }, containerStyle]}>
      {label && <CustomText style={styles.inputLabel}>{label}</CustomText>}
      <TextInput
        value={typeof value === 'number' ? value.toString() : value}
        onChangeText={onChangeText}
        style={[styles.input, inputStyle]}
        placeholder={placeholder || label || 'placeholder'}
        placeholderTextColor="rgba(137, 137, 137, 1)"
        onBlur={onBlur}
        {...inputProps}
        autoCapitalize="none"
      />
      {touched?.[name] && errors?.[name] ? (
        <Text style={styles.error}>{errors[name]}</Text>
      ) : null}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputLabel: {
    color: '#000000',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Roboto'
  },
  input: {
    borderColor: '#DCDCDC',
    borderWidth: 1,
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 5,
    color: '#898989',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400'
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});
