import {  View } from 'react-native';
import {Main} from './components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  return (
    <SafeAreaProvider>
      <View>
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
