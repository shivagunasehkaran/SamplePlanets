import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../../../themes';

class ShowPlanet extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Planets details'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
        headerRight: (
            <Icon style={{paddingRight: 15, color: theme.colors.black}}
                  name="edit"
                  size={20}/>
        ),
    });

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        const planetItems = navigation.getParam('planetItems');

        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {planetItems.name}
                    </Text>
                    <Text style={styles.content}>
                        {planetItems.terrain}
                    </Text>
                    <Text style={styles.content}>
                        {planetItems.population}
                    </Text>
                    <Text style={styles.content}>
                        {planetItems.surface_water}
                    </Text>
                    <Text style={styles.content}>
                        {planetItems.gravity}
                    </Text>
                    <Text style={styles.content}>
                        {planetItems.climate}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 10,
        height: 300,
        marginLeft: 10,
        marginRight: 10,
        borderColor: theme.colors.black,
        borderWidth: 0.5,
        backgroundColor: theme.colors.divider,
    },
    title: {
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15,
        fontWeight: '500',
        color: theme.colors.black,
    },
    content: {
        fontSize: 15,
        paddingLeft: 15,
        paddingTop: 15,
        fontWeight: '300',
        color: theme.colors.black,
    },
});

export default ShowPlanet;
