import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Head from '../Head';

const Privacy = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Head title="Terms of Service" navigation={navigation}/>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Terms of Service</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nibh id diam aliquet pharetra.
            Morbi non faucibus metus. In cursus commodo mauris vel tincidunt. Duis ultricies mauris in massa tempus
            consectetur. Praesent pellentesque lacus a ipsum euismod dignissim.
          </Text>
          <Text style={styles.text}>
            Proin sit amet ipsum ac orci aliquet vestibulum. Donec fringilla mauris sed eros scelerisque, id
            scelerisque enim fermentum. Donec bibendum, risus ac volutpat aliquam, ligula tellus aliquet dui,
            vel fermentum purus nisi ut velit. Proin aliquet metus ut sollicitudin lobortis. Vivamus vitae
            ultrices tellus. Nulla facilisi. Ut elementum dolor non risus consectetur, ac molestie metus ultrices.
          </Text>
          <Text style={styles.text}>
            Aliquam at volutpat lacus, ut tempor sem. Fusce sollicitudin ex a urna vulputate faucibus. In nec lorem
            vitae arcu dapibus viverra non vitae ipsum. Nulla cursus metus erat, non cursus elit commodo vitae.
            Suspendisse tincidunt in nisi non finibus. Nunc interdum sapien non odio tincidunt faucibus.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Privacy;
