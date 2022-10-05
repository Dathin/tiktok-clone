import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';
import { View } from 'react-native';

const Pontos: React.FC = () => {

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
};

export default Pontos;
