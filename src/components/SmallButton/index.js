import React from 'react';

import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';

function SmallButton({children, loading, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

SmallButton.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

SmallButton.defaultProps = {
  loading: false,
};

export default SmallButton;
