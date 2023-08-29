import React from 'react';

import {Icon, IconProps, Text, TouchableOpacityBox} from '@components';

interface ItemProps {
  onPress?: () => void;
  marked?: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  counter: number;
}

export function Item({counter, onPress, icon, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      gap="s4"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      <Text preset="paragraphSmall" bold>
        {counter > 0 ? counter : undefined}
      </Text>
    </TouchableOpacityBox>
  );
}
