import { StyleSheet, View } from 'react-native';
import { Bienvenida } from './src/components/Bienvenida.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Bienvenida />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1926a0ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
