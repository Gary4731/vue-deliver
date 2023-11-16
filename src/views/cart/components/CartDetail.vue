<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="checked" shape="square" @change ="groupChange">
                <div v-for="(item, index) in store.state.cartList">
                    <ListItem :item="item" :handleChange="handleChange" :showCheckBox="true" />
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar :price="totalPrice" currency ="$" button-text="Purchase" @submit="onSubmit" 
        class = "submit-all">
            <van-checkbox v-model="submitChecked" 
            @click ="chooseAll">All</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed} from 'vue';
import { useStore } from 'vuex';
import ListItem from '../../../components/ListItem'
export default {
    components: {
        ListItem,
    },
    setup() {
        const store = useStore();
        const data = reactive({
            checked: [],
            submitChecked: true,
        });

        const handleChange = (value, detail) => {
            store.state.cartList.map(item => {
                if (item.id === detail.name) {//compare item id and detail's name
                    item.num = value;
                }
            })
        };

        const init = () => {
            data.checked = store.state.cartList.map(item => item.id)
        }

        onMounted(() => {
            init();
        });
        const onSubmit= () =>{

        }

        const chooseAll = ()=>{
            if(data.checked.length !== store.state.cartList.length){
                init();
            }else{
                data.checked = [];
            }
        }

        const totalPrice = computed(()=>{
            let count = store.state.cartList.filter((item) => {
                return data.checked.includes(item.id);
            })
                let sum =0;
                count.forEach((item) => {
                    sum += item.num * item.price;
                });
                return sum * 100;
            })
        
        const groupChange =(result)=>{
            if(result.length === store.state.cartList.length){
                data.submitChecked =true;
            }else{
                data.submitChecked = false;
            }
            data.checked = result;
        }
        return {
            ...toRefs(data),
            store,
            handleChange,
            onSubmit,
            chooseAll,
            groupChange,
            totalPrice,
        };
    }
}
</script>

<style lang="less" scoped>
.cartDetail {
    font-size: 14px;
    flex: 1;
    position: relative;
    overflow-y: auto;
    padding: 20px 20px 55px;

    .submit-all {
        position: fixed;
        bottom: 48px;
    }

    .buy {
        position: fixed;
        bottom: 48px;
        right: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        height: 50px;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;

        .left {
            display: flex;
            align-items: center;
        }

        .delete {
            color: #fff;
            background-color: #ffc400;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            width: 110px;
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
    }

    .content {
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
    }
}
</style>