import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Products.style';
import useProducts from './hooks/useProducts.hook';

const Products = () => {
  
  const { products, handleOnProductPress } = useProducts();
  const { container, productImage } = styles;
  const nagivation = useNavigation();

  return (

    <View style={container}>

          {
            products.map((product) => (
              <TouchableOpacity 
                key = {product.id.toString()}
                onPress={() => handleOnProductPress(product)}
                >
                
                 <Text>{product.title}</Text>
                 <Image style={productImage} source={{uri : product.image}} />
                 
              </TouchableOpacity>
          ))};
    
    </View>

  );

};

export default Products;
