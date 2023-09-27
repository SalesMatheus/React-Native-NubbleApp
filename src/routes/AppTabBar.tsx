import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppTabParamList, mapScreenToProps} from '@routes';
import {$shadowProps} from '@theme';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box
      backgroundColor="background"
      pt="s12"
      flexDirection="row"
      style={[{paddingBottom: bottom}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem = mapScreenToProps[route.name as keyof AppTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: route.name,
              merge: true,
              params: route.params,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.key}
            activeOpacity={1}
            flex={1}
            alignItems="center"
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text
              mt="s4"
              preset="paragraphCaption"
              semiBold
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
