<template>
<el-menu class="el-menu-vertical-demo">
    <el-menu-item v-for="todo in todos" :index="todo.id" @click="getLists(todo.id)">
        <el-icon v-show="todo.locked?true:false">
            <lock />
        </el-icon>
        {{todo.title}}
        <span class='boderOut'>
            <span class='boderInner'> {{todo.record.length}}</span>
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
    ElMessageBox
} from "element-plus";
import {
    nanoid
} from "nanoid";
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
        this.$http.get('/msgs').then(res => {
            console.log(res.data)
            this.todos = res.data
        })
    },

    methods: {
        getLists(id) {
            console.log('左菜单点击了', id)
            this.$router.push(`/lists?id=${id}`)
        },
        addTodo() {
            ElMessageBox.prompt('请输入代办事项名称', 'Tip', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                })
                .then(obj => {
                    console.log(obj.value)
                    this.todos.push({
                        'id': nanoid(),
                        'title': obj.value,
                        'isDeleted': false,
                        'locked': false,
                        'record': []
                    })
                    console.log(this.todos)
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
