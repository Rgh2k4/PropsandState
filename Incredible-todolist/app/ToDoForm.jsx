import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import {styles} from './App.js';

<View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <Button title="Add" />
      </View>