<template>
    <div class="wrapper">
        <div class="cut-line"></div>
        <div class="info-wrapper mine">
            <div class="info">
                <img :src="datas.img" alt="">
                <div class="intro">
                    <p>
                        <span class="name">{{mine[16]}}</span>
                        <i :class="{'sex':true,'boy':mine[14] == '男','girl':mine[14] == '女'}"></i>
                    </p>
                    <p class="brief">
                        <span>{{mine[17]}}岁</span><i v-show="mine[9]">|</i>
                        <span>{{mine[9]}}</span><i v-show="mine[40]">|</i>
                        <span>{{mine[40]}}</span>
                    </p>
                </div>
                <div class="detail" @click="toInfo">
                    详细信息<i></i>
                </div>
            </div>
            <div class="prefer clearfix">
                <span class="condition fl">我的择偶条件</span>
                <span class="watch" @click="toCondition">
                   查看<i></i>
               </span>
            </div>
        </div>
        <div class="cut-line"></div>
        <div class="suggestion">
            <span class="fl">推荐对象</span>
            <span class="filt-text" @click="filter = true">条件筛选</span>
        </div>
        <div class="info-wrapper obj">
            <div class="info" v-for="(item,index) in propose">
                <img :src="proposeImg[index]" alt="" @click="toObj(proposeId[index])">
                <div class="intro" @click="toObj(proposeId[index])">
                    <p>
                        <span class="name">{{item[16]}}</span>
                        <i :class="{'sex':true,'boy':item[14] == '男','girl':item[14] == '女'}"></i>
                    </p>
                    <p class="brief">
                        <span>{{item[17]}}岁</span><i v-show="item[12]">|</i>
                        <span>{{item[12]}}</span><i v-show="item[40]">|</i>
                        <span>{{item[40]}}</span>
                    </p>
                    <p class="label" v-if="datas.type == 1">
                        <span v-show="item[38]">{{item[38]}}cm</span>
                        <span v-show="item[33]">{{item[33]}}</span>
                        <span v-show="item[35]">{{item[35]}}</span>
                    </p>
                    <p class="label" v-if="datas.type == 0">
                        <span v-show="item[38]">{{item[38]}}cm</span>
                        <span v-show="item[39]">{{item[39]}}kg</span>
                        <span v-show="item[2]">{{item[2]}}</span>
                    </p>
                </div>
            </div>
            <div class="no-more" v-show="more">暂无更多对象推荐</div>
            <div class="no-more" v-show="loadMoreBtn" @click="loadMore">加载更多</div>
        </div>
        <transition name="slide">
            <div class="filter-modal" v-show="filter">
                <div class="filter-cover" @click="filter = false"></div>
                <div class="filter">
                    <condition is-filter="true"></condition>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import condition from './condition'
