import { createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';

import { Image } from 'react-native';
import logo from '../assets/instagram.png'

import Feed from './pages/Feed'

const Routers = createAppContainer(
    createStackNavigator({
         Feed
    }, {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerTitle: <Image source={logo} />,
            headerStyle: {
                backgroundColor: '#f5f5f5'
                
            }
        },

    })
);


export default Routers;