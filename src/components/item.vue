<template>
    <el-checkbox v-model="item.checked" :label="item.text" size="large" />
</template>

<script>
export default {
    name: 'Item',

    data() {
        return {
            // checked1:false,
            content:'被共两本意国例着量听号包技在空前。包社百但全儿感须须北片快根该青分月许。'
        };
    },
    props:[
        'item'
    ],

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>