import {StyleSheet,View,Text,TextInput,TouchableOpacity,TextBox,ScrollView,Picker,Image} from 'react-native';
import React, {Component} from 'react';
//import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import {StackNavigator } from 'react-navigation';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker'; 
//import { Dropdown } from 'react-native-material-dropdown';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
//import RadioButton from 'radio-button-react-native';
const image1=require('./Image/logout.png');
import baseurl from './Baseurl';
 export default class form extends React.Component {
 
   
  static navigationOptions= ({navigation}) => ({
     
           title:'Add Stall',
           headerStyle: { backgroundColor: '#5E3750' },
           headerTitleStyle: { color: '#ffffff',fontSize:16 },
           headerRight: 
           <TouchableOpacity onPress={ () =>
            navigation.navigate('Login')}>
            <Image source={image1} style={{width: 23, height: 23.5,marginRight:10}} />
        </TouchableOpacity>,
           
      
     
  });
           
      
     

 
  constructor()
  {
    super();

    

    this.state={
    
       exibition_id : 'Select Exbhition Name',
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
       

       data:[],
      
    }
    
  }
 
  InsertDataToServer = () =>{
    
    
    const { exibition_id }  = this.state ;
    console.log("dddd",this.state.software);
    const { stall_no }  = this.state ;
    const { company_name }  = this.state ;
    const { domain}  = this.state ;
    const { company_email_id }  = this.state ;
    const { company_number }  = this.state ;
    const { website_link }  = this.state ;
    const { location }  = this.state ;
    const { contact_person_name }  = this.state ;
    const { person_email_id }  = this.state ;
    const { person_mobile_no }  = this.state ;
    const { special_requrirements }  = this.state ;
    const { minutes_of_meeting }  = this.state ;
    const { next_meeting_date }  = this.state ;
    const { software }  = this.state ;
    
   fetch(baseurl.AddStall, {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body:JSON.stringify ({
        exibition_id:exibition_id,
        stall_no:stall_no,
        company_name:company_name,
        domain:domain,
        company_email_id:company_email_id,
        company_number:company_number,
        website_link:website_link,
        location:location,
        contact_person_name:contact_person_name,
        person_email_id:person_email_id,
        person_mobile_no:person_mobile_no,
        special_requrirements:special_requrirements,
        minutes_of_meeting:minutes_of_meeting,
        next_meeting_date:next_meeting_date,
        //text:text,
        software:software
     })
    }).then((response)=>response.json())
    .then((responseJson)=>{
        alert("Stall Details successfully");
        this.props.navigation.navigate('Stall');
      
      
    },function(responseJson){
 
     console.log(responseJson);
 
    });
     
     
      }
    
     componentDidMount()
     {
       fetch(baseurl.Exbhitionlisting)
       .then((response)=>response.json())
       .then((responseJson)=>{
         data=responseJson;
        
         this.setState({
         
          data:responseJson,
        
           isLoading:false,
          
         
         })
   
       })
       .catch((error)=>{
           console.error(error);
       });
     }
   getsoft= (index,value) =>{
       //  console.log('software',this.state.software)
       //  console.log('Radio index is',index)
        // console.log('Radio value is',value)
        
         this.setState({
           software:value
         })
         //console.log('software',this.state.software)
   }
  render() 
  {  const { navigate } =this.props.navigation;
  const radio_props = [
    {label: 'Yes', value: 0,labelColor:'#ffffff' },
    {label: 'No', value: 0,labelColor:'#ffffff' }]
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
<ScrollView>
    <View style={{margin: 10}}>
    <Text style={styles.exhi}>Exbhition Name</Text>
    <View style={{borderWidth:1,borderColor:'#ccc',
    margin:10,
    }}>
    
    
    <Picker style={{ height: 35}}
    mode="dropdown"
   placeholder="select selecct"
    selectedValue={this.state.exibition_id}
    onValueChange={(exibition_id) => this.setState({exibition_id: exibition_id})}>

    

{ this.state.data.map((item, key)=>(
            <Picker.Item label={item.name} value={item.id} key={key} />)
            )}
  </Picker>
  
  </View>
      <Text style={styles.exhi}>Stall.no</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Stall.no' 
       onChangeText={stall_no => this.setState({stall_no})}/>
      <Text style={styles.exhi}>Company Name:</Text>
      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Company Name' 
      onChangeText={company_name => this.setState({company_name})}/> 
      <Text style={styles.exhi}>Company Email:</Text>
      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Company Email' 
      onChangeText={company_email_id => this.setState({company_email_id})}/>
      <Text style={styles.exhi}>Website:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Website'  
       onChangeText={website_link => this.setState({website_link})}/>
      <Text style={styles.exhi}>Location:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Location' 
       onChangeText={location => this.setState({location})}/>
      <Text style={styles.exhi}>Company Phone no:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Company Phone no:' 
       onChangeText={company_number => this.setState({company_number})}/> 
      <Text style={styles.exhi}>Domain:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Domain' 
       onChangeText={domain => this.setState({domain})}/>
      <Text style={styles.exhi}>Contact Person Name:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Contact Person Name'
       onChangeText={contact_person_name => this.setState({contact_person_name})} />
      <Text style={styles.exhi}>Mobile no:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Mobile No:' 
       onChangeText={person_mobile_no => this.setState({person_mobile_no})}/>
      <Text style={styles.exhi}>Contact Person Email:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Contact Person Email'
       onChangeText={person_email_id => this.setState({person_email_id})}/>
      <Text style={styles.exhi}>Special Requirement:</Text>
      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Special Requirement:' 
      onChangeText={special_requrirements => this.setState({special_requrirements})}/>
      <Text style={styles.exhi}>Minute of Meeting:</Text>
      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Minute of meeting' 
      onChangeText={minutes_of_meeting => this.setState({minutes_of_meeting})}/>
      <Text style={styles.exhi}>Next Meeting Date::</Text>
      <DatePicker style={styles.exhi}
       style={{left: 5,width: responsiveWidth(90)}}
        date={this.state.next_meeting_date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2005-05-01"
        maxDate="2070-12-30"
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
            marginLeft: 36       
            }
        
        }}
        onDateChange={(next_meeting_date) => {this.setState({next_meeting_date})}}
      />
      <Text style={styles.exhi}>Software</Text>
     
      <RadioGroup

      size={24}
      thickness={2}
      color='#9575b2'
      highlightColor='#ccc8b9'
    

     
      onSelect = {this.getsoft.bind(this)}
      onValueChange={this.state.software}
    >
      <RadioButton value={'yes'} >
        <Text>Yes</Text>
      </RadioButton>

      <RadioButton value={'no'}>
        <Text>No</Text>
      </RadioButton>
      </RadioGroup>
                
     
       
   </View>
  <View style={{backgroundColor:'transparent',justifyContent:'center',alignItems:'center',flex:0.4,bottom:10}}>
   <TouchableOpacity>
        <Text  onPress= { this.InsertDataToServer} style={styles.btntext}>Save</Text>
        </TouchableOpacity>
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
    marginLeft:10

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
    marginLeft:10
},

btntext:{
    color:'#ffffff',
    fontSize:18,
    backgroundColor: '#5E375D',
    alignItems: 'center',
    width:responsiveWidth(30),
    justifyContent:'center',
    textAlign:'center',
    borderRadius:20
},


})