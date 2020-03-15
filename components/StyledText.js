import * as React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
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