<template>
    <div class="login">
        <Header title="signin" />
        <div class="img">GOGOBuy</div>
        <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="user"
      label="UserName"
      placeholder="UserName"
      :rules="[{ required: true, message: 'Please type user name' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="Password"
      placeholder="Password"
      :rules="[{ required: true, message: 'Please type your Password' }]"
    />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
       Sign in
    </van-button>
    <van-button round block type="info" class="register" @click= "toRegister">
       Sign up
    </van-button>
  </div>
</van-form>
    </div>
</template>

<script>
import { showToast } from "vant";
import Header from "../../components/Header"
import {reactive, toRefs} from "vue";
import {useRouter} from "vue-router";

export default{
    components: {
        Header,
    },
    setup(){
        const router = useRouter();
        const onSubmit =(value) =>{
            if(!localStorage.userInfo){
                showToast('Account does not exist')
                return;
            }else{
                let userInfo = JSON.parse(localStorage.userInfo);
                if(userInfo['user'] === value['user']){
                    if(userInfo['password'] === value['password']){
                        showToast("Successful");
                        localStorage.setItem('isLogin', "login")
                        router.push('/home');
                    }else{
                        showToast('Wrong password')
                    }
                }else{
                    showToast("Account does not exist")
                }
            }
        }
        const toRegister =()=>{
            router.push("/register");
        }
        const data = reactive({
            username:'',
            password:'',
        })
        return{
            onSubmit,
            toRegister,
            ...toRefs(data),
        }
    }
}
</script>

<style>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 30px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>