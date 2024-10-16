import { View } from 'react-native';

export function Screen ({ children }){
    return(
        <View style={{ backgroundColor: "#1D081Aef" , height: "100%"}} >
            { children }
        </View>
    )
}