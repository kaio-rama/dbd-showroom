import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { UserIcon, VipIcon, OrdererIcon, HomeIcon } from './Icons';

export function Footer() {
    return (
        <View style={styles.container}>
            <Link asChild href="/">
            <Pressable>
                <HomeIcon color="pink" />
            </Pressable>
            </Link>
            <VipIcon color="pink" />
            <OrdererIcon color="pink" />
            <Link asChild href="/profile">
            <Pressable>
                <UserIcon color="pink" />
            </Pressable>
            </Link>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
      height: 80,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#1D081A',  
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 25,
    }
  });