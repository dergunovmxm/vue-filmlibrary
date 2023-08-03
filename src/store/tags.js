export default {
    state: {
        tags: [
            {
                title: 'Triller',
                use: false
            },
            {
                title: 'Comedy',
                use: false
            },
            {
                title: 'Adventure',
                use: false
            }
        ]
    },
    getters: {
        tags(state){
            return state.tags
        }
    },
    mutations: {
        newTag(state, payload){
            return state.tags.unshift(payload)
        }
    },
    actions: {
        addTag({commit}, payload){
            commit('newTag', payload)
        }
    }
}