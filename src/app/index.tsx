import { useRouter } from 'expo-router'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    
          <TouchableOpacity
            onPress={() => router.push('search')}
            style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5, marginTop: 10 }}
            >
            <Text>Pesquisar cidade</Text>
          </TouchableOpacity>
        
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
