import React from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators, selectors } from "./store";
import styles from './styles';


const ForgotPasswordComponent = ({ setEmail, submitForgotPassword, isSubmitting, error, success, email }) => (
  <View style={styles.container}>
    <Text style={[styles.message, error ? styles.error : styles.success ]}>{error || success}</Text>
    <TextInput
      onChangeText={setEmail}
      value={email}
      placeholder="Email"
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      style={styles.input}
    />
    <TouchableOpacity
      disabled={isSubmitting}
      style={[styles.button, isSubmitting ? styles.buttonDisabled : {}]}
      onPress={() => submitForgotPassword({email})}>
      {isSubmitting && <ActivityIndicator/>}
      {isSubmitting || <Text style={styles.buttonText}>Submit</Text>}
    </TouchableOpacity>
  </View>
);

const mapProps = (state) => ({
  email: selectors.email(state),
  isSubmitting: selectors.isSubmitting(state),
  error: selectors.error(state),
  success: selectors.success(state),
});

const mapDispatcher = dispatcher => bindActionCreators({
  submitForgotPassword: actionCreators.submitForgotPassword,
  setEmail: actionCreators.setEmail,
}, dispatcher);

export const ForgotPassword = connect(mapProps, mapDispatcher)(ForgotPasswordComponent);