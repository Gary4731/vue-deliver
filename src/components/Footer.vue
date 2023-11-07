<template>
    <div class="footer">
        <div class="icon-item">
            <router-link to="/" class="nav-item" active-class="nav-color">
                <van-icon name="shop-o" />
                Home
            </router-link>
        </div>
        <div class="icon-item">
            <router-link to="/cart" class="nav-item" active-class="nav-color">
                <van-icon name="cart-o" />
                Cart
            </router-link>
        </div>
        <div class="icon-item">
            <router-link to="/order" class="nav-item" active-class="nav-color">
                <van-icon name="label-o" />
                Order
            </router-link>
        </div>
        <div class="icon-item">
            <router-link to="/mine" class="nav-item" active-class="nav-color">
                <van-icon name="manager-o" />
                About
            </router-link>
        </div>
    </div>


    <!-- one way to do tabbar at btm -->
    <!--  <van-tabbar class="tabbar" v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item class="tabbar1" icon="home-o" >Home</van-tabbar-item>
    <van-tabbar-item class="tabbar1" icon="cart-o" >Cart</van-tabbar-item>
    <van-tabbar-item class="tabbar1" icon="gift-card-o">Order</van-tabbar-item>
    <van-tabbar-item class="tabbar1" icon="friends-o">About</van-tabbar-item>
    </van-tabbar> -->
</template>

<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script> -->

<style lang="less" scoped>
.footer{
    display: flex;
    font-size: 20px;
    background-color: white;
    border-top: 0.5px solid #eee;
    .icon-item{
        flex: 1;       
        .nav-item{
            display: flex;
            flex-flow: column;
            align-items: center;
           
        }
        .nav-color{
            color: red;
        }
    }
}
</style> 
