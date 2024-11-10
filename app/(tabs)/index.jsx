import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutYourself() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi! My name is Lobova Alina. I'm in the 3102d group.</Text>
      <Link href="/my_programming_languages" style={styles.button}>
        Learn about my programming languages
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});