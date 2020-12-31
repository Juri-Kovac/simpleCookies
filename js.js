$(window).on('load', function (){
    let traversCookie = "colour="
    if (document.cookie.length !== null ){
        let nameValueArray = document.cookie.split("=");
        document.body.style.backgroundColor = nameValueArray[1];
        console.log(nameValueArray)
        nameValueArray.forEach((parseCookie,index )=>{
            parseCookie.trim();
            console.log(parseCookie)
            if(parseCookie.indexOf(traversCookie) === null) $("#setColour").val(parseCookie.substring( traversCookie.length,parseCookie.length));
        })
    }
})
$(document).ready(function (e){
    $("#setColour").change(function (){
        let setColour = this.options[this.selectedIndex].textContent;
        document.body.style.backgroundColor = setColour;
        let cookieVal = "colour=" + setColour;
        document.cookie = cookieVal + ";expires="+ new Date(2021, 1, 18).toUTCString(); /*--Mon, 18 Jan 2021 13:30:00 UTC;--*/
        /*--store object or array use JSON.stringify(obj) instead colour
       const obj = {
           name:'Juri',
           species :'I am human be God dammed, my live has value !!!'
           }--*/
    })
})