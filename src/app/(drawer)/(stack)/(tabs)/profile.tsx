import { useFocusEffect } from 'expo-router';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  TextInput,
  TextInputProps,
} from 'react-native';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  fetchUserById,
  selectFirstName,
  selectFullName,
  selectLastName,
  setFirstName,
  setLastName,
} from '@/store/user/userSlice';

const ProfileScreen = () => {
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const fullName = useAppSelector(selectFullName);

  const dispatch = useAppDispatch();

  const isDark = useColorScheme() === 'dark';

  const textStyle = { color: isDark ? '#fff' : '#000' };
  const screenTitleStyle = [styles.screenTitle, textStyle];

  const handleFirstNameChange: TextInputProps['onChangeText'] = (text) =>
    dispatch(setFirstName(text));

  useFocusEffect(
    useCallback(() => {
      const promise = dispatch(fetchUserById(1));
      return () => {
        promise.abort();
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={screenTitleStyle}>Profile Screen</Text>
      <Text style={textStyle}>
        Name: {firstName} {lastName}
      </Text>
      <Text style={textStyle}>Full Name: {fullName}</Text>
      <TouchableOpacity>
        <Text style={textStyle}>Edit Profile</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={handleFirstNameChange}
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={(text) => dispatch(setLastName(text))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 16,
    fontSize: 20,
    padding: 4,
    borderWidth: 1,
  },
});

export default observer(ProfileScreen);
