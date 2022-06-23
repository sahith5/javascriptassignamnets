<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>


    <div>
   
      <button onclick="func()">Add </button>
      <div>
        localStorage count:
        <span id="localstorage"> </span>
      </div>
      <div>
        sessionstorage count:
        <span id="sessionstorage"> </span>
      </div>

    </div>



    <script>
        var button=document.querySelector(button);
     
        
        var numl=parseInt(localStorage.getItem("number"));
        var ls=document.querySelector("#localstorage")
        var ss=document.querySelector("#sessionstorage");
        var nums=parseInt(sessionStorage.getItem("number"))
        ls.innerHTML=localStorage.getItem("number");
        ss.innerHTML=sessionStorage.getItem("number");


        function func()
        {
            numl=numl+2;
            nums=nums+2;
           localStorage.setItem("number",numl);
           ls.innerHTML=localStorage.getItem("number");
           sessionStorage.setItem("number",nums);
           ss.innerHTML=sessionStorage.getItem("number");

        }
        

    </script>
  </body>
