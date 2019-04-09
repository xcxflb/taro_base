import { observable } from 'mobx'

const counterStore = observable({
    counter: 0,
    game_name:'sdk',
    counterStore() {
      this.counter++
    },
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    incrementAsync() {
      setTimeout(() => {
        this.counter++
      }, 1000)
    }
  })
  
  export default counterStore