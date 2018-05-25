import React,{Component} from 'react';
import {StyleSheet,TextInput,View,Alert,Button,Text,Image,TouchableOpacity,ScrollView,ListView} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const image1=require('./Image/phj.png');
const image2=require('./Image/loogout.png');
const image3=require('./Image/git.png');



import baseurl from './Baseurl';

export default class Registration extends Component {
  static navigationOptions =
  {
     header:null,
  };
    constructor(props) {
        
           super(props)
        
           this.state = {
        
             username:'',
             full_name:'',
             //last_name:'',
             email:'',
             password:'',
        
           }
}

Registration = ()=>{
    console.log('ddd',full_name);
    const{username}=this.state;
    const {full_name}=this.state;
    //const {last_name}=this.state;
    const {email}=this.state;
    const {password}=this.state;

    fetch(baseurl.Registration, {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
       
            username: username,
       
            full_name: full_name,
       
           // last_name: last_name,
            email:email,
            password:password
       
        })
       
      }).then((response)=>response.json())
      .then((responseJson)=>{
          alert("Registration successfully");
          this.props.navigation.navigate('Login');
        
        
      },function(responseJson){
   
       console.log(responseJson);
   
      });
       
       
        }
      
        render(){
          const {navigate} =this.props.navigation;
          
          return (
            <View style={{backgroundColor:'transparent',flex:1}}>
            <View style={{ flex: 0.6,  backgroundColor: 'transparent', alignItems: 'center' }}>
            
                  <View style = {{flex: 1, position: 'absolute',}}>
                    <Image source = {image1} resizeMode = 'cover' style = {{ opacity: 1, }} />
                  </View>
                
                 
            
                 
                  <View style = {{ }}>
                    <Image style = {styles.logo1} source = {image3} resizeMode = 'contain' />
                  </View>
                
                </View>
              
              <View style={{backgroundColor:'transparent',flex:1}}>

               <View>
               <TextInput
                 
                 // Adding hint in Text Input using Place holder.
                 placeholder="Enter Username"
        
                 onChangeText={username => this.setState({username})}
        
                 // Making the Under line Transparent.
                 underlineColorAndroid='transparent'
        
                 style={styles.TextInputStyleClass}
               />
               <TextInput
                 
                 // Adding hint in Text Input using Place holder.
                 placeholder="Enter full name"
        
                 onChangeText={full_name => this.setState({full_name})}
        
                 // Making the Under line Transparent.
                 underlineColorAndroid='transparent'
        
                 style={styles.TextInputStyleClass}
               />
               <TextInput
                 
                 // Adding hint in Text Input using Place holder.
                 placeholder="Enter Email id"
        
                 onChangeText={email => this.setState({email})}
        
                 // Making the Under line Transparent.
                 underlineColorAndroid='transparent'
        
                 style={styles.TextInputStyleClass}
               />
                <TextInput
                 
                 // Adding hint in Text Input using Place holder.
                 placeholder="Enter Password"
                 secureTextEntry={true}
                 onChangeText={password => this.setState({password})}
        
                 // Making the Under line Transparent.
                 underlineColorAndroid='transparent'
        
                 style={styles.TextInputStyleClass}
               />       
                 </View>

                 <View style={{marginBottom:30,justifyContent:'center',alignItems:'center'}}>
                      <View>
                        <TouchableOpacity style={styles.button}>
                        <Text  onPress= { this.Registration } style={styles.btntext}>Register</Text>
                        </TouchableOpacity>
                        </View>

                        
                   </View>
             
                </View>

          </View>
      );
    }
  }

  const styles=StyleSheet.create({
    
     TextInputStyleClass: {
     
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    width:250,
    alignSelf:'center',
    marginTop:10,
    borderColor:'#676767',
    borderRadius: 15 ,
     
   
    },
    btntext:{
      color:'#ffffff',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      padding:5,
      fontSize:14,
      
      
  },
  button: {
    //alignSelf: 'stretch',
    //alignItems: 'center',
   // padding:5,
    ///marginTop:5,
    //flex:0,
    backgroundColor: '#5E375D',
    justifyContent:'center',
   // marginLeft:90,
   // marginRight:90,
    //marginBottom:5,
    //alignSelf: 'flex-end',
    borderRadius:20,
    height: 40,
    width:180,
    marginTop:30,
   // textAlign: 'center',
   // marginBottom: 7,
},
logo: {
  backgroundColor: 'rgba(0,0,0,0)',
  top: 30,
  opacity: 1,
  width: 20,
  height: 20,
  alignSelf: 'flex-end',
},

logo1: {
  backgroundColor: 'rgba(0,0,0,0)',
  top: 40,
  opacity: 1,
  width: 85,
  height: 85,
  alignSelf: 'center',
},
  
      });
          






