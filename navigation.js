import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainTabs from './MainTabs';
import TimelineScreen from './screens/TimelineScreen';
import AboutScreen from './screens/AboutScreen';
import PartnersScreen from './screens/PartnersScreen';
import ContactsScreen from './screens/ContactsScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import CreditScreen from './screens/CreditScreen';
import WorksScreen from './screens/WorksScreen';
import MaterialsScreen from './screens/MaterialsScreen';
import PaymentTermsScreen from './screens/PaymentTermsScreen';
import PromotionsScreen from './screens/PromotionsScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="TimelineScreen" component={TimelineScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="PartnersScreen" component={PartnersScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
        <Stack.Screen name="DocumentsScreen" component={DocumentsScreen} />
        <Stack.Screen name="CreditScreen" component={CreditScreen} />
        <Stack.Screen name="WorksScreen" component={WorksScreen} />
        <Stack.Screen name="MaterialsScreen" component={MaterialsScreen} />
        <Stack.Screen name="PaymentTermsScreen" component={PaymentTermsScreen} />
        <Stack.Screen name="PromotionsScreen" component={PromotionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
