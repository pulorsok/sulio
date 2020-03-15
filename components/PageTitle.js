import * as React from 'react';
import { Text } from 'react-native';

import * as Font from 'expo-font';
import Colors from '../constants/Colors';

export function PageTitle(props) {
  return <Text {...props} style={[
    {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: 48,
      color: '#111111',
      textAlign: 'left'
    }
  ]} />;
}
