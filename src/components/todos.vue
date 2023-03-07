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
import todoOptions from '../../public/todos.js'
export default {
    name: 'Todos',

    data() {
        return {
            // todos: []
        };
    },

    mounted() {
        todoOptions.getTodos()
    },
    computed: {
        todos() {
            return this.$store.getters.getTodos
        }
    },

    methods: {
        getLists(id) {
            this.$router.push(`/lists?id=${id}`)
        },
        addTodo() {
            ElMessageBox.prompt('请输入代办事项名称', 'Tip', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            })
                .then(obj => {
                    this.$http.get('/addTodo', {
                        params: {
                            'title': obj.value,
                        }
                    }).then(res => {
                        console.log(res)
                        if (res.status == 200) {
                            ElMessage({
                                message: '添加成功',
                                type: "success",
                                showClose: true
                            })
                            //每次修改操作会先调用后台的接口，模拟数据库的修改，再将其中的数据放在store中
                            todoOptions.getTodos()
                        }
                        // }).then(res=>{

                        // })
                    }).catch(() => {

                    })
                })
            }
        }
    }
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
