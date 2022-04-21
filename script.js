var todolist=[];

function addtodo(){
     var inputReference=document.getElementById("imp"); //if class use getElementsByClassName
  var inputValue=inputReference.value;
  todolist.push(inputValue);

  //console.log(todolist); //to print in console
//console.log(inputreference.value);  // to read value we have inputReference
showList(); //to show list on page
}
function showList(){
    var listRef=document.getElementById("list");
    listRef.innerHTML=null;
    todolist.map((s)=>{ //item change to s
        var item =document.createElement("li"); 
        item.innerHTML =s;  //li change to item
        listRef.appendChild( item);

    })
}