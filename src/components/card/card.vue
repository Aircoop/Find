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
                    name:"163邮箱",
                    img:newLocal+"email.png",
                    introduction:"网易邮箱登录入口",
                    link:"https://mail.163.com"
                },
                {
                    name:"ToolFK",
                    img:newLocal+"toolfk.png",
                    introduction:"ToolFK面向开发人员的免费在线工具",
                    link:"https://www.toolfk.com/"
                },
                {
                    name:"疯狂搜索",
                    img:newLocal+"fkss.png",
                    introduction:"搜索网盘资源",
                    link:"http://www.ifkdy.com/"
                },
                {
                    name:"Apple",
                    img:newLocal+"apple.png",
                    introduction:"苹果官网",
                    link:"https://www.apple.com/cn/"
                },
                {
                    name:"斗鱼",
                    img:newLocal+"douyu.png",
                    introduction:"斗鱼直播",
                    link:"https://www.douyu.com/"
                },
                {
                    name:"知乎",
                    img:newLocal+"zhihu.png",
                    introduction:"知乎 - 一个编故事的网站",
                    link:"https://www.zhihu.com/"
                },
                {
                    name:"一个工具箱",
                    img:newLocal+"atoolbox.png",
                    introduction:"好用的在线工具都在这里！",
                    link:"http://www.atoolbox.net/"
                },
                {
                    name:"铜钟",
                    img:newLocal+"tongzhong.png",
                    introduction:"在一处聆听所有音乐",
                    link:"http://tongzhong.xyz/"
                },
                {
                    name:"汽车之家",
                    img:newLocal+"autohome.png",
                    introduction:"看车买车用车 都回汽车之家",
                    link:"https://www.autohome.com.cn"
                },
                {
                    name:"b站",
                    img:newLocal+"bilibili.png",
                    introduction:"哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
                    link:"https://www.bilibili.com/"
                },
                {
                    name:"思否",
                    img:newLocal+"sf.png",
                    introduction:"SegmentFault 思否",
                    link:"https://segmentfault.com/"
                },
                {
                    name:"toolzl",
                    img:newLocal+"toolzl.png",
                    introduction:"toolzl在线工具-让生活变得更有效率！",
                    link:"http://www.toolzl.com/"
                },
                {
                    name:"arkie作图",
                    img:newLocal+"arkie.png",
                    introduction:"ARKIE作图 - 作个有尊严的图",
                    link:"https://www.arkie.cn"
                },
                {
                    name:"Fotor懒设计",
                    img:newLocal+"fotor.png",
                    introduction:"Fotor在线设计工具_在线平面设计网站",
                    link:"https://www.fotor.com.cn/"
                },
                {
                    name:"图怪兽",
                    img:newLocal+"guaishou.png",
                    introduction:"图怪兽-在线图片编辑器",
                    link:"https://818ps.com/imageeditor.html?route_id=15573037074191&route=70&after_route="
                },
                {
                    name:"Remove",
                    img:newLocal+"remove.png",
                    introduction:"删除图像背景",
                    link:"https://www.remove.bg/"
                }
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
