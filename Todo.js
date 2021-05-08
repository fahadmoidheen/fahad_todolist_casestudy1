function ajax() {
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange=function () {
        if(this.readyState==4&&this.status==200){
            var resp =JSON.parse(this.responseText);
            var htmlContent =""
            for(var i =0; i<resp.length; i++){
                var currentRecord = resp[i];
                htmlContent += "<tr><td>"+currentRecord.id+"</td><td>"+currentRecord.title+"</td><td><input type='checkbox' name='test' value="+currentRecord.completed+"></td></tr>"
            };
            document.getElementById("tableContents").innerHTML = htmlContent;
            
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
       
}
    
ajax();

var count =0;
    
$('body').on('change','input[type=checkbox]',function(e){
    console.log(" Checked");
    var count = $("[type='checkbox']:checked").length;
    var promise =new Promise(function(resolve,reject){ 
      if(count===5){
          resolve("Congrats!! you have completed 5 tasks successfully  ");
          }
        })
promise.
then(function(s){
      alert(s);
        })
    });