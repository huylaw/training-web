<template>
    <div class="container-dropdown">
        <div class="button">
            <div style="width: 30px; height: 20px;">
                <button class="btn-dropdown" @click="showItem = !showItem">
                    {{ text }}<div class="icon icon-dropdown"></div>
                </button>
            </div>
        </div>
        <div v-if="showItem == true" @click="showItem = !showItem" class="list-dropdown-item">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            showItem: false
        }
    },
    props: {
        text: {
            type: String,
            required: false,
        }
    },
    created(){
        
    }
}
</script>

<style scoped>

</style>