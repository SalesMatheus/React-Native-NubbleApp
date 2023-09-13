import React from 'react';
import {
  RefreshControl as RNRefreshControl,
  RefreshControlProps,
} from 'react-native';

type props = RefreshControlProps;

export function RefreshControl({refreshing, onRefresh}: props) {
  return (
    <RNRefreshControl
      tintColor="#074C4E"
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
}
