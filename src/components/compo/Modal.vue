<template>
    <div class="container-modal">
        <div class="modal" :style="{ width: ( size ? size : '200px' ) }">
            <div class="header-modal">
                <div style="display: flex; align-items: center;">
                    <h2 
                        style="font-size: 24px; font-family: var(--ff-bold);"
                    >{{ title }}</h2>
                    <slot name="header-modal"></slot>
                </div>
                <div style="display: flex; align-items: center; gap: 4px">
                    <div class="icon icon-support"></div>
                    <div class="icon icon-close" @click="$emit('closeModal')"></div>
                </div>
            </div>
            <div class="body-modal">
                <slot name="body-modal"></slot>
            </div>
            <div class="footer-modal">
                <slot name="footer-modal"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    props: {
        size: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.container-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000085;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}
.modal {
    background-color: #FFFFFF;
    border-radius: 4px;
    max-height: 600px;
}
.header-modal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 24px;
}
.body-modal {
    margin: 0 24px;
}
.footer-modal {
    margin: 0 24px;
    border-top: 1px solid #e6e6e6;
    padding: 12px 0;
}
.icon-close {
    background-position: -144px -144px;
    width: 24px;
    height: 24px;
    cursor: pointer;
}
.icon-support {
    background-position: -88px -144px;
    width: 24px;
    height: 24px;
    cursor: pointer;
}
</style>