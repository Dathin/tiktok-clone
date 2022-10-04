import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import styles from './styles';
import { View } from 'react-native';

const Discover: React.FC = () => {

  const initialRegion = {
    latitude: -23.0860733,
    longitude: -47.2037038,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const markers = [
    {
      coordinate: { 
        latitude : -23.082396449189428,
        longitude : -47.20566714731194
      },
      title: 'Ponto Sumerbol'
    },
    {
      coordinate: { 
        latitude : -23.08768070952407,
        longitude : -47.22489564034219
      },
      title: 'Ponto do Parque'
    },
    {
      coordinate: { 
        latitude : -23.078719617486026,
        longitude : -47.21610475679357
      },
      title: 'Ponto do Centro'
    },
    {
      coordinate: { 
        latitude : -23.11727758330108,
        longitude : -47.23387456694182
      },
      title: 'Ponto do Sol'
    }
  ]

  return (
    <View style={styles.container} >
      <MapView style={styles.map}     initialRegion={initialRegion}>
      {markers.map(({coordinate, title}, index) => (
        <Marker
            key={index}
            coordinate={coordinate}
            title={title}
          />
      ))}
      </MapView>
    </View>
  );
  // const [search, setSearch] = useState('');
  // return (
  //   <Container>
  //     <Header>
  //       <Search>
  //         <AntDesign
  //           style={{
  //             paddingRight: 10,
  //           }}
  //           name="search1"
  //           size={18}
  //           color="#838383"
  //         />
  //         <Input
  //           placeholder="Search"
  //           value={search}
  //           returnKeyType="search"
  //           onChangeText={text => setSearch(text)}
  //         />
  //       </Search>
  //       {/* <Ionicons name="md-qr-scanner" size={25} color="black" /> */}
  //     </Header>
  //   </Container>
  // );
};

export default Discover;
