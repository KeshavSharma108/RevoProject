import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import React from 'react';
import CustomText from '../CustomText/CustomText';

interface ColumnItemProps {
    title?: string;
    value?: string;
    width?: any; // width is number, string or undefined
    style?: StyleProp<ViewStyle>; // Corrected type for style
}

const ColumnItem: React.FC<ColumnItemProps> = ({ title = 'N/A', value = 'N/A', width, style }) => {
    return (
        <View
            style={[
                { width: width || 'auto' },
                style
            ]}
        >
            <CustomText fontWeight="500">
                {title} :
            </CustomText>
            <CustomText fontWeight="300">
                {value}
            </CustomText>
        </View>
    );
};

export default ColumnItem;

const styles = StyleSheet.create({});
