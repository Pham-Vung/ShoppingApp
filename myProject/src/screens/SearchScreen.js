import { useEffect, useState } from 'react';
import { Text, TextInput, Image, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BackButton from '../components/BackButton'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { getAllProducts, getProducts } from '../../apiServices';

export default function SearchProduct({ navigation }) {
    const [products, setProducts] = useState([])
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
    const [searchProduct, setSearchProduct] = useState('')
    const filteredProduct = products.filter(eachProduct => {
        //console.log(eachProduct.products.name)
        return eachProduct.name.toLowerCase()
            .includes(searchProduct.toLowerCase())
    })
    return (

        <View style={styles.container}>
            <BackButton goBack={navigation.goBack} />
            <View style={{
                marginHorizontal: 10,
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <MaterialIcons name='search'
                    size={30}
                    color=' black'
                    style={{
                        position: 'absolute',
                        top: 15,
                        right: 0,
                        marginTop : 13

                    }}>
                </MaterialIcons>
               
                <TextInput
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setSearchProduct(text)
                    }}
                    value={searchProduct}
                    placeholder="Tìm kiếm sản phẩm..."
                    style={{
                        height: 40,
                        flex: 1,
                        borderRadius: 5,
                        opacity: 0.8,
                        paddingStart: 30,
                        marginTop: 20,
                        borderWidth: 1,
                        backgroundColor: 'white',
                        marginHorizontal : 30 

                    }} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={filteredProduct}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailItem', { item })} style={styles.productItem}>
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