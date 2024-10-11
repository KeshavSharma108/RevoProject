import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import MyIcon from '../components/MyIcon/MyIcon';
import { activeInactiveSvg } from '../assets/svg/svg';
import DashboardHRM from '../screen_HRM/DashboardHRM/DashboardHRM';
import { AttendanceNavigator, LeaveNavigator, TeamNavigator, UserNavigator } from './stack/AllSubBottomStack';

// Define the structure for the tab configuration
interface TabConfig {
    screenName: string;
    component: React.ComponentType<any>; // Allow any props for the component
    focusIcon: JSX.Element;
    unFocusIcon: JSX.Element;
}

// Define the array with the tab configuration
const bottomTabWithLabelIconUI: TabConfig[] = [
    {
        screenName: 'DashboardHRM',
        component: DashboardHRM,
        focusIcon: <MyIcon IconName={activeInactiveSvg.dashboardHRMActive} />,
        unFocusIcon: <MyIcon IconName={activeInactiveSvg.dashboardHRMInActive} />,
    },
    {
        screenName: 'UserNavigator',
        component: UserNavigator,
        focusIcon: <MyIcon IconName={activeInactiveSvg.userActive} />,
        unFocusIcon: <MyIcon IconName={activeInactiveSvg.userInActive} />,
    },
    {
        screenName: 'TeamNavigator',
        component: TeamNavigator,
        focusIcon: <MyIcon IconName={activeInactiveSvg.teamActive} />,
        unFocusIcon: <MyIcon IconName={activeInactiveSvg.teamInActive} />,
    },
    {
        screenName: 'AttendanceNavigator',
        component: AttendanceNavigator,
        focusIcon: <MyIcon IconName={activeInactiveSvg.attendanceActive} />,
        unFocusIcon: <MyIcon IconName={activeInactiveSvg.attendanceInActive} />,
    },
    {
        screenName: 'LeaveNavigator',
        component: LeaveNavigator,
        focusIcon: <MyIcon IconName={activeInactiveSvg.leaveActive} />,
        unFocusIcon: <MyIcon IconName={activeInactiveSvg.leaveInActive} />,
    },
];

const SwipeablePagerViewTabs: React.FC = () => {
    const pagerRef = useRef<PagerView>(null);
    const [selectedPage, setSelectedPage] = useState<number>(0);

    const handlePageChange = (e: any) => {
        setSelectedPage(e.nativeEvent.position);
    };

    const handleTabPress = (pageIndex: number) => {
        if (pagerRef.current) {
            pagerRef.current.setPage(pageIndex);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <PagerView
                style={{ flex: 1 }}
                initialPage={0}
                onPageSelected={handlePageChange}
                ref={pagerRef}
            >
                {bottomTabWithLabelIconUI.map((tab, index) => (
                    <View key={index}>
                        <tab.component />
                    </View>
                ))}
            </PagerView>

            {/* Custom Tab Bar */}
            <View style={styles.tabBar}>
                {bottomTabWithLabelIconUI.map((tab, index) => (
                    <TouchableOpacity key={index} style={styles.tabItem} onPress={() => handleTabPress(index)}>
                        {selectedPage === index ? tab.focusIcon : tab.unFocusIcon}
                        <Text style={selectedPage === index ? styles.activeLabel : styles.inactiveLabel}>
                            {tab.screenName}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeLabel: {
        color: '#2f95dc',
        fontSize: 12,
    },
    inactiveLabel: {
        color: 'gray',
        fontSize: 12,
    },
});

export default SwipeablePagerViewTabs;
