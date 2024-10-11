import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../../const/color'
import { WIDTH } from '../../const/deviceInfo'

const LoadingCompo = () => {
    return (
        <View
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1, minHeight: WIDTH }}
        >
            <ActivityIndicator
                color={color.secondaryBtn}
                size={'large'}
            />
        </View>
    )
}

export default LoadingCompo

const styles = StyleSheet.create({})