<template>
    <div >
        <el-row class="rowHeader">
            <el-col :span="18" >
                <el-input v-model="title"  />
            </el-col>
            <el-col :span="2">
                <el-button type="primary" @click="editTodoTitle()">确定</el-button>
            </el-col>  
            <el-col :span="2">
                <el-icon v-show="list.locked==true"><Lock /></el-icon>
                <el-icon v-show="list.locked==false"><Unlock /></el-icon>
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

        <el-row :span="24" v-for="item in list.record" :key="item.id">
            <Item :item="item"/>
        </el-row>
    </div>
</template>

<script>
import  Item  from "./item.vue";
export default {
    name: 'Lists',
    components:{
        Item
    },
    data() {
        return {
            list:[],
            title:''
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
        editTodoTitle(){
            this.$http.get('./editTodoTitle',{
                params:{
                    title:this.title,
                    id:this.id
                }
            }).then(res=>{

            })
        }
    },

    watch:{
        id:{
            handler(newVal,oldVal){
                console.log(newVal,oldVal)
                this.$http.get('/getInfosByTodoID',{
                    params:{
                        'id':newVal
                    }
                }).then(res=>{
                    console.log('此次text的值为：',res.data)
                    this.list=res.data
                    this.title=res.data.title
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