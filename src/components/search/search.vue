<template>
    <form role="form" autocomplete="on" target="_blank" method="get" action="https://www.baidu.com/s" id="searchForm" class="form">
        <el-input v-model="input" type="text" class="form-control search" name="word" id="ss" autocomplete="off" placeholder="时间带不走美妙的青春，它被珍藏于仲夏夜的诗篇">
            <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
        </el-input>
        <!-- <el-row class="demo-autocomplete">
            <el-col >
                <el-autocomplete
                    name="word"
                    id="ss"
                    autocomplete="off"
                    class="inline-input search"
                    v-model="input"
                    :fetch-suggestions="querySearch"
                    placeholder="时间带不走美妙的青春，它被珍藏于仲夏夜的诗篇"
                    :trigger-on-focus="false"
                    @select="handleSelect"
                    :clearable="true"
                    >
                    <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
                </el-autocomplete>
            </el-col>
        </el-row> -->
    </form> 
</template>

<script>
export default {
    data () {
        return {
            input: '',
            restaurants: []
        }
    },
    methods : {
        search () {
            document.forms[0].submit()
        },
        querySearch(queryString, cb) {
            // this.$jsonp('http://suggestion.baidu.com/su?wd=' + this.input)
            // window.baidu = {
            //     sug(res) {
            //         var results = res.s
            //         console.log(results)
            //     }
            // }
            var s = 'http://suggestion.baidu.com/su?wd=' + this.input
            var fetchJsonp = function(url){
                var body = document.getElementsByTagName('body')[0];
                var script = document.createElement('script');
                script.setAttribute('src',url);
                body.appendChild(script);
            }
            window.baidu = {};
            window.baidu.sug = function(sug){
                var results = sug.s
            }
            cb(results)
            fetchJsonp(s);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            
        },
        handleSelect(item) {
            // console.log(item);
        }        
    },
    mounted() {
      
    }
}
</script>

<style>
    .form{text-align: center;}
    .search{width:80%;margin-top: 15px;margin-bottom: 15px;}
</style>

