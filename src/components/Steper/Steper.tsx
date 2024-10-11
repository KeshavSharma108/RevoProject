import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {color} from '../../const/color';
import MyIcon from '../MyIcon/MyIcon';
import {buttonIconSvg} from '../../assets/svg/svg';

interface SteperProps {
  page: number; // Current page indicator
}

const screenWidth = Dimensions.get('window').width;

const Steper: React.FC<SteperProps> = ({page}) => {
  // Function to return the appropriate color for circles
  const getCircleColor = (step: number) => {
    if (page === 0) {
      return color.lightGrey; // No color for page 0
    }
    return page > step ? color.secondaryBtn : color.lightGrey; // Fill circle if step is completed
  };

  // Function to return the appropriate style for the line
  const getLineStyle = (step: number) => {
    if (page === 0) {
      return {backgroundColor: color.lightGrey, flex: 1}; // No line for page 0
    }

    if (page > step) {
      return {backgroundColor: color.secondaryBtn, flex: 1}; // Fully filled if step is complete
    }
    return {backgroundColor: color.lightGrey, flex: 1}; // Default grey for future steps
  };

  // Function to return the appropriate style for the small line
  const getSmallLineStyle = (step: number) => {
    if (page === step + 2) {
      return {backgroundColor: color.secondaryBtn, width: 10, height: 5}; // Fill small line for corresponding step
    }
    //  Retain the filled color for first two small lines on page 3 or 4
    if (page >= 3 && step < 2) {
      return {backgroundColor: color.secondaryBtn, width: 10, height: 5}; // Fill first and second small lines
    }
    if (page > 4) {
      return {backgroundColor: color.primaryBtn, width: 10, height: 5};
    }
    return {backgroundColor: color.lightGrey, width: 10, height: 5}; // Default grey for future steps
  };

  return (
    <View style={styles.mainContainer}>
      {[0, 1, 2, 3].map((step, index) => (
        <React.Fragment key={step}>
          {/* Circle */}
          <View
            style={[
              styles.circleStyle,
              {backgroundColor: getCircleColor(step)},
            ]}>
            {/* SVG Image in the center of the circle */}

            <MyIcon
              IconName={buttonIconSvg.checkedIcon}
              color={color.white}
              width={25}
              height={30}
            />
          </View>

          {/* Line, only render if it's not the last circle */}
          {index < 3 && <View style={[styles.lineStyle, getLineStyle(step)]} />}

          {/* Small Line, only render for steps 0, 1, and 2 (not the last circle) */}
          {index < 3 && (
            <View style={[styles.smallLineStyle, getSmallLineStyle(step)]} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

export default Steper;

const styles = StyleSheet.create({
  circleStyle: {
    width: 50, // Circle size
    height: 50,
    borderRadius: 25, // To create a circle
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineStyle: {
    height: 5, // Line thickness
    width: '100%', // Ensure the line spans the full width
  },
  smallLineStyle: {
    height: 5, // Small line thickness
    // Ensure proper width and color set in getSmallLineStyle
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 80, // Responsive width
    justifyContent: 'space-between', // Spacing between elements
    marginHorizontal: 20, // Center the component within the screen
  },
});
