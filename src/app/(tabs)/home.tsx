import { useRouter, useLocalSearchParams  } from 'expo-router';
import { useState, useEffect } from 'react';
import { fetchWeather } from '../../services/weather';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WeatherData } from '../../types/weather';
import LoadingSpinner from '../components/LoadingSpinner';



export default function HomeScreen() {
  const router = useRouter();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useLocalSearchParams();

 const loadInitialWeather = async () => {
    try {
      const response = await fetchWeather('Rio de Janeiro');
      setWeather(response);
      setError(null)
    } catch (error) {
      setError('Erro ao buscar clima');
    } finally {
      setLoading(false);
    }
  };

  const handleCitySearch = async (city: string) => {
    try {
      setLoading(true);
      const data = await fetchWeather(city);
      setWeather(data);
      setError(null);
    } catch (err) {
      setError('Cidade não encontrada');
    } finally {
      setLoading(false);
    }
  };

  // Atualiza o clima quando o parâmetro da cidade muda
  useEffect(() => {
    if (params.city) {
      handleCitySearch(params.city as string);
    } else {
      loadInitialWeather();
    }
  }, [params.city]);

  // Exibe um spinner enquanto os dados são carregados
  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  // Exibe uma mensagem de erro se houver falha
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={loadInitialWeather}
        >
          <Text style={styles.buttonText}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

    
      return (
        <View style={styles.container}>
          <Text>Bem-vindo!</Text>
        
              <TouchableOpacity
                onPress={() => router.push('/(modals)/search')}
                style={{ 
                  padding: 10, 
                  backgroundColor: '#8a2be2', 
                  borderRadius: 5, 
                  marginTop: 10 
                }}
                >
                <Text>Pesquisar cidade</Text>
              </TouchableOpacity>

              {weather && (
                <View style={{ marginTop: 20 }}>
                  <Text>Temperatura: {weather.main.temp}°C</Text>
                  <Text>Condição: {weather.weather[0].description}</Text>
            
                  </View>
              )}
        </View>
      );
    }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 16,
      },
      weatherContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      cityText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#212529',
      },
      tempText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#8a2be2',
      },
      descriptionText: {
        fontSize: 18,
        color: '#495057',
        textTransform: 'capitalize',
      },
      button: {
        backgroundColor: '#8a2be2',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      errorText: {
        fontSize: 18,
        color: '#dc3545',
        marginBottom: 20,
      },
    });