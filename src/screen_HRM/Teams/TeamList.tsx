import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container/Container'
import CustomText from '../../components/CustomText/CustomText'
import { useNavigation } from '@react-navigation/native'

const TeamList = () => {
    const navigation = useNavigation();
    return (
        <Container
            type='hrm'
            hrm={{
                title: 'All Teams',
                btnTitle: 'Add Team',
                onPressBtn: () => {
                    //console.log('Add button pressed');
                    navigation.navigate('AddTeam');

                }
            }}
            ph={0}
        >
            <View>
                {/* <CustomText>sdfdfs</CustomText> */}
            </View>
        </Container>
    )
}

export default TeamList

const styles = StyleSheet.create({})