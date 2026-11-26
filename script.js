function point(grade){
    grade =grade.toUpperCase().trim();
    if(grade=="EX") return 10;
    if(grade=="A") return 9;
    if(grade=="B") return 8;
    if(grade=="C") return 7;
    if(grade=="D") return 6;
    if(grade=="E") return 5;
    return 0;
}
// document.getElementById("btn").addEventListener("click",function(){
//     document.getElementById("result").innerHTML="clicked";
// });
function calc(){
let totalCredits=21.5;
let total=
(point(document.getElementById("g1").value)*4)+
(point(document.getElementById("g2").value)*3)+
(point(document.getElementById("g3").value)*4)+
(point(document.getElementById("g4").value)*3)+
(point(document.getElementById("g5").value)*3)+
(point(document.getElementById("g6").value)*1.5)+
(point(document.getElementById("g7").value)*1.5)+
(point(document.getElementById("g8").value)*1.5);
let cgpa=total/totalCredits;
document.getElementById("result").innerHTML="YOUR CGPA="+cgpa.toFixed(3);
}
// document.getElementById("btn").addEventListener("click",calc);