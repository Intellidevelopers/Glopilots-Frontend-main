import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Octicons } from '@expo/vector-icons';

const Header = ({ navigation, title, rightNavLabel, RightFun }) => {
  const canGoBack = navigation.canGoBack();

  return (
    <View style={styles.container}>
      <View style={styles.leftNavWrapper}>
        {canGoBack && (
          <Octicons
            onPress={() => navigation.goBack()}
            style={{ marginRight: 15 }}
            name="chevron-left"
            size={20}
            color="#0D1317"
          />
        )}

        <Text style={styles.title}>{title}</Text>
      </View>

      {rightNavLabel && (
        <Text onPress={() => RightFun()} style={styles.title}>
          {rightNavLabel}
        </Text>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#adb5bd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    color: '#0E1317',
  },
  leftNavWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
