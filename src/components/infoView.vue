<template>
    <div class="wrapper">
        <header :class="'bg'+bgClass">
            <p><img :src="datas.img" alt=""></p>
            <p>
                <span class="name">{{mine[16]}}</span>
                <i :class="{sex:true,boy:mine[14] == '男',girl:mine[14] == '女'}"></i>
                <span class="age">{{mine[17]}}岁</span>
            </p>
        </header>
        <h1 class="title self-pic">个人照片</h1>
        <div class="pics">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(img,index) in mine[37]">
                        <img style="width: 100%;height: 100%;" :src="img" alt="个人照片" @click="bigPicView(index)">
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-container2" v-show="bigPic">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="img in mine[37]" @click="bigPic = false">
                    <img :data-src="img" class="swiper-lazy">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
            </div>
            <p class="return-tips">轻触返回</p>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
        <h1 class="title self-desc">自我描述</h1>
        <p class="desc" v-show="mine[23]">{{mine[23]}}</p>
        <p class="desc" v-show="!mine[23]">这个人很懒，什么都没留下。</p>
        <div class="cut-line"></div>
        <h1 class="title ta-condition">
            <span class="fl">择偶条件</span>
            <span class="watch" @click="toConditionView(datas.id)">查看<i></i></span>
        </h1>
        <h1 class="title">基本信息</h1>
        <form action="">
            <mt-field :label="form.native.cName + ':'" class="grey-label" :value="mine[4]" readonly></mt-field>
            <mt-field :label="form.nation.cName + ':'" class="grey-label" :value="mine[3]" readonly></mt-field>
            <mt-field :label="form.education.cName + ':'" class="grey-label" :value="mine[12]" readonly></mt-field>
            <mt-field :label="form.constellation.cName + ':'" class="grey-label" :value="mine[2]" readonly></mt-field>
            <mt-field :label="form.height.cName + ':'" class="grey-label" :value="mine[38]+'cm'" readonly></mt-field>
            <mt-field :label="form.weight.cName + ':'" class="grey-label" :value="mine[39]+'kg'" readonly></mt-field>
        </form>
        <h1 class="title">拓展信息</h1>
        <form action="">
            <mt-field :label="form.occupation.cName + ':'" class="grey-label" :value="mine[40]" readonly></mt-field>
            <mt-field :label="form.workplace.cName + ':'" class="grey-label" :value="mine[9]" readonly></mt-field>
            <mt-field :label="form.salary.cName + ':'" class="grey-label" :value="mine[33]" readonly></mt-field>
            <mt-field :label="form.house.cName + ':'" class="grey-label" :value="mine[34]" readonly></mt-field>
            <mt-field :label="form.car.cName + ':'" class="grey-label" :value="mine[35]" readonly></mt-field>
            <mt-field :label="form.smoke.cName + ':'" class="grey-label" :value="mine[36]" readonly></mt-field>
        </form>
        <div class="footer-btn">
            <mt-button type="primary" @click="interest">对Ta感兴趣？关注Ta</mt-button>
        </div>
    </div>
</template>
<script>
import form from '../assets/js/form'
// import urlApi from '../assets/js/urlApi.js'

