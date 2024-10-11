import React from 'react';
import { SvgProps } from 'react-native-svg';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SvgImg } from '../../assets/svg/svg';

interface MyIconProps extends SvgProps {
    IconName: React.FC<SvgProps>; // This will be the SVG component
    size?: number;
    color?: string;
    onPressIcon?: () => void;
    TouchableStyle?: ViewStyle
}

const MyIcon: React.FC<MyIconProps> = ({ TouchableStyle, onPressIcon, IconName, ...props }) => {
    const IconComponent = IconName || SvgImg.noIcon;
    return (
        <TouchableOpacity
            style={TouchableStyle}
            activeOpacity={!!onPressIcon ? 0.5 : 1}
            onPress={!!onPressIcon ? onPressIcon : undefined}
        >
            <IconComponent {...props} />
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});

export default MyIcon;
