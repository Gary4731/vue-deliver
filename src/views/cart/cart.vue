<template>
    <div class="cart">
        <Header title="Cart" />
        <CartDetail v-if = "isShow" />
        <Empty v-else/>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import Empty from '../../components/Empty.vue'
import Header from '../../components/Header.vue'
import CartDetail from './components/CartDetail'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
export default {
    components: {
        Footer,
        Empty,
        Header,
        CartDetail,
    },

    setup() {
        const isShow = ref(true);
        const store = useStore();

        const init = () => {
            if (store.state.cartList.length === 0) {
                isShow.value = false;
            }
        };

        onMounted(() => {
            init();
        });

        return{
            isShow,
        }
    }

}
</script>

<style lang="less" scoped>
.cart {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>