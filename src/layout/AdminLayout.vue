<template>
    <div class="admin-layout">
        <div class="side-bar">
            <Sidebar/>
        </div>
        <div class="body">
            <Header />
            <div class="view">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar.vue';
import Header from '../components/layout/Header.vue';

export default {
    components: {
        Sidebar, Header,
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.admin-layout {
    display: flex;
}
.side-bar {
    height: 100vh;
    width: 200px;
    position: fixed;
    z-index: 1;
}
.body {
    width: calc(100% - 200px);
    height: 100vh;
    margin-left: 200px;
}
.view {
    padding: 24px 24px 12px;
    height: calc(100% - 56px);
    box-sizing: border-box;
    background-color: #EFF2F4;
}
</style>