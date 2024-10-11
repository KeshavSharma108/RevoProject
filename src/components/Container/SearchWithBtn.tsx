import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { color } from '../../const/color'
import CustomButton from '../CustomBtn/CustomButton'
import { SvgImg } from '../../assets/svg/svg'
import { SvgProps } from 'react-native-svg'


export type TSearchWithBtn = {
    onPressBtnWithSearch?: () => void;
    onSearch?: (v: string) => void;
    btnIcon?: React.FC<SvgProps>;
}
const SearchWithBtn = ({
    onPressBtnWithSearch,
    onSearch,
    btnIcon
}: TSearchWithBtn) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 10,
                paddingHorizontal: 20,
                marginTop: 20
            }}
        >
            <TextInput
                style={{
                    borderWidth: 1,
                    // margin: 20,
                    borderRadius: 20,
                    borderColor: color.borderGray,
                    paddingHorizontal: 13,
                    paddingVertical: 5,
                    height: 35,
                    flex: 1,
                }}
                placeholder='Search...'
                onChangeText={!!onSearch ? (v) => onSearch(v) : undefined}
            />
            {!!onPressBtnWithSearch && !!btnIcon && <CustomButton
                btnType='icon'
                icon={btnIcon}
                onPress={onPressBtnWithSearch}
            />}
        </View>
    )
}

export default SearchWithBtn

const styles = StyleSheet.create({})