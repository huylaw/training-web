<template>
    <div class="container-toast">
        <div class="toast">
            <div style="margin-top: 12px">
                <slot name="content-toast">
                    <div class="content-toast">
                        <div v-if="toast.icon == 'ban'" class="icon icon-ban"></div>
                        <div v-else-if="toast.icon == 'danger'" class="icon icon-danger"></div>
                        <div v-else-if="toast.icon == 'question'" class="icon icon-question"></div>
                        <div>{{ toast.content }}</div>
                    </div>
                </slot>
            </div>
            <div class="footer-toast">
                <slot name="footer-toast">
                    <div v-if="toast.type == 0" :style="{ textAlign: toast.textAlign }">
                        <button v-if="toast.icon == 'danger'" class="btn-primary" @click="$emit('closeToast')">Đồng ý</button>
                        <button v-else class="btn-primary" @click="$emit('closeToast')">Đóng</button>
                    </div>
                    <div v-else-if="toast.type == 1" 
                        style="display: flex; align-items: center; justify-content: space-between;"
                    >
                        <button class="btn-cancel" @click="answerCloseToast(false)">Không</button>
                        <button class="btn-primary" @click="answerCloseToast(true)">Có</button>
                    </div>
                    <div v-else style="display: flex; align-items: center; justify-content: space-between;">
                        <button class="btn-cancel" @click="$emit('closeToast')">Hủy</button>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn-cancel" @click="answerCloseToast(false)">Không</button>
                            <button class="btn-primary" @click="answerCloseToast(true)">Có</button>
                        </div>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {}
    },
    props: {
        toast: {
            type: Object,
            required: true,
        },
    },
    methods: {
        answerCloseToast(bool) {
            let answer = bool;
            this.$emit('boolToast', answer);
        }
    }
}
</script>

<style scoped>
.container-toast {
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
.toast {
    background-color: #FFFFFF;
    border-radius: 4px;
    padding: 24px;
    width: 400px;
}
.content-toast {
    display: flex;
    align-items: center;
    gap: 24px;
}
.footer-toast {
    border-top: 1px solid #e6e6e6;
    padding-top: 12px;
    margin-top: 24px;
}
.icon {
    width: 36px;
    height: 36px;
}
.icon-ban {
    background-position: -752px -462px;
    width: 36px;
    height: 36px;
    margin-left: 8px;
}
.icon-danger {
    background-position: -598px -463px;
    width: 36px;
    height: 36px;
    margin-left: 8px;
}
.icon-question {
    background-position: -832px -462px;
    width: 36px;
    height: 36px;
    margin-left: 8px;
}
</style>