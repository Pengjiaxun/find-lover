<template>
    <div class="wrapper">
        <!-- 活动信息 -->
        <div class="info">
            <div class="banner">
                <img :src="activityDetail.pic">
            </div>
            <div class="activity-info">
                <p class="activity-title">
                    {{activityDetail.title}}
                </p>
                <div class="message">
                    <p> {{activityDetail.begtime}} - {{activityDetail.endtime}}</p>
                    <p>{{activityDetail.location}}</p>
                    <p>
                    男生：<span style="color:#999999;">{{commDetail.signedNum[0]}}人</span> ／
                    女生：<span style="color:#999999;">{{commDetail.signedNum[1]}}人</span>
                    </p>
                    <p style="color:red;">{{activityDetail.cost}}</p>
                </div>
            </div>
            <div id="content">
                <div v-for="item of activityDetail.content.list">
                    <p v-if="item.type === 1" v-html="item.value"></p>
                    <img v-if="item.type === 2" :src="item.value">
                </div>
            </div>
        </div>
        <div class="register-form" v-show="!status.signed">
            <h1>报名信息填写</h1>
            <form action="">
                <mt-field :label="form.name.cName" :placeholder="form.name.hint" v-model="form.name.show"></mt-field>
                <mt-field :label="form.sex.cName" :placeholder="form.sex.hint" :value="form.sex.show" @click.native="form.sex.optionsBox.visible = true" readonly disableClear></mt-field>
                <mt-popup v-model="form.sex.optionsBox.visible" position="bottom" class="options-box">
                    <mt-picker :slots="form.sex.optionsBox.slots" @change="sexPicker" :visible-item-count="3" showToolbar>
                        <p>
                            <a class="confirm" @click="form.sex.optionsBox.visible = false">确认</a>
                        </p>
                    </mt-picker>
                </mt-popup>
                <mt-field :label="form.age.cName" :placeholder="form.age.hint" v-model="form.age.show" type="tel"></mt-field>
                <mt-field :label="form.idcard.cName" :placeholder="form.idcard.hint" v-model="form.idcard.show" type="tel"></mt-field>
            </form>
            <div class="sign" v-show="!status.signed">
                <mt-button type="primary" @click="submit">立即报名</mt-button>
            </div>
        </div>
        <div class="footer-btn" v-show="status.signed && !status.infoComplete">
            <mt-button type="primary" @click="toInfoPatch">完善资料</mt-button>
        </div>
        <div class="footer-btn" v-show="status.signed && status.infoComplete">
            <mt-button type="primary" @click="toHomePage">进入我的主页</mt-button>
        </div>
        <div class="footer-btn" v-show="status.unLogin">
            <mt-button type="primary" size="large" @click="toLogin">请登录后进行报名</mt-button>
        </div>
    </div>
</template>
<script>
import form from '../assets/js/form'
// import urlApi from '../assets/js/urlApi'
import qs from 'qs'

