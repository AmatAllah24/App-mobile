import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';
import Rahal1 from './Rahal1';
import RepasRahal from './RepasRahal';
import EntreeRahal from './EntreeRahal';
import DinerRahal from './DinerRahal';
import DessertRahal from './DessertRahal';
import Assiettes from './Assiettes';
import Table from './Table';
import Tapi from './Tapi';
import Himmi1 from './Himmi1';
import RepasHimmi from './RepasHimmi';
import EntreH from './EntreH';
import DinerH from './DinerH';
import DessertH from './DessertH';
import AssiettesH from './AssiettesH';
import TableH from './TableH';
import TapiH from './TapiH';
import Reve from './Reve';
import TapiR from './TapiR';
import RepasR from './RepasR';
import TableR from './TableR';
import AssiettesR from './AssiettesR';
import EntreeR from './EntreeR';
import DinerR from './DinerR';
import DessertR from './DessertR';
import Panier from './Panier';
import Paiement from './Paiement';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import Login from './Login';
import Third1 from './Third1';
import Third2 from './Third2';
import Third3 from './Third3';
import PhotoPreview from './PhotoPreview';
import Store from './Store';











const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="First"
      >
        <Stack.Screen name="First" component={FirstPage} />
        <Stack.Screen name="Second" component={SecondPage} />
        <Stack.Screen name="Third" component={ThirdPage} />
        <Stack.Screen name="Fourth" component={FourthPage} />
        <Stack.Screen name="Fifth" component={FifthPage} />
        <Stack.Screen name="Sixth" component={SixthPage} />
        <Stack.Screen name="Seventh" component={SeventhPage} />
        <Stack.Screen name="Rahal1" component={Rahal1} />
        <Stack.Screen name="RepasRahal" component={RepasRahal} />
        <Stack.Screen name="EntreeRahal" component={EntreeRahal} />
        <Stack.Screen name="DinerRahal" component={DinerRahal} />
        <Stack.Screen name="DessertRahal" component={DessertRahal} />
        <Stack.Screen name="Assiettes" component={Assiettes} />
        <Stack.Screen name="Table" component={Table} />
        <Stack.Screen name="Tapi" component={Tapi} />
        <Stack.Screen name="Himmi1" component={Himmi1} />
        <Stack.Screen name="RepasHimmi" component={RepasHimmi} />
        <Stack.Screen name="EntreH" component={EntreH} />
        <Stack.Screen name="DinerH" component={DinerH} />
        <Stack.Screen name="DessertH" component={DessertH} />
        <Stack.Screen name="AssiettesH" component={AssiettesH} />
        <Stack.Screen name="TableH" component={TableH} />
        <Stack.Screen name="TapiH" component={TapiH} />
         <Stack.Screen name="Reve" component={Reve} />
        <Stack.Screen name="TapiR" component={TapiR} />
        <Stack.Screen name="RepasR" component={RepasR} />
        <Stack.Screen name="TableR" component={TableR} />
        <Stack.Screen name="AssiettesR" component={AssiettesR} />
        <Stack.Screen name="EntreeR" component={EntreeR} />
        <Stack.Screen name="DinerR" component={DinerR} />
        <Stack.Screen name="DessertR" component={DessertR} />
        <Stack.Screen name="Panier" component={Panier} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Third1" component={Third1} />
        <Stack.Screen name="Third2" component={Third2} />
        <Stack.Screen name="Third3" component={Third3} />
        <Stack.Screen name="PhotoPreview" component={PhotoPreview} />
        <Stack.Screen name="Store" component={Store} />


        <Stack.Screen name="Paiement" component={Paiement} />






      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;