/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  SectionList,
  View,
  Button,
  Text,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Simon');
  const [Items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 27'},
    {name: 'Item 78'},
  ]);
  const SECTION_DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ];
  const [Refreshing, setRefreshing] = useState(false);
  const onRefreshHandler = () => {
    setRefreshing(true);
    const index = Items.length + 1;
    setItems([...Items, {name: `Items ${index}`}]);
    setRefreshing(false);
  };
  const renderFlatListItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={SECTION_DATA}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={Items}
    //   renderItem={renderFlatListItem}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefreshHandler}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl refreshing={Refreshing} onRefresh={onRefreshHandler} />
    //   }>
    //   {Items.map(item => (
    //     <View style={styles.item} key={item.key}>
    //       <Text style={styles.text}>{item.value}</Text>
    //     </View>
    //   ))}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
