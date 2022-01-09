let btn=document.querySelector('#btn');
let text=document.querySelector('#txt');
let div1=document.getElementById('div1').getAttribute("data-number");
let div2=document.getElementById('div2').getAttribute("data-number");
let div3=document.getElementById('div3').getAttribute("data-number");

btn.addEventListener("click" , function(){
   if(text.value==""){
       alert("Please Enter The Coordinates");
   }
   else{
       if(text.value===div1){
           document.getElementById('gif').style.display="block";
           setInterval(frame , 3000);
           function frame(){
            if(window.screen.availWidth<=500){
                document.getElementById('gif').style.width="18px";
                document.getElementById('gif').style.height="18px";
             }
             else{
                document.getElementById('gif').style.width="40px";
                document.getElementById('gif').style.height="40px";
             }
           }
       }

       if(text.value===div2){
        document.getElementById('gif2').style.display="block";
        setInterval(frame2 , 3000);
        function frame2(){
            if(window.screen.availWidth<=500){
                document.getElementById('gif2').style.width="18px";
                document.getElementById('gif2').style.height="13px";
             }
             else{
                document.getElementById('gif2').style.width="40px";
                document.getElementById('gif2').style.height="40px";
             }
        }
    }

    if(text.value===div3){
       
            document.getElementById('gif3').style.display="block";
            setInterval(frame3 , 3000);
            function frame3(){
             if(window.screen.availWidth<=500){
                document.getElementById('gif3').style.width="18px";
                document.getElementById('gif3').style.height="18px";
             }
             else{
                document.getElementById('gif3').style.width="40px";
                document.getElementById('gif3').style.height="40px";
             }
             
        }
    }
   }
});
