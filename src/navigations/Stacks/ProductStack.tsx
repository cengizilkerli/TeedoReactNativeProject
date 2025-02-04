import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scenes from '_navigations/Scenes';
import ProductDetails from '_scenes/ProductDetails/ProductDetails.component';
import Products from '_scenes/Products/Products.component'

const ProductsStackNavigator = createNativeStackNavigator();

const ProductsStack = () => {

    return (

        <ProductsStackNavigator.Navigator>

            <ProductsStackNavigator.Screen name= {Scenes.products} component= { Products } />
            <ProductsStackNavigator.Screen name= {Scenes.productDetails} component= { ProductDetails } />

        </ProductsStackNavigator.Navigator>

    )

}

export default ProductsStack