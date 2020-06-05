import React from 'react';

import {TouchableWithoutFeedback} from 'react-native';

import {
  Container,
  Box,
  LeftBox,
  IconEvaluated,
  Info,
  Name,
  Time,
} from './styles';

function TVShow({data, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container>
        <Box>
          <Info>
            <Box>
              <Name>{data.name}</Name>
              {data.evaluated && <IconEvaluated />}
            </Box>
            <Time>{data.broadcaster}</Time>
          </Info>
        </Box>
        <Box>
          <LeftBox>
            <Name>{data.date}</Name>
            <Box>
              <Time>{data.hour}</Time>
            </Box>
          </LeftBox>
        </Box>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default TVShow;
