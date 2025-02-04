import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Scenes from '_navigations/Scenes';
import { ProductType } from '_types/product';
import { useCallback } from 'react';

const useProducts = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  const products = [
    {
      id: 1,
      title: 'Deneme ürün 1',
      price: 2499.99,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png',
      rating: 3.45,
    },
    {
      id: 2,
      title: 'Deneme ürün 2',
      price: 1899.89,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      image: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png',
      rating: 4.19,
    }
  ];

  const handleOnProductPress = useCallback(
    (item: ProductType) => {
      navigation.navigate(Scenes.productDetails, { product: item });
    },
    [navigation]
  );

  return {
    products,
    handleOnProductPress
  };

};

export default useProducts;
