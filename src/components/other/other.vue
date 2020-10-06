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
                    name:"快搜",
                    img:newLocal+"kuaisou.png",
                    introduction:"全平台资源搜索",
                    link:"https://search.chongbuluo.com/"
                },
                {
                    name:"格式转换",
                    img:newLocal+"geshi.png",
                    introduction:"在线格式转换  在线格式转换工具",
                    link:"http://www.alltoall.net/"
                },
                {
                    name:"最美应用",
                    img:newLocal+"zmyy.png",
                    introduction:"【最美应用】 - iPhone 一起发现好用、好看、好玩的应用",
                    link:"http://zuimeia.com/"
                },
                {
                    name:"wikiHow",
                    img:newLocal+"wh.png",
                    introduction:"wikiHow - 您可以编辑的指导手册",
                    link:"https://zh.wikihow.com/"
                },
                {
                    name:"果汁排行",
                    img:newLocal+"gzph.png",
                    introduction:"果汁排行榜 - 各类榜单排名大全",
                    link:"http://guozhivip.com/rank/"
                },
                {
                    name:"医学微视",
                    img:newLocal+"yxws.png",
                    introduction:"医学微视-中国医学科普微视频百科全书",
                    link:"http://www.mvyxws.com/"
                },
                {
                    name:"PanDownload",
                    img:newLocal+"pan.png",
                    introduction:"百度网盘下载器在线版",
                    link:"https://www.baiduwp.com/"
                },
                {
                    name:"沃客导航",
                    img:newLocal+"work.png",
                    introduction:"您身边高效便捷实用的工作导航",
                    link:"https://www.9178.work/index.html"
                },
                {
                    name:"小众软件",
                    img:newLocal+"appinn.png",
                    introduction:"分享免费、小巧、实用、有趣、绿色的软件",
                    link:"https://www.appinn.com/"
                },
                {
                    name:"谷歌翻译",
                    img:newLocal+"translate.png",
                    introduction:"Google 的免费翻译服务",
                    link:"https://translate.google.cn/"
                },
                {
                    name:"GitHub",
                    img:newLocal+"github.png",
                    introduction:"全球最大的同性交友网站",
                    link:"https://github.com/"
                },
                {
                    name:"xx资源网",
                    img:newLocal+"xx.png",
                    introduction:"这款资源分享网站的综合性非常强大",
                    link:"https://www.xxurls.com/"
                },
                {
                    name:"逗比拯救世界",
                    img:newLocal+"dbbqb.png",
                    introduction:"表情包大全",
                    link:"http://www.dbbqb.com/"
                },
                // {
                //     name:"留言板",
                //     img:newLocal+"liuyanban.png",
                //     introduction:"给我留言",
                //     link:"http://aircoop.top/message/#/messageboard"
                // }
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
