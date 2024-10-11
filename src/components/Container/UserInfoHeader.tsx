import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../CustomText/CustomText'
import { SvgImg } from '../../assets/svg/svg'
import MyIcon from '../MyIcon/MyIcon'

const UserInfoHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.userRow}>
                <View style={styles.row}>
                    <MyIcon
                        IconName={SvgImg.noProfilePic}
                        width={30}
                        height={30} />
                    <CustomText
                        fontSize={24}
                        fontWeight={'400'}
                    >Hi</CustomText>
                </View>
                <View style={styles.row}>
                    <MyIcon
                        IconName={SvgImg.notification}
                        onPressIcon={() => console.log('first3')}
                    />
                    <MyIcon
                        IconName={SvgImg.setting}
                        onPressIcon={() => console.log('first2')}
                    />
                </View>
            </View>
            <View style={styles.userInfo}>
                <CustomText
                    fontSize={24}
                    fontWeight={'500'}
                    numberOfLines={2}
                    style={{
                        textTransform: 'capitalize'
                    }}

                >Vishal Jai kumar
                </CustomText>
                <CustomText
                    fontSize={14}
                    style={{
                        marginStart: 5,
                        textTransform: 'capitalize'
                    }}
                >Super Admin</CustomText>
            </View>
        </View>
    )
}

export default UserInfoHeader

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        maxWidth: '80%',
        marginLeft: 40
    }
})