import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import Background from '../../components/Background';
import Navbar from '../../components/Navbar';
import BackButton from '../../components/BackButton';
import TVShow from '../../components/TVShow';
import {Container, List} from './styles';
import api from '../../services/api';

function Programs({navigation, isFocused}) {
  const [tvShows, setTVShows] = useState([]);

  async function loadTVShows() {
    const response = await api.get('tvshows');

    setTVShows(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadTVShows();
    }
  }, [isFocused]);

  function handlePress(tvShow) {
    navigation.navigate('AverageEvaluate', {tvShow});
  }

  return (
    <Background>
      <Container>
        <List
          data={tvShows}
          keyExtractor={(item) => String(item._id)}
          renderItem={({item}) => (
            <TVShow onPress={() => handlePress(item)} data={item} />
          )}
        />
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Programs.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

Programs.navigationOptions = ({navigation}) => ({
  title: 'Programas',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MainMenu');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});

export default withNavigationFocus(Programs);
