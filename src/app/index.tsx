import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/474x/ee/62/2c/ee622cf15962071d5eaac19ac2dde0f6.jpg',
          }}
          style={styles.profileImage}
        />

        <View style={styles.onlineBadge} />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Profile Details */}
      <View style={styles.details}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Pasindu Katawala</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>
          ✉ PasinduKatawala@nsbm.ac.lk
        </Text>

        <Text style={styles.label}>Points</Text>
        <Text style={styles.value}>★ 0</Text>
      </View>

      {/* Floating Plus Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => Alert.alert('Add', 'Button pressed!')}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },

  header: {
    backgroundColor: '#000',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  profileSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 15,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
  },

  onlineBadge: {
    position: 'absolute',
    bottom: 5,
    right: '35%',
    width: 18,
    height: 18,
    backgroundColor: '#00C853',
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#fff',
  },

  divider: {
    height: 1,
    backgroundColor: '#555',
    marginHorizontal: 15,
  },

  details: {
    paddingHorizontal: 18,
    paddingTop: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 12,
  },

  value: {
    fontSize: 15,
    color: '#333',
    marginTop: 5,
  },

  floatingButton: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  plusText: {
    fontSize: 28,
    color: '#fff',
  },
});