import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../CustomText/CustomText';
import { color } from '../../const/color';

interface TMainTitle {
    Title: string;
}

const MainTitle = ({ Title }: TMainTitle) => {
    return (
        <View
            style={{
                borderBottomColor: '#AD6F6C',
                borderBottomWidth: 0.7,
                marginTop: 20,
                paddingBottom: 5,
                marginBottom:20
            }}>
            <CustomText color='black' fontWeight="900" fontSize={19} style={{ fontFamily: 'Roboto' }}>
                {Title}
            </CustomText>
        </View>
    );
};
export default MainTitle;

const styles = StyleSheet.create({});
