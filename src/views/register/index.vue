<template>
    <div class="login">
        <Header title="register" />
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
      autocomplete="current-password"
      label="Password"
      placeholder="Password"
      :rules="[{ required: true, message: 'Please type your Password' }]"
    />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
       Register
    </van-button>
    <van-button round block type="info" class="register" @click= "toLogin">
       Sign in
    </van-button>
  </div>
</van-form>
    </div>
</template>

<script>
import Header from "../../components/Header"
import {reactive, toRefs} from "vue";
import {useRouter} from "vue-router";
import { showToast } from 'vant';

export default{
    components: {
        Header,
    },
    setup(){
        const router = useRouter();
        const onSubmit =(value) =>{
           // console.log(value);
            if(localStorage.userInfo){
                let userInfo = JSON.parse(localStorage.getItem('userInfo'))
                if(userInfo['user'] === value['user'])
                {
                    showToast('User already exist');
                    return;
                }
            }else{
                register(value);
            }
            
        }
        const register =(value) =>{
            localStorage.setItem('userInfo', JSON.stringify(value));
            showToast('Successful');
            router.push('/login')
        }
        const toLogin =()=>{
            router.push("/login");
        }
        const data = reactive({
            username:'',
            password:'',
        })
        return{
            onSubmit,
            toLogin,
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