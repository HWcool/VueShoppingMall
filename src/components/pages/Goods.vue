<template>
    <div>
        商品详情页面
    </div>
</template>
 
<script>
    import axios from 'axios'
    import url from '@/api/serviceAPI.config.js'
    export default {
        data() {
            return {
                goodsId: '0032862950ca44d397e58a6fb10a3e38'
            }
        },
        created(){
            this.getInfo()
        },
        methods: {
            getInfo() {
                axios({
                    url:url.getGoodInfo,
                    method:'post',
                    data:{
                        goodsId:this.goodsId
                    }
                })
                .then(response=>{
                    console.log(response)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        },
    }
</script>
 
<style scoped>
 
</style>