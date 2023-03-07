<template>
    <el-row style="width: 100%;">
        <el-col :span="2">
            <el-checkbox v-model="item.checked" size="large" @change="changeItemChecked(item.id)" />
        </el-col>
        <el-col :span="22">
            <el-input v-model="item.text"></el-input>
        </el-col>
    </el-row>
</template>

<script>
import todoOptions from "../../public/todos.js";
export default {
    name: 'Item',

    data() {
        return {

        };
    },
    props: [
        'item',
        'todoID'
    ],

    mounted() {

    },

    methods: {
        changeItemChecked(itemID) {
            this.$http.get('/changeItemChecked', {
                params: {
                    todoID: this.todoID,
                    itemID: itemID
                }
            }).then(res => {
                todoOptions.getTodos()
            })
        },
        //未完成
        deleteItem() {
            this.$http.get('/deleteItem', {
                params: {
                    todoID: this.todoID,
                    itemID: item.id
                }
            }).then(res => {

            })
        },
        //未完成
        changeItemContent() {
            this.$http.get('/changeItemContent', {
                params: {
                    todoID: this.todoID,
                    itemID: item.id
                }
            })
        }
    },
};
</script>

<style scoped></style>