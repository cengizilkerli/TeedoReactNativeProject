import { View, Text } from 'react-native';

import styles from './ProductDetails.style';
import useProductDetails from './hooks/useProductDetails.hook';

const ProductDetails = () => {
  const { } = useProductDetails();
  const { container } = styles;

  return (
    <View style={container}>

    </View>
  );
};

export default ProductDetails;
