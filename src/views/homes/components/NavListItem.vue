<template lang="">
    <div class ="item">
        <img :src="itemContent.pic" /> 
        <div class="item-des">
            <div class="title">{{itemContent.title}}</div>
            <div class="sales">{{itemContent.sales}}</div>
            <div class="price">{{itemContent.price}}</div>
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

