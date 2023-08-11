import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {
  PasswordInput,
  PasswordInputProps,
} from '../PasswordInput/PasswordInput';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          onChangeText={field.onChange}
          value={field.value}
          errorMessages={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
}
