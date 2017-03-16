<template>
    <div class="wrapper">
        <h1 class="title">
            我的资料
            <span class="edit" @click="edit = true" v-show="!edit">编辑</span>
            <span class="edit" @click="cancelEdit" v-show="edit">取消</span>
        </h1>
        <!-- 展示表单 -->
        <div class="form-show" v-show="!edit">
            <form action="">
                <mt-field :label="form.native.cName" :placeholder="form.native.hint" class="grey-label" :value="mine[4]" readonly></mt-field>
                <mt-field :label="form.nation.cName" :placeholder="form.nation.hint" class="grey-label" :value="mine[3]" readonly></mt-field>
                <mt-field :label="form.education.cName" :placeholder="form.education.hint" class="grey-label" :value="mine[12]" readonly></mt-field>
                <mt-field :label="form.constellation.cName" :placeholder="form.constellation.hint" class="grey-label" :value="mine[2]" readonly></mt-field>
                <mt-field :label="form.height.cName" :placeholder="form.height.hint" class="grey-label" :value="mine[38]+' cm'" readonly></mt-field>
                <mt-field :label="form.weight.cName" :placeholder="form.weight.hint" class="grey-label" :value="mine[39]+ ' kg'" readonly></mt-field>
            </form>
            <div class="cut-line"></div>
            <form action="">
                <mt-field :label="form.occupation.cName" :placeholder="form.occupation.hint" class="grey-label" :value="mine[40]" readonly></mt-field>
                <mt-field :label="form.workplace.cName" :placeholder="form.workplace.hint" class="grey-label" :value="mine[9]" readonly></mt-field>
                <mt-field :label="form.salary.cName" :placeholder="form.salary.hint" class="grey-label" :value="mine[33]" readonly></mt-field>
                <mt-field :label="form.house.cName" :placeholder="form.house.hint" class="grey-label" :value="mine[34]" readonly></mt-field>
                <mt-field :label="form.car.cName" :placeholder="form.car.hint" class="grey-label" :value="mine[35]" readonly></mt-field>
                <mt-field :label="form.smoke.cName" :placeholder="form.smoke.hint" class="grey-label" :value="mine[36]" readonly></mt-field>
            </form>
            <div class="cut-line"></div>
            <form action="">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label img-label">{{form.pic.cName}}</label>
                    </div>
                    <div class="weui-cell__bd imgs">
                        <span v-for="img in mine[37]">
                        <img :src="img" alt="">
                    </span>
                    </div>
                </div>
                <mt-field :label="form.desc.cName" :placeholder="form.desc.hint" type="textarea" rows="4" class="grey-label" :value="mine[23]" readonly style="resize: none;"></mt-field>
            </form>
            <div class="footer-btn">
                <mt-button type="primary" @click="deleteMaterial">取消报名</mt-button>
            </div>
        </div>
        <!-- 编辑表单 -->
        <div class="form-edit" v-show="edit">
            <form action="">
                <mt-field :label="form.native.cName" :placeholder="form.native.hint" class="grey-label" v-model="form.native.show" readonly @click.native="form.native.optionsBox.visible = true"></mt-field>
                <mt-popup v-model="form.native.optionsBox.visible" position="bottom" class="options-box">
                    <p>
                        <a class="confirm" @click="form.native.optionsBox.visible = false">确认</a>
                    </p>
                    <mt-picker :slots="form.native.optionsBox.slots" @change="nativeChange
                    "></mt-picker>
                </mt-popup>
                <mt-field :label="form.nation.cName" :placeholder="form.nation.hint" class="grey-label" v-model="form.nation.show" readonly @click.native="form.nation.optionsBox.visible = true"></mt-field>
                <mt-popup v-model="form.nation.optionsBox.visible" position="bottom" class="options-box">
                    <p>
                        <a class="confirm" @click="form.nation.optionsBox.visible = false">确认</a>
                    </p>
                    <mt-picker :slots="form.nation.optionsBox.slots" @change="nationChange
                    "></mt-picker>
                </mt-popup>
                <mt-field :label="form.education.cName" :placeholder="form.education.hint" class="grey-label" v-model="form.education.show" readonly @click.native="form.education.optionsBox.visible = true"></mt-field>
                <mt-popup v-model="form.education.optionsBox.visible" position="bottom" class="options-box">
                    <p>
                        <a class="confirm" @click="form.education.optionsBox.visible = false">确认</a>
                    </p>
                    <mt-picker :slots="form.education.optionsBox.slots" @change="educationChange
                    "></mt-picker>
                </mt-popup>
                <mt-field :label="form.constellation.cName" :placeholder="form.constellation.hint" class="grey-label" v-model="form.constellation.show" readonly @click.native="form.constellation.optionsBox.visible = true"></mt-field>
                <mt-popup v-model="form.constellation.optionsBox.visible" position="bottom" class="options-box">
                    <p>
                        <a class="confirm" @click="form.constellation.optionsBox.visible = false">确认</a>
                    </p>
                    <mt-picker :slots="form.constellation.optionsBox.slots" @change="constellationChange
                    "></mt-picker>
                </mt-popup>
                <mt-field :label="form.height.cName" :placeholder="form.height.hint" class="grey-label" v-model="form.height.show"></mt-field>
                <mt-field :label="form.weight.cName" :placeholder="form.weight.hint" class="grey-label" v-model="form.weight.show"></mt-field>
            </form>
            <div class="cut-line"></div>
            <form action="">
                <mt-field :label="form.occupation.cName" :placeholder="form.occupation.hint" class="grey-label" v-model="form.occupation.show"></mt-field>
                <mt-field :label="form.workplace.cName" :placeholder="form.workplace.hint" class="grey-label" v-model="form.workplace.show" readonly @click.native="form.workplace.optionsBox.visible = true"></mt-field>
                <mt-popup v-model="form.workplace.optionsBox.visible" position="bottom" class="options-box">
                    <p>
                        <a class="confirm" @click="form.workplace.optionsBox.visible = false">确认</a>
                    </p>
                    <mt-picker :slots="form.workplace.optionsBox.slots" @change="workplaceChange
                    "></mt-picker>
                </mt-popup>
                <mt-field :label="form.salary.cName" :placeholder="form.salary.hint" class="grey-label" v-model="form.salary.show" readonly @click.native="form.salary.optionsBox.visible = true"></mt-field>
                <mt-popup v-model="form.salary.optionsBox.visible" position="bottom" class="options-box">
                    <p>
                        <a class="confirm" @click="form.salary.optionsBox.visible = false">确认</a>
                    </p>
                    <mt-picker :slots="form.salary.optionsBox.slots" @change="salaryChange"></mt-picker>
                </mt-popup>
                <mt-field :label="form.house.cName" :placeholder="form.house.hint" class="grey-label" v-model="form.house.show" readonly @click.native="form.house.optionsBox.visible = true"></mt-field>
                <mt-popup v-model="form.house.optionsBox.visible" position="bottom" class="options-box">
                    <p>
                        <a class="confirm" @click="form.house.optionsBox.visible = false">确认</a>
                    </p>
                    <mt-picker :slots="form.house.optionsBox.slots" @change="houseChange
                        "></mt-picker>
                </mt-popup>
                <mt-field :label="form.car.cName" :placeholder="form.car.hint" class="grey-label" v-model="form.car.show" readonly @click.native="form.car.optionsBox.visible = true"></mt-field>
                <mt-popup v-model="form.car.optionsBox.visible" position="bottom" class="options-box">
                    <p>
                        <a class="confirm" @click="form.car.optionsBox.visible = false">确认</a>
                    </p>
                    <mt-picker :slots="form.car.optionsBox.slots" @change="carChange
                        " :visibleItemCount="3"></mt-picker>
                </mt-popup>
                <mt-field :label="form.smoke.cName" :placeholder="form.smoke.hint" class="grey-label" v-model="form.smoke.show" readonly @click.native="form.smoke.optionsBox.visible = true"></mt-field>
                <mt-popup v-model="form.smoke.optionsBox.visible" position="bottom" class="options-box">
                    <p>
                        <a class="confirm" @click="form.smoke.optionsBox.visible = false">确认</a>
                    </p>
                    <mt-picker :slots="form.smoke.optionsBox.slots" @change="smokeChange
                        "></mt-picker>
                </mt-popup>
            </form>
            <div class="cut-line"></div>
            <form action="">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label img-label">{{form.pic.cName}}</label>
                    </div>
                    <div class="image-wrap" v-show="!edit">
                        <span class="home-input-portrait-preview-wrap" v-for="img in form.pic.show">
                            <img :src="img" v-show="img" class="home-input-portrait-preview-wrap-img">
                        </span>
                    </div>
                    <div class="image-wrap" v-show="edit">
                        <span class="home-input-portrait-preview-wrap" v-for="(src,index) in form.pic.show">
                            <img :src="src" v-show="src" class="home-input-portrait-preview-wrap-img">
                            <i @click="delImg(index)">-</i>
                        </span>
                        <span class="add-button-wrap">
                            <input type="file" accept="image/*" v-on:change="picUpload
