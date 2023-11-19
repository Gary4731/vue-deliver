<template>
    <div class="header">
        <van-icon name="arrow-left" class ="icon" @click ="goBack"/>
        <div>{{ title }}</div>
        <div class="edit" v-if="edit" @click = "handEdit">{{store.state.edit? 'Edit':'Complete'}}</div>
    </div>
</template>

<script>
import { useRouter  } from 'vue-router';
import { showFailToast } from "vant";
import { useStore } from 'vuex';

export default{
    props:["title", "edit"],

    setup() {
      const router = useRouter();
      const store = useStore();
      const goBack =()=>{
        router.back();
      };
      const handEdit =() =>{
        if(store.state.cartList.length){
          store.commit("edit");
          store.commit("changeDelete")
        }else{
          showFailToast('Please add product!')
        }
      }
      return{
        goBack,
        handEdit,
        store,
      }
    }
}
</script>

<style>
 .header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;
    .edit {
      font-size: 16px;
      position: absolute;
      right: 15px;
      font-weight: normal;
    }
    .icon {
      position: absolute;
      left: 10px;
    }
  }
</style>
