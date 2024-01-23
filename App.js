import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {onAuthStateChanged} from 'firebase/auth';
// import {auth} from './firebase';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import MultiSelectScreen from './components/MultiSelect';
import ItemDetails from './components/ItemDetails';
import RecipeDetails from './components/RecipeDetails';
import Account from './components/Account';
import CameraPage from './components/CameraPage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import logo from './assets/chefs_hat.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DashStack = createNativeStackNavigator();

function LogoTitle() {
  return <AntDesignIcon name="home" size={40} color="black" />;
}

function InsightsTitle() {
  return <AntDesignIcon name="barschart" size={40} color="black" />;
}

function CameraTitle() {
  return <AntDesignIcon name="camerao" size={40} color="black" />;
}

function MultiSelectTitle() {
  return <AntDesignIcon name="menuunfold" size={40} color="black" />;
}

function DashStackScreen() {
  return (
    <DashStack.Navigator>
      <DashStack.Screen
        options={{headerTitle: props => <LogoTitle {...props} />}}
        name="Dashboard"
        component={Dashboard}
      />
      <DashStack.Screen
        options={{
          headerShown: true,
          headerTitle: props => <MultiSelectTitle {...props} />,
        }}
        name="MultiSelect"
        component={MultiSelectScreen}
      />
      <DashStack.Screen
        options={{headerShown: true, headerTitle: 'Item Details'}}
        name="ItemDetails"
        component={ItemDetails}
      />
      <DashStack.Screen
        options={{headerShown: true, headerTitle: 'Recipe Details'}}
        name="RecipeDetails"
        component={RecipeDetails}
      />
      <DashStack.Screen
        options={{
          headerShown: true,
          headerTitle: props => <CameraTitle {...props} />,
        }}
        name="CameraPage"
        component={CameraPage}
      />
    </DashStack.Navigator>
  );
}

const accountIcon = () => {
  return <AntDesignIcon name="barschart" size={20} color="black" />;
};
const dashIcon = () => {
  return <AntDesignIcon name="home" size={20} color="black" />;
};

function MyTabsScreen() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={DashStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: () => dashIcon(),
        }}
      />
      <Tab.Screen
        name="Statistics"
        options={{
          headerShown: true,
          headerTitle: props => <InsightsTitle {...props} />,
          tabBarLabel: 'Statistics',
          tabBarIcon: () => accountIcon(),
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Register"
            component={Register}
          />

          <Stack.Screen
            component={MyTabsScreen}
            name="My Tabs"
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
