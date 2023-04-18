import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native'
import React, { useEffect, useState, useContext } from 'react'

import StateContext from '../../context/StateContext'

const Sos = () => {
  const { Logout } = useContext(StateContext)

  return (
    <SafeAreaView>
      <View>
        <View style={styles.logoutDiv}>
          <TouchableOpacity style={styles.logout} onPress={() => Logout()}>
            <Image
              source={require('../../assets/logout-icon.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logoutDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
  },
  logout: {
    backgroundColor: '#c6b5ff',
    padding: 15,
    borderRadius: 100,
  },
})

export default Sos
