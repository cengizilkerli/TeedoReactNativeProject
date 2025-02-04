import { createDrawerNavigator } from '@react-navigation/drawer';
import Scenes from '_navigations/Scenes';
import Products from '_scenes/Products/Products.component';
import Profile from '_scenes/Profile/Profile.component';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (

        <Drawer.Navigator>

            <Drawer.Screen name= {Scenes.products} component={Products} />
            <Drawer.Screen name= {Scenes.profile} component={Profile} />

        </Drawer.Navigator>

    )

}

export default DrawerNavigator;
