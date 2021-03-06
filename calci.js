function addcharc(i){
    document.getElementById('inpchar').value += i;
}

function cclear(){
    document.getElementById('inpchar').value = '';
}

function calciquals(){
    var oper = document.getElementById('inpchar').value;
    document.getElementById('inpchar').value = eval(oper);
}