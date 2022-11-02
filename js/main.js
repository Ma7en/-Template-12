




/*
==============================================
==============================================
*/


/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})


// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 100) {
//         btnTop.style.display = "block";
//     } else {
//         btnTop.style.display = "none";
//     }
// });

// btnTop.onclick = () => {
//     window.scrollTo({
//         // left: 0,
//         top: 0,
//         behavior: 'smooth',
//     })
// }

/* ====== end scroll to top btn ===== */


/*
==============================================
==============================================
*/


/* 1 start menu */
let toggleMenu = document.querySelector(".toggle-menu");
let navMenu = document.getElementById("nav-menu");
let navMenuLi_1 = document.querySelector(".close_1");



// show menu 
toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


// hidden

window.addEventListener("scroll",  () => {
    navMenu.classList.remove("open");
});



/* 1 end menu */


/*
==============================================
==============================================
*/


/* 1 start chose and active */

let allLis = document.querySelectorAll("#nav-menu li");

allLis.forEach(function (ele) {
    ele.onclick = function () {
        // remove active class form all element
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        });

        this.classList.add("active");
    }


});

// allLi.forEach(function (ele) {
//     ele.addEventListener("click", function() {

//         allLi.forEach((ele) => {
//             ele.classList.remove("active");
//         });

//         this.classList.add("active");
//     });
// });

/* 1 end chose and active */


/*
==============================================
==============================================
*/


/* 2 start chose tab lindaing */

let lanLeft = document.querySelector(".landing .i-fa-left");
let lanRight = document.querySelector(".landing .i-fa-right");
let btmLanLi = document.querySelector(".bullets_landing li");
let btmLanLiArray = Array.from(btmLanLi);
let indexValue = 1;
showCont(indexValue);


lanLeft.addEventListener("click", () => {
    cont_landing(-1);
});

lanRight.addEventListener("click", () => {
    cont_landing(1);
});

function cont_landing(e) {
    showCont(indexValue += e);
}


function btm_landing(e) {
    showCont(indexValue = e);
}

function showCont(e) {
    let i;
    const content = document.querySelectorAll(".landing .text_landing .content");
    const bultesLi = document.querySelectorAll(".bullets_landing li")

    if (e > content.length) {
        indexValue = 1;
    } 
    
    if (e < 1) {
        indexValue = content.length;
    }

    for(i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    for(i = 0; i < bultesLi.length; i++) {
        bultesLi[i].style.background = "transparent";
        bultesLi[i].style.borderColor = "#fff";
        // bultesLi[i].style.background = "rgba(255, 255, 255, 0.5)";
    }

    content[indexValue - 1].style.display = "block";
    bultesLi[indexValue - 1].style.background = "var(--main-color)";
    bultesLi[indexValue - 1].style.borderColor = "var(--main-color)";
    // bultesLi[indexValue - 1].style.background = "white";
}


/*
let bulletsLanding = document.querySelectorAll(".bullets_landing li");
let bulLandArray = Array.from(bulletsLanding);

let textLanding = document.querySelectorAll(".text_landing .content");
let textLandArray = Array.from(textLanding);

bulLandArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        // console.log(ele);
        bulLandArray.forEach((ele) => {
            ele.classList.remove("active");
        });

        e.currentTarget.classList.add("active");

        // text
        textLandArray.forEach((textLanding) => {
            textLanding.style.display = "none";
        });

        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});


// 2 end chose tab landing

// 2 start random switcher bultes

let lanCont = Array.from(document.querySelectorAll(".text_landing .content"));
let sildesCount = lanCont.length;

let currentSilde = 1;

let lanNextBtn = document.querySelector(".i-fa-right");
let lanPrevBtn = document.querySelector(".i-fa-left");

let pagUl = document.querySelector(".bullets_landing");
let pagUlBul = Array.from(document.querySelectorAll(".bullets_landing li"));


// click
lanNextBtn.addEventListener("click", nextSilde);
lanPrevBtn.addEventListener("click", prevSilde);

// loop through all bullets items
for(let i = 0; i < pagUlBul.length; i++ ) {

    pagUlBul[i].onclick = function () {
        currentSilde = this.getAttribute("data-cont");
    }

    theChecker();
}



theChecker();

function nextSilde() {

    if (currentSilde === 3) {
        return "";

    } else {
        currentSilde++;
    
        theChecker();
    }
}

function prevSilde() {
    if (currentSilde === 1) {
        return false;

    } else {
        currentSilde--;
    
        theChecker();
    }
}

function theChecker() {

    // remove all 
    removeAllActive();

    // set active class on
    lanCont[currentSilde - 1].classList.add('active');

    // set active clas 
    pagUl.children[currentSilde - 1].classList.add("active");

    // check if current silder first
    if(currentSilde == 1) {
        // add disabled 
        lanPrevBtn.classList.add("disbled");

    } else {
        // remove disabled 
        lanPrevBtn.classList.remove("disbled");
    }

    // check if current silder last
    if(currentSilde == sildesCount) {
        // add disabled 
        lanNextBtn.classList.add("disbled");

    } else {
        // remove disabled 
        lanNextBtn.classList.remove("disbled");
    }

    

}

// remove all active class form cont and bulltes
function removeAllActive() {
    // loop
    lanCont.forEach(function (cont) {
        cont.classList.remove("active");
    });


    // loop pag ul bult
    pagUlBul.forEach(function (bullet) {
        bullet.classList.remove("active");
    });

}


*/


/* 2 end random switcher bultes */



/*
==============================================
==============================================
*/


/* 5 start chose tab portfolio = paret 2 */

let switcherLis = document.querySelectorAll(".shuffle_portfolio li");
let boxs = document.querySelectorAll(".imges_portfolio .box");
let boxsArray = Array.from(boxs);


switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImages);
});



