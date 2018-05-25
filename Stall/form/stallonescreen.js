import {StyleSheet,View,Text,TextInput,TouchableOpacity,TextBox,ScrollView,Picker,PixelRatio,Image} from 'react-native';
import React, {Component} from 'react';
import {StackNavigator } from 'react-navigation';
import DatePicker from 'react-native-datepicker'; 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import ImagePicker from 'react-native-image-picker';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import baseurl from './Baseurl';
const image1=require('./Image/phj.png');
const image2=require('./Image/loogout.png');
const image3=require('./Image/git.png');
export default class Stallone extends React.Component {
    static navigationOptions={
        header:null,
      };
      constructor(props)
      {
        
        super(props);
        console.log("User details",this.props.navigation.state.params.id)
        
      this.state={
        isLoading:true,
     // dataSource:new 
     //ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2}),
     data:[],
    // currentstall:null,
  
     exibition_id : '',
     stall_no:'',
     company_name:'',
     domain:'',
     company_email_id:'',
     company_number:'',
     website_link:'',
     location:'',
     contact_person_name:'',
     person_email_id:'',
     person_mobile_no:'',
     special_requrirements:'',
     minutes_of_meeting:'',
     next_meeting_date:'',
     software:'',
     stall_id:this.props.navigation.state.params.id,
  
     
      }
    }
    componentDidMount()
    {
      //const {stall_id}=this.state.stall_id;
      fetch(baseurl.StalllId,{

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
        stall_id: this.state.stall_id,
     
       // password: UserPassword
     
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson[0].id)
            this.setState({
              stalls_id:responseJson[0].id,
              //exibition_id :responseJson[0].exibition_id,
              stall_no:responseJson[0].stall_no,
              company_name:responseJson[0].company_name,
              domain:responseJson[0].domain,
              company_email_id:responseJson[0].company_email_id,
              company_number:responseJson[0].company_number,
              website_link:responseJson[0].website_link,
              location:responseJson[0].location,
              contact_person_name:responseJson[0].contact_person_name,
              person_email_id:responseJson[0].person_email_id,
              person_mobile_no:responseJson[0].person_mobile_no,
              special_requrirements:responseJson[0].special_requrirements,
              minutes_of_meeting:responseJson[0].minutes_of_meeting,
              next_meeting_date:responseJson[0].next_meeting_date,
              software:responseJson[0].software,
            })
     
          console.log(responseJson)
          }).catch((error) => {
            console.error(error);
          });
     
     
      }
render(){
    const {navigate} =this.props.navigation;
    
    
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
  
     
  
  
        <ScrollView>
        <View style={styles.lists}>
   
   <View style={{display:'none'}}>
   <Text style={styles.exhi}>Stall.id</Text>
   <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Stall id' 
       type="hidden"
      //value={this.state.stalls_id}
     value= {`${this.state.stalls_id}`} 
      />
      </View>
      <Text style={styles.exhi}>Stall.no:{this.state.stall_no}</Text>
    
      <Text style={styles.exhi}>Company Name:{this.state.company_name}</Text>
     
      <Text style={styles.exhi}>Company Email:{this.state.company_email_id}</Text>
     
       <Text style={styles.exhi}>Company Phone no:{this.state.company_number}</Text>
      
         <Text style={styles.exhi}>Domain:{this.state.domain}</Text>
      
      <Text style={styles.exhi}>Website:{this.state.website_link}</Text>
     
    
      <Text style={styles.exhi}>Contact Person Name:{this.state.contact_person_name}</Text>
     
      <Text style={styles.exhi}>Mobile no:{this.state.person_mobile_no}</Text>
   
      <Text style={styles.exhi}>Contact Person Email:{this.state.person_email_id}</Text>
     
      <Text style={styles.exhi}>Special Requirement:{this.state.special_requrirements}</Text>
     
      <Text style={styles.exhi}>Minute of Meeting:{this.state.minutes_of_meeting}</Text>
      
      <Text style={styles.exhi}>Next Meeting Date:{this.state.next_meeting_date}</Text>
     
      <Text style={styles.exhi}>Software:{this.state.software}</Text>
      
      
      
   </View>
  


 
  
  
          </ScrollView>
  
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