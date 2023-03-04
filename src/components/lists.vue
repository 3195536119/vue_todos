<template>
    <div >
        <el-row class="rowHeader">
            <el-col :span="20" >Linda</el-col>
            <el-col :span="2">
                <el-icon><Lock /></el-icon>
                <el-icon><Unlock /></el-icon>
            </el-col>   
            <el-col :span="2">
                <el-icon><Delete /></el-icon>
            </el-col>
        </el-row>

        <el-row>
            <el-input v-model="inputItem" 
            placeholder="Please input" 
            />   
        </el-row>

        <el-row :span="24" v-for="item in items" :key="item.id">
            <Item :item="item"/>
        </el-row>
    </div>
</template>

<script>
import { CirclePlus } from '@element-plus/icons-vue'
import { getCurrentInstance } from "vue";
import  Item  from "./item.vue";
export default {
    name: 'Lists',
    components:{
        Item
    },
    data() {
        return {
            items:[]
        };
    },
    computed:{
        id(){
            return this.$route.query.id
        }
    },

    mounted() {
    },

    methods: {
        
    },

    watch:{
        id:{
            handler(newVal,oldVal){
                console.log(newVal,oldVal)
                this.$http.get('/getListsByID',{
                    params:{
                        'id':newVal
                    }
                }).then(res=>{
                    console.log('此次text的值为：',res.data)
                    this.items=res.data
                })
            },
            immediate:true
        }
    }
};
</script>

<style scoped>
.rowHeader{
    height: 40px;
    line-height: 40px;
}
</style>