<template>
    <div class="order">
        <Header title="OrderDetail" />
        <div class="content">
            <van-tabs color=#ffc400>
                <van-tab :title="item" v-for="(item, index) in navData">
                    <div v-for ="(item, index) in store.state.orderListEnd" v-if
                    ="item=== 'All' && store.state.orderListEnd.length" >
                        <van-card 
                    :num="item.num" 
                    :price="item.price" 
                    :title="item.title"
                    :thumb="item.pic" currency="$"/></div>
                    <div v-else>
                        <Empty />
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';
import Empty from '../../components/Empty.vue';
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';

export default {
    components: {
        Footer,
        Header,
        Empty,
    },
    setup() {
        const store = useStore();
        const data = reactive({
            navData: ['All', 'Complete', 'Pre-payment', 'Deliver']
        })

        return {
            ...toRefs(data),
            store,
        }
    }
}
</script>

<style lang="less" scoped>
.order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>