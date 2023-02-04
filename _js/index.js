$(document).ready(function(){
    $(".first_1").click(function(){
        $(".first").css('display', 'none');
        $(".titleee").css('display', 'none');
        $(".home").css('display', 'block');
        $(".wait").css('display', 'none');
        $(".support").css('display', 'none');
        $(".join").css('display', 'none');
        $(".question").css('display', 'none');
        $(".contact").css('display', 'none');
        $(".hihi_1").css('display', 'none');
        $(".hihi_2").css('display', 'block');
        $(".hihi_3").css('display', 'none');
    });
    $(".first_2").click(function(){
        $(".first").css('display', 'none');
        $(".titleee").css('display', 'none');
        $(".home").css('display', 'none');
        $(".wait").css('display', 'block');
        $(".support").css('display', 'none');
        $(".join").css('display', 'none');
        $(".question").css('display', 'none');
        $(".contact").css('display', 'none');
        $(".hihi_1").css('display', 'none');
        $(".hihi_2").css('display', 'none');
        $(".hihi_3").css('display', 'block');
    });
    $(".first_click").click(function(){
        $(".first").css('display', 'block');
        $(".titleee").css('display', 'block');
        $(".home").css('display', 'none');
        $(".wait").css('display', 'none');
        $(".support").css('display', 'none');
        $(".join").css('display', 'none');
        $(".question").css('display', 'none');
        $(".contact").css('display', 'none');
        $(".hihi_1").css('display', 'block');
        $(".hihi_2").css('display', 'none');
        $(".hihi_3").css('display', 'none');
    });
    $(".home_click").click(function(){
        $(".first").css('display', 'none');
        $(".titleee").css('display', 'none');
        $(".home").css('display', 'block');
        $(".wait").css('display', 'none');
        $(".support").css('display', 'none');
        $(".join").css('display', 'none');
        $(".question").css('display', 'none');
        $(".contact").css('display', 'none');
    });
    $(".wait_click").click(function(){
        $(".first").css('display', 'none');
        $(".titleee").css('display', 'none');
        $(".home").css('display', 'none');
        $(".wait").css('display', 'block');
        $(".support").css('display', 'none');
        $(".join").css('display', 'none');
        $(".question").css('display', 'none');
        $(".contact").css('display', 'none');
    });
    $(".support_click").click(function(){
        $(".first").css('display', 'none');
        $(".titleee").css('display', 'none');
        $(".home").css('display', 'none');
        $(".wait").css('display', 'none');
        $(".support").css('display', 'block');
        $(".join").css('display', 'none');
        $(".question").css('display', 'none');
        $(".contact").css('display', 'none');
    });
    $(".join_click").click(function(){
        $(".first").css('display', 'none');
        $(".titleee").css('display', 'none');
        $(".home").css('display', 'none');
        $(".wait").css('display', 'none');
        $(".support").css('display', 'none');
        $(".join").css('display', 'block');
        $(".question").css('display', 'none');
        $(".contact").css('display', 'none');
    });
    $(".question_click").click(function(){
        $(".first").css('display', 'none');
        $(".titleee").css('display', 'none');
        $(".home").css('display', 'none');
        $(".wait").css('display', 'none');
        $(".support").css('display', 'none');
        $(".join").css('display', 'none');
        $(".question").css('display', 'block');
        $(".contact").css('display', 'none');
    });
    $(".contact_click").click(function(){
        $(".first").css('display', 'none');
        $(".titleee").css('display', 'none');
        $(".home").css('display', 'none');
        $(".wait").css('display', 'none');
        $(".support").css('display', 'none');
        $(".join").css('display', 'none');
        $(".question").css('display', 'none');
        $(".contact").css('display', 'block');
    });

    $(".change_n").click(function(){
        $(".first_9").css('display', 'none');
        $(".first_10").css('display', 'block');
        $(".change_comic_1").css('display', 'none');
        $(".change_comic_2").css('display', 'block');
    });

    $(".change_yy").click(function(){
        $(".first_10").css('display', 'none');
        $(".first_9").css('display', 'block');
        $(".change_comic_2").css('display', 'none');
        $(".change_comic_1").css('display', 'block');
    });

    var q1 = document.querySelector('.Q_1_ans p');
    var q2 = document.querySelector('.Q_2_ans p');
    var q3 = document.querySelector('.Q_3_ans p');
    var q4 = document.querySelector('.Q_4_ans p');
    var q5 = document.querySelector('.Q_5_ans p');

    $('.Q_1').click(function(){
        $('.Q_1_wer').toggle();
        q1.style.color = "#ED974A";
        $(".Q_11").css('display', 'block');
        $(".Q_1").css('display', 'none');
    });

    $('.Q_11').click(function(){
        $('.Q_1_wer').toggle();
        q1.style.color = "black";
        $(".Q_1").css('display', 'block');
        $(".Q_11").css('display', 'none');
    });

    $('.Q_2').click(function(){
        $('.Q_2_wer').toggle();
        q2.style.color = "#ED974A";
        $(".Q_22").css('display', 'block');
        $(".Q_2").css('display', 'none');
    });

    $('.Q_22').click(function(){
        $('.Q_2_wer').toggle();
        q2.style.color = "black";
        $(".Q_2").css('display', 'block');
        $(".Q_22").css('display', 'none');
    });

    $('.Q_3').click(function(){
        $('.Q_3_wer').toggle();
        q3.style.color = "#ED974A";
        $(".Q_33").css('display', 'block');
        $(".Q_3").css('display', 'none');
    });

    $('.Q_33').click(function(){
        $('.Q_3_wer').toggle();
        q3.style.color = "black";
        $(".Q_3").css('display', 'block');
        $(".Q_33").css('display', 'none');
    });

    $('.Q_4').click(function(){
        $('.Q_4_wer').toggle();
        q4.style.color = "#ED974A";
        $(".Q_44").css('display', 'block');
        $(".Q_4").css('display', 'none');
    });

    $('.Q_44').click(function(){
        $('.Q_4_wer').toggle();
        q4.style.color = "black";
        $(".Q_4").css('display', 'block');
        $(".Q_44").css('display', 'none');
    });

    $('.Q_5').click(function(){
        $('.Q_5_wer').toggle();
        q5.style.color = "#ED974A";
        $(".Q_55").css('display', 'block');
        $(".Q_5").css('display', 'none');
    });

    $('.Q_55').click(function(){
        $('.Q_5_wer').toggle();
        q5.style.color = "black";
        $(".Q_5").css('display', 'block');
        $(".Q_55").css('display', 'none');
    });

    $('.choose_1').click(function(){
        $('.choose_11').toggle();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
          if ($(".back-top").hasClass("hide")) {
            $(".back-top").toggleClass("hide");
          }
        } else {
          $(".back-top").addClass("hide");
        }
      });
    
      $(".back-top").on("click", function (event) {
        $("html, body").animate(
          {
            scrollTop: 0
          },
          500 
        );
      });

      /*var how1 = document.querySelector('#how1');
      var how11 = document.querySelector('#how11');
      var how2 = document.querySelector('#how2');
      var how22 = document.querySelector('#how22');
      var how3 = document.querySelector('#how3');
      var how33 = document.querySelector('#how33');
      var how4 = document.querySelector('#how4');
      var how44 = document.querySelector('#how44');
      var how5 = document.querySelector('#how5');
      var how55 = document.querySelector('#how55');
  
      var mation1 = document.querySelector('#mation1');
      var mation11 = document.querySelector('#mation11');
      var mation2 = document.querySelector('#mation2');
      var mation22 = document.querySelector('#mation22');
      var mation3 = document.querySelector('#mation3');
      var mation33 = document.querySelector('#mation33');
      var mation4 = document.querySelector('#mation4');
      var mation44 = document.querySelector('#mation44');
  
      function to(toEl){
          let bridge = toEl;
          let body = document.body;
          let height = 0;
  
          do{
              height += bridge.offsetTop;
              bridge = bridge.offsetParent;
          }while (bridge !== body)
  
          window.scrollTo({
              top: height,
              behavior: 'smooth'
          })
      }
  
      how11.addEventListener('click', function(){
          to(how1)
      });
      how22.addEventListener('click', function(){
          to(how2)
      });
      how33.addEventListener('click', function(){
          to(how3)
      });
      how44.addEventListener('click', function(){
          to(how4)
      });
      how55.addEventListener('click', function(){
          to(how5)
      });
      mation11.addEventListener('click', function(){
          to(mation1)
      });
      mation22.addEventListener('click', function(){
          to(mation2)
      });
      mation33.addEventListener('click', function(){
          to(mation3)
      });
      mation44.addEventListener('click', function(){
          to(mation4)
      });*/
});

