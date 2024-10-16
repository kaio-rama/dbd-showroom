import { Text, View } from 'react-native';

export function Score({score, maxScore}) {

    const getColors = () => {
        const percentage = score / maxScore;
            if (percentage < 0.25) {
                return 'red';
            } else if (percentage < 0.5) {
                return 'orange';
            } else if (percentage < 0.75) {
                return 'yellow';
            } else {
                return 'green';
            }
    };

    const className = getColors();
    
    return (
        <View style={{
            backgroundColor: className,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderColor: 'white',
            borderWidth: 2,
        }}>
            <Text style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>
                {score}
            </Text>
        </View>
    )}