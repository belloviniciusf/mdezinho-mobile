import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';
import Background from '../../components/Background';
import BackButton from '../../components/BackButton';
import Navbar from '../../components/Navbar';
import TVShow from '../../components/TVShow';
import {Container, List} from './styles';
import api from '../../services/api';

function Dashboard({navigation, isFocused}) {
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
    if (tvShow.evaluated) {
      navigation.navigate('GeneralEvaluate', {tvShow});
    } else {
      navigation.navigate('Video', {tvShow});
    }
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

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

Dashboard.navigationOptions = ({navigation}) => ({
  title: 'Avaliação de legenda',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MainMenu');
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});

export default withNavigationFocus(Dashboard);
