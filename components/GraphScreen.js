import { StyleSheet, Text, View, Pressable } from 'react-native';
import NavigationMenu from './tools/NavigationMenu';

export default function GraphScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<NavigationMenu />
			<Pressable onPress={() => navigation.navigate('home')}>
				<Text>Graficas</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
