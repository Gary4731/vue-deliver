<template lang="">
    <div class ="item" @click="toStore">
        <img :src="itemContent.pic" /> 
        <div class="item-des">
            <div class="title">Title: {{itemContent.title}}</div>
            <div class="sales">Quality: {{itemContent.sales}}</div>
            <div class="price">Price: {{itemContent.price}}</div>
            <div class="label">
                <div
                v-for = "(i, index) in itemContent.label" :key="index">
                {{i}}
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import router from '@/router';

export default {
    props: ["itemContent"],
   setup(){
    const toStore=() =>{
        router.push('/store')
    }
    return{
        toStore
    }
   }

   //another way to use router
//import {useRouter} from 'vue-router'
//    props: ["itemContent"],
//    setup(){
//     const router = useRouter();
//     const toStore=() =>{
//         router.push('/store')
//     }
//     return{
//         toStore
//     }
//    }
};
</script>

<style lang="less" scoped>
.item{
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    margin-top: 10px;
    img{
        width: 120px;
        height: 120px;
        border-radius: 10px;
        margin-right: 20px;
    }
    .item-des{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .title{
            font-size: 18px;  
        }
        .label{
            display: flex;
            div{
                background-color: #ffc400;
                padding: 2px 5px;
                border-radius: 15px;
            }
            div:not(:first-child){
                margin-left: 2px;
            }
        }
    }
}
</style>

