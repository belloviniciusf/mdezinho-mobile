import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Text} from './styles';

function NavButton({children, name, size, ...rest}) {
  return (
    <Container {...rest}>
      <Icon name={name} color="#fff" size={size || 40} />
      <Text>{children}</Text>
    </Container>
  );
}

NavButton.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string,
};

NavButton.defaultProps = {
  name: 'info',
};

export default NavButton;
