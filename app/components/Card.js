import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CardSection from 'components/CardSection';

const Card = props => {
  const { children } = props;
  const { containerStyle } = styles;

  return <View style={containerStyle}>{children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderBottomWidth: 0,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(CardSection),
    PropTypes.objectOf(CardSection),
  ]).isRequired,
};

export default Card;