x=1;
function change1(){
    if(x < 5){
        x++;
        document.getElementById("photo_1").src="/photo/1-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_1").src="/photo/1-"+x+".jpg";
    }
}
function change2(){
    if(x < 5){
        x++;
        document.getElementById("photo_2").src="/photo/2-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_2").src="/photo/2-"+x+".jpg";
    }
}
function change3(){
    if(x < 5){
        x++;
        document.getElementById("photo_3").src="/photo/3-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_3").src="/photo/3-"+x+".jpg";
    }
}
function change4(){
    if(x < 5){
        x++;
        document.getElementById("photo_4").src="/photo/4-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_4").src="/photo/4-"+x+".jpg";
    }
}
function change5(){
    if(x < 5){
        x++;
        document.getElementById("photo_5").src="/photo/5-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_5").src="/photo/5-"+x+".jpg";
    }
}
function change6(){
    if(x < 5){
        x++;
        document.getElementById("photo_6").src="/photo/6-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_6").src="/photo/6-"+x+".jpg";
    }
}
function change7(){
    if(x < 5){
        x++;
        document.getElementById("photo_7").src="/photo/7-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_7").src="/photo/7-"+x+".jpg";
    }
}
function change8(){
    if(x < 5){
        x++;
        document.getElementById("photo_8").src="/photo/8-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_8").src="/photo/8-"+x+".jpg";
    }
}
function change9(){
    if(x < 5){
        x++;
        document.getElementById("photo_9").src="/photo/9-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_9").src="/photo/9-"+x+".jpg";
    }
}
function change10(){
    if(x < 5){
        x++;
        document.getElementById("photo_10").src="/photo/10-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_10").src="/photo/10-"+x+".jpg";
    }
}
function change11(){
    if(x < 5){
        x++;
        document.getElementById("photo_11").src="/photo/11-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_11").src="/photo/11-"+x+".jpg";
    }
}
function change12(){
    if(x < 5){
        x++;
        document.getElementById("photo_12").src="/photo/12-"+x+".jpg";
    }
    else if(x = 6){
        x -= 5;
        document.getElementById("photo_12").src="/photo/12-"+x+".jpg";
    }
}