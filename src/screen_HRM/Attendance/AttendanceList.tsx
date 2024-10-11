import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container/Container'
import { SvgImg } from '../../assets/svg/svg'

const AttendanceList = () => {
    return (
        <Container
            type='hrm'
            hrm={{
                title: 'Attendance',
                btnTitle: 'My Attendance',
                onPressBtn: () => console.log('first'),
                isBack: true,
                onSearch: (v) => console.log('sdsd', v),
                onPressBtnWithSearch: () => console.log('onPressBtnWithSearch'),

            }}
        >

        </Container>
    )
}

export default AttendanceList

const styles = StyleSheet.create({})