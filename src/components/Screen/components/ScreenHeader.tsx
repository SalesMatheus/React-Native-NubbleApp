import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;

const ICON_SIZE = 20;
export function ScreenHeader({title, canGoBack}: Props) {
  const navigation = useNavigation();

  return (
    <Box
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      mb="s24">
      {canGoBack && (
        <TouchableOpacityBox onPress={navigation.goBack} flexDirection="row">
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && (
        <>
          <Text preset="headingSmall">{title}</Text>
          <Box width={ICON_SIZE} />
        </>
      )}
    </Box>
  );
}
