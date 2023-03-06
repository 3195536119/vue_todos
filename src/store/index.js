import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
    getTodos(state) {
      state.todos.forEach(item=>{
        item.count=item.record.filter(value=>{
          return value.checked==false
        }).length
      })
      console.log(state)
      return state.todos;
    }
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
  },
  modules: {
  }
})
