import{createStore} from 'vuex'

export default createStore({
    state:{
        cartList: [],//cart data
    },
    mutations: {
        addCart(state,value) {
            state.cartList = value
        }
    },
    actions:{},
})