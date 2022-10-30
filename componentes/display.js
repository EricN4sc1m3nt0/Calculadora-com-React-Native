import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight,ColorPropType} from 'react-native'

export default props=>{
     return(
        <View style={style.display}>
            <Text style={style.displayOperacao} numberOfLines={1}>{props.valor}</Text>

            <Text style={style.displayResultado} numberOfLines={1}>{props.resultado}</Text>
        </View>
    )
}
const style= StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'#444',
        width:'100%'
    },
    displayResultado:{
        fontSize:50,
        color:'#fff'
    },
    displayOperacao:{
        fontSize:25,
        color:'#fff'
    },
});