export default {
    data() {
            return {
                form: form,
                bgClass: 1,
                viewImg: {
                    show: false
                },
                bigPic: false,
                attributeList: [],
                urlApi: {},
                datas: {},
                mine: {}
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
                            this.datas = res.data.data
                            window.sessionStorage.uid = this.datas.uid
                            this.mine = JSON.parse(res.data.data.data)
                        }
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
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
                    } else if (item.id === '34') { //住房状况
                        this.form.house.id = item.id
                        this.form.house.cName = item.show
                        this.form.house.hint = item.hint
                        this.form.house.regx = item.regx
                    } else if (item.id === '35') { //购车状况
                        this.form.car.id = item.id
                        this.form.car.cName = item.show
                        this.form.car.hint = item.hint
                        this.form.car.regx = item.regx
                    } else if (item.id === '36') { //烟酒习惯
                        this.form.smoke.id = item.id
                        this.form.smoke.cName = item.show
                        this.form.smoke.hint = item.hint
                        this.form.smoke.regx = item.regx
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
            interest() {
                this.$messagebox.confirm('确定关注ta?').then(action => {
                    this.$http.get(this.urlApi.follow, {
                        params: {
                            fid: window.sessionStorage.uid,
                            type: 1,
                            ticket: window.sessionStorage.ticket,
                            n: window.sessionStorage.n
                        }
                    }).then((res) => {
                        console.log(res, 'follow')
                        if (res.data.errcode === 0) {
                            this.sendMsg()
                        } else {
                            this.$toast({
                                message: '关注失败',
                                duration: 3000
                            })
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                })
            },
            sendMsg() {
                this.$http.post(this.urlApi.sendMsg + "&revid=" + window.sessionStorage.uid + "&ticket=" + window.sessionStorage.ticket + "&n=" + window.sessionStorage.n + "&content=你好，我在酷米客找对象活动中看到你的资料，对你很感兴趣，方便聊一聊吗？").then((res) => {
                    console.log(res, 'sendMsg')
                    if (res.data.errcode === 0) {
                        this.$toast({
                            message: '我们已经把您的心意传达给了对方，请返回酷米客app私信中查看！',
                            duration: 3000
                        })
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            bigPicView: function(argIndex) {
                this.bigPic = true;
                let index = argIndex;
                setTimeout(() => {
                    var swiper = new Swiper('.swiper-container2', {
                        pagination: '.swiper-pagination',
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        initialSlide: index,
                        paginationClickable: true,
                        preloadImages: false,
                        lazyLoading: true,
                        zoom: true,
                        zoomToggle: false
                    });
                }, 300)
            },
            swiperInit() {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 5,
                    paginationClickable: true,
                    spaceBetween: 10,
                    freeMode: true
                });
            },
            bgRandom() {
                this.bgClass = Math.floor(Math.random() * 5 + 1)
            },
            toConditionView(id) {
                this.$router.push({
                    path: 'conditionView',
                    query: {
                        id: id
                    }
                })
            },
            init() {
                this.getUrlApi()
                this.getMaterial()
                this.getAttributeList()
                this.swiperInit()
                this.bgRandom()
            }
        },
        mounted() {
            this.init()
        }
};
</script>
<style lang="scss" scoped>
@import '../assets/css/common.scss';
.wrapper {
    header {
        height: 6rem;
        padding: 5px;
        box-sizing: border-box;
        img {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            border: 2px solid #fff;
            vertical-align: bottom;
        }
        .name {
            font-size: 0.8rem;
        }
        .age {
            font-size: 0.7rem;
            color: #989898;
        }
    }
    .bg1 {
        background: url('../assets/img/jpg_01.jpg') center no-repeat;
        background-size: container;
    }
    .bg2 {
        background: url('../assets/img/jpg_02.jpg') center no-repeat;
        background-size: container;
    }
    .bg3 {
        background: url('../assets/img/jpg_03.jpg') center no-repeat;
        background-size: container;
    }
    .bg4 {
        background: url('../assets/img/jpg_04.jpg') center no-repeat;
        background-size: container;
    }
    .bg5 {
        background: url('../assets/img/jpg_05.jpg') center no-repeat;
        background-size: container;
    }
    .title {
        color: #666;
    }
    .pics {
        background-color: #fff;
        padding: 10px;
        position: relative;
        &:after{
            display: block;
            position: absolute;
            left:0;
            bottom:0;
            width:100%;
            border-bottom:1px solid #d9d9d9;
            content:' ';
            -webkit-transform:scaleY(0.6);
            transform:scaleY(0.6);
        }
        .swiper-container {
            width: 100%;
            // margin: 20px auto;
        }
        .swiper-slide {
            width: 3rem!important;
            height: 3rem!important;
            text-align: center;
            font-size: 18px;
            background: #fff;
            margin-right: 5px;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .swiper-container2 {
            background: #000;
            position: fixed;
            z-index: 1000;
            background-color: #000;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            .swiper-slide {
                text-align: center;
                background: #000;
                img {
                    width: auto;
                    height: auto;
                    max-width: 100%;
                    max-height: 100%;
                    -ms-transform: translate(-50%, -50%);
                    -webkit-transform: translate(-50%, -50%);
                    -moz-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                }
            }
        }
    }
    .swiper-container2 {
        background: #000;
        position: fixed;
        z-index: 1000;
        background-color: #000;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        .swiper-slide {
            text-align: center;
            background: #000;
            img {
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
                -ms-transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                position: absolute;
                left: 50%;
                top: 50%;
            }
        }
        p {
            position: absolute;
            bottom: 1.5rem;
            left: 50%;
            transform: translate(-50%);
            font-size: 0.6rem;
            z-index: 1001
        }
    }
    .self-desc,.self-pic{
        position: relative;
        &:after{
            display: block;
            position: absolute;
            left:0;
            bottom:0;
            width:100%;
            border-bottom:1px solid #d9d9d9;
            content:' ';
            -webkit-transform:scaleY(0.6);
            transform:scaleY(0.6);
        }
    }
    .desc {
        min-height: 100px;
        padding: 8px 10px;
        font-size: 0.8rem;
        text-align: left;
        position: relative;
        &:after{
            display: block;
            position: absolute;
            left:0;
            bottom:0;
            width:100%;
            border-bottom:1px solid #d9d9d9;
            content:' ';
            -webkit-transform:scaleY(0.6);
            transform:scaleY(0.6);
        }
    }
    .ta-condition {
        text-align: right;
        background-color: #fff;
        .watch {
            font-size: 0.7rem;
            position: relative;
            padding-right: 10px;
            color: #10abfe;
            i {
                position: absolute;
                width: 0.6rem;
                height: 0.6rem;
                top: 50%;
                margin-top: -0.3rem;
                background: url('../assets/img/big_arrow_blue.png') center no-repeat;
                background-size: contain;
            }
        }
    }
}
</style>
