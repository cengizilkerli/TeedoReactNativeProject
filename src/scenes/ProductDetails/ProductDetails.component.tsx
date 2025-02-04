import { View, Text, Image } from 'react-native';

import styles from './ProductDetails.style';
import useProductDetails from './hooks/useProductDetails.hook';
import { useRoute } from '@react-navigation/native';
import { ProductType } from '_types/product';

const ProductDetails = () => {
  const route = useRoute();
  
  const productDataFromRoute = route.params as {product : ProductType};
  const { title, description, image, price, rating } = productDataFromRoute.product

  const { } = useProductDetails();
  const { productContainer, productImage, productTitle, productDescription, productBottomInfoContainer,productPrice,productRating } = styles;

  return (
    <View style={productContainer}>
      <Image style={productImage} source={{uri : image}} />
      <Text style={productTitle}>{ title }</Text>
      <Text style={productDescription}>{ description }</Text>
      
      <View style={productBottomInfoContainer}>
        <Text style={productPrice}>{price}</Text>
        <Text style={productRating}>{rating}</Text>
      </View>
    </View>
  );
};

export default ProductDetails;
