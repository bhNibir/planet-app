import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from './../theme/colors';
import PlanetHeader from '../components/planet-header';
import { PLANET_LIST } from './../data/planet-list';
import Text from '../components/text/Text';
import { spacing } from './../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     <PlanetHeader/>
     <FlatList

      contentContainerStyle={styles.flatList}
      data={PLANET_LIST}
      keyExtractor={(item)=> item.name}
      renderItem={
        ({item})=>{
           return (
               <Pressable onPress={()=> navigation.navigate('Details')} style={styles.item}>
                   <View style={{ flexDirection: 'row', alignItems:'center'}}>
                        <View style={[styles.circle, { backgroundColor: item.color}]}/>
                        <Text preset='h3' style={styles.itemName}>{item.name}</Text>
                    </View>
                   <AntDesign name="right" size={18} color={colors.white} />
               </Pressable>
           )
        }
      }
     ItemSeparatorComponent={()=> <View style={styles.separator} />}
     />
     
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    flatList:{
        padding: spacing[4]
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[3]
    },
    itemName:{
        textTransform: 'uppercase',
        marginLeft: spacing[4]
    },
    circle:{
        width: 30,
        height: 30,
        borderRadius: 25
    },
    separator:{
        borderBottomColor: colors.white,
        borderBottomWidth: 0.5,
    }
})
