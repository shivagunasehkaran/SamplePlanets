import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';

class PlanetListItem extends Component {
    static propTypes = {
        onPress: PropTypes.func,
    };

    render() {
        const {itemTitle, onPressButton} = this.props;
        return (
            <TouchableOpacity onPress={onPressButton}>
                <View style={styles.item}>
                    <Text style={styles.title}>{itemTitle}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(PlanetListItem);

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginVertical: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
    },
});
