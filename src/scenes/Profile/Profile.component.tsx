import { View, Text } from 'react-native';

import useProfile from './hooks/useProfile.hook';

const Profile = () => {
  const { count, setCount } = useProfile();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Profile;