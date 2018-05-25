/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React ,{Component} from 'react';
//import {Button} from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  ListView,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView
  
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {UIActivityIndicator} from 'react-native-indicators';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const image1=require('../Image/phj.png');
const image2=require('../Image/loogout.png');
const image3=require('../Image/Tecture.png');
import baseurl from './Baseurl';

export default class Exhibition extends Component {
  static navigationOptions= ({navigation}) => ({
    
          header:null,
     
    
 });
        
  
  constructor()
  {
    super();
   
    this.state={
      isLoading:true,
    dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}),
   
    }
  }
  componentDidMount()
  {
    fetch(baseurl.Exbhitionlisting)
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson[0].id)
      data=responseJson;
      //console.log(responseJson)
      
     //data=responseJson;
      this.setState({
       // dataSource=responseJson
       dataSource:this.state.dataSource.cloneWithRows(data),
        isLoading:false,
       
       // dataSource: this.state.dataSource.cloneWithRows(data)
       //data:data
      })

    })
    .catch((error)=>{
        console.error(error);
    });
  }
  SearchFilterFunction(text){
    
    const newData = data.filter(function(item){
        const itemData = item.name.toLowerCase()
        const textData = text.toLowerCase()
        return itemData.indexOf(textData) > -1
    })
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newData),
        text: text
    })
}

  render(){
   
  const {navigate} =this.props.navigation;
  if(this.state.isLoading)  {
    return(
      <UIActivityIndicator color='#5E375D' />
    );
  }else{
   
    return (
      <View style={{backgroundColor:'transparent',flex:1}}>

      


    <View style={{ flex: 0.5,  backgroundColor: 'transparent', alignItems: 'center' }}>

          <View style = {{flex: 1, position: 'absolute',}}>
            <Image source = {image1} resizeMode = 'cover' style = {{ opacity: 1, }} />
          </View>

          <View style = {{ alignSelf: 'flex-end',top:10, right: 10,backgroundColor:'transparent', opacity: 1}}>
              <TouchableOpacity 
              onPress={ () => navigate('Login')}>
                <Image style = {styles.logo} source = {image2} resizeMode = 'contain'/>
              </TouchableOpacity>
          </View>

          <View style = {{ top: 40,}}>
            <Image style = {styles.logo1} source = {image3} resizeMode = 'contain' />
          </View>
    
    </View>

    <View style={{backgroundColor:'transparent',flex:0.4, justifyContent: 'center'}}>
           
         <View style={{backgroundColor:'transparent',flexDirection:'row',justifyContent:'flex-start'}}>

            <View style={{marginLeft:10,backgroundColor:'#5E375D',borderRadius:15,padding:4,justifyContent:'center'}} >
            <Text onPress= { ()=> navigate('Exhibition') } style={{backgroundColor:'transparent',color:'#fff',fontSize:12,padding:3}}>Exhibition</Text>
            </View>

            <View style={{marginLeft:10,backgroundColor:'#5E375D',borderRadius:12,padding:4,justifyContent:'center'}} >
            <Text onPress= { ()=> navigate('Stall') } style={{backgroundColor:'transparent',color:'#fff',fontSize:12,padding:3}}>Stall</Text>
            </View>

         </View>
         
         
                <TextInput 
                    style={styles.TextInputStyleClass}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    underlineColorAndroid='#000'
                    placeholder='Search by Exhibition name'
                      />

           <View style={{backgroundColor:'transparent',flexDirection:'row',justifyContent:'space-between'}}>
           
                       <View style={{marginLeft:20}} >
                       <Text  style={{backgroundColor:'transparent',color:'#5E375D',fontSize:20,fontWeight:'bold'}}>Exhibition List</Text>
                         </View>
           
                       <View style={{marginLeft:10,backgroundColor:'#5E375D',borderRadius:10,padding:5,marginRight:10}} >
                       <Text onPress= { ()=> navigate('Form1') } style={{textAlign:'center',color:'#ffffff',fontSize:15,}}>Add</Text>
                       </View>
          </View>
               
      </View>


      <ScrollView>
      <View style={{backgroundColor:'transparent', flex: 1}}>
 
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData)=>
                  <View style={styles.lists}>
                    <Text style={
                    {marginLeft:10}
                  } >
                
                <Text style={
                    {fontWeight:'bold',marginLeft:10, color:'#5E375D'}
                  }>
                  Exhibition Name: </Text><Text value={rowData.id}>{rowData.name}
                  </Text></Text>
                  <Text  
                  >
                  <Text style={
                    {fontWeight:'bold',marginLeft:10, color:'#5E375D'}
                  }>
                  Venue: </Text><Text> {rowData.venue}
                  </Text></Text>
                  <Text style={{marginBottom:10,marginLeft:10}}>
                  <Text style={
                    {fontWeight:'bold',marginLeft:10, color:'#5E375D'}
                  }>
                  Description: </Text><Text> {rowData.description}
                  </Text></Text>
                  </View>
                }
                  />
                
         </View>


        </ScrollView>

      </View>
    );
  }
  }
}

const styles=StyleSheet.create({
  lists:{
    borderWidth:2,
    borderRadius:10,
    borderColor:'#5E375D',
    
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
    //margin:30,
    marginLeft:30,
    marginRight:30,
    marginTop:30,


  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    //top: 30,
    opacity: 1,
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },

  logo1: {
    backgroundColor: 'rgba(0,0,0,0)',
    
    opacity: 1,
    width: 95,
    height: 95,
    alignSelf: 'center',
  },
  TextInputStyleClass:{
    
      textAlign: 'center',
      alignSelf: 'center',
      // top:10,
      fontSize: 15,
      height:responsiveHeight(7),
      width:responsiveWidth(65)
     
    
}

});