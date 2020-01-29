/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from './themes';
import Home from './views/screens/Home';
import ShowPlanets from './views/screens/ShowPlanets';
import AddPlanets from './views/screens/AddPlanets';
import EditPlanets from './views/screens/EditPlanets';

const HomeScreen = createStackNavigator({
    Home: {
        screen: Home,
    },
});

const ShowPlanetScreen = createStackNavigator({
    ShowPlanet: {
        screen: ShowPlanets,
    },
});

const AddPlanetScreen = createStackNavigator({
    AddPlanet: {
        screen: AddPlanets,
    },
});

const EditPlanetScreen = createStackNavigator({
    EditPlanet: {
        screen: EditPlanets,
    },
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('Home')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="home" size={horizontal ? 20 : 25} color={tintColor}/>,
            },
        },
        ShowPlanet: {
            screen: ShowPlanetScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('Show Planets')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="clipboard" size={horizontal ? 20 : 25} color={tintColor}/>,
            },
        },
        AddPlanet: {
            screen: AddPlanetScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('Add Planets')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="plus" size={horizontal ? 20 : 25} color={tintColor}/>,
            },
        },
        EditPlanet: {
            screen: EditPlanetScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('Edit Planets')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="edit" size={horizontal ? 20 : 25} color={tintColor}/>,
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: theme.colors.buttonColor,
            inactiveTintColor: theme.colors.secondaryText,
            style: {
                backgroundColor: theme.colors.divider,
            },
        },
    },
);

const AppContainer = createAppContainer(TabNavigator);

class App extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}

export default App;
