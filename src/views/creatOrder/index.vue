<template>
    <div class="create-order">
        <Header title="Order"></Header>
        <van-contact-card type="edit" :tel="tel" :name="name"  />
        <div class="content">
            <div v-for="(item, index) in store.state.orderList">
                <van-card :num="item.num" :price="item.price" currency="$" :title="item.title" :thumb="item.pic" />
            </div>
        </div>
        <div class="pay-wrap">
            <div class="price">
                <span>
                    Price
                </span>
                <span>
                    ${{ totalPrice }}
                </span>
            </div>
            <van-button type="primary" class="pay-btn" block @click="handCreatOrder">Creat order</van-button>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header';
import { showDialog } from 'vant';
import { reactive, toRefs, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default {
    components: {
        Header,
    },
    setup() {
        const data = reactive({
            tel: '213123',
            name: 'jason',
            totalPrice: 0,
        })

        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        //const onEdit = () => {}

        const handCreatOrder = () => {
            showDialog({ message: 'Successful' })
            .then(()=>{
                //connect with cart and delete choosen items
                let newList = store.state.cartList.filter(item => {
                    return !route.query.list.includes(item.id + "")
                })
                store.commit('delete', newList)
                store.commit('orderEnd', newList)
             router.push('/order')
            });
        }

        const initPrice = () => {
            let price = 0;
            if (store.state.orderList.length) {
                store.state.orderList.forEach((item) => {
                    price += item.num * item.price;
                })

            }
            data.totalPrice = price;
        }

        onMounted(() => {
            initPrice();
        });
        return {
            ...toRefs(data),
            //onEdit,
            store,
            handCreatOrder,
        }
    }
}
</script>

<style lang="less" scoped>
.create-order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay-wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;

        >div {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay-btn {
            width: 90%;
            margin: 0 auto;
        }
    }
}
</style>