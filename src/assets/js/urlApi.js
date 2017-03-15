function getUrlApi() {
    let urlApi = {}
    let url = window.location.href
    console.log(url)
        // window.sessionStorage.ticket = "0|RHPcpLjEbl6N6o647sZ1F/mBMuR7hOjwrI6YvnitkBQ="
    window.sessionStorage.ticket = "0|KE442m0QHufK+aLRZb2XNP67Th6rmw0II51LxXvLHd0="
    window.sessionStorage.n = '123'
    window.sessionStorage.commId = '87206'
    window.sessionStorage.detailId = '88010'
    if (url.indexOf('8080') > -1) {
        // 获取原生活动详情
        urlApi.getActivityDetail = '/proApi2/1/activity?method=getDetail&grey=2'
            // 获取表单字段列表
        urlApi.getAttributeList = '/proApi1/1/general?method=getAttributeList&grey=2'
            //添加活动素材
        urlApi.addMaterial = '/proApi1/1/general?method=addMaterial&grey=2'
            //修改活动素材
        urlApi.modifyMaterial = '/proApi1/1/general?method=modifyMaterial&grey=2'
            //删除活动素材
        urlApi.deleteMaterial = '/proApi1/1/general?method=deleteMaterial&grey=2'
            // 获取指定素材的详细信息
        urlApi.getMaterial = '/proApi1/1/general?method=getMaterial&grey=2'
            //获取筛选素材列表
        urlApi.getFilterMaterialList = '/proApi1/1/general?method=getFilterMaterialList&grey=2'
            // 上传图片
        urlApi.upload = '/proApi2/1/picture?method=upload'
            // 关注
        urlApi.follow = '/proApi1/1/user?method=follow&grey=2'
            // 发私信
        urlApi.sendMsg = '/proApi1/1/message?method=sendMsg&grey=1'
    } else {
        // 获取原生活动详情
        urlApi.getActivityDetail = 'https://bushd.gpsoo.net/1/activity?method=getDetail'
            // 获取表单字段列表
        urlApi.getAttributeList = 'https://community.gpsoo.net/1/general?method=getAttributeList&grey=1'
            //添加活动素材
        urlApi.addMaterial = 'https://community.gpsoo.net/1/general?method=addMaterial&grey=1'
            //修改活动素材
        urlApi.modifyMaterial = 'https://community.gpsoo.net/1/general?method=modifyMaterial&grey=1'
            //删除活动素材
        urlApi.deleteMaterial = 'https://community.gpsoo.net/1/general?method=deleteMaterial&grey=1'
            // 获取指定素材的详细信息
        urlApi.getMaterial = 'https://community.gpsoo.net/1/general?method=getMaterial&grey=1'
            //获取筛选素材列表
        urlApi.getFilterMaterialList = 'https://community.gpsoo.net/1/general?method=getFilterMaterialList&grey=1'
            // 上传图片
        if (location.protocol == 'http:') {
            urlApi.upload = 'http://bushd.gpsoo.net/1/picture?method=upload'
        } else if (location.protocol == 'https:') {
            urlApi.upload = 'https://bushd.gpsoo.net/1/picture?method=upload'
        }
        // 关注
        urlApi.follow = 'https://community.gpsoo.net/1/user?method=follow'
            // 发私信
        urlApi.sendMsg = 'https://community.gpsoo.net/1/message?method=sendMsg'
    }
    return urlApi
}

module.exports = {
    urlApi: getUrlApi()
}
