<template>
  <div class="food-list" v-if="index===0">
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="88vw"
      :items="items"
    >
      <template #content>
      </template>
    </van-tree-select>
  </div>

 <div v-else>
 {{foodData.content}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default{
    props: ["index", "foodData"],

    setup(){
        let data = reactive({
            activeIndex: 0,
            items: [{ text: 'Group 1' }, { text: 'Group 2' }],
        });

        return{
            ...toRefs(data),
        }
    }
};
</script>
