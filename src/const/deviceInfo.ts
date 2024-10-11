import { Dimensions, Platform } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const ios = Platform.OS === 'ios';