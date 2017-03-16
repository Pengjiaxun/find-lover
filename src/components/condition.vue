<template>
    <div class="wrapper">
        <h1 class="title">
            择偶条件
            <span class="edit" @click="reset" v-show="isFilter">重置</span>
        </h1>
        <form action="">
            <div class="weui-cells weui-cells_form">
                <!-- 年龄 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.age.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.age.show" @click="form.age.optionsBox.visible = true" />
                    </div>
                    <span v-show="form.age.show != '不限' && form.age.show != '' && form.age.show != '不限-'">岁</span>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.age.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.age.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.age.optionsBox.slots" @change="ageChange
                    "></mt-picker>
                    </mt-popup>
                </div>
                <!-- 籍贯 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.native.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.native.show" @click="form.native.optionsBox.visible = true;" />
                    </div>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.native.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.native.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.native.optionsBox.slots" @change="nativeChange
                    "></mt-picker>
                    </mt-popup>
                </div>
                <!-- 民族 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.nation.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.nation.show" @click="form.nation.optionsBox.visible = true" />
                    </div>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.nation.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.nation.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.nation.optionsBox.slots" @change="nationChange
                    "></mt-picker>
                    </mt-popup>
                </div>
                <!-- 学历 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.education.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.education.show" @click="form.education.optionsBox.visible = true" />
                    </div>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.education.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.education.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.education.optionsBox.slots" @change="educationChange
                    "></mt-picker>
                    </mt-popup>
                </div>
                <!-- 星座 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.constellation.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.constellation.show" @click="form.constellation.optionsBox.visible = true" />
                    </div>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.constellation.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.constellation.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.constellation.optionsBox.slots" @change="constellationChange
                    "></mt-picker>
                    </mt-popup>
                </div>
                <!-- 身高 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.height.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" :value="form.height.show" type="text" placeholder="请选择" readonly @click="form.height.optionsBox.visible = true" />
                    </div>
                    <span v-show="form.height.show != '不限' && form.height.show != '' && form.height.show != '不限-' ">cm</span>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.height.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.height.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.height.optionsBox.slots" @change="heightChange
                        "></mt-picker>
                    </mt-popup>
                </div>
                <!-- 体重 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.weight.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" :value="form.weight.show" type="text" placeholder="请选择" readonly @click="form.weight.optionsBox.visible = true" />
                    </div>
                    <span v-show="form.weight.show != '不限' && form.weight.show != '' && form.weight.show != '不限-'">kg</span>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.weight.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.weight.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.weight.optionsBox.slots" @change="weightChange
                        "></mt-picker>
                    </mt-popup>
                </div>
                <!-- 工作地点 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.workplace.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.workplace.show" @click="form.workplace.optionsBox.visible = true" />
                    </div>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.workplace.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.workplace.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.workplace.optionsBox.slots" @change="workplaceChange
                    "></mt-picker>
                    </mt-popup>
                </div>
                <!-- 月收入 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.salary.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.salary.show" @click="form.salary.optionsBox.visible = true" />
                    </div>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.salary.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.salary.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.salary.optionsBox.slots" @change="salaryChange"></mt-picker>
                    </mt-popup>
                </div>
                <!-- 住房状况 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.house.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.house.show" @click="form.house.optionsBox.visible = true" />
                    </div>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.house.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.house.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.house.optionsBox.slots" @change="houseChange
                        "></mt-picker>
                    </mt-popup>
                </div>
                <!-- 购车情况 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.car.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.car.show" @click="form.car.optionsBox.visible = true" />
                    </div>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.car.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.car.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.car.optionsBox.slots" @change="carChange
                        " :visibleItemCount="3"></mt-picker>
                    </mt-popup>
                </div>
                <!-- 烟酒习惯 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.smoke.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请选择" readonly :value="form.smoke.show" @click="form.smoke.optionsBox.visible = true" />
                    </div>
                    <i class="arrow-right-big"></i>
                    <mt-popup v-model="form.smoke.optionsBox.visible" position="bottom" class="options-box">
                        <p>
                            <a class="confirm" @click="form.smoke.optionsBox.visible = false">确认</a>
                        </p>
                        <mt-picker :slots="form.smoke.optionsBox.slots" @change="smokeChange
                        "></mt-picker>
                    </mt-popup>
                </div>
            </div>
            <div class="filter-btn" v-show="isFilter">
                <mt-button class="cancel" type="default" size="small" @click="filterCancel">取消</mt-button>
                <mt-button class="confirm" type="primary" size="small" @click="filterConfirm">确定</mt-button>
            </div>
            <div class="footer-btn" v-show="!isFilter">
                <mt-button type="primary" @click="modifyMaterial">保存</mt-button>
            </div>
        </form>
    </div>
