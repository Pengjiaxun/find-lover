<template>
    <div class="wrapper">
        <form action="">
            <div class="weui-cells weui-cells_form">
                <!-- 年龄 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.age.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.age.show+'岁'" />
                    </div>
                </div>
                <!-- 籍贯 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.native.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.native.show" />
                    </div>
                </div>
                <!-- 民族 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.nation.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.nation.show" />
                    </div>
                </div>
                <!-- 学历 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.education.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.education.show" />
                    </div>
                </div>
                <!-- 星座 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.constellation.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.constellation.show" />
                    </div>
                </div>
                <!-- 身高 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.height.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" :value="form.height.show+'cm'" type="tel" readonly />
                    </div>
                </div>
                <!-- 体重 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.weight.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" :value="form.weight.show+'kg'" type="tel" readonly />
                    </div>
                </div>
                <!-- 工作地点 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.workplace.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.workplace.show" />
                    </div>
                </div>
                <!-- 月收入 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.salary.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.salary.show" />
                    </div>
                </div>
                <!-- 住房状况 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.house.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.house.show" />
                    </div>
                </div>
                <!-- 购车情况 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.car.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.car.show" />
                    </div>
                </div>
                <!-- 烟酒习惯 -->
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{form.smoke.cName}}:</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" readonly :value="form.smoke.show" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import form from '../assets/js/form'
import urlApi from '../assets/js/urlApi'

export default {
    data() {
            return {
                form: form,
                attributeList: [],
                urlApi: urlApi.urlApi
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
            getMaterial() {
                this.$indicator.open()
                this.$http.get(this.urlApi.getMaterial, {
                        params: {
                            id: this.$route.query.id,
                            activity_id: window.sessionStorage.commId,
                            ticket: window.sessionStorage.ticket,
                            n: window.sessionStorage.n
                        }
                    })
                    .then((res) => {
                        console.log(res, 'getMaterial')
                        if (res.data.errcode === 0) {
                            this.$indicator.close()
                            this.mine = JSON.parse(res.data.data.data)
                            this.form.age.show = this.mine[10017] == '' ? '不限' : this.mine[10017]
                            this.form.native.show = this.mine[10004] == '' ? '不限' : this.mine[10034]
                            this.form.nation.show = this.mine[10003] == '' ? '不限' : this.mine[10003]
                            this.form.education.show = this.mine[10012] == '' ? '不限' : this.mine[10012]
                            this.form.constellation.show = this.mine[10002] == '' ? '不限' : this.mine[10002]
                            this.form.height.show = this.mine[10038] == '' ? '不限' : this.mine[10038]
                            this.form.weight.show = this.mine[10039] == '' ? '不限' : this.mine[10039]
                            this.form.workplace.show = this.mine[10009] == '' ? '不限' : this.mine[10009]
                            this.form.salary.show = this.mine[10033] == '' ? '不限' : this.mine[10033]
                            this.form.house.show = this.mine[10034] == '' ? '不限' : this.mine[10034]
                            this.form.car.show = this.mine[10035] == '' ? '不限' : this.mine[10035]
                            this.form.smoke.show = this.mine[10036] == '' ? '不限' : this.mine[10036]
                        }
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            },
            init() {
                this.getAttributeList()
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
.weui-label {
    width: auto!important;
    margin-right: 10px;
    color: #989898;
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
