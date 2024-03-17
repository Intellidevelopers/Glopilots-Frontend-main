import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Head from '../Head';

const Terms = ({navigation}) => {
  const paragraphs = [
    { title: 'GloPiots Platform', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nibh id diam aliquet pharetra. Morbi non faucibus metus. In cursus commodo mauris vel tincidunt.Proin sit amet ipsum ac orci aliquet vestibulum. Donec fringilla mauris sed eros scelerisque, id scelerisque enim fermentum. Donec bibendum, risus ac volutpat aliquam, ligula tellus aliquet dui, vel fermentum purus nisi ut velit. Proin aliquet metus ut sollicitudin lobortis. Vivamus vitae ultrices tellus. Nulla facilisi. Ut elementum dolor non risus consectetur, ac molestie metus ultrices. Duis ultricies mauris in massa tempus consectetur. Praesent pellentesque lacus a ipsum euismod dignissim.' },
    { title: 'Modification of the Agreement', text: 'Proin sit amet ipsum ac orci aliquet vestibulum. Donec fringilla mauris sed eros scelerisque, id scelerisque enim fermentum. Donec bibendum, risus ac volutpat aliquam, ligula tellus aliquet dui, vel fermentum purus nisi ut velit. Proin aliquet metus ut sollicitudin lobortis. Vivamus vitae ultrices tellus. Nulla facilisi. Ut elementum dolor non risus consectetur, ac molestie metus ultrices.' },
    { title: 'Eligibility', text: 'Aliquam at volutpat lacus, ut tempor sem. Fusce sollicitudin ex a urna vulputate faucibus. In nec lorem vitae arcu dapibus viverra non vitae ipsum. Nulla cursus metus erat, non cursus elit commodo vitae. Suspendisse tincidunt in nisi non finibus. Nunc interdum sapien non odio tincidunt faucibus.' },
    { title: 'Charges', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nibh id diam aliquet pharetra. Morbi non faucibus metus. In cursus commodo mauris vel tincidunt.Proin sit amet ipsum ac orci aliquet vestibulum. Donec fringilla mauris sed eros scelerisque, id scelerisque enim fermentum. Donec bibendum, risus ac volutpat aliquam, ligula tellus aliquet dui, vel fermentum purus nisi ut velit. Proin aliquet metus ut sollicitudin lobortis. Vivamus vitae ultrices tellus. Nulla facilisi. Ut elementum dolor non risus consectetur, ac molestie metus ultrices. Duis ultricies mauris in massa tempus consectetur. Praesent pellentesque lacus a ipsum euismod dignissim.' },
    { title: 'Driver Payments', text: 'Proin sit amet ipsum ac orci aliquet vestibulum. Donec fringilla mauris sed eros scelerisque, id scelerisque enim fermentum. Donec bibendum, risus ac volutpat aliquam, ligula tellus aliquet dui, vel fermentum purus nisi ut velit. Proin aliquet metus ut sollicitudin lobortis. Vivamus vitae ultrices tellus. Nulla facilisi. Ut elementum dolor non risus consectetur, ac molestie metus ultrices.' },
    { title: 'GloPilots Communication', text: 'Aliquam at volutpat lacus, ut tempor sem. Fusce sollicitudin ex a urna vulputate faucibus. In nec lorem vitae arcu dapibus viverra non vitae ipsum. Nulla cursus metus erat, non cursus elit commodo vitae. Suspendisse tincidunt in nisi non finibus. Nunc interdum sapien non odio tincidunt faucibus.' },
    { title: 'Your Information', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nibh id diam aliquet pharetra. Morbi non faucibus metus. In cursus commodo mauris vel tincidunt.Proin sit amet ipsum ac orci aliquet vestibulum. Donec fringilla mauris sed eros scelerisque, id scelerisque enim fermentum. Donec bibendum, risus ac volutpat aliquam, ligula tellus aliquet dui, vel fermentum purus nisi ut velit. Proin aliquet metus ut sollicitudin lobortis. Vivamus vitae ultrices tellus. Nulla facilisi. Ut elementum dolor non risus consectetur, ac molestie metus ultrices. Duis ultricies mauris in massa tempus consectetur. Praesent pellentesque lacus a ipsum euismod dignissim.' },
    { title: 'Promotion, Referrals and Loyalty', text: 'Proin sit amet ipsum ac orci aliquet vestibulum. Donec fringilla mauris sed eros scelerisque, id scelerisque enim fermentum. Donec bibendum, risus ac volutpat aliquam, ligula tellus aliquet dui, vel fermentum purus nisi ut velit. Proin aliquet metus ut sollicitudin lobortis. Vivamus vitae ultrices tellus. Nulla facilisi. Ut elementum dolor non risus consectetur, ac molestie metus ultrices.' },
    { title: 'Restricted Activities', text: 'Aliquam at volutpat lacus, ut tempor sem. Fusce sollicitudin ex a urna vulputate faucibus. In nec lorem vitae arcu dapibus viverra non vitae ipsum. Nulla cursus metus erat, non cursus elit commodo vitae. Suspendisse tincidunt in nisi non finibus. Nunc interdum sapien non odio tincidunt faucibus.' },
    { title: 'Intellectual Property', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nibh id diam aliquet pharetra. Morbi non faucibus metus. In cursus commodo mauris vel tincidunt.Proin sit amet ipsum ac orci aliquet vestibulum. Donec fringilla mauris sed eros scelerisque, id scelerisque enim fermentum. Donec bibendum, risus ac volutpat aliquam, ligula tellus aliquet dui, vel fermentum purus nisi ut velit. Proin aliquet metus ut sollicitudin lobortis. Vivamus vitae ultrices tellus. Nulla facilisi. Ut elementum dolor non risus consectetur, ac molestie metus ultrices. Duis ultricies mauris in massa tempus consectetur. Praesent pellentesque lacus a ipsum euismod dignissim.' },
   
  ];

  return (
    <View style={styles.container}>
      <Head title="Terms of Service" navigation={navigation}/>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>GloPilots Terms of Service</Text>
        <Text style={styles.text}>Last updated: December 15, 2022</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus nibh id diam aliquet pharetra. Morbi non faucibus metus. In cursus commodo mauris vel tincidunt. Duis ultricies mauris in massa tempus consectetur. Praesent pellentesque lacus a ipsum euismod dignissim.</Text>
          {paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.text}>
              <Text style={styles.title} >{`${index + 1}. ${paragraph.title}: `}</Text>
              {'\n'} {/* New line */}
              <Text>{paragraph.text}</Text>
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 100,

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
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
   
    marginBottom: 20,
   
  },

});

export default Terms;
