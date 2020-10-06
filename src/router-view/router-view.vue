<template>
    <div class="box">
        <div class="head"><img src="../assets/head.png" alt="" width="400px;"></div>
        <search></search>
        <tab></tab>
    </div>
</template>  

<script>

export default {
    data () {
        return {
            
        }
    },
    mounted () {
        console.log("合作请联系：zmy_dlr@163.com")
    }
}
</script>

<style scoped>
    .box {
        overflow:-moz-scrollbars-none;
    }
    .box::-webkit-scrollbar {display:none}
    .box{
        margin-top: 40px;
        height: calc(100vh - 80px);
        width: 70%;
        background-color: #fbfbfb;
        margin: 40px auto 0 auto;
        border-radius: 5px;
        overflow: auto;
        opacity:0.9;
    }
    .head{
        text-align: center;
        margin-top: 10px;
    }
</style>
