function ajax() {
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange=function () {
        if(this.readyState==4&&this.status==200){
            var resp =JSON.parse(this.responseText);
            var htmlContent =""
            for (var i=0;i<resp.length;i++){
                var currentData =resp[i];
                htmlContent+= `<tr><td>${currentData.id}</td><td>${currentData.title}</td><td><input type="checkbox" ${checkValue(currentData.completed)} value=${currentData.title}</td></tr>`
              };
              document.getElementById("tableContents").innerHTML= htmlContent;
                }
              
            
            function checkValue(value1){
              console.log(value1);
              if(value1){return "disabled"}  else{return null;}
            };
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
