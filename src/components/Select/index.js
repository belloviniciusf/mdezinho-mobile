import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';

import {Container} from './styles';

function Select({style, icon, ...rest}, ref) {
  return (
    <Container>
      {icon && <Icon name={icon} size={20} color="rgba(0,0,0,0.6)" />}
      <RNPickerSelect style={style} {...rest} ref={ref} />
    </Container>
  );
}

Select.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Select.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Select);
