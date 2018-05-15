class Api {
    constructor(){
    }
    fetch(){
        return $.ajax({
            method:"GET",
            url:"/home"
        })
    }
}
let newApi = new Api()
export default newApi