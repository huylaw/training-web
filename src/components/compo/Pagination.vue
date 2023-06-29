<template>
    <div class="container-pagination">
        <div>
            Tổng số:
            <span style="font-family: var(--ff-semibold);">
                {{ records }}
            </span> bản ghi
        </div>
        <div>
            <HSelectbox />
        </div>
    </div>
</template>

<script>
import Selectbox from '@/components/compo/Selectbox.vue'

export default {
    components: {
        HSelectbox: Selectbox,
    },
    data(){
        return{}
    },
    props: {
        records: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>

</style>