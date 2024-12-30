import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }){
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#3fff11',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    subtitleContainer: {
        borderBottomColor: '#3fff11',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
    }
});