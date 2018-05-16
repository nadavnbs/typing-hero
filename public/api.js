class Api {
    constructor(){
    }
    fetch(){
        return $.ajax({
            method:"GET",
            url:"/lessons"
        })
    }
}
// let newApi = new Api()
export default Api