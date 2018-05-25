import React,{Component} from 'react';
import {StyleSheet,TextInput,View,Alert,Button,Text,Image,TouchableOpacity,ScrollView,ListView} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const image1=require('./Image/phj.png');
const image2=require('./Image/loogout.png');
const image3=require('./Image/git.png');
import baseurl from './Baseurl';
export default class Login extends Component {
  static navigationOptions =
  {
     header:null,
  };
    constructor(props) {
        
           super(props)
        
           this.state = {
        
             username: '',
             password: ''
        
           }
        
         }
         UserLoginFunction = () =>{
            
            const { username }  = this.state ;
            const { password }  = this.state ;
            
            
            fetch(baseurl.Login, {
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
             body:JSON.stringify({
            
                username: username,
            
                password: password
            
             })  
            }).then((response)=>response.json())
            .then((responseJson)=>{
              if(responseJson ==='Admin')
              {
                this.props.navigation.navigate('Exhibition');
       
              } else if(responseJson ==='Data')
              {
                this.props.navigation.navigate('Stalllist');
              }
              else{
                alert("Invalid username and Password exists");
                console.log(responseJson);
              }
              
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
                     
                     
                     placeholder="Enter Username"
            
                     onChangeText={username => this.setState({username})}
            
                     
                     underlineColorAndroid='transparent'
            
                     style={styles.TextInputStyleClass}
                   />

                    <TextInput
                     
                     
                     placeholder="Enter Password"
                     secureTextEntry={true}
                     onChangeText={password => this.setState({password})}
            
                    
                     underlineColorAndroid='transparent'
            
                     style={styles.TextInputStyleClass}
                   />       
                     </View>

                     <View style={{justifyContent:'center',alignItems:'center'}}>
                          <View  style={styles.button}>
                            <TouchableOpacity>
                            <Text  onPress= { this.UserLoginFunction } style={styles.btntext}>Login</Text>
                            </TouchableOpacity>
                            </View>

                            <View style={{marginTop:20}}>
                            
                            <Text  style={{}}>If not registered?<Text style={{color:'#5E375D'}}  onPress= { ()=> navigate('Registration') }> Sign up
                            </Text>
                            </Text>
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
        borderRadius: 15,
        borderColor:'#676767'
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
        
        backgroundColor: '#5E375D',
        justifyContent:'center',
        borderRadius:20,
        height: 40,
        width:180,
        marginTop:30,
       
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
      width: 95,
      height: 95,
      alignSelf: 'center',
    },
      
          });