import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, StyleProp } from 'react-native';

interface CustomAvatarProps {
    name: string;
    mb?: number;
    style?: StyleProp<ViewStyle>
}

// Function to generate a random color
const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const CustomAvatar: React.FC<CustomAvatarProps> = ({ name, mb = 0, style }) => {
    const [bgColor, setBgColor] = useState<string>(getRandomColor());

    const getInitial = (name: string): string => {
        return name.charAt(0).toUpperCase();
    };

    const initials = getInitial(name);

    return (
        <TouchableOpacity
            onPress={() => setBgColor(getRandomColor())}
            style={[styles.avatar, { backgroundColor: bgColor, marginBottom: mb }, style]}>
            <Text style={styles.name}>{initials}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default CustomAvatar;
