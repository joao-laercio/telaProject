import React from 'react';
import { Text, SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import { Input, Icon } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { ListItem } from '@rneui/themed';


export default function App() {
    const Separator = () => {
        return <View style={styles.separator} />;
      }
  return (
    <SafeAreaView style={styles.container}>
    <>


        <View style={styles.ViewRow}>
            <View style={styles.View2}>
                <Icon name="menu" size={30} color="#900" />
            </View>
                
            <View style={styles.View1}>
            
            <Text style={styles.text2}>Meu Perfil</Text>
            
            
            
            </View>
        
            
        
                <Input
                placeholder=''
                />

                <Input
                placeholder='Nome'
                
                />

                <Input
                placeholder='E-mail'
                
                />
        </View>
        
    
  </>

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    backgroundColor:'white',
  },
  ViewRow: {
    marginTop:-200,
    flexWrap:'wrap',
    
  },
  View2: {
    backgroundColor:'red',
    justifyContent: '',
    
  },



  texto2:{
    marginLeft:30,
    marginBottom:10,
    color:"white",
    
  },
  text2:{
    color:'#03AD99',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:110,
    fontSize: 35,
    
    
  },
 
});

