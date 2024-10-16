import { Stack } from "expo-router";
import { Text,  ActivityIndicator, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { GameDetails } from "../components/GameCard";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function Detail(){
    const { id } = useLocalSearchParams();
    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        if(id){
            getGameDetails(id).then(setGameInfo);
        }
    }, [id]);

    return(
        <Screen className="mt-40" >
            {
                gameInfo == null ? (
                    <ActivityIndicator color="white" size={'large'} />
                ) : (
                    <ScrollView>
                        <Stack.Screen
                            options={{
                                title: `${gameInfo.title}`,
                                headerTitle: `${gameInfo.title}`,
                                headerTintColor: "pink",
                                headerStyle: { backgroundColor: '#1D081A'},
                                
                            }}
                            
                        />
                    <GameDetails game={gameInfo} />
                    
                    </ScrollView>
                )
            }
            
        </Screen>
    )
}