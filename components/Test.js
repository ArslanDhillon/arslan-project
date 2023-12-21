import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const handleDelete = () => {
    // Implement your delete logic here
    setText(text.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(inputText) => setText(inputText)}
      />
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
