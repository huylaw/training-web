<template>
    <div id="app">
        <component :is="layout"/>
    </div>
</template>

<script>
import AdminLayout from './layout/AdminLayout.vue';

export default {
    components: {
        admin: AdminLayout,
    },
    data(){
        return{}
    },
    computed: {
        layout(){
            return this.$store.getters.getLayout;
        }
    }
}
</script>

<style>
@import '@/assets/css/main.css';

*{
    margin: 0;
    padding: 0;
}
</style>