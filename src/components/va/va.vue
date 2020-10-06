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
                    name:"视频鱼",
                    img:newLocal+"shipinyu.png",
                    introduction:"视频鱼 - 网站视频下载",
                    link:"http://m.shipinyu.cn/"
                },
                {
                    name:"全球直播",
                    img:newLocal+"vv.png",
                    introduction:"全球直播频道-高清无插件在线电视直播",
                    link:"http://tvvtvv.com/"
                },
                {
                    name:"V视频助手",
                    img:newLocal+"vshi.png",
                    introduction:"一键下载在线视频",
                    link:"http://v.ranks.xin/"
                },
                {
                    name:"全国电视直播",
                    img:newLocal+"tv.png",
                    introduction:"全国电视直播---bddn.cn",
                    link:"http://bddn.cn/zb.htm"
                },
                {
                    name:"Yixiang影院",
                    img:newLocal+"video.png",
                    introduction:"一个看电影的网站",
                    link:"https://7kcom.yixiangyh.com/"
                },
                {
                    name:"VIP影院",
                    img:newLocal+"vipmovie.png",
                    introduction:"一个看VIP视频兼科技论坛的网站",
                    link:"http://vip.52tech.tech/"
                },
                {
                    name:"万影网",
                    img:newLocal+"wy.png",
                    introduction:"万影网-电影电视剧在线观看",
                    link:"http://www.sodyy.com/"
                },
                {
                    name:"Neet_搜索站",
                    img:newLocal+"neet.png",
                    introduction:"一站式搜索互联网上相关的视频内容",
                    link:"https://neets.cc/"
                },
                {
                    name:"iLoveIMG",
                    img:newLocal+"ilimg.png",
                    introduction:"可批量编辑图片的所有工具",
                    link:"https://www.iloveimg.com/zh-cn"
                },
                {
                    name:"简影",
                    img:newLocal+"me.png",
                    introduction:"一个颜值很高的影视网站。",
                    link:"https://syrme.top/"
                },
            ]
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
    .card{width: 20%;height: 110px;border: 1px solid #eee;float: left;margin: 22px;}
    .card-top{height: 55%;border-bottom: 1px solid #eee;text-align: left;}
    .card-top div{height: 32px;width: auto;float: left;line-height: 32px;margin: 15px 0 0 15px;}
    .card-top div img{width: 32px;height: 32px;}
    .card-bottom{text-align: left;height: 45%;line-height: 20px;margin-left: 8px;}
</style>
