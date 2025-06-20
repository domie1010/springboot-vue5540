const base = {
    get() {
        return {
            url : "http://localhost:8080/kehuguanxi/",
            name: "kehuguanxi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kehuguanxi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小型企业客户关系管理系统"
        } 
    }
}
export default base
