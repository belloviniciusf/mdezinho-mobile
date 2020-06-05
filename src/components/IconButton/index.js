import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Text} from './styles';

function IconButton({children, name, size, fontsize, ...rest}) {
  return (
    <Container {...rest}>
      <Icon name={name} color="#fff" size={size || 40} />
      <Text fontsize={fontsize}>{children}</Text>
    </Container>
  );
}

IconButton.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string,
};

IconButton.defaultProps = {
  name: 'info',
};

export default IconButton;
