<template>
    <el-menu class="el-menu-vertical-demo">
        <el-menu-item v-for="todo in todos" :index="todo.id" @click="getLists(todo.id)">
            <el-icon v-show="todo.locked ? true : false">
                <lock />
            </el-icon>
            {{ todo.title }}
            <span class='boderOut'>
                <span class='boderInner'> {{ todo.count }}</span>
            </span>
        </el-menu-item>
        <el-menu-item @click="addTodo">
            <el-icon>
                <Plus />
            </el-icon>新增
        </el-menu-item>
    </el-menu>
</template>

<script>
import {
    ElMessageBox,
    ElMessage
} from "element-plus";
export default {
    name: 'Todos',

    data() {
        return {
            todos: []
        };
    },

    mounted() {
        /**
         *-----------------------------问题2此处的常量，为什么写的时候要用大括号括起来
         * 此处的目的是对象的解构
         */
        this.getTodos()
    },

    methods: {
        getTodos(){
            this.$http.get('/getTodos').then(res => {
            console.log(res.data)
            this.$store.commit('setTodos', res.data)
            this.todos = this.$store.getters.getTodos
            console.log(this.todos)
        })
        },
        getLists(id) {
            this.$router.push(`/lists?id=${id}`)
        },
        addTodo() {
            ElMessageBox.prompt('请输入代办事项名称', 'Tip', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            })
            .then(obj => {
                this.$http.get('/addTodo',{
                    params:{
                        'title': obj.value,
                    }
                }).then(res=>{
                    console.log(res)
                    if(res.status==200){
                        ElMessage({
                            message:'添加成功',
                            type:"success",
                            showClose:true
                        })
                        this.getTodos()
                    }
                })
            }).catch(() => {

            })
        }
    },
};
</script>

<style scoped>
.boderOut {
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: inline-block;
    background: #cccccc;
    vertical-align: top;
}

.boderInner {
    display: block;
    color: #FFFFFF;
    height: 20px;
    line-height: 20px;
    text-align: center
}
</style>
