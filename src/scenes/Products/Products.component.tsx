import { View, Text } from 'react-native';

import styles from './Products.style';
import useProducts from './hooks/useProducts.hook';

const Home = () => {
  const { } = useProducts();
  const { container } = styles;

  return (
    <View style={container}>

    </View>
  );
};

export default Home;
