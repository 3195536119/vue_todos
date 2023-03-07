<template>
    <div>
        <el-row class="rowHeader">
            <el-col :span="18">
                <el-input v-model="title" />
            </el-col>
            <el-col :span="2">
                <el-button type="primary" @click="editTodoTitle()">确定</el-button>
            </el-col>
            <el-col :span="2">
                <el-icon v-show="list.locked == true" @click="changeTodoLocked">
                    <Lock />
                </el-icon>
                <el-icon v-show="list.locked == false" @click="changeTodoLocked">
                    <Unlock />
                </el-icon>
            </el-col>
            <el-col :span="2">
                <el-icon>
                    <Delete />
                </el-icon>
            </el-col>
        </el-row>

        <el-row>
            <el-input v-model="inputItem" placeholder="请输入内容" @change="addItem"/>
        </el-row>

        <el-row :span="24" v-for="item in list.record" :key="item.id">
            <Item :item="item" :todoID="id"/>
        </el-row>
    </div>
</template>

<script>
import Item from "./item.vue";
import {
    ElMessage
} from "element-plus";
import todoOptions from "../../public/todos.js";
export default {
    name: 'Lists',
    components: {
        Item
    },
    data() {
        return {
            list: [],
            title: '',
            inputItem:''
        };
    },
    computed: {
        id() {
            return this.$route.query.id
        },
       
    },

    mounted() {
    },

    methods: {
        //每次修改之后重新获取所有的值
        getTodo(){
            console.log('id的值为：',this.id)
            return this.$http.get('/getInfosByTodoID', {
                    params: {
                        'id': this.id
                    }
                }).then(res => {
                    console.log('此次text的值为：', res.data)
                    this.list = res.data
                })
        },
        editTodoTitle() {
            this.$http.get('/editTodoTitle', {
                params: {
                    title: this.title,
                    id: this.id
                }
            }).then(res => {
                if (res.status == 200) {
                    ElMessage({
                        message: '修改成功',
                        type: "success",
                        showClose: true
                    })
                    todoOptions.getTodos()
                }
            })
        },
        changeTodoLocked(){
            this.$http.get('/changeTodoLocked',{
                params:{
                    id:this.id
                }
            }).then(res=>{
                if (res.status == 200) {
                    todoOptions.getTodos()
                    this.getTodo()
                }
            })
        },
        //未完成
        deleteTodo(){
            this.$http.get('/deleteTodo',{
                params:{
                    id:this.id
                }
            }).then(res=>{

            })
        },
        addItem(){
            this.$http.get('/addItem',{
                params:{
                    todoID:this.id,
                    itemText:this.inputItem
                }
            }).then(res=>{
                if (res.status == 200) {
                    ElMessage({
                        message: '添加成功',
                        type: "success",
                        showClose: true
                    })
                }
            }).then(res1=>{
                this.getTodo()
            })
        }
    },

    watch: {
        id: {
            handler(newVal, oldVal) {
                this.getTodo().then(res=>{
                    this.title = this.list.title
                })
            },
            immediate: true
        }
    }
};
</script>

<style scoped>
.rowHeader {
    height: 40px;
    line-height: 40px;
}</style>