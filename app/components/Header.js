import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Header = props => {
  const { headerText } = props;
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
