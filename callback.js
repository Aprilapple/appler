/**
 * Created by asus on 2017/6/29.
 */
//开发者  写方法的人
//callback   函数
//传入一个函数
function fun(callback){
    console.log(typeof callback);
    //callback 是function 直接+ （） 使用  （括号内+参数或内容）
    callback( );                 //  callback('sas','asdad')
}


//使用者
fun(function(){                             //（a, b ,c）
    //console.log(a);   sas
    //console.log(b);   asdad
    //console.log(c); undefind

    console.log('callback');                   //callback
});