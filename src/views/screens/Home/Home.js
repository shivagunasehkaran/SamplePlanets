import React, {Component} from 'react';
import theme from '../../../themes';

class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Planets list'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
    });

    render() {
        return (
            <View></View>
        );
    }
}

export default Home;
