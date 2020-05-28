
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LogoTitle from '../../utils/logo';
import { connect } from 'react-redux';
import { getNews } from '../../store/actions/news_action';
import Moment from 'moment';

class NewsComponent extends Component {
  static navigationOptions = {

    headerTitleAlign: 'center',
    headerTitle: () => (<LogoTitle />),
    headerStyle: {
      backgroundColor: '#001338'
    },
    headerTintColor: 'blue',
  }

  componentDidMount() {
    this.props.dispatch(getNews());
  }

  renderArticle = (news) => (
   
    news.articles ?

      news.articles.map((item, i) => {
       
        return (
          <TouchableOpacity key={i}
          onPress={()=>this.props.navigation.navigate('Article',{
            ...item
          } )}
          >
            <View style={styles.cardContainer}>
              <View>
                <Image
                  style={{ height: 150, justifyContent: 'space-around' }}
                  source={{ uri: item.image }}

                  resizeMode='cover'
                />
              </View>
              <View style={styles.containtCard}>
                <Text style={styles.titleCard}>{item.title} </Text>
                <View style={styles.bottomCart}>
                  <Text style={styles.bottomCartText}>{item.team}</Text>
                  <Text style={styles.bottomCartText}>Posted at {Moment(item.date).format('d MMMM')}</Text>

                </View>
              </View>

            </View>
          </TouchableOpacity>
        )


      })
      :
      null
  )

  render() {

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#001338'
          barStyle='light-content'
        />
        <ScrollView style={{ backgroundColor: '#f0f0f0' }}>
          {this.renderArticle(this.props.News)}

        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  cardContainer: {
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#dddddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2,
  },
  containtCard: {
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  titleCard: {
    fontFamily:'Roboto-Bold',
    color: '#323232',
    fontSize: 16,
    padding: 10,
  },
  bottomCart: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    padding: 10,
  },
  team: {
    color: '#828282',
    fontSize: 12,

  },
  bottomCartText: {
    fontFamily:'Roboto-Light',
    color: '#828282',
    fontSize: 12,
  }
});

function mapStateToProps(state) {
  return {
    News: state.News
  }
}

export default connect(mapStateToProps)(NewsComponent);
