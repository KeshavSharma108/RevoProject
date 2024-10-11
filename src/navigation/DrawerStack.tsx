import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabStack from './BottomTabStack';
import { BookingNavigator, LeadsNavigator, MeetingsNavigator } from './stack/AllSubDrawerStack';
import { booking, bottomTab, lead, meeting } from './routeName';

const Drawer = createDrawerNavigator();
export default function DrawerStack() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Drawer.Screen name={bottomTab.BottomTabStack} component={BottomTabStack} />
            <Drawer.Screen name={meeting.MeetingsNavigator} component={MeetingsNavigator} />
            <Drawer.Screen name={lead.LeadsNavigator} component={LeadsNavigator} />
            <Drawer.Screen name={booking.BookingNavigator} component={BookingNavigator} />
        </Drawer.Navigator>
    )
}