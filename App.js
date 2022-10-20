import { Text } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrustructure/theme';
import { SafeArea } from './src/components/utility/safe-area.component';

const BottomTab = createBottomTabNavigator();

const MapScreen = () => (
  <SafeArea>
    <Text>MapScreen</Text>
  </SafeArea>
);
const SettingScreen = () => (
  <SafeArea>
    <Text>SettingScreen</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <BottomTab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = focused ? 'restaurant' : 'restaurant-outline';
                } else if (route.name === 'Map') {
                  iconName = focused ? 'map' : 'map-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#72BAFC',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <BottomTab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
            />
            <BottomTab.Screen name="Map" component={MapScreen} />
            <BottomTab.Screen name="Settings" component={SettingScreen} />
          </BottomTab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
