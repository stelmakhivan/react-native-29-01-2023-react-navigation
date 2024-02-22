import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const AnimatedHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event: any) =>
          setSearchQuery(event.nativeEvent.text),
      },
    });
  }, [navigation]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 16,
  },
  box: {
    flex: 1,
    backgroundColor: '#afacac',
    padding: 16,
    paddingVertical: 48,
  },
});

export default AnimatedHeader;
