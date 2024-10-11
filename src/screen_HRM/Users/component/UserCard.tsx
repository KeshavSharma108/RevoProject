import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardWithShadow from '../../../components/CardWithShadow/CardWithShadow'
import CustomAvatar from '../../../components/CustomAvatar/CustomAvatar'
import CustomText from '../../../components/CustomText/CustomText'
import ColumnItem from '../../../components/AlignText/ColumnItem'
import { TeamMember } from '../../../types/hrm/team'

interface TUserCard {
    item: TeamMember
}
const UserCard = ({
    item
}: TUserCard) => {

    return (
        <CardWithShadow
            style={{ marginBottom: 10 }}
        >
            <View
                style={{ flexDirection: 'row', gap: 8, alignItems: 'flex-start' }}
            >
                <CustomAvatar name='waae' />
                <View style={{ flex: 1, gap: 10 }}>
                    <View
                        style={[styles.fDSb]}
                    >
                        <ColumnItem
                            title='Employee name'
                            value='Employee sdf sdf sdf d'
                            width={'50%'}
                        />
                        <ColumnItem
                            title='Employee name'
                            value='Employee'
                            width={'50%'}
                        />
                    </View>

                    <View
                        style={[styles.fDSb]}
                    >
                        <ColumnItem
                            title='Employee name'
                            value='Employee'
                            width={'50%'}
                        />
                        <ColumnItem
                            title='Employee name'
                            value='Employee'
                            width={'50%'}
                        />
                    </View>
                </View>
            </View>

        </CardWithShadow>
    )
}

export default UserCard

const styles = StyleSheet.create({
    fDSb: { flexDirection: 'row', justifyContent: 'space-between', gap: 5 }
})