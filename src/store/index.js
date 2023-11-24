import{createStore} from 'vuex'

export default createStore({
    state:{
        cartList: [],//cart data
        isDelete: true, //make sure when click edit, then btm will show delete btn. Pass header components to cartDetail
        edit: true, //the status of edit
        orderList: [],
        orderListEnd: [],
    },
    mutations: {
        addCart(state,value) {
            state.cartList = value
        },
        changeDelete(state){
            state.isDelete = !state.isDelete
        },
        delete(state, value){
            state.cartList = value
        },
        edit(state){
            state.edit = !state.edit;
        },
        pay(state,value){
            state.orderList = value;
        },
        orderEnd(state){
            state.orderListEnd = state.orderListEnd.concat(state.orderList)
        },
    },
    actions:{},
})