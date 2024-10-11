import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyIcon from '../MyIcon/MyIcon'
import { SvgImg } from '../../assets/svg/svg'
import { HEIGHT } from '../../const/deviceInfo'

const Nodata = () => {
    return (
        <View
            style={{ alignItems: 'center', justifyContent: 'center', height: HEIGHT / 1.5 }}
        >
            <MyIcon IconName={SvgImg.noData} />
        </View>
    )
}

export default Nodata

const styles = StyleSheet.create({})