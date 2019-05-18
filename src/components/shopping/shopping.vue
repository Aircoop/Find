<template>
    <div>
        <div v-for="(item, index) in website" :key="index" class="card">
                <div class="card-top">
                    <el-link :href="item.link" target="_blank" :underline="false">
                        <div><img :src="item.img" alt=""></div>
                        <div><span>{{ item.name }}</span></div>
                    </el-link>
                </div>
                <div class="card-bottom">
                    <el-link :href="item.link" target="_blank" :underline="false">
                        <span>{{ item.introduction }}</span>
                    </el-link>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        const newLocal="./src/assets/";
        return {
            website:[
                {
                    name:"京东",
                    img:newLocal+"jd.png",
                    introduction:"京东(JD.COM)购物",
                    link:"https://www.jd.com/"
                },
                {
                    name:"淘宝",
                    img:newLocal+"taobao.png",
                    introduction:"淘宝网 - 淘！我喜欢",
                    link:"https://www.taobao.com/"
                },
            ]
        }
    },
    methods:{
        
    }
}
</script>

<style>
    .card{width: 20%;height: 110px;border: 1px solid #eee;float: left;margin: 22px;}
    .card-top{height: 55%;border-bottom: 1px solid #eee;text-align: left;}
    .card-top div{height: 32px;width: auto;float: left;line-height: 32px;margin: 15px 0 0 15px;}
    .card-top div img{width: 32px;height: 32px;}
    .card-bottom{text-align: left;height: 45%;line-height: 20px;margin-left: 8px;}
</style>
