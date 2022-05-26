import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	KeyboardAvoidingView,
	Keyboard,
	TextInput,
} from 'react-native';
import NavigationMenu from './tools/NavigationMenu';

export default function DevicesScreen({ navigation }) {
	return (
		<KeyboardAvoidingView style={styles.container}>
			<NavigationMenu></NavigationMenu>
			<View style={styles.container_form}>
				<Text style={styles.title_form}>Dispositivo</Text>
				<View style={styles.row_form}>
					<Text style={styles.title_form}>Nombre:</Text>
					<TextInput style={styles.input_form}></TextInput>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container_form: {
		width: 300,
		height: '60%',
		backgroundColor: 'gray',
		borderRadius: 20,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	row_form: {
		width: '95%',
		height: 30,
		// backgroundColor: 'red',
		marginTop: 40,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	title_form: {
		fontSize: 20,
		color: 'white',
	},
	input_form: {
		width: 150,
		height: '100%',
		backgroundColor: 'white',
		borderRadius: 5,
	},
});
