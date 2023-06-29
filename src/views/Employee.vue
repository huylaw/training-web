<template>
    <div class="container">
        <div class="header-view">
            <h2 style="font-size: 24px;">Nhân viên</h2>
            <button class="btn-primary" @click="showModal = 1">
                Thêm mới nhân viên
            </button>
        </div>
        <HModal 
            v-if="showModal === 1" 
            :title="'Thông tin nhân viên'" 
            :size="'60%'"
            @closeModal="showModal = 0"
        >
            <template #body-modal>
                
            </template>
            <template #footer-modal>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <button class="btn-cancel" @click="showModal = 0">Hủy</button>
                    <div style="display: flex; align-items: center; gap: 8px">
                        <button class="btn-cancel" @click="showModal = 0">Cất</button>
                        <button class="btn-primary" @click="showToast = 1">Cất và Thêm</button>
                    </div>
                </div>
            </template>
        </HModal>
        <div class="content-view">
            <!--Table-->
            <!-- <div style="height: 100%;"> -->
                <HTable :columns="columns" :rows="rows" @deleteData="deleteData">
                    <template slot-scope="props">
                        <span v-if="props.column.field == 'gender'">
                            {{ formatGender(props.formattedRow[props.column.field]) }}
                        </span>
                        <span v-else-if="props.column.field == 'action'">
                            <span style="display: flex; align-items: center; justify-content: end; gap: 8px">
                                <span style="color: #007AFF">Sửa</span>
                                <HDropdown>
                                    <div class="dropdown-item" @click="showModal = 1">Nhân bản</div>
                                    <div class="dropdown-item">Xóa</div>
                                    <div class="dropdown-item">Ngưng sử dụng</div>
                                </HDropdown>
                            </span>
                        </span>
                    </template>
                    <template #footer-table>
                        <HPagination :records="1000"/>
                    </template>
                </HTable>
            <!-- </div> -->
        </div>
        <div>
            <HToast 
                v-if="showToast == true" 
                :toast="toast" 
                :show="showToast"
                @closeToast="showToast = false"
                @boolToast="answer = $event"
            ></HToast>
        </div>
    </div>
</template>

<script>
import HEnum from '@/libs/enum';

import Table from '@/components/compo/Table.vue';
import Modal from '@/components/compo/Modal.vue';
import Toast from '@/components/compo/Toast.vue';
import Dropdown from '@/components/compo/Dropdown.vue';
import Pagination from '@/components/compo/Pagination.vue';

export default {
    components: {
        HTable: Table,
        HModal: Modal,
        HToast: Toast,
        HDropdown: Dropdown,
        HPagination: Pagination,
    },
    data() {
        return {
            showModal: 0,
            showToast: false,
            answer: '',
            toast: {
                type: 0,
                icon: 'ban',
                content: 'Tên không được để trống.',
                textAlign: 'center'
            },
            columns: [
                { 
                    field: 'id', 
                    label: 'MÃ NHÂN VIÊN', 
                    width: '120px' 
                },
                { 
                    field: 'name', 
                    label: 'TÊN NHÂN VIÊN',
                    width: '150px'
                },
                { 
                    field: 'gender', 
                    label: 'GIỚI TÍNH',
                    width: '80px'
                },
                { 
                    field: 'birthday', 
                    label: 'NGÀY SINH', 
                    width: '100px', 
                    textAlign: 'center',
                },
                { 
                    field: 'cmnd', 
                    label: 'SỐ CMND',
                    width: '100px'
                },
                { 
                    field: 'prefix', 
                    label: 'CHỨC DANH',
                    width: '120px'
                },
                { 
                    field: 'unitName', 
                    label: 'TÊN ĐƠN VỊ',
                    width: '120px'
                },
                { 
                    field: 'stk', 
                    label: 'SỐ TÀI KHOẢN',
                    width: '120px' 
                },
                { 
                    field: 'bankName', 
                    label: 'TÊN NGÂN HÀNG',
                    width: '120px'
                },
                { 
                    field: 'branch', 
                    label: 'CHI NHÁNH TK NGÂN HÀNG',
                    width: '200px' 
                },
                { 
                    field: 'action', 
                    label: 'CHỨC NĂNG',
                    textAlign: 'center',
                    width: '100px'
                },
            ],
            rows: [
                {
                    id: 'MF1683',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF1684',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF1685',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF1686',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF1687',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF1688',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF1689',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF16810',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF16811',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF16812',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF16813',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
                {
                    id: 'MF16814',
                    name: 'Lý Tuấn Huy',
                    gender: 1,
                    birthday: '02/09/2001',
                    cmnd: '000000000000',
                    prefix: 'Đào tạo Fresher',
                    unitName: 'NSĐH',
                    stk: '21510002870523',
                    bankName: 'BIDV',
                    branch: 'Hà Nội',
                },
            ]
        }
    },
    watch: {
        answer(){
            console.log(this.answer);
            this.showToast = false;
        }
    },
    created() {
        // console.log(Enum);
    },
    methods: {
        deleteData(){
            let rows = this.rows;
            let arrDelete = [];
            for(let i in rows){
                let item = rows[i];
                if(item[i] === true){
                    arrDelete.push(item.id);
                }
            }
            console.log(arrDelete);
        },
        formatGender(gender){
            return gender == HEnum.gender.male ? 'Nam' : 'Nữ'; 
        }
    }
}
</script>

<style scoped>
.container {
    height: 100%;
}
.header-view {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
}
.content-view {
    background-color: #ffffff;
    border-radius: 4px;
    padding: 16px 16px 0 16px;
    height: calc(100% - 50px);
    box-sizing: border-box;
}
</style>