import {
  ColorValue,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors, font, components} from '../Styles';

type Props = {
  color?: ColorValue;
  title?: string;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

const B3 = (prop: Props) => {
  return (
    <TouchableOpacity
      style={[components.center, components.b3, prop.style]}
      onPress={() => prop.onPress && prop.onPress()}
      activeOpacity={0.6}>
      <Text
        style={[
          font.caption,
          {color: prop.color || Colors.active, textTransform: 'uppercase'},
        ]}>
        {prop.title || 'Button'}
      </Text>
    </TouchableOpacity>
  );
};

export default B3;
