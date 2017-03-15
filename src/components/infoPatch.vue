<template>
    <div class="wrapper">
        <h1 class="title">基本信息</h1>
        <form action="">
            <div class="weui-cells weui-cells_form">
                <!-- 籍贯 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.native.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" :placeholder="form.native.hint" readonly :value="form.native.show" @click="form.native.optionsBox.visible = true;" />
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
                        <input class="weui-input" type="text" :placeholder="form.nation.hint" readonly :value="form.nation.show" @click="form.nation.optionsBox.visible = true" />
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
                        <input class="weui-input" type="text" :placeholder="form.education.hint" readonly :value="form.education.show" @click="form.education.optionsBox.visible = true" />
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
                        <input class="weui-input" type="text" :placeholder="form.constellation.hint" readonly :value="form.constellation.show" @click="form.constellation.optionsBox.visible = true" />
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
                        <input class="weui-input" v-model="form.height.show" type="tel" :placeholder="form.height.hint " />
                    </div>
                    <span>&nbsp;cm</span>
                </div>
                <!-- 体重 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.weight.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" v-model="form.weight.show" type="tel" :placeholder="form.weight.hint" />
                    </div>
                    <span>&nbsp;kg</span>
                </div>
                <h1 class="title">拓展信息</h1>
                <!-- 职业 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.occupation.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" v-model="form.occupation.show" type="text" :placeholder="form.occupation.hint" />
                    </div>
                </div>
                <!-- 工作地点 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.workplace.cName}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" :placeholder="form.workplace.hint" readonly :value="form.workplace.show" @click="form.workplace.optionsBox.visible = true" />
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
                        <input class="weui-input" type="text" :placeholder="form.salary.hint" readonly :value="form.salary.show" @click="form.salary.optionsBox.visible = true" />
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
                        <input class="weui-input" type="text" :placeholder="form.house.hint" readonly :value="form.house.show" @click="form.house.optionsBox.visible = true" />
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
                        <input class="weui-input" type="text" :placeholder="form.car.hint" readonly :value="form.car.show" @click="form.car.optionsBox.visible = true" />
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
                        <input class="weui-input" type="text" :placeholder="form.smoke.hint" readonly :value="form.smoke.show" @click="form.smoke.optionsBox.visible = true" />
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
                <h1 class="title">其他</h1>
                <!-- 照片上传 -->
                <div class="weui-cell" style="height: auto!important;">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.pic.cName}}</label>
                    </div>
                    <div class="image-wrap">
                        <span class="home-input-portrait-preview-wrap" v-for="src in baseSrc">
                            <img :src="src" v-show="src" class="home-input-portrait-preview-wrap-img">
                        </span>
                        <span class="add-button-wrap">
                            <input type="file" accept="image/*" v-on:change="picUpload" class="home-input-portrait-file" id="picInput">
                            <i class="image-add">+</i>
                        </span>
                    </div>
                </div>
                <!-- 自我描述 -->
                <div class="weui-cell" style="height: auto!important;">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.desc.cName}}
                            <br/>(200字以内)</label>
                    </div>
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea" :placeholder="form.desc.hint" rows="3" v-model="form.desc.show" maxlength="200"></textarea>
                    </div>
                </div>
            </div>
            <div class="footer-btn">
                <mt-button type="primary" @click="submit">提交</mt-button>
            </div>
        </form>
    </div>
