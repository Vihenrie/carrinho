import { SafeAreaView, StatusBar } from 'react-native';
import Carrinho from './src/pages/Carrinho/index';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Carrinho/>
    </SafeAreaView>
  );
}
