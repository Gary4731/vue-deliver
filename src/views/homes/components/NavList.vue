<template lang="">
    <div v-for="(item, index) in navList" :key="index">
       <nav-list-item :itemContent = "item"/>
       <!-- {{item.label}} -->
    </div>
</template>

<script>
import NavListItem from './NavListItem.vue';
export default {
    props:["navList"],
    components: {
        NavListItem,
    },
};
</script>
