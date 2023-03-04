<template>
    <div class="common-layout">
        <div class="aside">
            <Todos/>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import  Todos  from "./todos.vue";
export default {
    name: 'Layout',

    data() {
        return {
            
        };
    },
    components:{
        Todos
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .common-layout{
        height: 500px;
        display: flex;
        
    }

    .aside{
       width: 300px; 
    }

    .content{
        width: 100%;
        margin-left: 20px;
    }
</style>