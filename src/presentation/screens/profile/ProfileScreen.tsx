import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';
import {useCounterStore} from '../../store/counter-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);
  const count = useCounterStore(state => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>{count}</Text>

      <Pressable
        onPress={() => useProfileStore.setState({name: 'Juan David'})}
        style={styles.primaryButton}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        onPress={() => useProfileStore.setState({email: 'juandavid@mail.com'})}
        style={styles.primaryButton}>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        onPress={() => changeProfile('John Doe', 'johndoe@mail.com')}
        style={styles.primaryButton}>
        <Text>Resetear valores</Text>
      </Pressable>
    </View>
  );
};
