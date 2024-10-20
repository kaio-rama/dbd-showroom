import { useRef, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Pressable, Button, ScrollView } from 'react-native';
import { Score} from './Score';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild  >
    <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2" >
        <View key={game.slug} style={styles.card}>
        <Image source={{ uri: game.image }} 
            style={styles.image}
            />
        <View>
        <Text style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore={100} />
            
        <Text style={styles.description}>{game.description.slice(0, 160) + '...'}</Text>
        </View>
      </View>  
  </StyledPressable>
  </Link>
  );
}

export function GameDetails({ game }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);

  }
  

  return (
    <ScrollView style={styles.cardDetails}>
      <Text style={styles.title}>{game.title}</Text>
      <Image width={''} height={500} source={{ uri: game.img }} />
        <View style={{ paddingTop: 10, paddingBottom: 10}}>
      <Text style={styles.detailDescription} >{game.description}</Text>
      <Button color="#841584" title='Ver comentarios' onPress={toggleVisibility} ></Button>
        </View>
          {game.reviews.map((review, index) => ( 
            <View id='reviews' key={index} style={{ marginTop: 10, color: 'green', display: isVisible ? 'flex' : 'none'  }}>
              <Text style={{ fontSize: 16, color: 'green' }}> Puntuation: {review.score}</Text>
              <Text style={{ fontSize: 16, color: 'white' }}>{review.author}</Text>
              <Text style={{ fontSize: 16, color: 'white' }}> User name: {review.publicationName}</Text>
              <Text style={{ fontSize: 16, color: 'white' }}>{review.date}</Text>
              <Text style={{ fontSize: 16, color: 'white' }}>{review.quote}</Text>
            </View>
          ))}
    </ScrollView>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [index]); // Solo vuelve a ejecutar cuando cambia el index.
  

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View> 
  );
}


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 140,
        margin: 10,
      },
    
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#eee',
        marginBottom: 10,
        width: 240,
      },
    
      description: {
        fontSize: 16,
        color: '#cdcdcd',
        width: 240,
      },
    
      score: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
      },
    
      card: {
        margin: 10,
        backgroundColor: '#33333366',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
      },
      cardDetails: {
        margin: 10,
        backgroundColor: '#33333366',
        height: 'auto',
        borderRadius: 10,
        padding: 10,
        textAlign: 'justify',
        marginBottom: 100,
      },
      detailDescription: {
        fontSize: 16,
        color: '#cdcdcd',
        textAlign: 'justify',
      }
});