import React from 'react';
import {StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native'

export default props=>{
    const styleBotoes=[style.btn]

    if(props.duplo){
        styleBotoes.push(style.btnDuplo)
    }

    if(props.igual){
        styleBotoes.push(style.btnIgual)
    }

    if(props.operacao){
        styleBotoes.push(style.btnOperacao)
    }

    if(props.ac){
        styleBotoes.push(style.btnAC)
    }

    if(props.bs){
        styleBotoes.push(style.btnBS)
    }
    return(
        <TouchableHighlight  onPress={props.aoClicar}>
           <Text style={styleBotoes}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({

    btn:{
        fontSize:30,
        height:Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:"#000",
        color:"#0f0",
        borderWidth:1,
        borderColor:"#777",
        textAlign:'center'
    },

    btnIgual:{
        color:'blue',
    },

    btnOperacao:{
        color:'yellow',
    },

    btnAC:{
        color:'red',
    },

    btnBS:{
        color:'#0ff',
    },

    btnDuplo:{
        width:(Dimensions.get('window').width/4)*2,
    }
});