import { useEffect, useState } from 'react';
import { Text, TextInput, Image, View, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BackButton from '../components/BackButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { getProducts } from '../../apiServices';
import { useNavigation } from '@react-navigation/native';

export default function Products() {
    const [products, setProducts] = useState([])
    const navigation = useNavigation()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getProducts()
                setProducts(products)
            } catch (error) {
                console.log('error fetching data', error)
            }
        }
        fetchData();
    }, [])

    return (

        <View style={styles.container}>
            {/* <Button title='Quat lại' onPress={() => navigation.goBack()}/> */}
            <View style={styles.container}>
                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("DetailItem", { item })} style={styles.productItem}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    categoryItem: {
        marginBottom: 20,
    },
    category: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    productItem: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: 175,
        borderWidth: 1,
    },
    image: {
        width: 175,
        height: 175,
        padding: 10,
        margin: 5,
        marginTop: -11,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 15,
        color: 'red',
    }
})