import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { popUpConfToast } from '../../utils/toastModalFunction'
import CustomText from '../CustomText/CustomText'
import { color } from '../../const/color'

const PleaseWait = () => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 25,
        }}>
            <ActivityIndicator
                color={'#740707'}
                size={'large'}
            />
            <CustomText
                fontSize={18}
                fontWeight='700'
                color={'#740707'}
            >Please Wait...</CustomText>
            <TouchableOpacity
                onPress={() => popUpConfToast.popUpClose()}
                style={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#740707'
                }}
            >
                <Text>.</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PleaseWait

const styles = StyleSheet.create({})