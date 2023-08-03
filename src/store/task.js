export default {
    state: {
        items: [
            {
                'id': 1,
                'title': 'Game of Thrones',
                'description': 'Best of all',
                'whatWatch': 'Serial',
                'completed': false,
                'editing': false,
            },
            {
                'id': 2,
                'title': 'Trigger',
                'description': 'Best film',
                'whatWatch': 'Film',
                'completed': false,
                'editing': false
            },
        ]
    },
    mutations: {
        addTask(state, payload){
            state.items.unshift(payload)
        }
    },
    actions: {
        addTask({commit}, payload){
            payload.id = Math.random()
            commit('addTask', payload)
        }
    },
    getters: {
        items(state){
            return state.items
        },
        itemCompleted(state){
            return state.items.filter(item => {
                return item.completed
            })
        },
        itemNotCompleted(state){
            return state.items.filter(item => {
                return item.completed === false
            })
        }
    }
}