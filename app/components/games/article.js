import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import { ScrollView } from 'react-native-gesture-handler';

import { connect } from 'react-redux';
import { autoSignIn } from '../../store/actions/users_actions';
import { getTokens, setTokens } from '../../utils/misc';
import { WebView } from 'react-native-webview';


class GameArticleComponent extends Component {
  state = {
    loading: true,
    isAuth: false
  }

  manageState(loading, isAuth) {
    this.setState({
      loading,
      isAuth
    })
  }

  componentDidMount() {
    const User = this.props.User;

    getTokens((value) => {
      if (value[0][1] === null) {
        this.manageState(false, false)
      }
      else {
        this.props.dispatch(autoSignIn(value[1][1]))
          .then(() => {
            !User.auth.token ?
              this.manageState(false, false)
              :
              setTokens(User.auth, () => {
                this.manageState(false, true)
              })
          })

      }
    })
  }

  render() {
    const params = this.props.navigation.state.params;

    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      )
    } else {
      return (
        <ScrollView style={{ backgroundColor: '#f0f0f0' }}>
          {this.state.isAuth ?
            // <Video
            //   source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
            //   style={{ width: '100%', height: 250 }}
            //   muted={true}
            //   paused={true}
            //   controls={true}
            // />
            <View style={{ flex: 1 }}>
              <WebView
                style={{ width: '100%', height: 500 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://www.youtube.com/watch?v=LaLhYHj1obs' }}
              />
            </View>
            // <YouTube
            //   videoId="LaLhYHj1obs" // The YouTube video ID
            //   play // control playback of video with true/false
            //   fullscreen // control whether the video should play in fullscreen or inline
            //   loop // control whether the video should loop when ended
            //   onReady={e => this.setState({ isReady: true })}
            //   onChangeState={e => this.setState({ status: e.state })}
            //   onChangeQuality={e => this.setState({ quality: e.quality })}
            //   onError={e => this.setState({ error: e.error })}
            //   style={{ alignSelf: 'stretch', height: 300 }}
            // />
            :

            <View style={styles.notAuth}>
              <Icon name='md-sad' size={80} color='#d5d5d5' />
              <Text style={styles.notAuthText}>
                May you should try login / Register
            </Text>
              <Button
                title="Login / Register"
                onPress={() => this.props.navigation.navigate('Auth')}
              />
            </View>
          }
        </ScrollView>
      )
    }
  }
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notAuth: {
    flex: 1,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notAuthText: {
    fontFamily: 'Roboto-Bold'
  }
});

function mapStateToProps(state) {

  return {
    User: state.User
  }
}

export default connect(mapStateToProps)(GameArticleComponent);