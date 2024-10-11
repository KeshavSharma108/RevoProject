import { DrawerNavigationProp } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { getTeams } from '../../api/hrm/teamApi';
import { SvgImg } from '../../assets/svg/svg';
import Container from '../../components/Container/Container';
import Nodata from '../../components/Nodata/Nodata';
import { ios } from '../../const/deviceInfo';
import { myConsole } from '../../utils/myConsole';
import UserCard from './component/UserCard';
import { useTeamQuery } from '../Teams/useTeamQuery/useTeamQuery';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import CustomButton from '../../components/CustomBtn/CustomButton';
import { showSuccess } from '../../utils/toastModalFunction';
import { useUserQuery } from './useUserQuery/useUserQuery';

const UserList = () => {
    // const { data: allTeams, ...restQuery } = useTeamQuery({ search: '' });
    const { data, ...restQuery } = useUserQuery({ search: '', status: 'new' })
    myConsole('dataUser', data)
    return (
        <Container
            type='hrm'
            hrm={{
                title: 'All Employees',
                btnTitle: 'Offer Letters',
                onPressBtn: () => {
                    console.log('Add button pressed');
                },
                onSearch: (v) => console.log('first', v),
                onPressBtnWithSearch: () => navigate(user.AddUser),
                btnIcon: SvgImg.userBtn
            }}
        >

            <View
            >
                <InfiniteScroll
                    data={data || []}
                    query={restQuery}
                    renderItems={({ item, index }) => {
                        return < UserCard
                            item={item}
                        />
                    }}
                    gap={10}
                />
            </View>
        </Container>
    )
}

export default UserList

const styles = StyleSheet.create({})