// import urlApi from '../assets/js/urlApi'
export default {
    data() {
            return {
                filter: false,
                filters: {},
                more: false,
                loadMoreBtn: false,
                urlApi: {},
                datas: {},
                mine: {},
                propose: [],
                proposeImg: [],
                proposeId: [],
                posQueue: [{
                    pointer: 0,
                    id: 0
                }, {
                    pointer: 0,
                    id: 0
                }],
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
            toInfo() {
                this.$router.push('myInfo')
            },
            toCondition() {
                this.$router.push('condition')
            },
            confirm(filters) {
                this.filter = false
                this.filters[10017] = filters.age.show,
                    this.filters[10004] = filters.native.show,
                    this.filters[10003] = filters.nation.show,
                    this.filters[10012] = filters.education.show,
                    this.filters[10002] = filters.constellation.show,
                    this.filters[10038] = filters.height.show,
                    this.filters[10039] = filters.weight.show,
                    this.filters[10009] = filters.workplace.show,
                    this.filters[10033] = filters.salary.show,
                    this.filters[10034] = filters.house.show,
                    this.filters[10035] = filters.car.show,
                    this.filters[10036] = filters.smoke.show,
                    this.getFilterMaterialList()
            },
            cancel() {
                this.filter = false
            },
            toInfoView() {
                this.$router.push('infoView')
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
                            window.sessionStorage.type = this.datas.type
                            this.mine = JSON.parse(res.data.data.data)
                            this.getFilterMaterialList()
                        }
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
            },
            getFilterMaterialList(index, callback) {
                var queue = this.posQueue
                var pos = queue[index]
                if (!pos) {
                    index = 0
                    pos = queue[index]
                }
                let condition = [10002, 10003, 10004, 10009, 10012, 10017, 10033, 10034, 10035, 10036, 10038, 10039]
                let filterKey = []
                let filterData = []
                condition.forEach((item) => {
                    if (JSON.stringify(this.filters) != '{}') {
                        if (this.filters[item] != '' && typeof(this.filters[item]) != 'undefined' && this.filters[item] != '不限') {
                            filterKey.push(item - 10000)
                            filterData.push(this.filters[item])
                        }
                    } else if (this.mine[item] != '' && typeof(this.mine[item]) != 'undefined') {
                        filterKey.push(item - 10000)
                        filterData.push(this.mine[item])
                    }
                })
                if (!index) {
                    this.propose = []
                    this.proposeImg = []
                    this.proposeId = []
                }
                if (filterKey.length != 0) {
                    let filterKeyString = filterKey.join(',')
                    let filterDataString = filterData.join(',')
                    this.$indicator.open()
                    this.$http.get(this.urlApi.getFilterMaterialList, {
                            params: {
                                type: window.sessionStorage.type == 1 ? 0 : 1,
                                activity_id: window.sessionStorage.commId,
                                match_key: filterKeyString,
                                match_data: filterDataString,
                                last_pointer: pos.pointer,
                                last_id: pos.id
                            }
                        })
                        .then((res) => {
                            if (res.data.errcode === 0) {
                                this.$indicator.close()
                                let data = res.data.data.materials
                                if (data.length == 0) {
                                    this.more = true
                                    this.loadMoreBtn = false
                                } else {
                                    this.loadMoreBtn = true
                                    queue.splice(index + 1);
                                    queue.push(res.data.data.readpos)
                                    data.forEach((item) => {
                                        this.proposeId.push(item.id)
                                        this.proposeImg.push(item.img)
                                        let j = JSON.parse(item.data)
                                        this.propose.push(j)
                                    })
                                    callback && callback(data)
                                }
                            } else {
                                this.$indicator.close();
                                this.$toast({
                                    message: '获取页面详情失败：' + res.data.errcode,
                                    duration: 3000
                                });
                            }
                        });

                } else {
                    this.$indicator.open()
                    this.$http.get(this.urlApi.getFilterMaterialList, {
                        params: {
                            type: window.sessionStorage.type == 1 ? 0 : 1,
                            activity_id: window.sessionStorage.commId,
                            last_pointer: pos.pointer,
                            last_id: pos.id
                        }
                    }).then((res) => {
                        if (res.data.errcode === 0) {
                            this.$indicator.close()
                            let data = res.data.data.materials
                            if (data.length != 0) {
                                this.loadMoreBtn = true
                                this.more = false
                                queue.splice(index + 1)
                                queue.push(res.data.data.readpos)
                                data.forEach((item) => {
                                    this.proposeId.push(item.id)
                                    this.proposeImg.push(item.img)
                                    let j = JSON.parse(item.data)
                                    this.propose.push(j)
                                })
                                callback && callback(data)
                            } else {
                                this.more = true
                                this.loadMoreBtn = false
                            }
                        } else {
                            this.$indicator.close()
                            this.$toast({
                                message: '获取页面详情失败：' + res.data.errcode,
                                duration: 3000
                            });
                        }
                    });
                    // this.$indicator.close();
                    // this.$toast({
                    //  message:'请选择筛选条件！',
                    //  duration:3000
                    // });
                    // console.log("2");
                }
            },
            loadMore() {
                this.getFilterMaterialList(this.posQueue.length - 1, function(item) {
                    if (item.length == 0) {
                        this.$toast({
                            message: '没有更多了！',
                            duration: 3000
                        })
                    }
                })
            },
            toObj(id) {
                this.$router.push({
                    path: 'infoView',
                    query: {
                        'id': id
                    }
                })
            },
            init() {
                this.getUrlApi()
                this.getMaterial()
            }
        },
        components: {
            condition
        },
        created() {
            this.$on('confirm', this.confirm)
            this.$on('cancel', this.confirm)
            this.init()
        }
};
</script>
<style lang="scss" scoped>
@import '../assets/css/common.scss';
.info-wrapper {
    padding: 0 0.5rem;
    .info {
        display: flex;
        padding: 0.5rem 0;
        border-bottom: 1px solid #d7d7d7;
        img {
            width: 3rem;
            height: 3rem;
            border-radius: 5px;
        }
        .detail {
            flex: 0 0 3rem;
        }
        .intro {
            flex: 1;
            padding-top: 0.3rem;
            p {
                margin: 0;
                text-align: left;
                padding-left: 0.5rem;
                line-height: 1.3;
                .name {
                    font-size: 0.9rem;
                }
            }
            .brief,
            .label {
                color: #989898;
                font-size: 0.7rem;
            }
            .brief {
                span {
                    display: inline-block;
                    margin: 0 0.1rem;
                    &:first-child {
                        margin-left: 0;
                    }
                }
                i {
                    font-style: normal;
                }
            }
        }
        .detail {
            height: 3rem;
            line-height: 3rem;
            font-size: 0.7rem;
            color: #989898;
            text-align: right;
            position: relative;
            padding-right: 0.5rem;
            i {
                position: absolute;
                width: 0.6rem;
                height: 0.6rem;
                top: 50%;
                margin-top: -0.3rem;
                background: url('../assets/img/small_arrow.png') center no-repeat;
                background-size: contain;
            }
        }
    }
    .prefer {
        padding: 0.5rem 0;
        font-size: 0.8rem;
        text-align: right;
        .watch {
            height: 100%;
            color: #989898;
            font-size: 0.7rem;
            position: relative;
            padding-right: 0.5rem;
            i {
                position: absolute;
                width: 0.6rem;
                height: 0.6rem;
                top: 50%;
                margin-top: -0.3rem;
                background: url('../assets/img/small_arrow.png') center no-repeat;
                background-size: contain;
            }
        }
    }
    .no-more {
        padding: 0.5rem;
        color: #989898;
        font-size: 0.7rem;
    }
}

.suggestion {
    padding: 0.5rem 0px;
    border-bottom: 1px solid #d7d7d7;
    font-size: 0.8rem;
    padding-left: 0.5rem;
    text-align: right;
    .filt-text {
        position: relative;
        font-size: 0.7rem;
        color: #10abfe;
        padding-right: 0.75rem;
    }
}

.obj {
    .intro {
        padding-top: 0!important;
    }
    .label {
        span {
            display: inline-block;
            color: orange!important;
            border-radius: 0.75rem;
            height: 0.8rem;
            line-height: 0.8rem;
            border: 1px solid orange;
            padding: 0 0.5rem;
            font-size: 0.6rem;
        }
    }
}

.filter-modal {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    background-color: rgba(195, 195, 195, 0.4);
    .filter-cover {
        flex: 0 0 20%;
        background-color: rgba(195, 195, 195, 0.4);
    }
    .filter {
        flex: 0 0 80%;
        background-color: #f0eff5;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: all .3s ease;
}

.slide-enter,
.slide-leave-active {
    transform: translateX(200px);
    opacity: 0;
}
</style>
