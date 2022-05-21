import { useContext } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

import {
	Foundation,
	MaterialCommunityIcons,
	AntDesign,
	Entypo,
} from '@expo/vector-icons';

export default function NavigationMenu() {
	const navigation = useContext(NavigationContext);
	return (
		<View style={styles.container}>
			<Pressable onPress={() => navigation.navigate('home')}>
				<Entypo style={styles.icon} name='home' size={35} color='white' />
			</Pressable>
			<Pressable onPress={() => navigation.navigate('machines')}>
				<MaterialCommunityIcons
					style={styles.icon}
					name='factory'
					size={35}
					color='white'
				/>
			</Pressable>
			<Pressable onPress={() => navigation.navigate('devices')}>
				<AntDesign
					style={styles.icon}
					name='pluscircle'
					size={35}
					color='white'
				/>
			</Pressable>
			<Pressable onPress={() => navigation.navigate('graph')}>
				<Foundation
					style={styles.icon}
					name='graph-bar'
					size={35}
					color='white'
				/>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		height: 120,
		width: '100%',
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},

	icon: {
		marginTop: 35,
	},
});
