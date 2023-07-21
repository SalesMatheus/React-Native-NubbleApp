import React from 'react';
import {useTheme} from '@shopify/restyle';
import {ActivityIndicator, TouchableOpacity} from 'react-native';

import {Theme} from '../../theme/theme';

import {Text} from '../Text/Text';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#FFF'}}>
          {title}
        </Text>
      )}
    </Box>
  );
}
