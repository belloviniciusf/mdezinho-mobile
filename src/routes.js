import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import AcessibleWelcome from './pages/AcessibleWelcome';
import SelectLanguage from './pages/SelectLanguage';
import Dashboard from './pages/Dashboard';
import Video from './pages/TVShow/Video';
import Attention from './pages/TVShow/Attention';
import Evaluate from './pages/TVShow/Evaluate';
import Comments from './pages/TVShow/Comments';
import ConfirmComment from './pages/TVShow/ConfirmComment';
import Programs from './pages/Programs';
import MainMenu from './pages/MainMenu';
import GeneralEvaluate from './pages/EvaluateResult/GeneralEvaluate';
import Evaluators from './pages/EvaluateResult/Evaluators';
import TechnicalEvaluate from './pages/EvaluateResult/TechnicalEvaluate';
import AverageEvaluate from './pages/EvaluateResult/AverageEvaluate';
import Informations from './pages/Info/Informations';
import LegalInformations from './pages/Info/LegalInformations';
import Authors from './pages/Info/Authors';
import Copyright from './pages/Info/Copyright';
import Product from './pages/Info/Product';
import Operation from './pages/Info/Operation';
import Manual from './pages/Info/Manual';
import Tutorial from './pages/Info/Tutorial';
import Doubts from './pages/Info/Doubts';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import ManualInformation from './pages/Info/ManualInformation';
import Comment from './pages/Info/Comment';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Welcome,
          AcessibleWelcome,
          SelectLanguage,
          SignIn,
          SignUp,
        }),
        App: createStackNavigator(
          {
            MainMenu,
            Dashboard,
            Video,
            Attention,
            Evaluate,
            Comments,
            ConfirmComment,
            GeneralEvaluate,
            TechnicalEvaluate,
            Programs,
            AverageEvaluate,
            Evaluators,
            Informations,
            LegalInformations,
            Authors,
            Copyright,
            Product,
            Operation,
            Manual,
            Tutorial,
            Doubts,
            ManualInformation,
            Comment,
            Profile,
          },
          {
            resetOnBlur: true,
            defaultNavigationOptions: {
              headerTintColor: '#3b9eff',
            },
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.4)',
              style: {
                backgroundColor: '#3b9eff',
              },
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
