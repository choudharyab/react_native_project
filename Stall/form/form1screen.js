import {StyleSheet,View,Text,TextInput,TouchableOpacity,TextBox,ScrollView,Button, Image} from 'react-native';
import React, {Component} from 'react';
//import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import {StackNavigator } from 'react-navigation';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker'; 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const image1=require('./Image/logout.png');
import baseurl from './Baseurl';
 export default class form1 extends React.Component {
 
   
      static navigationOptions= ({navigation}) => ({
     
           title:'Add Exhibition',
           headerStyle: { backgroundColor: '#5E3750' },
           headerTitleStyle: { color: '#ffffff',fontSize:16 },
           headerRight: 
           <TouchableOpacity onPress={ () =>
            navigation.navigate('Login')}>
            <Image source={image1} style={{width: 23, height: 23.5,marginRight:10}} />
        </TouchableOpacity>
           
      
     
  });
  onSelect(index, value){
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }
  constructor()
  {
    super();

    let form_obj = {}

    this.state={
   
      
       name:'',
       from_date:'',
       to_date:'',
       venue:'',
       description:'',
       
      

   
    }
    
  }
  InsertDataToServer = () =>{
    
    
    const { name }  = this.state ;
    const { from_date }  = this.state ;
    const { to_date }  = this.state ;
    const { venue}  = this.state ;
    const { description }  = this.state ;
    
    
   fetch(baseurl.AddExbhition, {
     method: 'POST',
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
     body:JSON.stringify({
        name:name,
        from_date:from_date,
        to_date:to_date,
     
        venue:venue,
        description:description,
        
     })
    
    }).then((response)=>response.json())
    .then((responseJson)=>{
        alert("Added successfully");
        this.props.navigation.navigate('Exhibition');
      
      
    },function(responseJson){
 
     console.log(responseJson);
 
    });
     
     
      }
  
  render() 
  {  const { navigate } =this.props.navigation;
 
  return (
    <View style={{flex:1,backgroundColor:'transparent'}}>

    <View style={{flex: 1,backgroundColor:'transparent'}} >
    <ScrollView>
      
       <Text style={styles.exhi}>Exhibition Name</Text>

      <TextInput 
      style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Exhibition Name'  
       onChangeText={name => this.setState({name})}/>
 <Text style={styles.exhi}>From Date:</Text>
      <DatePicker style={styles.exhi}
        style={{left: 5,width: responsiveWidth(91)}}
        date={this.state.from_date}
        mode="date"
        placeholder="From Date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36         }
         
        }}
        onDateChange={(from_date) => {this.setState({from_date})}}
      />
       <Text style={styles.exhi}>To Date:</Text>
      <DatePicker style={styles.exhi}
        style={{left: 5,width: responsiveWidth(91)}}
        date={this.state.to_date}
        mode="date"
        placeholder="To Date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36         }
         
        }}
        onDateChange={(to_date) => {this.setState({to_date})}}
      />
      <Text style={styles.exhi}>Exhibition Venue:</Text>

      <TextInput 
      style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Exhibition Venue'  
       onChangeText={venue => this.setState({venue})}/>
        <Text style={styles.exhi}>Exhibition Description:</Text>

      <TextInput 
      style={styles.inputBox1}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Exhibition Description'  
       onChangeText={description => this.setState({description})}/>
     
     
     
       
   

   </ScrollView>
   </View>

   <View style={{flex: 0.15, backgroundColor:'transparent',justifyContent:'center',alignItems:'center',}}>
   <TouchableOpacity>
        <Text  onPress= { this.InsertDataToServer} style={styles.btntext}>Save</Text>
        </TouchableOpacity>

</View>

  
   


 
 
       
     
 
 </View>
 

 

  );
}
 }
 const styles=StyleSheet.create({
     exhi:{
         color:'black',
         fontSize:16,
         marginLeft:10,

     },
     
inputBox:{
    height: responsiveHeight(6), 
    width: responsiveWidth(91),
    fontSize:15,
    borderColor:'#ccc',
    borderWidth:1,
    color:'#5E3750',
    marginRight:20,
    marginLeft:5,
    marginTop:5,
    marginLeft:10,
    backgroundColor:'transparent'
},
inputBox1:{

  height: responsiveHeight(6), 
  width: responsiveWidth(91),
  fontSize:15,
  borderColor:'#ccc',
  borderWidth:1,
  color:'#5E3750',
  marginRight:20,
  marginLeft:5,
  marginBottom:10,
  marginTop:5,
  marginLeft:10,
  //backgroundColor:'yellow'
  },

btntext:{
  color:'#ffffff',
  fontSize:18,
  backgroundColor: '#5E375D',
  alignItems: 'center',
  // height:responsiveHeight(5),
  // width:responsiveWidth(30),
  //justifyContent:'center',
  textAlign:'center',
  padding: 13,
  borderRadius:15
  },


})