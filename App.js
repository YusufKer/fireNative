import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// CONTEXT
import { AppContextProvider } from './context/AppContext.js';

// COMPONENTS
import Navigation from './components/Navigation.js';

// SCREENS
import About from './screens/About.js';
import Contact from './screens/Contact.js';
import Home from './screens/Home.js';
import Profile from './screens/Profile.js';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Navigation/>
        <Navigator>
          <Screen name="Home" component={Home} options={{title:"Home"}}/>
          {/* OTHER COMPONENTS */}
          <Screen name="About" component={About} options={{title:"About"}}/>
          <Screen name="Contact" component={Contact} options={{title:"Contact"}}/>
          <Screen name="Profile" component={Profile} options={{title:"Profile"}}/>
        </Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppContextProvider>
  );
}
