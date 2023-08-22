import React from 'react';

import {Screen, Icon, Text, Button} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  navigation,
  route,
}: AuthScreenProps<'SuccessScreen'>) {
  const {title, description, icon} = route.params;

  function goBackToBegin() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen>
      <Icon {...icon} size={45} />
      <Text preset="headingLarge" mt="s24">
        {title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {description}
      </Text>

      <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
