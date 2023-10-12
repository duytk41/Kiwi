import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './src/components/customs/Styles'
import FeaturePartner from './src/components/main/screens/appTab/FeaturePartner'
import Search from './src/components/main/screens/appTab/Search'
import Orders from './src/components/main/screens/appTab/Orders'
import Cart from './src/components/main/screens/appTab/Cart'
import RootNavigation from './src/components/main/navigation/RootNavigation'
import CreateRestaurant from './src/test/CreateRestaurant'
import CreateMenu from './src/test/CreateMenu'
import AccountSetting from './src/components/main/screens/appTab/AccountSetting'
import CommonHeader from './src/components/customs/Button/CommonHeader'
import AccountStackNavigation from './src/components/main/navigation/AccountStackNavigation'
import AppNavitgation from './src/components/main/navigation/AppNavitgation'
import ProductTitle from './src/test/ProductTitle'
import DeliveryInfo from './src/test/DeliveryInfo'
import RateList from './src/test/RateList'

const App = () => {
  return (
    <View style={[styles.container]}>
      {/* <RootNavigation/> */}
      {/* <CreateMenu/> */}
      {/* <CreateRestaurant/> */}
      {/* <RateList/> */}
      {/* <ProductTitle/> */}
      <AccountStackNavigation/>
    </View>
  )
}

export default App