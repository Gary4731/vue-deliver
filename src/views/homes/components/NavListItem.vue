<template lang="">
    <div class ="item">
        <img :src="itemContent.pic" /> 
        <div class="item-des">
            <div class="title">Name: {{itemContent.title}}</div>
            <div class="sales">Sales: {{itemContent.sales}}</div>
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
export default {
    props: ["itemContent"],
   
};
</script>

<style lang="less" scoped>
.item{
    background: white;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    img{
        width:120px;
        height:120px;
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
                padding: 2px 10px;
                border-radius: 5px;
            }
            div:not(:first-child){
                margin-left: 5px;
            }
        }
    }
}
.item:not(:first-child){
    margin-top: 10px;
}
</style>

