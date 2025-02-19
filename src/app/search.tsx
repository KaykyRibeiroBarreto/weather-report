import { Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Search() {
    const router = useRouter();
  return (
    <View>
      <Text>Search</Text>
      
       <TouchableOpacity
        onPress={() => router.push('index')}
        style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5, marginTop: 10 }}
        >
        <Text>Voltar</Text>
       </TouchableOpacity>
      
    </View>
  );
}
