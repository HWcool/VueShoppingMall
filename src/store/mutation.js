import * as types from './mutation-types'

const mutations = {
  [types.GET_PRODUCTS](state, products) {
    state.products = products
  }
}

export default mutations