// remove and add
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");

        this.classList.add("active");
    });
}

function manageImages() {
    boxsArray.forEach((box) => {
        box.style.display = "none";
    });

    document.querySelectorAll(this.dataset.port).forEach((el) => {
        el.style.display = "block";
    });
}


/* 5 end chose tab portfolio = paret 2 */


/*
==============================================
==============================================
*/


/* 8 start stats */

let statsNumbers = document.querySelectorAll(".box .number");
let statsSection = document.querySelector(".stats");
let statStarted = false;

window.addEventListener("scroll", () => {
    if (window.scrollY >= statsSection.offsetTop) {

        if (!statStarted) {
            statsNumbers.forEach((number) => startCountStats(number));
        }

        statStarted = true;
    }

});

function startCountStats(ele) {
    let stats = ele.dataset.stats;

    let count = setInterval(() => {
        ele.textContent++;
        if(ele.textContent == stats) {
            clearInterval(count);
        }
    }, 2000 / stats);
}




/* 8 end stats */


/*
==============================================
==============================================
*/


/* 9 start chose tab testimonials */
let bulletsTestimonials = document.querySelectorAll(".bullets_testimonials li");
let bulTestArray = Array.from(bulletsTestimonials);

let testOurSkills = document.querySelectorAll(".testimonials_ourskills .content");
let testOurSkilArray = Array.from(testOurSkills);

bulTestArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        // console.log(ele);
        bulTestArray.forEach((ele) => {
            ele.classList.remove("active");
        });

        e.currentTarget.classList.add("active");

        /* text */
        testOurSkilArray.forEach((testOurSkills) => {
            testOurSkills.style.display = "none";
        });

        // console.log(e.currentTarget.dataset.contskil);
        document.querySelector(e.currentTarget.dataset.contskil_1).style.display = "flex";
        document.querySelector(e.currentTarget.dataset.contskil_2).style.display = "flex";
    });
});

/* 9 end chose tab testimonials */


/* 9 start our skills */
let section_9 = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".prog span");

window.addEventListener("scroll", () => {
    if (window.scrollY >= section_9.offsetTop + 100) {
        progSpans.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    }
});






/* 9 end our skills */

/*
==============================================
==============================================
*/



/* ========== start data year ============== */

let dateNow = new Date();
let spanDataYear = document.querySelector(".footer #dataYear");
window.addEventListener("load", () => {
    spanDataYear.innerHTML = dateNow.getFullYear();
});



/* ========== end data year ============== */


/*
==============================================
==============================================
*/









