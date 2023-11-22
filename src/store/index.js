import {createStore} from 'vuex'
import products from './products'
export default createStore({
  state: {
    categoriesList: [],
  },
  getters: {
    getCategoriesList: ({categoriesList}) => categoriesList,
    getCategoryById: (state) => {
      return (categoryId) => {
        return {
          ...state.categoriesList.find((category) => category.id == categoryId),
        }
      }
    },
  },
  mutations: {
    setCategoriesList(state, list) {
      state.categoriesList = list
    },
  },
  actions: {
    setCategoriesList({commit}) {
      commit('setCategoriesList', products)
    },
  },
  modules: {},
})
