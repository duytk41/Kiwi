import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { font, styles } from '../components/customs/Styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import B3 from '../components/customs/Button/B3'

const loveFoodList = [
    { id: '1', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
    { id: '2', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
    { id: '3', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
    { id: '4', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
    { id: '5', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
    { id: '6', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
    { id: '7', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
    { id: '8', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
    { id: '9', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
    { id: '10', name: 'Hamburger', restaurantName: 'Burger King', price: 4.55, foodImg: require('../assets/img/burger.png') },
]

const RateList = () => {
    const [listItems, setListItems] = useState(loveFoodList)
    const getItem = (item: any) => {

    }

    const ItemView = ({ item }: any) => {
        return (
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }]}>
                <StatusBar barStyle="dark-content" backgroundColor={'white'} />
                <TouchableOpacity style={[{ flexDirection: 'row', gap: 10, }]}
                    onPress={() => getItem(item)}
                >
                    <Image source={item.foodImg} style={{ width: 100, height: 100, borderRadius: 8 }} />
                    <View>
                        <Text style={[font.h2Title, {}]}>{item.name}</Text>
                        <Text style={[font.subline, {}]}>{item.restaurantName}</Text>
                        <Text style={[font.subhead, { color: 'black' }]}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center' }}>
                    <Image source={require('../assets/icon/24/close.png')} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                
            </View>
            

        )

    }
    return (
        <View style={[styles.container1, {}]}>
            <FlatList
                data={listItems}
                renderItem={ItemView}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default RateList