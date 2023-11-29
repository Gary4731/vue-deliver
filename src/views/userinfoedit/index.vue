<template>
    <Header />
    <div>
        <van-field v-model="name" label="Name" placeholder="Please type your name" />
        <van-field v-model="password" label="Password" placeholder="Please type your new password" />
    </div>
    <van-button type="primary" class = "save-btn" block
    @click = "save">Save</van-button>
    <van-button type="primary" class = "save-btn" block
    @click = "logOut">Sign out</van-button>
</template>

<script>
import { showToast } from 'vant';
import Header from '../../components/Header.vue';
import { reactive, toRefs } from 'vue';
import {useRouter} from 'vue-router';

export default{
    components:{
        Header,
    },
    
    setup(){
        const router = useRouter();
        const data = reactive({
            name:'',
            password:'',
        })
        const save =()=>
        {
            if(data.name && data.password)
            {
                let userInfo = JSON.parse(localStorage.userInfo)
                let newUserInfo = {
                    user: data.name || userInfo.name,
                    password: data.password || userInfo.password,
                };
                localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
                showToast('Edit sucess');
                router.push("/mine");
            }else{
                showToast("Please Type something")
            }
        }
        const logOut =() =>{
            localStorage.removeItem('isLogin');
            showToast("Sign out")
            router.push('/login')
        }
        return{
            ...toRefs(data),
            save,
            logOut,
        }
    }
}
</script>

<style lang="less" scoped>
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>