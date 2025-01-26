import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { Provider } from 'react-redux'
import store from "./Store";
import Stacknavigator from './Stacknavigator'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Stacknavigator/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
  },
});
