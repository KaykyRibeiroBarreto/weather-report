import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';


export default function Search() {
    const router = useRouter();
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Digite o nome da cidade"
        style={{ padding: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}
      />
      
       <TouchableOpacity
        onPress={() => router.back()}
        style={{ padding: 20, backgroundColor: 'blue', borderRadius: 5, marginTop: 30 }}
        >
        <Text style={{ textAlign: 'center' }} >Voltar</Text>
       </TouchableOpacity>
      
    </View>
  );
}
