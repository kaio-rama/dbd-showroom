import { FlatList} from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Screen } from './Screen';

export function Main() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getLatestGames().then((games) =>
    setGames(games));
    }, []);

  return (
    <Screen>
      <FlatList 
              data={games} 
              keyExtractor={(game) => game.slug}
              renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}  
              />
    </Screen>
  );
}