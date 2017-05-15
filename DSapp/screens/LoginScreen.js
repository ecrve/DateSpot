import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import card from '../resources/login-background';

import { login, changeLoginField } from '../actions/authActions';

class LoginScreen extends React.Component {
    componentDidUpdate() {
        if(this.props.token) {
            this.props.navitation.navigate('Feed');
        }
    }
    render() {
        return (
            <Image
            style={[styles.card, styles.contaner]}
            source={card}
            resizeMode='cover'>
            <View style={styles.container} />
            <View style={styles.wrapper}>
                <View style={styles.inputWrap}>
                    <TextInput
                    placeholder='Email'
                    style={styles.input}
                    underlineColorIos='transparent'
                    value={this.props.email}
                    onBlur={(e) => this.props.changeLoginField('email', e.target.value)} />
                </View>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder='Password'
                            secureTextEntry
                            style={styles.input}
                            underlineColorIos='transparent'
                            value={this.props.password}
                            onBlur={(e) => this.props.changeloginField('password', e.target.value)} />
                    </View>
                        <TouchableOpacity activeOpacity={.5} onPress={() => this.props.login(this.props.email, this.props.password)}>
                            <View style={styles.buttonText}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5} onPress={() => this.props.navigation.navigate('Register')}>
                            <View>
                                <Text style={styles.registerText}>Create an Account</Text>
                            </View>
                        </TouchableOpacity>
                </View>
                <View style={styles.container} />
            </Image>               
                            
        )
    }
}