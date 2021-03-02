  
import { textChangeRangeIsUnchanged } from 'typescript'
import { createStore } from 'vuex'

export default createStore({
  state: { //para crear las variables que contienen la informacion que deseo almacenar en ese espacio común para todos los componentes
    user:{},
    total:0

  },
  getters:{//métodos para acceder a las variables de estado y recuperar su valor
    getUser(state){
      return state.user
    },
    getTotal(state){
      return state.total
    },

  },
  mutations: {//para asignar un valor a un estado(como setter)
    setUser(state,valor){
      state.user=valor
    },
    
      setTotal(state,valor){
      
        state.total=valor
      },

  },
  actions: {//igual que las mutaciones pero voy a poder gestionar asincronía 
    fetchUsers(mutations){
      fetch('http://localhost:8081/api/listar') //consulta a la base de datos, el primer dato([0]) por ej.
      .then(resp=>resp.json())
      .then(datos=>mutations.commit('setUser',datos[0])
      )
    }
  },
  modules: {
  }
})
