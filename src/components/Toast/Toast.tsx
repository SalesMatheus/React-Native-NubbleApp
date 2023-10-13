import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast, useToastService} from '@service';

import {Box, BoxProps, Icon, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;
const TOAST_DURATION = 3000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || TOAST_DURATION);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkRound" size={32} />
      <Text style={{flexShrink: 1}} preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  bg: 'background',
  gap: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