export default {
    data() {
            return {
                form: form,
                type: 0,
                status: {
                    ready: false,
                    signed: false,
                    inWeb: false,
                    unLogin: false,
                    infoComplete: false
                },
                attributeList: [],
                urlApi: {},
                activityDetail: {
                    content: {
                        list: []
                    }
                },
                commDetail: {
                    data: {},
                    signedNum: [],
                    attribute_array: []
                }
            }
        },
        methods: {
            getUrlApi() {
                let urlApi = {}
                let url = window.location.href
                console.log(url)
                window.sessionStorage.ticket = this.$route.query.ticket
                window.sessionStorage.n = this.$route.query.n
                window.sessionStorage.commId = '87206'
                window.sessionStorage.detailId = '88010'
                if (url.indexOf('8080') > -1) {
                    // 获取原生活动详情
                    this.urlApi.getActivityDetail = '/proApi2/1/activity?method=getDetail&grey=2'
                        // 获取通用活动详情
                    this.urlApi.getActivity = '/proApi1/1/general?method=getActivity&grey=2'
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
                        // 获取通用活动详情
                    this.urlApi.getActivity = 'https://community.gpsoo.net/1/general?method=getActivity&grey=1'
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
            getCommDetail() {
                this.$http.get(this.urlApi.getActivity, {
                        params: {
                            id: window.sessionStorage.commId
                        }
                    })
                    .then((res) => {
                        console.log(res, 'getActivity')
                        if (res.data.errcode === 0) {
                            let data = res.data.data
                            data.data = JSON.parse(data.data)
                            data.signedNum = data.materialNums.split(',')
                                // data.attribute_array.forEach((item) => {
                                //   console.log(item.show, item.id)
                                // })
                            this.commDetail = data
                            // this.setAttribute()
                            // this.status.ready = true
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            getActivityDetail() {
                this.$indicator.open()
                this.$http.get(this.urlApi.getActivityDetail, {
                        params: {
                            id: window.sessionStorage.detailId
                        }
                    })
                    .then((res) => {
                        console.log(res, 'getActivityDetail')
                        this.$indicator.close()
                        if (res.data.errcode === 0) {
                            let data = res.data.data
                            data.pic = this.minImg(data.pic, '-800x800')
                            data.begtime = this.ormatDate(data.begtime)
                            data.endtime = this.ormatDate(data.endtime)
                            data.cost === '0' ? data.cost = '免费' : ''
                            data.content.list.forEach((item) => {
                                item.type === 2 ? item.value = this.minImg(item.value, '-800x800') : ''
                            })
                            this.activityDetail = data
                        } else {
                            this.$toast({
                                message: '获取活动详情失败：' + res.data.errcode,
                                duration: 3000
                            })
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                        this.$indicator.close()
                    })
            },
            // 通用方法
            ormatDate(dateNum) {
                var date = new Date(dateNum * 1000)
                return date.getFullYear() + '.' + fixZero(date.getMonth() + 1, 2) + '.' + fixZero(date.getDate(), 2)

                function fixZero(num, length) {
                    var str = '' + num
                    var len = str.length
                    var s = ''
                    for (var i = length; i-- > len;) {
                        s += '0'
                    }
                    return s + str
                }
                // var newDate = new Date(dateNum.toString() * 1000);
                // return newDate.toLocaleString();
            },
            minImg(imgUrl, size) {
                let url = imgUrl
                let dotLength = url.lastIndexOf('.')
                let prefix = url.slice(0, dotLength)
                let suffix = url.slice(dotLength)
                url = prefix + size + suffix
                return url
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
                    if (item.id === '16') {
                        this.form.name.id = item.id
                        this.form.name.cName = item.show
                        this.form.name.hint = item.hint
                        this.form.name.regx = item.regx
                    } else if (item.id === '14') {
                        this.form.sex.id = item.id
                        this.form.sex.cName = item.show
                        this.form.sex.hint = item.hint
                        this.form.sex.regx = item.regx
                        if (this.form.sex.optionsBox.slots[0].values.length == 0) {
                            item.value.forEach((item) => {
                                if (item.show != '') {
                                    this.form.sex.optionsBox.slots[0].values.push(item.show)
                                }
                            })
                        }
                    } else if (item.id === '17') {
                        this.form.age.id = item.id
                        this.form.age.cName = item.show
                        this.form.age.hint = item.hint
                        this.form.age.regx = item.regx
                    } else if (item.id === '41') {
                        this.form.idcard.id = item.id
                        this.form.idcard.cName = item.show
                        this.form.idcard.hint = item.hint
                        this.form.idcard.regx = item.regx
                    }
                })
            },
            sexPicker(picker, values) {
                this.form.sex.show = values[0]
            },
            toHomePage() {
                window.sessionStorage.form = JSON.stringify(this.form)
                this.$router.push('index')
                    // if (window.sessionStorage.mateType == '1') {
                    //     this.$router.push({
                    //         name: 'landlord'
                    //     })
                    // } else {
                    //     this.$router.push({
                    //         name: 'tenant'
                    //     })
                    // }
            },
            toLogin() {
                window.location.href = 'gmapp:func=gmlogin?id=0'
            },
            toInfoPatch() {
                this.$router.replace('infoPatch')
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
                            this.status.signed = true
                            let data = JSON.parse(res.data.data.data)
                            if (data[23]) {
                                this.status.infoComplete = true
                            }
                            // window.sessionStorage.mateType = res.data.data.type
                        }
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            },
            verify() {
                if (window.sessionStorage.ticket === undefined) {
                    this.$toast({
                        message: '您尚未登录，请返回APP主界面中，“我的”界面进行登陆',
                        duration: 3000
                    })
                    return
                }
                if (!eval(this.form.name.regx).test(this.form.name.show)) {
                    this.$toast({
                        message: '请输入正确的姓名',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.sex.regx).test(this.form.sex.show)) {
                    this.$toast({
                        message: '请选择性别',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.age.regx).test(this.form.age.show)) {
                    this.$toast({
                        message: '请输入正确的年龄',
                        duration: 1500
                    })
                    return
                }
                if (!eval(this.form.idcard.regx).test(this.form.idcard.show)) {
                    this.$toast({
                        message: '请输入正确的身份证号码',
                        duration: 1500
                    })
                    return
                }
                return true
            },
            submit() {
                if (this.verify()) {
                    if (this.form.sex.show == '男') {
                        this.type = 0
                    } else {
                        this.type = 1
                    }
                    let params = {
                        '16': this.form.name.show,
                        '14': this.form.sex.show,
                        '17': this.form.age.show,
                        '41': this.form.idcard.show
                    }
                    let data = JSON.stringify(params)
                    this.$http.post(this.urlApi.addMaterial, qs.stringify({
                            ticket: window.sessionStorage.ticket,
                            n: window.sessionStorage.n,
                            type: this.type,
                            data: data,
                            activity_id: window.sessionStorage.commId,
                            order_id: 0
                        }))
                        .then((res) => {
                            console.log(res, 'addMaterial')
                            this.$indicator.close()
                            let data = res.data
                            if (data.errcode === 0) {
                                this.getMaterial()
                                this.$toast({
                                    message: '恭喜你报名成功',
                                    duration: 3000
                                })
                            } else if (data.errcode === 3022) {
                                this.$toast({
                                    message: '请勿重复报名',
                                    duration: 3000
                                })
                            } else if (data.errcode === 3023) {
                                this.$toast({
                                    message: '报名人数已达上限，无法进行报名',
                                    duration: 3000
                                })
                            } else if (data.errcode === 3024) {
                                this.$toast({
                                    message: '超过报名时间，无法进行报名',
                                    duration: 3000
                                })
                            } else if (data.errcode === 3004) {
                                this.$toast({
                                    message: '您尚未登录，请返回APP主界面中，“我的”界面进行登陆',
                                    duration: 3000
                                })
                            } else if (data.errcode === 4003) {
                                this.$toast({
                                    message: '您尚未登录，请返回APP主界面中，“我的”界面进行登陆',
                                    duration: 3000
                                })
                            } else {
                                this.$toast({
                                    message: '报名失败,请稍后重试:' + data.errcode,
                                    duration: 3000
                                })
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
                this.getUrlApi()
                this.getCommDetail()
                this.getActivityDetail()
                this.getAttributeList()
                window.sessionStorage.n && window.sessionStorage.ticket ? this.getMaterial() : ''
            }
        },
        created() {
            this.init()
        }
};
</script>
<style lang="scss" scoped>
@import '../assets/css/common.scss';
.info {
    padding-bottom: 1.5rem;
    .banner {
        height: 11rem;
        overflow: hidden;
        margin-bottom: 0.5rem;
        img {
            width: 100%;
        }
    }
    .activity-info {
        padding-bottom: 0.5rem;
        width: 95%;
        margin: 0 auto;
        border-bottom: 1px solid #d7d7d7;
        .activity-title {
            text-align: left;
            font-size: 1rem;
            font-weight: bold;
            border-bottom: 1px solid #d7d7d7;
        }
        .message {
            p {
                font-size: 0.8rem;
                margin-top: 0.5rem;
                background-size: 1rem;
                background-repeat: no-repeat;
                padding-left: 1.2rem;
                height: 1rem;
                line-height: 1rem;
                text-align: left;
            }
            p:nth-of-type(1) {
                background-image: url(../assets/img/time.png);
            }
            p:nth-of-type(2) {
                background-image: url(../assets/img/location.png);
            }
            p:nth-of-type(3) {
                background-image: url(../assets/img/man.png);
            }
            p:nth-of-type(4) {
                background-image: url(../assets/img/money.png);
            }
        }
    }
    #content {
        width: 95%;
        margin: 0.5rem auto 0 auto;
        div {
            p {
                margin: 0.2rem 0;
                font-size: 0.5rem !important;
                text-align: left;
            }
            img {
                width: 100%;
            }
        }
    }
}

.register-form {
    h1 {
        font-size: 1rem;
        padding: 10px 0;
        margin: 0;
        border-bottom: 1px solid #d7d7d7;
    }
    .sign {
        position: relative;
        top: 41px;
        button {
            width: 100%;
            border-radius: 0;
        }
    }
}
</style>
