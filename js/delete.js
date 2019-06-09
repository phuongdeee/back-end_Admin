/**
 * 
 * @param {type} item
 * @returns {undefined}
 * js delete function for every delete button
 */
function deleteFunction(item){
    var txt;
    if(confirm("Areyou sure you want to detele ".concat(item," ?"))){
        txt = "Successfully deleted ".concat(item) ;
    }else{
        txt = item.concat(" not deleted");
    }
    document.getElementById("box").innerHTML = txt;
}