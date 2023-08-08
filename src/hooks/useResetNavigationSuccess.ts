import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../routes/Routes';

export const useResetNavigationSuccess = () => {
  const navigation = useNavigation();

  function reset(params: RootStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params: params,
        },
      ],
    });
  }

  return {reset};
};
