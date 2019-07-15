import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = props => {
  const { children } = props;
  const { containerStyle } = styles;

  return <View style={containerStyle}>{children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative',
  },
};

CardSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default CardSection;
