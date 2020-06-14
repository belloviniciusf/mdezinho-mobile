import React from 'react';
import {Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Text} from './styles';

function IconButton({children, name, size, fontsize, ...rest}) {
  return (
    <Container {...rest}>
      <Icon
        name={name}
        color="#fff"
        size={Dimensions.get('window').height < 600 ? 24 : 30}
      />
      <Text fontsize={Dimensions.get('window').height < 600 ? '13px' : '18px'}>
        {children}
      </Text>
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
