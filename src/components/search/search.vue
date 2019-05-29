<template>
    <form role="form" autocomplete="on" target="_blank" method="get" action="https://www.baidu.com/s" id="searchForm" class="form">
        <el-input v-model="input" type="text" class="form-control search" name="word" id="ss" autocomplete="off" :clearable="true" :placeholder="placeholder">
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
            placeholder: '',
            restaurants: []
        }
    },
    methods : {
        restorePlaceholder () {
            this.placeholder = "时间带不走美妙的青春，它被珍藏于仲夏夜的诗篇"
        },
        search () {
            if(this.input == ""){
                console.error("Search content is empty")
                this.placeholder = "请在这里输入您要搜索的内容"
                var _this = this;
                setTimeout(function(){
                    _this.restorePlaceholder()
                },3000)
            }
            else{
                document.forms[0].submit()
            }
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
      this.restorePlaceholder()
    }
}
</script>

<style>
    .form{text-align: center;}
    .search{width:80%;margin-top: 15px;margin-bottom: 15px;}
</style>

