import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import topics from '../../data/data_programming_languages.js';
import ListItems from '../../components/ListItems.jsx';

export default function MyProgrammingLanguages() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    
    setTimeout(() => {
      setRefreshing(false); 
    }, 1000); 
  };

  return (
    <View style={styles.container}>
      <FlatList
       data={topics}
       renderItem={({item}) => {
       return (
        <ListItems topic={item.topic} description={item.description} logo={item.logo}/>
        );
      }}
       keyExtractor={(item) => item.id}
       refreshing={refreshing}
       onRefresh={onRefresh}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});