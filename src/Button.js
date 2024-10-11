import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default Button;
