import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from "react-native-heroicons/solid"
import { styles, font, Colors } from '../Styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
    title?: string
}

const CommonHeader = ({ title }: Props) => {
    const navigation = useNavigation()
    return (
        <View style={[{ flexDirection: 'row' }]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevronLeftIcon size={25} color="#000000" />

            </TouchableOpacity>
            <Text style={[font.h2Title, {
                color: Colors.Main,
                left: 80,
            }]}>
                {title}
            </Text>
        </View>

    )
}

export default CommonHeader