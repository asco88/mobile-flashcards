import * as React from 'react';
import { Text, View } from 'react-native';
import TextButton from './TextButton';

export default function AddCard() {
  return (
    <View>
      <TextButton>
        <Text>
          Add Card
        </Text>
      </TextButton>
    </View>
  );
}