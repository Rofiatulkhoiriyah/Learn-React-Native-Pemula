import React from 'react'
import{ Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
export default class extends React.Component{
 state ={
   teksYangDiinput: "",
   topBarColor:"green"
 }
render(){
return(
<View
 style = {{
  flex: 1
  }}
  >
  <View
   style = {{
   backgroundColor:this.state.topBarColor,
   justifyContent:"center",
   height: 60,
   padding: 20
   }}
  >
  <Text
  style = {{
  color:"white",
  fontSize:24,
  fontWeight:"bold"
  }}
  >
  Programmer Semarang
  </Text>
  </View>
  <TouchableOpacity
  onPress ={() =>{
   this.fungsiGantiWarna()
  }}
   style ={{
   backgroundColor:"cyan",
   borderRadius: 7,
   height:40,
   justifyContent: "center",
   width:100
   }}
   >
   <Text>
   Button
   </Text>
  </TouchableOpacity>

  <Image
  resizeMode ="stretch"
  source = { require("./assets/snack-icon.png")}
     style = {{
       height:100,
       width:200
   }}
  />
  <TextInput
  multiline ={true}
  onChangeText = {(value)=>{
    this.setState({teksYangDiinput: value})
  }}
  placeholder="isi teks disini...."
  style ={{
    borderWidth:1
  }}
  />
  <TouchableOpacity
  activeOpacity ={0.8}
  style = {{
    alignItems:"center",
    backgroundColor:this.state.teksYangDiinput==""?"gray":"green",
    padding: 20
  }}
  >
  <Text
  style = {{
    color:"white",
    fontSize:22
  }}
  >
      Masuk
      </Text>
      </TouchableOpacity>
</View>
)
}
fungsiGantiWarna(){
  this.setState({
    topBarColor:"red"
  })
}
}