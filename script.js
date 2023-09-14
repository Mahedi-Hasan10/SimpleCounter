let count = 0;
function increase(){
    count++;
    document.getElementById('demo').innerHTML = count;
}
function Decrease(){
    if(count > 0) count--;
    document.getElementById('demo').innerHTML = count;
}
function Reset(){
    count=0;
    document.getElementById('demo').innerHTML = count;
}