</template>
<script>
import form from '../assets/js/form'
// import urlApi from '../assets/js/urlApi'
import region from '../assets/js/region'
import nation from '../assets/js/nation'
import constellation from '../assets/js/constellation'
import qs from 'qs'

export default {
    props: ['isFilter'],
    data() {
        return {
            form: form,
            attributeList: [],
            urlApi: {}
        }
    },
    methods: {
        getUrlApi() {
            let url = window.location.href
            console.log(url)
            if (url.indexOf('8080') > -1) {
                // 获取原生活动详情
                this.urlApi.getActivityDetail = '/proApi2/1/activity?method=getDetail&grey=2'
                    // 获取表单字段列表
                this.urlApi.getAttributeList = '/proApi1/1/general?method=getAttributeList&grey=2'
                    //添加活动素材
                this.urlApi.addMaterial = '/proApi1/1/general?method=addMaterial&grey=2'
                    //修改活动素材
                this.urlApi.modifyMaterial = '/proApi1/1/general?method=modifyMaterial&grey=2'
                    //删除活动素材
                this.urlApi.deleteMaterial = '/proApi1/1/general?method=deleteMaterial&grey=2'
                    // 获取指定素材的详细信息
                this.urlApi.getMaterial = '/proApi1/1/general?method=getMaterial&grey=2'
                    //获取筛选素材列表
                this.urlApi.getFilterMaterialList = '/proApi1/1/general?method=getFilterMaterialList&grey=2'
                    // 上传图片
                this.urlApi.upload = '/proApi2/1/picture?method=upload'
                    // 关注
                this.urlApi.follow = '/proApi1/1/user?method=follow&grey=2'
                    // 发私信
                this.urlApi.sendMsg = '/proApi1/1/message?method=sendMsg&grey=1'
            } else {
                // 获取原生活动详情
                this.urlApi.getActivityDetail = 'https://bushd.gpsoo.net/1/activity?method=getDetail'
                    // 获取表单字段列表
                this.urlApi.getAttributeList = 'https://community.gpsoo.net/1/general?method=getAttributeList&grey=1'
                    //添加活动素材
                this.urlApi.addMaterial = 'https://community.gpsoo.net/1/general?method=addMaterial&grey=1'
                    //修改活动素材
                this.urlApi.modifyMaterial = 'https://community.gpsoo.net/1/general?method=modifyMaterial&grey=1'
                    //删除活动素材
                this.urlApi.deleteMaterial = 'https://community.gpsoo.net/1/general?method=deleteMaterial&grey=1'
                    // 获取指定素材的详细信息
                this.urlApi.getMaterial = 'https://community.gpsoo.net/1/general?method=getMaterial&grey=1'
                    //获取筛选素材列表
                this.urlApi.getFilterMaterialList = 'https://community.gpsoo.net/1/general?method=getFilterMaterialList&grey=1'
                    // 上传图片
                if (location.protocol == 'http:') {
                    this.urlApi.upload = 'http://bushd.gpsoo.net/1/picture?method=upload'
                } else if (location.protocol == 'https:') {
                    this.urlApi.upload = 'https://bushd.gpsoo.net/1/picture?method=upload'
                }
                // 关注
                this.urlApi.follow = 'https://community.gpsoo.net/1/user?method=follow'
                    // 发私信
                this.urlApi.sendMsg = 'https://community.gpsoo.net/1/message?method=sendMsg'
            }
        },
        reset() {
            this.form.age.show = ''
            this.form.native.show = ''
            this.form.nation.show = ''
            this.form.education.show = ''
            this.form.constellation.show = ''
            this.form.height.show = ''
            this.form.weight.show = ''
            this.form.workplace.show = ''
            this.form.salary.show = ''
            this.form.house.show = ''
            this.form.car.show = ''
            this.form.smoke.show = ''
        },
        getAttributeList() {
            this.$http.get(this.urlApi.getAttributeList, {
                params: {
                    attributes: 0,
                    ticket: window.sessionStorage.ticket,
                    n: window.sessionStorage.n
                }
            }).then((res) => {
                console.log(res, 'getActivity')
                if (res.data.errcode === 0) {
                    let data = res.data.data.attribute_array
                    this.attributeList = data
                    this.setAttribute()
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        setAttribute() {
            this.attributeList.forEach((item) => {
                if (item.id === '17') { //籍贯
                    this.form.age.id = item.id
                    this.form.age.cName = item.show
                    this.form.age.hint = item.hint
                    this.form.age.regx = item.regx
                } else if (item.id === '4') { //籍贯
                    this.form.native.id = item.id
                    this.form.native.cName = item.show
                    this.form.native.hint = item.hint
                    this.form.native.regx = item.regx
                } else if (item.id === '3') { //民族
                    this.form.nation.id = item.id
                    this.form.nation.cName = item.show
                    this.form.nation.hint = item.hint
                    this.form.nation.regx = item.regx
                } else if (item.id === '12') { //学历
                    this.form.education.id = item.id
                    this.form.education.cName = item.show
                    this.form.education.hint = item.hint
                    this.form.education.regx = item.regx
                    this.form.education.optionsBox.slots[0].values.push('')
                    item.value.forEach((item) => {
                        this.form.education.optionsBox.slots[0].values.push(item.show)
                    })
                } else if (item.id === '2') { //星座
                    this.form.constellation.id = item.id
                    this.form.constellation.cName = item.show
                    this.form.constellation.hint = item.hint
                    this.form.constellation.regx = item.regx
                } else if (item.id === '38') { //身高
                    this.form.height.id = item.id
                    this.form.height.cName = item.show
                    this.form.height.hint = item.hint
                    this.form.height.regx = item.regx
                } else if (item.id === '39') { //体重
                    this.form.weight.id = item.id
                    this.form.weight.cName = item.show
                    this.form.weight.hint = item.hint
                    this.form.weight.regx = item.regx
                } else if (item.id === '40') { //职业
                    this.form.occupation.id = item.id
                    this.form.occupation.cName = item.show
                    this.form.occupation.hint = item.hint
                    this.form.occupation.regx = item.regx
                } else if (item.id === '9') { //工作所在地
                    this.form.workplace.id = item.id
                    this.form.workplace.cName = item.show
                    this.form.workplace.hint = item.hint
                    this.form.workplace.regx = item.regx
                } else if (item.id === '33') { //月收入
                    this.form.salary.id = item.id
                    this.form.salary.cName = item.show
                    this.form.salary.hint = item.hint
                    this.form.salary.regx = item.regx
                    this.form.salary.optionsBox.slots[0].values.push('')
                    item.value.forEach((item) => {
                        this.form.salary.optionsBox.slots[0].values.push(item.show)
                    })
                } else if (item.id === '34') { //住房状况
                    this.form.house.id = item.id
                    this.form.house.cName = item.show
                    this.form.house.hint = item.hint
                    this.form.house.regx = item.regx
                    item.value.forEach((item) => {
                        this.form.house.optionsBox.slots[0].values.push(item.show)
                    })
                } else if (item.id === '35') { //购车状况
                    this.form.car.id = item.id
                    this.form.car.cName = item.show
                    this.form.car.hint = item.hint
                    this.form.car.regx = item.regx
                    item.value.forEach((item) => {
                        this.form.car.optionsBox.slots[0].values.push(item.show)
                    })
                } else if (item.id === '36') { //烟酒习惯
                    this.form.smoke.id = item.id
                    this.form.smoke.cName = item.show
                    this.form.smoke.hint = item.hint
                    this.form.smoke.regx = item.regx
                    item.value.forEach((item) => {
                        this.form.smoke.optionsBox.slots[0].values.push(item.show)
                    })
                } else if (item.id === '37') { //照片
                    this.form.pic.id = item.id
                    this.form.pic.cName = item.show
                    this.form.pic.hint = item.hint
                    this.form.pic.regx = item.regx
                } else if (item.id === '23') { //自我描述
                    this.form.desc.id = item.id
                    this.form.desc.cName = item.show
                    this.form.desc.hint = item.hint
                    this.form.desc.regx = item.regx
                }
            })
        },
        getRegion() {
            let slots0 = []
            let slots1 = []
            region.forEach((item) => {
                slots0.push(item.name)
            })
            region[0].next_level.forEach((item) => {
                slots1.push(item.name)
            })
            this.form.native.optionsBox.slots[0].values = slots0
            this.form.native.optionsBox.slots[2].values = slots1
            this.form.native.list = region

            this.form.workplace.optionsBox.slots[0].values = slots0
            this.form.workplace.optionsBox.slots[2].values = slots1
            this.form.workplace.list = region
        },
        getNation() {
            let slots0 = []
            nation.forEach((item) => {
                slots0.push(item.name)
            })
            this.form.nation.optionsBox.slots[0].values = slots0
        },
        getConstellation() {
            let slots0 = []
            constellation.forEach((item) => {
                slots0.push(item.name)
            })
            this.form.constellation.optionsBox.slots[0].values = slots0
        },
        ageChange(picker, values) {
            let start = values[0]
            let i = 0;
            if (start != '不限') {
                for (; i < 83; i++) {
                    if (this.form.age.optionsBox.slots[0].values[i] == start) break
                }
                if (i == 83) {
                    picker.setSlotValues(1, [99])
                } else {
                    picker.setSlotValues(1, this.form.age.optionsBox.slots[0].values.slice(i, 84))
                }
            } else {
                picker.setSlotValues(1, this.form.age.optionsBox.slots[0].values.slice(1))
            }
            if (values[0] == values[1]) {
                this.form.age.show = values[0]
            } else {
                this.form.age.show = values[0] + '-' + values[1]
            }
        },
        nativeChange(picker, values) {
            if (values[0] != '') {
                let slots1 = []
                this.form.native.list.forEach((item) => {
                    if (item.name === values[0]) {
                        item.next_level.forEach((item) => {
                            slots1.push(item.name)
                        })
                    }
                })
                this.form.native.show = values[0] + '-' + values[1]
                picker.setSlotValues(1, slots1)
            }
        },
        nationChange(picker, values) {
            this.form.nation.show = values[0]
        },
        educationChange(picker, values) {
            this.form.education.show = values[0]
        },
        constellationChange(picker, values) {
            this.form.constellation.show = values[0]
        },
        heightChange(picker, values) {
            let start = values[0]
            let i = 0;
            if (start != '不限') {
                for (; i < 84; i++) {
                    if (this.form.height.optionsBox.slots[0].values[i] == start) break
                }
                if (i == 84) {
                    picker.setSlotValues(1, [211])
                } else {
                    picker.setSlotValues(1, this.form.height.optionsBox.slots[0].values.slice(i, 85))
                }
            } else {
                picker.setSlotValues(1, this.form.height.optionsBox.slots[0].values.slice(1))
            }
            if (values[0] == values[1]) {
                this.form.height.show = values[0]
            } else {
                this.form.height.show = values[0] + '-' + values[1]
            }
        },
        weightChange(picker, values) {
            let start = values[0]
            let i = 0;
            if (start != '不限') {
                for (; i < 77; i++) {
                    if (this.form.weight.optionsBox.slots[0].values[i] == start) break
                }
                if (i == 77) {
                    picker.setSlotValues(1, [110])
                } else {
                    picker.setSlotValues(1, this.form.weight.optionsBox.slots[0].values.slice(i, 78))
                }
            } else {
                picker.setSlotValues(1, this.form.weight.optionsBox.slots[0].values.slice(1))
            }
            if (values[0] == values[1]) {
                this.form.weight.show = values[0]
            } else {
                this.form.weight.show = values[0] + '-' + values[1]
            }
        },
        occupationChange(picker, values) {
            if (values[0] != '') {
                let slots1 = []
                this.form.occupation.list.forEach((item) => {
                    if (item.show1 === values[0]) {
                        item.next_level.forEach((item) => {
                            slots1.push(item.show2)
                        })
                    }
                })
                picker.setSlotValues(1, slots1)
                this.form.occupation.show = values[0] + '-' + values[1]
            } else {
                this.form.occupation.show = ''
            }
        },
        workplaceChange(picker, values) {
            if (values[0] != '') {
                let slots1 = []
                this.form.workplace.list.forEach((item) => {
                    if (item.name === values[0]) {
                        item.next_level.forEach((item) => {
                            slots1.push(item.name)
                        })
                    }
                })
                picker.setSlotValues(1, slots1)
                this.form.workplace.show = values[0] + '-' + values[1]
            }
        },
        salaryChange(picker, values) {
            this.form.salary.show = values[0]
        },
        houseChange(picker, values) {
            this.form.house.show = values[0]
        },
        carChange(picker, values) {
            this.form.car.show = values[0]
        },
        smokeChange(picker, values) {
            this.form.smoke.show = values[0]
        },
        filterConfirm() {
            this.$parent.$emit('confirm', this.form)
        },
        filterCancel() {
            this.$parent.$emit('cancel')
        },
        getMaterial() {
            this.$http.get(this.urlApi.getMaterial, {
                    params: {
                        activity_id: window.sessionStorage.commId,
                        ticket: window.sessionStorage.ticket,
                        n: window.sessionStorage.n
                    }
                })
                .then((res) => {
                    console.log(res, 'getMaterial')
                    if (res.data.errcode === 0) {
                        this.datas = res.data.data
                        this.mine = JSON.parse(res.data.data.data)
                        this.form.age.show = this.mine[10017]
                        this.form.native.show = this.mine[10004]
                        this.form.nation.show = this.mine[10003]
                        this.form.education.show = this.mine[10012]
                        this.form.constellation.show = this.mine[10002]
                        this.form.height.show = this.mine[10038]
                        this.form.weight.show = this.mine[10039]
                        this.form.workplace.show = this.mine[10009]
                        this.form.salary.show = this.mine[10033]
                        this.form.house.show = this.mine[10034]
                        this.form.car.show = this.mine[10035]
                        this.form.smoke.show = this.mine[10036]
                    }
                })
                .catch(function(err) {
                    console.log(err)
                })
        },
        modifyMaterial() {
            let params = {
                '16': this.mine[16],
                '14': this.mine[14],
                '17': this.mine[17],
                '4': this.mine[4],
                '3': this.mine[3],
                '12': this.mine[12],
                '2': this.mine[2],
                '38': this.mine[38],
                '39': this.mine[39],
                '40': this.mine[40],
                '9': this.mine[9],
                '33': this.mine[33],
                '34': this.mine[34],
                '35': this.mine[35],
                '36': this.mine[36],
                '37': this.mine[37],
                '23': this.mine[23],
                // 择偶条件专用
                '10017': this.form.age.show,
                '10004': this.form.native.show,
                '10003': this.form.nation.show,
                '10012': this.form.education.show,
                '10002': this.form.constellation.show,
                '10038': this.form.height.show,
                '10039': this.form.weight.show,
                '10009': this.form.workplace.show,
                '10033': this.form.salary.show,
                '10034': this.form.house.show,
                '10035': this.form.car.show,
                '10036': this.form.smoke.show
            }
            let data = JSON.stringify(params)
            this.$indicator.open()
            this.$http.post(this.urlApi.modifyMaterial, qs.stringify({
                    ticket: window.sessionStorage.ticket,
                    n: window.sessionStorage.n,
                    id: this.id,
                    activity_id: window.sessionStorage.commId,
                    data: data
                }))
                .then((res) => {
                    console.log(res, 'addMaterial')
                    this.$indicator.close()
                    let data = res.data
                    if (data.errcode === 0) {
                        this.$indicator.close()
                        this.$toast({
                            message: '资料已保存！',
                            duration: 3000
                        })
                        this.$router.push('index')
                    }
                })
                .catch((err) => {
                    console.log(err)
                    this.$indicator.close()
                    this.$toast({
                        message: '网络开小差~',
                        duration: 1500
                    })
                })
        },
        init() {
            this.getUrlApi()
            this.getAttributeList()
            this.getRegion()
            this.getNation()
            this.getConstellation()
            this.getMaterial()
        }
    },
    created() {
        this.init()
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/common.scss';
.weui-input {
    text-align: right;
}

.filter-btn {
    margin-top: 20px;
    .cancel,
    .confirm {
        display: inline-block;
        padding: 0 20px;
    }
}
</style>
