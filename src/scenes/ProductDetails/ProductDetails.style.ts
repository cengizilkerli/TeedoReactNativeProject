import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    paddingTop: 50,
    flex: 1,
    rowGap: 20
  },
  productContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    rowGap: 10,
  },
  productImage: {
    aspectRatio: 16 / 9,
  },
  productTitle: {
    fontSize: 16,
    color: '#003566',
  },
  productDescription: {
    fontSize: 12,
    color: '#353535',
  },  
  productPrice: {
    fontSize: 16,
    fontWeight: 700,
    color: '#ff9f1c',
  },
  productRating: {
    fontSize: 16,
    color: '#ff4365',
  },
  productBottomInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },  
  
});

export default styles;
