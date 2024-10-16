import { ScrollView, Text } from "react-native";
import { Screen } from "../components/Screen";  

export default function Profile() {  
    return (
    <Screen>
        <ScrollView >
            <Text style={{ color : "red" , fontSize : 20 }}>
                PROFILE
            </Text>
        </ScrollView>
    </Screen>
    );
}
