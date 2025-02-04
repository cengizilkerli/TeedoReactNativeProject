import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavBarStack from '_navigations/BottomTabs/BottomNavbarStack';
import Scenes from '_navigations/Scenes';
import StackNames from '_navigations/StackNames';
import Products from '_scenes/Products/Products.component';
import Profile from '_scenes/Profile/Profile.component';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (

        <Drawer.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >

            <Drawer.Screen name= {StackNames.bottomNavBarStack} component={BottomNavBarStack} options={{ title: 'Ana Sayfa' }}  />
            <Drawer.Screen name= {Scenes.products} component={Products} options={{ title: 'Ürünler' }}  />
            <Drawer.Screen name= {Scenes.profile} component={Profile} options={{ title: 'Profil' }}  />

        </Drawer.Navigator>

    )

}

export default DrawerNavigator;
