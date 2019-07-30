export default{
    formateDate(data){
        if (!data) return ''
        let date = new Date(data)
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    }
}