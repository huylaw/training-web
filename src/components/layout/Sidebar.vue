<template>
    <div class="container-sidebar">
        <div class="header-sidebar">
            <div class="icon icon-toggle"></div>
            <div class="icon-logo"></div>
        </div>
        <div class="router-sidebar">
            <ul>
                <li v-for="(menu, index) in listMenu" :key="index">
                    <router-link :to="menu.link">
                        <div class="icon"
                            :style="{
                                backgroundPosition: menu.x + ' ' + menu.y, 
                                width: '24px',
                                height: '24px',
                                margin: '0 8px'
                            }" 
                        ></div>
                        {{ menu.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            listMenu: [
                { x: '-29px', y: '-1628px', name: 'Tổng quan', link: '/' },
                { x: '-74px', y: '-1627px', name: 'Tiền mặt', link: '/money' },
                { x: '-117px', y: '-1629px', name: 'Tiền gửi', link: '/bank-money' },
                { x: '-161px', y: '-1628px', name: 'Mua hàng', link: '/purchase' },
                { x: '-204px', y: '-1627px', name: 'Bán hàng', link: '/sell' },
                { x: '-250px', y: '-1628px', name: 'Quản lý hóa đơn', link: '/order-management' },
                { x: '-290px', y: '-1628px', name: 'Kho', link: '/warehouse' },
                { x: '-335px', y: '-1629px', name: 'Công cụ dụng cụ', link: '/tools' },
                { x: '-378px', y: '-1628px', name: 'Tài sản cố định', link: '/fixed-assets' },
                { x: '-423px', y: '-1630px', name: 'Thuế', link: '/tax' },
                { x: '-466px', y: '-1629px', name: 'Giá thành', link: '/price' },
                { x: '-510px', y: '-1628px', name: 'Tổng hợp', link: '/synthetic' },
                { x: '-378px', y: '-1660px', name: 'Ngân sách', link: '/budget' },
                { x: '-548px', y: '-1632px', name: 'Báo cáo', link: '/report' },
                { x: '-203px', y: '-1663px', name: 'Phân tích tài chính', link: '/financial-analysis' },
            ],
            listMenuActive: [
                { x: '-29px', y: '-1585px' },
            ]
        }
    },
    watch: {
       
    },
    methods: {
        
    }
}
</script>

<style scoped>
.container-sidebar {
    width: 100%;
    height: 100%;
    background-color: #424242;
    display: flex;
    flex-direction: column;
    z-index: 1;
}
.header-sidebar {
    height: 56px;
    display: flex;
    align-items: center;
    /* padding: 0 16px; */
    /* justify-content: center; */
    padding-left: 30px;
}
.icon-toggle {
    background-position: -424px -88px; 
    width: 24px;
    height: 24px;
}
.icon-logo {
    background: url('../../assets/img/logo.svg') no-repeat;
    height: 36px;
    width: 96px;
    background-size: 100% 36px; 
    margin-left: 12px;
}
.router-sidebar {
    /* height: calc(100vh - 56px); */
    flex: 1;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0px 12px 20px;
    margin-top: 20px;
}

ul {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
li {
    height: 44px;
    margin-bottom: 4px;
}
a {
    color: #BDBDBD;
    display: flex;
    align-items: center;
    height: 100%;
}

a.router-link-exact-active {
    background-color: #1F1F1F;
    border-radius: 6px;
    color: #ffffff;
}

a:hover {
    background-color: #1F1F1F;
    border-radius: 6px;
}
</style>