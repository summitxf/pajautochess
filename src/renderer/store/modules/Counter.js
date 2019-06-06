import Vue from 'vue'

const state = {
  main: 0,
  zhongzu_fetters: [],
  zhiye_fetters: []
}

const getters = {
  getzhongzu_fetters(state) {
    return state.zhongzu_fetters
  },
  getzhiye_fetters(state) {
    return state.zhiye_fetters
  }
}

const mutations = {
  DECREMENT_MAIN_COUNTER(state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.main++
  },
  DECREMENT_ZHONGZU_COUNTER(state, id) {
    if (!state.zhongzu_fetters[id]) {
      Vue.set(state.zhongzu_fetters, id, { count: 0 })
    }
    state.zhongzu_fetters[id].count--
  },
  INCREMENT_ZHONGZU_COUNTER(state, id) {
    if (!state.zhongzu_fetters[id]) {
      Vue.set(state.zhongzu_fetters, id, { count: 0 })
    }
    state.zhongzu_fetters[id].count++
  },
  DECREMENT_ZHIYE_COUNTER(state, id) {
    if (!state.zhiye_fetters[id]) {
      Vue.set(state.zhiye_fetters, id, { count: 0 })
    }
    state.zhiye_fetters[id].count--
  },
  INCREMENT_ZHIYE_COUNTER(state, id) {
    if (!state.zhiye_fetters[id]) {
      Vue.set(state.zhiye_fetters, id, { count: 0 })
    }
    state.zhiye_fetters[id].count++
  },
  CLEAR_ZHONGZU_COUNTER(state, id) {
    if (!state.zhongzu_fetters[id]) {
      Vue.set(state.zhongzu_fetters, id, { count: 0 })
    }
    Vue.set(state.zhongzu_fetters, id, { count: 0 })
  },
  CLEAR_ZHIYE_COUNTER(state, id) {
    if (!state.zhiye_fetters[id]) {
      Vue.set(state.zhiye_fetters, id, { count: 0 })
    }
    Vue.set(state.zhiye_fetters, id, { count: 0 })
  }
}

const actions = {
  someAsyncTask({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  zhongzuInc({ commit }, id) {
    // do something async
    commit('INCREMENT_ZHONGZU_COUNTER', id)
  },
  zhongzuDec({ commit }, id) {
    // do something async
    commit('DECREMENT_ZHONGZU_COUNTER', id)
  },
  zhiyeInc({ commit }, id) {
    // do something async
    commit('INCREMENT_ZHIYE_COUNTER', id)
  },
  zhiyeDec({ commit }, id) {
    // do something async
    commit('DECREMENT_ZHIYE_COUNTER', id)
  },
  zhongzuClear({ commit }, id) {
    // do something async
    commit('CLEAR_ZHONGZU_COUNTER', id)
  },
  zhiyeClear({ commit }, id) {
    // do something async
    commit('CLEAR_ZHIYE_COUNTER', id)
  },
  heroCheck({ commit }, heros) {
    // do something async
    commit('CHECKED_HERO', heros)
  },
  heroUncheck({ commit }, heros) {
    // do something async
    commit('UNCHECKED_HERO', heros)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
