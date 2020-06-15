import {Alert, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../services/api';
import Background from '../../../components/Background';
import BackButton from '../../../components/BackButton';
import Navbar from '../../../components/Navbar';
import {Container, OptionsList, Option, Name, IconPerson} from './styles';

export default function Evaluators({navigation}) {
  const [evaluators, setEvaluators] = useState([]);
  const [loading, setLoading] = useState(true);
  const tvShow = navigation.getParam('tvShow');

  function handlePress(item) {
    navigation.navigate('GeneralEvaluate', {tvShow, user: item});
  }

  async function loadEvaluators() {
    try {
      const response = await api.get(`evaluations/${tvShow._id}/evaluators`);

      setEvaluators(response.data);
      setLoading(false);
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Ocorreu um erro ao obter a lista de colaboradores, tente novamente.',
      );
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvaluators();
  }, []);

  return (
    <Background>
      <Container>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          evaluators.length > 0 && (
            <>
              <OptionsList
                data={evaluators}
                keyExtractor={(option) => String(option.userId)}
                renderItem={({item: evaluator, index}) => (
                  <Option
                    onPress={() => {
                      handlePress(evaluator);
                    }}>
                    <IconPerson size={30} color="#000" />
                    <Name>{`Colaborador ${index + 1}`}</Name>
                  </Option>
                )}
              />
            </>
          )
        )}
        <Navbar navigation={navigation} />
      </Container>
    </Background>
  );
}

Evaluators.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Evaluators.navigationOptions = ({navigation}) => ({
  title: 'Colaboradores',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AverageEvaluate', {
          tvShow: navigation.getParam('tvShow'),
        });
      }}>
      <BackButton />
    </TouchableOpacity>
  ),
});
