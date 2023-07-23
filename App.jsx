import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './src/navigation/auth-stack';
import { PaperProvider } from 'react-native-paper';
import { UserContextProvider } from './context/UserContext'; 
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  return (
     <PaperProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <AuthContextProvider>
            <UserContextProvider>
              <AuthStack />
            </UserContextProvider>
          </AuthContextProvider>
        </NavigationContainer>
      </View>
    </PaperProvider> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});



