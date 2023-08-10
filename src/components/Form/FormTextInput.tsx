import React from 'react';
import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {TextInput, TextInputProps} from '../TextInput/TextInput';

export function FormTextInput<FormType extends FieldValues>({
  name,
  rules,
  control,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessages={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
