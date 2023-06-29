<template>
    <div style="display: flex; flex-direction: column; height: 100%;">
        <div class="action-table">
            <div v-if="quantity > 0" class="action2-table">
                <div>
                    Đã chọn <span style="font-family: var(--ff-bold);">{{ quantity }}</span>
                </div>
                <div style="cursor: pointer; color: red; margin: 0 8px;" @click="unSelectAll">Bỏ chọn</div>
                <div style="margin-left: 9px;">
                    <button class="btn-primary" @click="$emit('deleteData')">Xóa</button>
                </div>
            </div>
            <div v-else></div>
            <div class="action2-table">
                <div class="search-table">
                    <input type="text" placeholder="Tìm theo mã, tên nhân viên"/>
                    <div class="icon icon-search"></div>
                </div>
                <div class="icon icon-reload-table"></div>
            </div>
        </div>
        <div class="container-table">
            <table>
                <thead>
                    <tr>
                        <th style="width: 24px;">
                            <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                                <input type="checkbox" v-model="all" @change="selectAll"/>
                            </div>
                        </th>
                        <th :style="{
                                width: itemCol.width ? itemCol.width : 'auto',
                                textAlign: itemCol.textAlign ? itemCol.textAlign : 'left'
                            }" 
                            v-for="(itemCol, index) in columns" :key="index"
                        >
                            {{ itemCol.label }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(itemRow, indexRow) in rows" :key="itemRow.id">
                        <td style="width: 24px;">
                            <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                                <input type="checkbox" v-model="itemRow[indexRow]" @change="selectRow(itemRow[indexRow], itemRow)"/>
                            </div>
                        </td>
                        <td v-for="(itemCol, indexCol) in columns" :key="indexCol"
                            :style="{
                                textAlign: itemCol.textAlign ? itemCol.textAlign : 'left'
                            }"   
                        >
                            <slot :column="itemCol" :formattedRow="itemRow">
                                {{ itemRow[itemCol.field] }}
                            </slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="footer-table">
            <slot name="footer-table"></slot>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            selected: [],
            all: false,
        }
    },
    computed: {
        quantity(){
            return this.selected.length;
        }
    },
    watch: {
        selected(){
            this.selected.length == this.$props.rows.length ? this.all = true : this.all = false;
        }
    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true,
        }
    },
    methods: {
        selectAll(){
            let rows = this.$props.rows;
            if(this.all === true){
                this.selected = [];
                for(let i of this.$props.rows){
                    this.selected.push(i.id);
                }
                for(let i of rows){
                    let index = rows.indexOf(i);
                    i[index] = true;
                }
            }else{
                this.selected = [];
                for(let i of rows){
                    let index = rows.indexOf(i);
                    i[index] = false;
                }
            }
        },
        selectRow(indexRow, row){
            indexRow === true ? this.selected.push(row.id) : this.selected = this.selected.filter((i) => i !== row.id);
        },
        unSelectAll(){
            let rows = this.$props.rows;
            this.selected = [];
            for(let i of rows){
                    let index = rows.indexOf(i);
                    i[index] = false;
                }
        }
    }
}
</script>

<style scoped>

</style>