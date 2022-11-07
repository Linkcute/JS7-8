
//sub function
function isEven(n) {
   if (n % 2 == 0) {
    return true
   }
   else {
    return false
   }
}

function isOdd(n) {
   if (Math.abs(n % 2) == 1){
    return true
   }
   else {
    return false
   }
}

function prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

function isInt(value) {

    var er = /^-?[0-9]+$/;

    return er.test(value);
}



// Main function


function bai1() {
    let array = document.getElementById("themso1").value
    if (array) {
        mang1 = array.split(",")
        let tong = 0
        for (const elem in mang1) {
            if (mang1[elem] >= 0)
            {
                tong += parseInt(mang1[elem])
            }
          } 
        document.getElementById("ketqua1").innerHTML = tong
    }
}

let nutbai1 = document.getElementById("btn1")
nutbai1.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai1()

})



function bai2() {
    let array = document.getElementById("themso2").value
    if (array) {
        mang1 = array.split(",")
        let tong = 0
        for (const elem in mang1) {
            if (mang1[elem] >= 0)
            {
                tong += 1
            }
          } 
        document.getElementById("ketqua2").innerHTML = tong
    }
}

let nutbai2 = document.getElementById("btn2")
nutbai2.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai2()

})


function bai3() {
    let array = document.getElementById("themso3").value
    if (array) {
        mang1 = array.split(",")
        document.getElementById("ketqua3").innerHTML = Math.min(...mang1)
    }
}

let nutbai3 = document.getElementById("btn3")
nutbai3.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai3()

})


function bai4() {
    let array = document.getElementById("themso4").value
    let positive = []
    if (array) {
        mang1 = array.split(",")
        for (const elem in mang1) {
            if (mang1[elem] >= 0)
            {
                positive.push(mang1[elem])
            }
          } 

        document.getElementById("ketqua4").innerHTML = Math.min(...positive)
    }
}

let nutbai4 = document.getElementById("btn4")
nutbai4.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai4()

})


function bai5() {
    let array = document.getElementById("themso5").value
    let final_even_num = -1
    if (array) {
        mang1 = array.split(",")
        for (const elem in mang1) {
            if (isEven(mang1[elem]))
            {
                final_even_num = mang1[elem]
            }
            else {
             final_even_num = -1   
            }
          } 
        document.getElementById("ketqua5").innerHTML = final_even_num
    }
}

let nutbai5 = document.getElementById("btn5")
nutbai5.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai5()

})



function bai6() {
    let array = document.getElementById("themso6").value
    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById("p2").value

    if (array) {
        mang1 = array.split(",")
        let p11 = mang1[p1]
        let p21 = mang1[p2]
        mang1[p1] = p21
        mang1[p2] = p11

        document.getElementById("ketqua6").innerHTML = mang1
    }
}

let nutbai6 = document.getElementById("btn6")
nutbai6.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai6()

})


function bai7() {
    let array = document.getElementById("themso7").value

    if (array) {
        mang1 = array.split(",").sort(function(a, b){return a-b})
        document.getElementById("ketqua7").innerHTML = mang1
    }
}

let nutbai7 = document.getElementById("btn7")
nutbai7.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai7()

})


function bai8() {
    let array = document.getElementById("themso8").value

    if (array) {
        mang1 = array.split(",")
        for (const elem in mang1) {
            if (prime(mang1[elem])) {
                document.getElementById("ketqua8").innerHTML = mang1[elem]
                return
            }
        }
        document.getElementById("ketqua8").innerHTML = -1
    }
}

let nutbai8 = document.getElementById("btn8")
nutbai8.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai8()

})


function bai9() {
    let array = document.getElementById("themso9").value
    let sumint = 0

    if (array) {
        mang1 = array.split(",")
        for (const elem in mang1) {
            if (isInt(mang1[elem])) {
                sumint += 1
            }
        }
        document.getElementById("ketqua9").innerHTML = sumint
    }
}

let nutbai9 = document.getElementById("btn9")
nutbai9.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai9()

})



function bai10() {
    let array = document.getElementById("themso10").value
    let pos = 0
    let naga = 0

    if (array) {
        mang1 = array.split(",")
        for (const elem in mang1) {
            if (mang1[elem] > 0)  {
                pos += 1
            }
            else if (mang1[elem] < 0){
                naga +=1
            }
        }

        if (pos > naga) {
            document.getElementById("ketqua10").innerHTML = "Số dương nhiều hơn số âm"
        }
        else if (pos < naga) {
            document.getElementById("ketqua10").innerHTML = "Số âm nhiều hơn số dương"
        }
        else {
            document.getElementById("ketqua10").innerHTML = "Số âm bằng số dương"
        }
    }
}

let nutbai10 = document.getElementById("btn10")
nutbai10.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    bai10()

})





//1,2,3,4,5,6,7,8,9,10

