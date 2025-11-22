
function randomQoutes(){
var userName = ["― Oscar Wilde","― Frank Zappa","― Marcus Tullius Cicero","― Narcotics Anonymous"];
var text = ["“Be yourself; everyone else is already taken.”","“So many books, so little time.”","“A room without books is like a body without a soul.”","“Insanity is doing the same thing, over and over again, but expecting different results.”"]
var num = Math.floor (  Math.random( ) * userName.length )
 document.getElementById("demo").innerHTML =  text[num]
  document.getElementById("asmaa").innerHTML = userName[num] 

}
randomQoutes()
