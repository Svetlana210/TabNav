import {Button} from 'react-native';

const HelpButton = ({navigation}) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Button title="Help" onPress={() => navigation.navigate('Help')} />;
};
export default HelpButton;
