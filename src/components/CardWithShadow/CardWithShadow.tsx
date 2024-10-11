import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { color } from '../../const/color';

interface ShadowCardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
const CardWithShadow: React.FC<ShadowCardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default CardWithShadow;

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.8,
    padding: 10,
    borderRadius: 6,
    borderColor: color.borderGray,
  },
});