" class="home-input-portrait-file" id="picInput">
                            <i class="image-add">+</i>
                        </span>
                    </div>
                </div>
                <mt-field :label="form.desc.cName" :placeholder="form.desc.hint" type="textarea" rows="4" class="grey-label" v-model="form.desc.show" style="resize: none;"></mt-field>
            </form>
            <div class="footer-btn">
                <mt-button type="primary" @click="modifyMaterial">保存修改</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import form from '../assets/js/form'
// import urlApi from '../assets/js/urlApi'
import region from '../assets/js/region'
import nation from '../assets/js/nation'
import constellation from '../assets/js/constellation'
import lrz from 'lrz/dist/lrz.all.bundle'
import qs from 'qs'
import $ from 'n-zepto'

export default {
    data() {
            return {
                form: form,
                edit: false,
                attributeList: [],
                urlApi: {},
                mine: {},
                baseSrc: [],
                imgSrc: '',
                // input: {
                //     name: '',
                //     file: false,
                //     checked: [],
                // },
                imgUrls: [],
                imgCount: 0,
                name: '',
                age: '',
                sex: ''
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
            sexPicker(picker, values) {
                this.form.sex.show = values[0]
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
                    if (item.id === '4') { //籍贯
                        this.form.native.id = item.id
                        this.form.native.cName = item.show
                        this.form.native.hint = item.hint
                        this.form.native.regx = item.regx
                    } else if (item.id === '3') { //民族
                        this.form.nation.id = item.id
                        this.form.nation.cName = item.show
                        this.form.nation.hint = item.hint
                        this.form.nation.regx = item.regx
                        if (this.form.sex.optionsBox.slots[0].values.length == 0) {
                            item.value.forEach((item) => {
                                this.form.sex.optionsBox.slots[0].values.push(item.show)
                            })
                        }
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
            getMaterial() {
                this.$indicator.open()
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
                            this.$indicator.close()
                            this.datas = res.data.data
                            this.mine = JSON.parse(res.data.data.data)
                            this.name = this.mine[16]
                            this.sex = this.mine[14]
                            this.age = this.mine[17]
                            this.form.native.show = this.mine[4]
                            this.form.nation.show = this.mine[3]
                            this.form.education.show = this.mine[12]
                            this.form.constellation.show = this.mine[2]
                            this.form.height.show = this.mine[38]
                            this.form.weight.show = this.mine[39]
                            this.form.occupation.show = this.mine[40]
                            this.form.workplace.show = this.mine[9]
                            this.form.salary.show = this.mine[33]
                            this.form.house.show = this.mine[34]
                            this.form.car.show = this.mine[35]
                            this.form.smoke.show = this.mine[36]
                            this.form.pic.show = this.mine[37]
                            this.imgCount = this.form.pic.show.lenth
                            this.form.desc.show = this.mine[23]
                        }
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            },
            cancelEdit() {
                this.getMaterial()
                this.edit = false
            },
            picUpload: function(e) {
                // this.input.file = true;
                var _this = this
                _this.imgCount++;
                if (_this.imgCount > 9) {
                    _this.$toast('只能上传9张图片哦！');
                    return;
                }
                lrz(e.target.files[0], {
                        width: 500,
                        height: 500,
                        quality: 0.7
                    })
                    .then(function(rst) {
                        // 处理成功会执行
                        // _this.baseSrc.push(rst.base64);
                        _this.$indicator.open();
                        $.post(_this.urlApi.upload, {
                            content: rst.base64,
                            encode: 'base64'
                        }, function(response) {
                            var response = JSON.parse(response)
                            if (response.errcode == 0) {
                                _this.imgSrc = response.data.domain + response.data.img_path
                                _this.form.pic.show.push(_this.imgSrc);
                                _this.$indicator.close();
                            } else {
                                _this.$toast('图片传输失败，请重试')
                            }
                        });
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
                    .always(function() {});
            },
            delImg(index) {
                this.form.pic.show.splice(index, 1)
                this.imgCount--
            },
            deleteMaterial() {
                this.$messagebox.confirm('确定取消报名?').then(action => {
                    this.$http.get(this.urlApi.deleteMaterial, {
                            params: {
                                activity_id: window.sessionStorage.commId,
                                ticket: window.sessionStorage.ticket,
                                n: window.sessionStorage.n
                            }
                        })
                        .then((res) => {
                            console.log(res, 'deleterMaterial')
                            if (res.data.errcode === 0) {
                                this.$toast({
                                    message: '取消报名成功！',
                                    duration: 1500
                                });
                                this.$router.push('register')

                            }
                        })
                        .catch(function(err) {
                            console.log(err)
                        })
                })
            },
            modifyMaterial() {
                let params = {
                    '16': this.name,
                    '14': this.sex,
                    '17': this.age,
                    '4': this.form.native.show,
                    '3': this.form.nation.show,
                    '12': this.form.education.show,
                    '2': this.form.constellation.show,
                    '38': this.form.height.show,
                    '39': this.form.weight.show,
                    '40': this.form.occupation.show,
                    '9': this.form.workplace.show,
                    '33': this.form.salary.show,
                    '34': this.form.house.show,
                    '35': this.form.car.show,
                    '36': this.form.smoke.show,
                    '37': this.form.pic.show,
                    '23': this.form.desc.show,
                    // 择偶条件专用
                    '10017': this.mine[10017],
                    '10004': this.mine[10004],
                    '10003': this.mine[10003],
                    '10012': this.mine[10012],
                    '10002': this.mine[10002],
                    '10038': this.mine[10038],
                    '10039': this.mine[10039],
                    '10009': this.mine[10009],
                    '10033': this.mine[10033],
                    '10034': this.mine[10034],
                    '10035': this.mine[10035],
                    '10036': this.mine[10036]
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
};
</script>
<style lang="scss" scoped>
@import '../assets/css/common.scss';
.img-label {
    font-size: 0.8rem;
    text-align: left;
    color: #c3c3c3;
}

.imgs {
    text-align: left;
    span {
        display: inline-block;
        position: relative;
        margin-right: 10px;
        img {
            width: 2.25rem;
            height: 2.25rem;
        }
        i {
            position: absolute;
            width: 0.7rem;
            height: 0.7rem;
            line-height: 0.7rem;
            border-radius: 50%;
            text-align: center;
            background-color: red;
            top: -0.3rem;
            right: -0.3rem;
            color: #fff;
        }
    }
}
</style>
