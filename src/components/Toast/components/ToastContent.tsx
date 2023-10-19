import React from 'react';
import {Dimensions} from 'react-native';

import {Toast, ToastType} from '@service';

import {Box, BoxProps, Icon, IconProps, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({toast}: Props) {
  const type: ToastType = toast?.type || 'success';

  return (
    <Box {...$boxStyle} style={[$shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{flexShrink: 1}} preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    name: 'checkRound',
    color: 'success',
    size: 32,
  },
  error: {
    name: 'errorRound',
    color: 'error',
    size: 32,
  },
};

const $boxStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  bg: 'background',
  gap: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
