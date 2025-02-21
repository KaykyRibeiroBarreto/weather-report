import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Clima Atual',
                    tabBarIcon: ({ color }) => (
                    <MaterialIcons name="home" size={24} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name="forecast"
                options={{
                    title: 'Previsão',
                    tabBarIcon: ({ color }) => (
                    <MaterialIcons name="calendar-today" size={24} color={color}/>
                    
                   )
                }}
            />
           </Tabs> 
 )
} 