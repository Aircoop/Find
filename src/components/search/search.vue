<template>
        <!-- <el-input v-model="input" type="text" class="form-control search" name="q" id="ss" autocomplete="off" :clearable="true" :placeholder="placeholder">
            <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
        </el-input> -->
        <el-row class="demo-autocomplete form">
            <el-col >
                <el-autocomplete
                    name="q"
                    autocomplete="off"
                    class="inline-input searchs"
                    v-model="input"
                    :fetch-suggestions="querySearch"
                    :placeholder="placeholder"
                    :clearable="true"
                    :trigger-on-focus="false"
                    @keyup.enter.native="search"
                    @select="search"
                    >
                    <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
                </el-autocomplete>
            </el-col>
        </el-row>
</template>

<script>
export default {
    data () {
        return {
            input: '',
            placeholder: '',
            restaurants: [],
            timeout:  null,
        }
    },
    methods : {
        restorePlaceholder () {
            this.placeholder = "时间带不走美妙的青春，它被珍藏于仲夏夜的诗篇"
        },
        search () {
            if(this.input == ""){
                console.warn("Search content is empty")
                this.placeholder = "请在这里输入您要搜索的内容"
                var _this = this;
                setTimeout(function(){
                    _this.restorePlaceholder()
                },3000)
            }
            else{
                // document.forms[0].submit()
                window.open('https://mijisou.com/?q=' + this.input)
            }
        },
        querySearch(queryString, cb) {
            window.baidu = {};
            window.baidu.sug = function(queryString) {
                var x = JSON.stringify(queryString);
                x = JSON.parse(x);
                var resultss = x.s
                var fdata = []
                for(var i=0;i<resultss.length;i++){
                    var value = resultss[i]
                    var keys = i
                    fdata.push({value,keys})
                }
                cb(fdata)
            };
            this.$jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ queryString)            
        },
        // createStateFilter(queryString) {
        //     return (state) => {
        //     return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        //     };
        // },
        // handleSelect(item) {
        //     console.log(item);
        // },
    },
    mounted() {
      this.restorePlaceholder()
    }
}
</script>

<style scoped>
    .form{text-align: center;}
    .searchs{width:80%;margin-top: 15px;margin-bottom: 15px;}
</style>

