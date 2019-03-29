import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './index.scss'
import { AtButton,AtNavBar,AtGrid, AtSearchBar } from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state={
    value:''
  }
  componentWillMount () { }

  componentDidMount () { }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  handleClick(){
    console.log("跳转");
    Taro.navigateTo({
      url: '/pages/activity/index'
    })
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
      <View className='containers'>
      <AtNavBar
  onClickRgIconSt={this.handleClick}
  onClickRgIconNd={this.handleClick}
  onClickLeftIcon={this.handleClick}
  color='#000'
  title='主页'
  leftText='返回'
  rightFirstIconType='bullet-list'
  rightSecondIconType='user'
/>
      <View className='info_body'>
      <View className='logo_box'>
      <Image src={require('../images/logo.jpg')} className='logo_img'></Image>
      <span className='logo_txt'>同优网络</span>
      </View>
      <View className="hr_box"></View>
      <View className='main_box'>
      <Image src={require('../images/doudizhu.png')} className='big_logo'></Image>
      </View>
      <View className="game_info">经典游戏,快乐体验,给你不一样的回味!</View>
      <View className='game_title'>游戏截图</View>
      <View className='flex_box'>
      <View className='main_img'><Image src={require('../images/a1.jpg')} className='game_img'></Image></View>
      <View className='list_box'><Image src={require('../images/a2.jpg')} className='game_img'></Image></View>
    
      </View>

      <View className='flex_box'>
      <View className='main_img'><Image src={require('../images/a3.jpg')} className='game_img'></Image></View>
      <View className='list_box'><Image src={require('../images/a4.jpg')} className='game_img'></Image></View>
    
      </View>
      <View className='sm_box'></View>
      <View className='footer_msg'>适度游戏益脑，沉迷游戏伤身，合理安排时间，享受健康生活，</View>
      <View className="footer_msg">抵制不良游戏，拒绝盗版游戏，注重自我保护，谨防受骗上当。</View>
      <View className='footer'>
      <View className='footer_msg'>Copyright © 2018-2019 同优网络 版权所有</View>
      </View>

      </View>

      </View>
      
      </View>
    )
  }
}
