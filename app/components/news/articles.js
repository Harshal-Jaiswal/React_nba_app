
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Moment from 'moment';
import LogoTitle from '../../utils/logo';


class ArticleComponent extends Component {
  static navigationOptions = {

    headerTitleAlign: 'center',
    headerTitle: () => (<LogoTitle />),
    headerStyle: {
      backgroundColor: '#001338'
    },
    headerTintColor: 'blue',
  }

  formatText(content){
    const text = content.replace(/<p>/g, "  ").replace(/<\/p>/g, "");

    return text;
  }

  render() {
   
    const params =this.props.navigation.state.params;

    return (
      <View >
        <StatusBar
          backgroundColor='#001338'
          barStyle='light-content'
        />
        <ScrollView style={{ backgroundColor: '#f0f0f0' }}>
          <Image 
            style={{height:250}}
            source ={{uri:params.image}}
            resizeMode ="cover"
          />

          <View style={styles.articleContainer}>
            <Text style={styles.articleTitle}>
              {params.title}
            </Text>
            <Text style={styles.articleData}>
              {params.team} - Posted at {Moment(params.date).format('d MMMM')}
            </Text>
          </View>
          <View style={styles.articleContent}>
            <Text style ={styles.articleText}>
              {this.formatText(params.content)}
            </Text>
          </View>
        </ScrollView >
      </View>
    );
  }
};

const styles = StyleSheet.create({
  articleContainer: {
    padding:10
  },
  articleTitle:{
    fontSize:23,
    color:'#323232',
    fontFamily:'Roboto-Bold'
  },
  articleData:{
    fontSize:12,
    color:'#828282', 
    fontFamily:'Roboto-Light'
  },
  articleContent:{
    marginTop:30,

  },
  articleText:{
    fontSize:14,
    color:'#828282',
    lineHeight:20,
    fontFamily:'Roboto-Light'
  }
});

export default ArticleComponent;
