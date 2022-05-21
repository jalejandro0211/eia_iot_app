import { StyleSheet, Text, View, Pressable } from 'react-native';
import NavigationMenu from './tools/NavigationMenu';

export default function MachinesScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<NavigationMenu />
			<Pressable onPress={() => navigation.navigate('home')}>
				<Text>Maquina</Text>
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
