
<template>
    <div class="home">
        <div class="content">
            <!-- header box -->
            <div class="header">
                <div class="text">Takeaway</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>others</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- main content, such as fruit icon -->
            <div class="main">
                <div class="main-bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-content">search</div>
                    </div>
                    <div class="cate">
                        <div class="main-category">
                            <div v-for="(item, index) in main_category" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="min-category">
                            <div v-for="(item, index) in min_category" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <van-tabs v-model:active="active" class="tabs">
                    <van-tab v-for="(item, index) in centent_nav_list" :key="index" :title="item.tab">
                        <nav-list :navList="item.data" />
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import { reactive, toRefs, ref } from 'vue';
import NavList from './components/NavList.vue'
export default {
    components: {
        Footer,
        NavList,
    },
    setup() {
        let data = reactive({
            main_category: [
                {
                    name: "food",
                    icon: "icon-iconfood",
                },
                {
                    name: "drink",
                    icon: "icon-ice-drink",
                },
                {
                    name: "shop",
                    icon: "icon-shop1",
                },
                {
                    name: "fruit",
                    icon: "icon-fruit",
                },
                {
                    name: "medical",
                    icon: "icon-medical",
                },
            ],
            min_category: [
                {
                    name: "lunch",
                    icon: "icon-lunchbox",
                },
                {
                    name: "beer",
                    icon: "icon-beer",
                },
                {
                    name: "fruit",
                    icon: "icon-fruit",
                },
                {
                    name: "pizza",
                    icon: "icon-pizza",
                },
                {
                    name: "dessert",
                    icon: "icon-drink",
                },
                {
                    name: "dinner",
                    icon: "icon-dinner",
                },
                {
                    name: "bread",
                    icon: "icon-Toast",
                },
                {
                    name: "deliver",
                    icon: "icon-deliver",
                },
                {
                    name: "beauty",
                    icon: "icon-beauty",
                },
                {
                    name: "all",
                    icon: "icon-all",
                },
            ],
            centent_nav_list: [
                {
                    tab: "天天神券",
                    data: [
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "Fish-soup",
                            sales: "2888",
                            price: "20",
                            label: ["New", "Delicious"],
                        },
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                            title: "Fried rice",
                            sales: "2888",
                            price: "20",
                            label: ["New", "Popular"],
                        },
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "Fish",
                            sales: "2888",
                            price: "20",
                            label: ["New", "Nice"],
                        },
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "Meat",
                            sales: "2888",
                            price: "20",
                            label: ["Must try"],
                        },
                    ],
                },
                {
                    tab: "减配送费",
                    data: [
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                    ],
                },
                {
                    tab: "点评高分",
                    data: [
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                    ],
                },
                {
                    tab: "会员满减",
                    data: [
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                    ],
                },
            ],
        })
        const active = ref(0);
        return {
            ...toRefs(data),
            active,
        };
    },
    
};
</script>

<style lang="less" scoped>
.home {
    display: flex;
    flex-flow: column;
    height: 100%;
    font-size: 10px;

    .content {
        flex: 1;
        overflow-y: auto;

        .header {
            background-image: linear-gradient(#FF0000, white);
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            font-weight: 600;
            padding: 20px 20px 30px 20px;

            .location {
                span {
                    margin: 0 5px;
                }

                font-size: 14px;
            }

        }

        .main {
            margin-top: -20px;

            .main-bg {
                background: linear-gradient(#fff, #f5f5f5);
                padding: 10px 20px 0px 20px;
                border-radius: 30px 30px 0 0;

                .search {
                    position: relative;

                    input {
                        width: 100%;
                        height: 25px;
                        border: 1px solid #FF0000;
                        border-radius: 20px;
                    }

                    .search-content {
                        position: absolute;
                        right: -6px;
                        top: -1px;
                        background-color: #FF0000;
                        border-radius: 16px;
                        width: 50px;
                        height: 32px;
                        line-height: 31px;
                        font-size: 12px;
                        text-align: center;
                    }
                }

                .cate {
                    padding: 20px 0;

                    .main-category {
                        display: flex;

                        div {
                            flex: 1;
                            display: flex;
                            justify-content: space-between;
                            flex-flow: column;

                            align-items: center;

                            .icon {
                                width: 50px;
                                height: 50px;
                                margin-bottom: 5px;
                            }
                        }
                    }

                    .min-category {
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 20px;

                        div {
                            display: flex;
                            justify-content: center;
                            flex-flow: column;
                            align-items: center;
                            width: 20%;

                            .icon {
                                width: 30px;
                                height: 30px;
                                margin: 10px;
                            }
                        }
                    }
                }
            }

            .tabs {
                padding: 0px 20px 10px;
            }
        }
    }
}

/deep/ .van-tabs__wrap {
    border-radius: 10px;
}
</style>