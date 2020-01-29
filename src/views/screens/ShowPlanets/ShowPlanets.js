import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../../../themes';

class ShowPlanets extends Component {
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
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {('Planets title')}
                    </Text>
                    <Text style={styles.content}>
                        {('My Planets post today is all about xyz.')}
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

export default ShowPlanets;
