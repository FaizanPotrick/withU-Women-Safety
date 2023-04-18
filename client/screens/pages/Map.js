import MapView, { Circle, Marker } from 'react-native-maps'
import React, { useState, useEffect, useContext, useRef } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const Map = () => {
  const [location, setLocation] = useState([
    {
      latitude: 18.9319194,
      longitude: 73.1615285,
    },
  ])

  const mapViewRef = useRef(null)

  const relocateToUserLocation = () => {
    mapViewRef.current.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    })
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 130,
            right: 30,
            backgroundColor: 'white',
            width: 60,
            height: 60,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={relocateToUserLocation}
        >
          <Image
            source={require('../../assets/icons/precision.png')}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <MapView
          ref={mapViewRef}
          style={{
            width: '100%',
            height: '100%',
          }}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          provider="google"
        ></MapView>
      </>
    </View>
  )
}

export default Map
