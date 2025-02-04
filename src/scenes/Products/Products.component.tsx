import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Products.style';
import useProducts from './hooks/useProducts.hook';

const Products = () => {
  
  const { products, handleOnProductPress } = useProducts();
  const { container, productContainer, productImage, productTitle, productDescription, productPrice, productRating, productBottomInfoContainer } = styles;
  const nagivation = useNavigation();

  return (

    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ rowGap: 20, padding: 10 }}
      renderItem={({ item }) => {
        return (

          <View key={item.id} style={productContainer}>
            <TouchableOpacity 
              key={item.id}
              onPress={() => handleOnProductPress(item)}
              >

                <Image
                  source={{ uri: item.image }}
                  style={productImage}
                />
                <Text style={productTitle}>{item.title}</Text>
                <Text style={productDescription}>{item.description}</Text>
                  
                <View style={productBottomInfoContainer}>
                  <Text style={productPrice}>{item.price}</Text>
                  <Text style={productRating}>{item.rating}</Text>
                </View>

              </TouchableOpacity>
          </View>
        );
      }}
    />
  );

};

export default Products;
