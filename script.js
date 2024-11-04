// para.style.color = "red";

// para.style.fontFamily = "Gilroy";

// para.classList.add('name');

// var h1 = document.createElement('h1');

// h1.textContent += " kamaljit singh";

// h1.classList.add('name');

// document.querySelector('body').appendChild(h1);



// Q1
// var btn = document.querySelector("button");
// var para = document.querySelector("p");


// btn.addEventListener("click", function(){
   
//     para.textContent =  "change content" ;
     
// })



// Q2
//  var img1 = document.querySelector("#one");
//  var img2 = document.querySelector("#two");

//  var btn = document.querySelector("button");

//  btn.addEventListener("click", function(){
//     var src1 = img1.src;
//     var src2 = img2.src;

//     img1.src = src2;
//     img2.src = src1;

//  });



 // Q3
//   var form = document.querySelector("form");
//   var inps = document.querySelectorAll('input[type ="text"]');
//   var h4 = document.querySelector("h4");

//   form.addEventListener("submit", function(ev){
//             ev.preventDefault();
            
//            for( var i = 0; i<inps.length; i++){
//             if(inps[i].value.trim() === ''){
//               h4.textContent = "Error, some fiels are empty";
//               h4.style.color = "red";
//               break;
//             }
        
//            }        
//   });



 // Q4
//  var add = document.querySelector("#add");
//  var remove = document.querySelector("#remove");
//  var inp = document.querySelector("input");
//  var ul = document.querySelector("ul")

//  var li;

//  add.addEventListener("click", function(){
//     if(inp.value.trim() === ''){}

//     else{
//          li =  document.createElement("li");
//           li.textContent = inp.value;
         
//         ul.append(li);
//         inp.value = "";
//     }
//  })

// remove.addEventListener("click", function(){
//     // li = document.querySelector("li");  // Or use a more specific selector
//     // ul.removeChild(li);
//     const lastLi = ul.lastElementChild;  // Select the last <li> element
//     if (lastLi) {  // Check if there is a last <li>
//         ul.removeChild(lastLi);  // Remove the last <li> element
//     }

// })


 // Q5

// var start = document.querySelector('#start');
// var stop = document.querySelector('#stop');
// var h3 = document.querySelector('h3');

// var Int ;
// start.addEventListener("click", function(){
//    var count = 0 ;
   
//  Int =  setInterval(function(){
//       h3.textContent = count;
//       count++;
//    },1000);
   
// });


// stop.addEventListener("click", function(){

//   clearInterval(Int);
    
//  });


 // Q6

// var home = document.querySelector("#home");
// var about = document.querySelector("#about");
// var contact = document.querySelector("#contact");


// var hometext = document.querySelector("#hometext");
// var abouttext = document.querySelector("#abouttext");
// var contacttext = document.querySelector("#contacttext");

// hometext.style.display = "block";

// home.addEventListener("click", function(){   
//     hideall();
// hometext.style.display = "block";

// })


// about.addEventListener("click", function(){ 
//        hideall()   ;
//     abouttext.style.display = "block";
//  })


//  contact.addEventListener("click", function(){  
//     hideall(); 
//     contacttext.style.display = "block";
//  })

// function hideall(){
//   var h3 =  document.querySelectorAll("h3");
//   h3.forEach(function(h3){
//     h3.style.display = "none";
//   })
// }

    
 // Q7

// var  prog = document.querySelector(".progress");
// var h3 = document.querySelector("h3");
// var count = 0;

//  var Int = setInterval(function(){
//       if(count === 100){
//          clearInterval(Int);
//          h3.style.opacity = 1;
//       }

//     count++;
//     // console.log(count);
//     prog.style.width = count + "%" ; 
  
// },50)


 // Q8

//  var input = document.querySelector("input");

//  var data = [
//     {name:"kamaljit", src:"https://images.unsplash.com/photo-1556513318-8442c4b266a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHNhcmRhciUyMG1vZGVsfGVufDB8fDB8fHww"},
//     {name:"Prem", src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"},
//     {name:"Sarfraz", src:"https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"},
//     {name:"kamaljit", src:"https://images.unsplash.com/photo-1556513318-8442c4b266a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHNhcmRhciUyMG1vZGVsfGVufDB8fDB8fHww"},
//     {name:"Prem", src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"},
//     {name:"Sarfraz", src:"https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"} 

// ]

//  var person = "" ;
//  data.forEach(function(elem){
//      person += `<div class="person">
//                     <div class="img" ><img src="${elem.src}" alt=""></div>
//                      <h5>${elem.name}</h5>
//                 </div>`
//  })

//  document.querySelector(".people").innerHTML = person ;


// input.addEventListener("input", function(){
//     var matching = data.filter(function(e){
//      return e.name.startsWith(input.value)
//    })
    
//    var newusers = "";
//    matching.forEach(function(elem){
//     newusers += `<div class="person">
//                    <div class="img" ><img src="${elem.src}" alt=""></div>
//                     <h5>${elem.name}</h5>
//                </div>`
// })

//    document.querySelector(".people").innerHTML = newusers ;

// })

// Q9
var textarea = document.querySelector("textarea");
var span = document.querySelector("span");
var count = 0 ;
textarea.addEventListener("input", function(){
     
    span.textContent = textarea.value.length ;
   
})





