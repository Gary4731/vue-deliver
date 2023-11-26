<template>
    <div class="me">
        <Header title="About" />
    <div class="content">
      <div class="user-info">
        <div class="info">
          <img src="../../assets/header.png" />
          <div class="user-desc">
            <span>Name：{{ name }}</span>
            <span class="name">Descirbe：{{ describe }}</span>
          </div>
        </div>
      </div>
      <ul class="user-list">
        <li class="van-hairline--bottom" @click="go('./order')">
          <span>My order</span>
          <van-icon name="arrow" />
        </li>
        <!-- <li class="van-hairline--bottom" @click="go('./address')">
          <span>Address</span>
          <van-icon name="arrow" />
        </li> -->
        <li class="van-hairline--bottom" @click="go('./userinfoedit')">
          <span>Account</span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'
import { toRefs, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default{
    components: {
    Footer,
    Header,
  },
  setup(){
    const router = useRouter();

    const data = reactive({
        name:'Gary',
        describe: 'Well done'
    })
    
    const go = (path) =>{
        router.push(path)
    }

    return{
        ...toRefs(data),
        go,
    }
  }
}
</script>

<style lang="less" scoped>
.me {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .user-info {
      width: 94%;
      margin: 10px;
      height: 115px;
      background: linear-gradient(90deg, #ffc400, #c7c351);
      box-shadow: 0 2px 5px #ffc400;
      border-radius: 6px;
      .info {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 25px 20px;
        box-sizing: border-box;
        img {
          border-radius: 50%;
          margin-top: 4px;
        }
        .user-desc {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          line-height: 20px;
          font-size: 14px;
          color: #fff;
          justify-content: space-between;
          span {
            color: #fff;
            font-size: 14px;
            padding: 2px 0;
          }
        }
        .account-setting {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 13px;
          color: #fff;
          .van-icon-setting-o {
            font-size: 16px;
            vertical-align: -3px;
            margin-right: 4px;
          }
        }
      }
    }
    .user-list {
      padding: 0 20px;
      margin-top: 20px;
      background-color: #fff;
      li {
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        .van-icon-arrow {
          margin-top: 13px;
        }
      }
    }
  }
}
</style>