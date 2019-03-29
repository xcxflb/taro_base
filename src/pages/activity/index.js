import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './index.scss'
import { AtButton,AtNavBar,AtGrid, AtSearchBar, Swiper, SwiperItem,AtToast} from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }


  constructor (props) {
    super(props)
    this.state={
        value:'',
        isOpened:false,
        txt_msg:'66'
    }
  }
  componentWillMount () { }

  componentDidMount () { 
    const param=this.$router.params;

  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  handleClick(){
    console.log("666");
    const len=Taro.getCurrentPages().length;
    console.log(len)
    Taro.navigateBack()
  }
  getInfo(){
    this.setState({
        isOpened:true,
        txt_msg:'88'
    });
    
    // Taro.showToast({
    //     title: '目前只可点击底部推荐商品',
    //     icon: 'none'
    //   })
  }
  getShow(){

      console.log("--")
      Taro.request({
        url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
      }).then(res => {
       console.log(res)
       
      })
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
      const {txt_msg,isOpened }=this.state
    return (
      <View className='index'>
   
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

<AtToast isOpened text="{text}" icon="{icon}"></AtToast>
<AtButton type='primary' onClick={this.getInfo.bind(this)}>按钮文案</AtButton>

<AtButton type='primary' onClick={this.getShow.bind(this)}>按钮案{txt_msg}</AtButton>
      <View className='footer'>
      <View className='footer_msg'>Copyright © 2018-2019 同优网络 版权所有</View>
      </View>

   

     
      
      </View>
    )
  }
}
