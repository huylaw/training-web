<template>
    <div class="container-header">
        <div class="container1">
            <div class="icon icon-menu"></div>
            <h3>CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC </h3>
        </div>
        <div class="container2">
            <div class="icon icon-bell"></div>
            <div style="font-family: var(--ff-semibold);">LBGHuy</div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.container-header {
    background-color: #ffffff;
    height: 56px;
    box-shadow: 0 0 15px 0px var(--color-shadow);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    position: relative;
    z-index: 1;
}
.container1 {
    display: flex;
    align-items: center;
}
.icon-menu {
    background-position: -843px -30px;
    width: 24px;
    height: 24px;
    margin-right: 36px;
}
.container2 {
    display: flex;
    align-items: center;
}
.icon-bell {
    background-position: -842px -516px;
    width: 24px;
    height: 24px;
    margin-right: 24px;
}
</style>