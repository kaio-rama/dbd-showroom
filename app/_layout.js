import { StyleSheet, StatusBar, Pressable } from "react-native";
import { Stack } from "expo-router";
import { Footer } from "../components/Footer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MenuIcon } from "../components/Icons";
import { Screen } from "../components/Screen";

export default function Layout() {
    return (
    <SafeAreaProvider>
        <Screen style={styles.container}>  
        <StatusBar barStyle="light-content" />            
            <Stack 
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#1D081A',
                },
                headerTintColor: 'pink',
                title:"DBD",
                headerRight: () => {
                  <Pressable>
                    <MenuIcon color="pink"/>
                  </Pressable>
                } ,
              }}
            />
            <Footer />
        </Screen>
    </SafeAreaProvider>
    );
}  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });