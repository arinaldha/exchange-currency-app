import axios from 'axios'

var state = {
  list:[]
};

const getters = {};

const mutations = {
  LIST_CURRENCY(state, currency){
    state.list = currency
  },
  LIST_COUNTRY(state, country){
    state.country = country
  },
}

const actions = {
  getCurrency({ commit, state, rootState }){
    return axios
      .get('https://api.fastforex.io/fetch-all?api_key=b1d25e5144-8fdf9c2564-r03r2f')
      .then((response) => {
        const curr = response.data.results
        commit('LIST_CURRENCY', curr)
        return curr
      })
  },
  getCountry({ commit, state, rootState }){
    return axios
      .get('https://api.fastforex.io/currencies?api_key=b1d25e5144-8fdf9c2564-r03r2f')
      .then((response) => {
        const country = response.data.currencies
        commit('LIST_COUNTRY', country)
        return country
      })
  },
}

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}
