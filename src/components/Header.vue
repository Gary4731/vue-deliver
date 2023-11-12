<template>
    <div class="header">
        <van-icon name="arrow-left" class ="icon" @click ="goBack"/>
        <div>{{ title }}</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default{
    props:["title"],

    setup() {
      const router = useRouter();
      const goBack =()=>{
        router.back();
      };
      return{
        goBack,
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
