$(document).ready(function(){
            $(".first_1").click(function(){
                $(".first").css('display', 'none');
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
                $(".home").css('display', 'block');
                $(".wait").css('display', 'none');
                $(".support").css('display', 'none');
                $(".join").css('display', 'none');
                $(".question").css('display', 'none');
                $(".contact").css('display', 'none');
            });
            $(".wait_click").click(function(){
                $(".first").css('display', 'none');
                $(".home").css('display', 'none');
                $(".wait").css('display', 'block');
                $(".support").css('display', 'none');
                $(".join").css('display', 'none');
                $(".question").css('display', 'none');
                $(".contact").css('display', 'none');
            });
            $(".support_click").click(function(){
                $(".first").css('display', 'none');
                $(".home").css('display', 'none');
                $(".wait").css('display', 'none');
                $(".support").css('display', 'block');
                $(".join").css('display', 'none');
                $(".question").css('display', 'none');
                $(".contact").css('display', 'none');
            });
            $(".join_click").click(function(){
                $(".first").css('display', 'none');
                $(".home").css('display', 'none');
                $(".wait").css('display', 'none');
                $(".support").css('display', 'none');
                $(".join").css('display', 'block');
                $(".question").css('display', 'none');
                $(".contact").css('display', 'none');
            });
            $(".question_click").click(function(){
                $(".first").css('display', 'none');
                $(".home").css('display', 'none');
                $(".wait").css('display', 'none');
                $(".support").css('display', 'none');
                $(".join").css('display', 'none');
                $(".question").css('display', 'block');
                $(".contact").css('display', 'none');
            });
            $(".contact_click").click(function(){
                $(".first").css('display', 'none');
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

            $('.Q_1_ans').click(function(){
                $('.Q_1_wer').toggle();
            });

            $('.choose_1').click(function(){
                $('.choose_11').toggle();
            });

            $(".logo").click(function() {
                $("html, body").animate({
                    scrollTop: 0
                },
                500
                );
            });

            var how1 = document.querySelector('#how1');
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
            });
        });

        x=1;
        function change1(){
            if(x < 4){
                x++;
                document.getElementById("photo_1").src="/photo/1-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_1").src="/photo/1-"+x+".jpg";
            }
        }
        function change2(){
            if(x < 4){
                x++;
                document.getElementById("photo_2").src="/photo/2-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_2").src="/photo/2-"+x+".jpg";
            }
        }
        function change3(){
            if(x < 4){
                x++;
                document.getElementById("photo_3").src="/photo/3-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_3").src="/photo/3-"+x+".jpg";
            }
        }
        function change4(){
            if(x < 4){
                x++;
                document.getElementById("photo_4").src="/photo/4-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_4").src="/photo/4-"+x+".jpg";
            }
        }
        function change5(){
            if(x < 4){
                x++;
                document.getElementById("photo_5").src="/photo/5-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_5").src="/photo/5-"+x+".jpg";
            }
        }
        function change6(){
            if(x < 4){
                x++;
                document.getElementById("photo_6").src="/photo/6-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_6").src="/photo/6-"+x+".jpg";
            }
        }
        function change7(){
            if(x < 4){
                x++;
                document.getElementById("photo_7").src="/photo/7-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_7").src="/photo/7-"+x+".jpg";
            }
        }
        function change8(){
            if(x < 4){
                x++;
                document.getElementById("photo_8").src="/photo/8-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_8").src="/photo/8-"+x+".jpg";
            }
        }
        function change9(){
            if(x < 4){
                x++;
                document.getElementById("photo_9").src="/photo/9-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_9").src="/photo/9-"+x+".jpg";
            }
        }
        function change10(){
            if(x < 4){
                x++;
                document.getElementById("photo_10").src="/photo/10-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_10").src="/photo/10-"+x+".jpg";
            }
        }
        function change11(){
            if(x < 4){
                x++;
                document.getElementById("photo_11").src="/photo/11-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_11").src="/photo/11-"+x+".jpg";
            }
        }
        function change12(){
            if(x < 4){
                x++;
                document.getElementById("photo_12").src="/photo/12-"+x+".jpg";
            }
            else if(x = 5){
                x -= 4;
                document.getElementById("photo_12").src="/photo/12-"+x+".jpg";
            }
        }