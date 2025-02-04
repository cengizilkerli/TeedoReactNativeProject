import { StatusBar } from 'expo-status-bar';
import Products from '_scenes/Products/Products.component';
import { SafeAreaView } from 'react-native';

import './gesture-handler';

export default function App() {

  return (
    <SafeAreaView style= { {flex: 1} }>
      <StatusBar style="auto" />
      <Products />
    </SafeAreaView>
  );
}
