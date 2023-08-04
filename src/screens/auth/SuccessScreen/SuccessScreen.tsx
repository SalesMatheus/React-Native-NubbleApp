import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export function SuccessScreen() {
  function goBackToBegin() {
    //TODO: implement
    console.log('goBackToBegin');
  }

  return (
    <Screen>
      <Icon name="bellOn" />
      <Text preset="headingLarge" mt="s24">
        Title
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        Description
      </Text>

      <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
