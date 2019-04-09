import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
import { Provider } from '@tarojs/mobx'
import counterStore from './store/counter'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/activity/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/images/buyu.png",
        selectedIconPath: "./asset/images/logo.png"
      },
      {
        pagePath: "pages/activity/index",
        text: "我的",
        iconPath: "./asset/images/baijiale.png",
        selectedIconPath: "./asset/images/logo.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
       // <Index />
      <Provider store={store}>
      <Index />
    </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
