import React ,{Component} from 'react';
import {
 
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  ListView,
  Navigator,
  Actions
  } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Stallscreen from './Stall/Stallscreen';
import Exhibitionscreen from './Stall/form/Exhibitionscreen';
import formscreen from './Stall/form/formscreen';
import form1screen from './Stall/form/form1screen';
import splashscreen from './Stall/form/splashscreen';
import Loginscreen from './Stall/form/Loginscreen';
import Loginscreen1 from './Stall/form/Loginscreen1';
import stallonescreen from './Stall/form/stallonescreen';
import userscreen from './Stall/form/userscreen';
import stalldetailsscreen from './Stall/stalldetailsscreen';


const Navigation=StackNavigator({
          // Splash:{screen:splashscreen},
          // Login:{screen:Loginscreen1},
          // Registration:{screen:Loginscreen},
           //Stalllist:{ screen: stalldetailsscreen},
           //User:{screen:userscreen},
          // Exhibition:{ screen:Exhibitionscreen },
          Stall:{ screen: Stallscreen},
          // Form:{screen:formscreen},
           //Form1:{screen:form1screen},
           Stallone:{screen:stallonescreen},

 
});

export default Navigation;

