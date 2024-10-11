import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AttendanceNavigator, LeaveNavigator, TeamNavigator, UserNavigator } from './stack/AllSubBottomStack';
import MyIcon from '../components/MyIcon/MyIcon';
import { activeInactiveSvg, SvgImg } from '../assets/svg/svg';
import { ios } from '../const/deviceInfo';
import DashboardHRM from '../screen_HRM/DashboardHRM/DashboardHRM';
import { attendance, dashboard, leave, team, user } from './routeName';


const Tab = createBottomTabNavigator();


let bottomTabWithLabelIconUI = [
    {
        screenName: dashboard.DashboardHRM,
        component: DashboardHRM,
        focusIcon: <activeInactiveSvg.dashboardHRMActive />,
        unFocusIcon: <activeInactiveSvg.dashboardHRMInActive />,
    },
    {
        screenName:user.UserNavigator,
        component: UserNavigator,
        focusIcon: <activeInactiveSvg.userActive />,
        unFocusIcon: <activeInactiveSvg.userInActive />,
    },
    {
        screenName: team.TeamNavigator,
        component: TeamNavigator,
        focusIcon: <activeInactiveSvg.teamActive />,
        unFocusIcon: <activeInactiveSvg.teamInActive />,
    },
    {
        screenName: attendance.AttendanceNavigator,
        component: AttendanceNavigator,
        focusIcon: <activeInactiveSvg.attendanceActive />,
        unFocusIcon: <activeInactiveSvg.attendanceInActive />,
    },
    {
        screenName: leave.LeaveNavigator,
        component: LeaveNavigator,
        focusIcon: <activeInactiveSvg.leaveActive />,
        unFocusIcon: <activeInactiveSvg.leaveInActive />,
    },
];
export default function BottomTabStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false, // No label since you are using icons
                headerShown: false
            }}
        >
            {bottomTabWithLabelIconUI.map((tab, index) => (
                <Tab.Screen
                    key={index} // unique key for each tab
                    name={tab.screenName}
                    component={tab.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? tab.focusIcon : tab.unFocusIcon
                        ),
                        tabBarStyle: {
                            backgroundColor: '#FEF8F8',
                            height: ios ? 120 : 85,
                            // elevation: 0,
                            // shadowColor: 'transparent',
                        },

                    }}
                />
            ))}
        </Tab.Navigator>
    )
}