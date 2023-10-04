import {
  View,
  Image,
  TextInput,
  ViewStyle,
  TouchableOpacity,
  ColorValue,
} from 'react-native';
import React, {useEffect} from 'react';
import {font, components} from '../Styles';

type Props = {
  placeholder?: string;
  // multiline?: string;
  value?: string;
  active?: boolean;
  style?: ViewStyle | ViewStyle[];
  password?: boolean;
  rightIcon?: any;
  showIcon?: boolean;
  tint?: ColorValue;
  onChangeText?: (value: any) => void;
};

const Form1 = (prop: Props) => {
  const [active, setActive] = React.useState(false);
  const placeholder = 'Username';
  const visivle: any = require('../../../assets/icon/34/visible.png');
  const invisivle: any = require('../../../assets/icon/34/invisible.png');

  const [icon, setIcon] = React.useState(visivle || invisivle);

  const handle = () => {
    if (prop?.password !== undefined && prop?.password === true) {
      setActive(!active);
      console.log(!active);
    }
  };

  useEffect(() => {
    setIcon(active ? invisivle : visivle);
  }, [active]);
  return (
    <View style={[components.form1, prop.style]}>
      <TextInput
        secureTextEntry={active}
        editable={prop.active && true}
        style={[font.body, {width: '90%'}]}
        placeholder={prop.placeholder || placeholder}
        onChangeText={prop.onChangeText}
      />
      <TouchableOpacity
        style={{display: prop?.showIcon ? 'flex' : 'none'}}
        activeOpacity={0.9}
        onPress={handle}>
        <Image
        style={{tintColor: prop?.tint}}
          source={
            prop?.password
              ? icon
              : prop?.rightIcon || require('../../../assets/icon/34/phone.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default Form1;
