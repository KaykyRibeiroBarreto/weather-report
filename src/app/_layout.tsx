import { Stack } from 'expo-router'

/* Cada arquivo na pasta app representa uma tela.
Por exemplo, o arquivo app/index.tsx se torna a tela inicial.*/


export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen 
        name="index" //Tela inicial (Home)
        options={{ 
            title: 'Clima Atual',
            headerShown: false
         }}
        
         />

        <Stack.Screen 
         name="search" //Tela de busca
         options={{
            presentation: 'modal',
            title: 'Buscar Cidade'
         }}
        
        />
    </Stack>
  )
}