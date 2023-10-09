import { View, Text, StyleSheet, Modal, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Colors, font, } from '../Styles'

const HEIGHT_MODAL = 150
const WIDTH = Dimensions.get('window').width

const Popup = (props:any) => {
    const closeModal = (bool: any, data: any)=> {
        props.changeModalVisible(bool);
        props.setData(data);
    }
        
  return (
    <TouchableOpacity
    disabled={true}
    style={styles.container}
    >
        <View style={styles.modal}>
            <Text style={[font.h1Title, {textAlign: 'center', color: Colors.active}]}>Success</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10,}}>
                <TouchableOpacity
                    onPress={() => closeModal(false, 'Cancel')}
                >
                    <Text style={[font.h2Title, {color: Colors.active, alignItems: 'center', }]}>OK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => closeModal(false, 'Cancel')}
                >
                    <Text style={[font.h2Title, {color: Colors.active}]}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    modal:{
        width: WIDTH-200,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,  
    }
})
export {Popup}