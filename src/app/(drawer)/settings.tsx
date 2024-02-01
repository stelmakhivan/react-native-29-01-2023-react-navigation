import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const SettingsScreen = () => {
  const isDark = useColorScheme() === 'dark';
  const screenTitleStyle = [
    styles.screenTitle,
    { color: isDark ? '#fff' : '#000' },
  ];

  return (
    <View style={styles.container}>
      <Text style={screenTitleStyle}>Settings Screen</Text>
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
});

export default SettingsScreen;
