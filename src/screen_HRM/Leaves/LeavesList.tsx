import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container/Container'

const LeavesList = () => {
    return (
        <Container
            type='hrm'
            hrm={{
                title: 'All Leaves',
                btnTitle: 'My Leaves',
                onPressBtn: () => console.log('first')
            }}
        >

        </Container>
    )
}

export default LeavesList

const styles = StyleSheet.create({})