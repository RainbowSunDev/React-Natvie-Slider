import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Item = ({ value, max }) => {
    checkActive = () => {
        if (max >= value)
            return true
        else
            return false
    }
    return (
        <View style={{ position: 'relative', bottom: 3 }}>
            <Text style={[this.checkActive() ? styles.active : styles.inactive]}>{(value % 5 == 0) ? (value * 10 + "%") : ""}</Text>
            <Text style={[this.checkActive() ? styles.line : {}]}> {this.checkActive() ? '|' : ''}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    active: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
        width: 100,
        left: -40,
        bottom: 20,
        color: '#5e5e5e',
        fontSize: 14
    },
    inactive: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#bdc3c7',
        fontSize: 14
    },
    line: {
        fontSize: 15,
        textAlign: 'center',
    }
});