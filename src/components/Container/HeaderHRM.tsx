import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyIcon from '../MyIcon/MyIcon'
import { SvgImg } from '../../assets/svg/svg'
import CustomText from '../CustomText/CustomText'
import CustomButton from '../CustomBtn/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { ios } from '../../const/deviceInfo'
import SearchWithBtn, { TSearchWithBtn } from './SearchWithBtn'
import { SvgProps } from 'react-native-svg'

export type hrmObjType = {
    isBack?: boolean;
    title: string;
    btnTitle?: string;
    onPressBtn?: () => void;
} & TSearchWithBtn;


interface THeaderHRM {
    data: hrmObjType | undefined
}
const HeaderHRM = ({
    data
}: THeaderHRM) => {
    const { goBack, canGoBack } = useNavigation();
    const { isBack, title, btnTitle, onPressBtn, onPressBtnWithSearch, onSearch, btnIcon } = data || {};
    console.log('btnIcon', btnIcon)
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: ios ? 1 : 10,
                    paddingEnd: 20,
                    paddingStart: isBack ? 0 : 20
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // gap: 10,
                        paddingEnd: 10
                    }}
                >
                    {isBack &&
                        <MyIcon
                            TouchableStyle={{
                                paddingHorizontal: 10,
                            }}
                            IconName={SvgImg.backIcon}
                            style={{ padding: 10 }}
                            onPressIcon={() => {
                                let a = canGoBack();
                                a && goBack();
                            }}
                        />}
                    <CustomText
                        fontWeight={'700'}
                        fontSize={20}
                    >
                        {title ?? 'N/A'}
                    </CustomText>
                </View>
                {!!onPressBtn &&
                    <CustomButton
                        title={btnTitle || 'N/A'}
                        onPress={onPressBtn}
                        btnType='sm'
                        icon={SvgImg.calenderBtn}
                    />}
            </View>
            {!!onSearch && <SearchWithBtn
                onPressBtnWithSearch={onPressBtnWithSearch}
                onSearch={(v) => onSearch(v)}
                btnIcon={btnIcon}
            />}
        </View>
    )
}

export default HeaderHRM

const styles = StyleSheet.create({})