</template>
<script>
import form from '../assets/js/form'
import urlApi from '../assets/js/urlApi'
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
                baseSrc: [],
                imgSrc: '',
                input: {
                    name: '',
                    file: false,
                    checked: [],
                },
                imgUrls: [],
                imgCount: 0,
                attributeList: [],
                urlApi: urlApi.urlApi,
                id: '',
                name: '',
                age: '',
                sex: '',
                type: 0
            }
        },
        methods: {
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
            picUpload: function(e) {
                this.input.file = true;
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
                        _this.baseSrc.push(rst.base64);
                        _this.$indicator.open();
                        $.post(_this.urlApi.upload, {
                            content: rst.base64,
                            encode: 'base64'
                        }, function(response) {
                            var response = JSON.parse(response)
                            if (response.errcode == 0) {
                                _this.imgSrc = response.data.domain + response.data.img_path
                                _this.imgUrls.push(_this.imgSrc);
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
                            if (res.data.data.type == 1) {
                                this.type = 1
                            }
                            this.id = res.data.data.id
                            let data = JSON.parse(res.data.data.data)
                            this.name = data[16]
                            this.sex = data[14]
                            this.age = data[17]
                            window.sessionStorage.type = this.type
                        }
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            },
            verify() {
                if (!eval(this.form.native.regx).test(this.form.native.show)) {
                    this.$toast({
                        message: '请选择籍贯！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.nation.regx).test(this.form.nation.show)) {
                    this.$toast({
                        message: '请选择民族！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.education.regx).test(this.form.education.show)) {
                    this.$toast({
                        message: '请选择学历！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.constellation.regx).test(this.form.constellation.show)) {
                    this.$toast({
                        message: '请选择星座！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.height.regx).test(this.form.height.show)) {
                    this.$toast({
                        message: '请输入身高！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.weight.regx).test(this.form.weight.show)) {
                    this.$toast({
                        message: '请输入体重！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.occupation.regx).test(this.form.occupation.show)) {
                    this.$toast({
                        message: '请输入职业！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.workplace.regx).test(this.form.workplace.show)) {
                    this.$toast({
                        message: '请选择工作地点！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.salary.regx).test(this.form.salary.show)) {
                    this.$toast({
                        message: '请选择月收入！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.house.regx).test(this.form.house.show)) {
                    this.$toast({
                        message: '请选择住房状况！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.car.regx).test(this.form.car.show)) {
                    this.$toast({
                        message: '请选择购车状况！',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.smoke.regx).test(this.form.smoke.show)) {
                    this.$toast({
                        message: '请选择烟酒习惯！',
                        duration: 1500
                    })
                    return
                }
                if (this.baseSrc.length == 0) {
                    this.$toast({
                        message: '请上传个人照片',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.desc.regx).test(this.form.desc.show)) {
                    this.$toast({
                        message: '请输入自我描述！',
                        duration: 1500
                    })
                    return
                }
                return true
            },
            submit() {
                if (this.verify()) {
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
                        '37': this.imgUrls,
                        '23': this.form.desc.show,
                        //择偶条件专用
                        // '10017': this.age,
                        // '10004': this.form.native.show,
                        // '10003': this.form.nation.show,
                        // '10012': this.form.education.show,
                        // '10002': this.form.constellation.show,
                        // '10038': this.form.height.show,
                        // '10039': this.form.weight.show,
                        // '10009': this.form.workplace.show,
                        // '10033': this.form.salary.show,
                        // '10034': this.form.house.show,
                        // '10035': this.form.car.show,
                        // '10036': this.form.smoke.show,
                        '10017': '',
                        '10004': '',
                        '10003': '',
                        '10012': '',
                        '10002': '',
                        '10038': '',
                        '10039': '',
                        '10009': '',
                        '10033': '',
                        '10034': '',
                        '10035': '',
                        '10036': '',
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
                                    duration: 1500
                                })
                                setTimeout(this.$router.push('index'), 1500)
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
                }
            },
            init() {
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
.filter-btn {
    margin-top: 20px;
    .confirm {
        display: inline-block;
        padding: 0 20px;
    }
}

.image-wrap {
    flex: 1;
    flex-wrap: wrap;
    text-align: left;
    .home-input-portrait-preview-wrap {
        display: inline-block;
        width: 45px;
        height: 45px;
        margin-right: 5px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .add-button-wrap {
        position: relative;
        display: inline-block;
        width: 45px;
        height: 45px;
        line-height: 40px;
        color: #a7a7a7;
        font-size: 35px;
        font-style: normal;
        font-weight: 100;
        text-align: center;
        vertical-align: top;
        border-radius: 5px;
        border: 1px solid #d7d7d7;
        i {
            font-style: normal;
        }
        #picInput {
            position: absolute;
            left: 0;
            top: 0;
            width: 45px;
            height: 45px;
            opacity: 0;
            z-index: 10;
        }
    }
}
</style>
