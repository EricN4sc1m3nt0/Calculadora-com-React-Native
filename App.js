import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View,TouchableHighlight,TextInput} from 'react-native';
import Display from './componentes/display';
import Btn from './componentes/botao';

let stats={
  valorTela:'',
  resultado:'0',
  operador:false,
  ponto:false,
}

export default function App() {
  const [Vtela,setValorTela] = useState(stats.valorTela)
  const [Vresultado,setValorResultado] = useState(stats.resultado)

  const addDigito=(d)=>{
    if((d=='+' || d=='-' || d=='*' || d=='/') && stats.operador){
      stats.ponto=false
    }

    if(d=='.' && !stats.ponto){
      stats.ponto=true
      stats.operador=false
    }
    else if(d=='.' && !stats.ponto){
      return
    }

    if((d=='+' || d=='-' || d=='*' || d=='/') && stats.operador){
      stats.valorTela=stats.resultado
      stats.resultado=0
    }

    stats.valorTela=stats.valorTela+d
    setValorTela(stats.valorTela)
    setValorResultado(stats.resultado)
    stats.operador=false
  }

  const limparTela=()=>{
    stats={
      valorTela:'',
      resultado:'0',
      operador:false,
      ponto:false,
    }
    setValorTela(stats.valorTela)
    setValorResultado(stats.resultado)
  }

  const oper=(d)=>{
    if(d=='AC'){
      limparTela()
      return
    }
    if(d=='BS'){
      stats.valorTela=Vtela.substring(0,(Vtela.length-1))
      setValorTela(stats.valorTela)
      return
    }
    try{
      stats.resultado=eval(stats.valorTela)
      stats.operador=true
      setValorResultado(stats.resultado)
    }
    catch{
      stats.resultado='Erro'
      stats.operador=true
      setValorResultado(stats.resultado)
    }
  }



  return (
    <SafeAreaView style={style.container}>
      <Text style={style.titulo}>CALCULADORA COM REACT NATIVE</Text>
        <Display valor={Vtela} resultado={Vresultado}/>
      <View style={style.botoes}>
        <Btn label="AC"ac aoClicar={()=>{oper('AC')}}></Btn>
        <Btn label="(" aoClicar={()=>{addDigito('(')}}></Btn>
        <Btn label=")" aoClicar={()=>{addDigito(')')}}></Btn>
        <Btn label="/" operacao aoClicar={()=>{addDigito('/')}}></Btn>
        <Btn label="7" aoClicar={()=>{addDigito('7')}}></Btn>
        <Btn label="8" aoClicar={()=>{addDigito('8')}}></Btn>
        <Btn label="9" aoClicar={()=>{addDigito('9')}}></Btn>
        <Btn label="*" operacao aoClicar={()=>{addDigito('*')}}></Btn>
        <Btn label="4" aoClicar={()=>{addDigito('4')}}></Btn>
        <Btn label="5" aoClicar={()=>{addDigito('5')}}></Btn>
        <Btn label="6" aoClicar={()=>{addDigito('6')}}></Btn>
        <Btn label="-" operacao aoClicar={()=>{addDigito('-')}}></Btn>
        <Btn label="1" aoClicar={()=>{addDigito('1')}}></Btn>
        <Btn label="2" aoClicar={()=>{addDigito('2')}}></Btn>
        <Btn label="3" aoClicar={()=>{addDigito('3')}}></Btn>
        <Btn label="+" operacao aoClicar={()=>{addDigito('+')}}></Btn>
        <Btn label="0" aoClicar={()=>{addDigito('0')}}></Btn>
        <Btn label="." aoClicar={()=>{addDigito('.')}}></Btn>
        <Btn label="<-"bs aoClicar={()=>{oper('BS')}}></Btn>
        <Btn label="=" igual aoClicar={()=>{oper('=')}}></Btn>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center"
  },

botoes:{
  flexDirection:"row",
  flexWrap:"wrap"
},

titulo:{
  fontSize:20,
  fontWeight:'bold',
  padding:20,
  margin:0,
  color:'blueviolet',
  backgroundColor:'beige',

},
 
});
