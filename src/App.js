import { StyleSheet, View } from 'react-native';
import Button from './components/Button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button text="ildhciudhs" color={{bg:"blue"}} tab={[1,2,3]} bool={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
