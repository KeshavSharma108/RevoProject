import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { StatusBar, StyleProp, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from '../../const/color';
import HeaderCRM from './HeaderCRM';
import HeaderHRM, { hrmObjType } from './HeaderHRM';
import UserInfoHeader from './UserInfoHeader';


interface TContainer {
    children: ReactNode;
    childStyle?: StyleProp<ViewStyle>;
    ph?: number;
    pv?: number;
    pt?: number;
    pb?: number;
    type?: 'hrm' | 'crm' | 'info';
    hrm?: hrmObjType;
    crm?: {
        title?: string;
        isBack?: boolean;

    }
}

export default function Container({
    children,
    ph = 20,
    pv = 20,
    pt = 20,
    pb = 20,
    type = 'info',
    hrm
}: TContainer) {

    const renderHeader = {
        info: <UserInfoHeader />,
        hrm: <HeaderHRM data={hrm} />,
        crm: <HeaderCRM />
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: color.white,
        }}>
            <StatusBar />
            {renderHeader[type]}
            <View
                style={{
                    backgroundColor: color.white,
                    paddingHorizontal: ph,
                    paddingVertical: pv,
                    paddingTop: pt,
                    paddingBottom: pb
                }}
            >
                {children}
            </View>
        </SafeAreaView>
    )
}

