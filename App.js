import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { MyCustomFont } from './src/assets/fonts/Montserrat-Regular.ttf';
import Sale from './src/components/Sale'
export default function App() {
  const [fontsLoaded] = useFonts({
    MyCustomFont: MyCustomFont,
  });

  return (
      <View style={styles.container}>
        <Sale/>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});