<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap" rel="stylesheet">
    <title>Калькулятор расчета стоимости занятий</title>

    <script src="js/script.js?v=1.14" defer></script>
    <link href="https://class-ege.ru//shablon/images/favicon.ico" rel="icon" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css?v=1.14" type="text/css"/>
</head>
<body>

<div class="calc_main_block">

    <div class="calc_groupeAddress_block">


        <div class="radiobtn locationStyle">
            <input type="radio" id="tambasova"
                   name="groupeAddress" value="tambasova" checked />
            <label for="tambasova" class="locationStyle"><img src="img/geotag.png" alt="">Тамбасова 12</label>
        </div>

        <div class="radiobtn locationStyle">
            <input type="radio" id="zanevski"
                   name="groupeAddress" value="zanevski" />
            <label for="zanevski" class="locationStyle"><img src="img/geotag.png" alt=""><span>Заневский 25</span></label>
        </div>

        <div class="radiobtn locationStyle">
            <input type="radio" id="online"
                   name="groupeAddress" value="online" disabled>
            <label for="online" class="locationStyle"><img src="img/online.png" alt="">Онлайн</label>
        </div>


    </div>

    <div class="calc_groupeType_block">


            <div class="radiobtn">
                <input type="radio" id="oge"
                       name="groupeType" value="oge" checked />
                <label for="oge">Подготовка к ОГЭ 8-9 класс</label>
            </div>

            <div class="radiobtn">
                <input type="radio" id="ege"
                       name="groupeType" value="ege" />
                <label for="ege">Подготовка к ЕГЭ 10-11 класс</label>
            </div>

            <div class="radiobtn">
                <input type="radio" id="individ"
                       name="groupeType" value="individ" />
                <label for="individ">Индивидуальные занятия</label>
            </div>
    </div>


<div class="calc_main_block_content">
    <div class="calc_main_block_module">
    <div class="calc_main_block_right">
        <p id="typeInfo"></p>

        <div id="individTypes" class="individTypes">
               <label class="radio">
                        <input type="radio" name="individType" value="1" id="individ40" checked>
                        <span>4 занятия в месяц по 40 минут</span>
                    </label>
                <label class="radio">
                        <input type="radio" name="individType" value="2" id="individ60">
                        <span>4 занятия в месяц по 60 минут</span>
                    </label>
                <label class="radio">
                        <input type="radio" name="individType" value="3" id="individ90">
                        <span>4 занятия в месяц по 90 минут</span>
                    </label>
            </div>

    </div>
    <div class="calc_main_block_left">
        <div class="ranges">
            <p class="calc_text" id="mounthTotal"></p>
            <input type="range" min="1" max="9" value="1" class="disc" name="months" id="rangeMounth">

            <img src="img/question.png" alt="" id="rangesInfoMounth"">

            <div class="rangesInfo" id="rangesInfoMounthBlock">При оплате за несколько месяцев, возможно, предоставление дополнительной скидки. Уточняйте у администратора.</div>
        </div>
        <div class="ranges">
            <p class="calc_text" id="subjectsTotal"></p>
            <input type="range" min="1" max="4" value="1" class="disc" name="subjects" id="rangeSubjects">
            <img src="img/question.png" alt="" id="rangesInfoSubjects">
            <div class="rangesInfo" id="rangesInfoSubjectsBlock">
                <b>ЕГЭ</b> - Скидка 5% на второй предмет, на третий - 8%, на четвертый - 10%<br>
                <b>ОГЭ</b> - Скидка 6% на второй предмет, на третий - 8%, на четвертый - 10%<br>
                Подробности у администратора.
<!--                <b>Индивидуальные занятия</b> - Скидка 2% на второй предмет, на третий - 4%, на четвертый - 6%<br>-->
            </div>
        </div>
    </div>
    </div>

    <div class="calc_main_block_module">
            <div class="calc_main_block_right">
                        <div class="calcblock">


                            <div class="checkbox_div">
                                <div class="chbxInfo" id="chbxInfoFriendBlock">Приведите друга и получите дополнительную скидку от 10% или бесплатные занятия.</div>
                                <div class="checkbox_label">
                            <label class="calc_checkboxLabel" for="chbxFriend"><span>Приведу друга</span></label>
                            <img src="img/question.png" alt="" id="chbxInfoFriend"">
                                </div>
                                <div class="checkbox_toggle">

                            <input type="checkbox" name="friend" id="chbxFriend" style="display:none">
                            <label for="chbxFriend" class="toggle"><span></span></label>
                                </div>
                            </div>



                            <div class="checkbox_div">
<!--                                <div class="chbxInfo" id="chbxInfoRepostBlock">Скидка 5% на первый месяц обучения по одному предмету за репост в социальных сетях. Подробности по телефону.</div>-->
                                        <div class="checkbox_label">
<!--                                    <label for="chbxRepost"><span>Cделаю репост</span></label>-->
                                    <img src="img/question.png" alt="" id="chbxInfoRepost" style="display: none">
                                        </div>
                                <div class="checkbox_toggle">

                                    <input type="checkbox" name="repost" id="chbxRepost" style="display:none">
<!--                                    <label for="chbxRepost" class="toggle"><span></span></label>-->
                                </div>
                            </div>




                            <div class="checkbox_div">

                                <div class="checkbox_label">
                                    <div class="chbxInfo" id="chbxInfoPrepayBlock">При необходимости мы можем предоставить дополнительную скидка от 10%. Подробности и сроки действия предложения уточняйте у администратора.</div>
                                <label for="chbxPrepay"><span>Хочу получить скидку</span></label>
                                <img src="img/question.png" alt="" id="chbxInfoPrepay">
                                </div>


                                <div class="checkbox_toggle">

                                        <input type="checkbox" name="prepay" id="chbxPrepay" style="display:none">
                                        <label for="chbxPrepay" class="toggle"><span></span></label>
                                </div>

                             </div>


                        </div>
            </div>
            <div class="calc_main_block_left">


                    <div class="price_blockInfo">

                        <div class="price_blockInfo_mounth">
                            <span class="calc_priceInfo">Цена за месяц </span><p id="priceMounth"></p>
                        </div>

                        <div class="price_blockInfo_other">

                        <div class="priceSmall"><span class="calc_priceInfo_margin">Общая сумма за обучение </span><p id="priceTotal"></p></div>

                        <div class="priceSmall"><span class="calc_priceInfo">Общая сумма скидки </span><p id="totalDiscount"></p></div>


                        </div>



                    </div>
        <!--            <div class="button_signup">ЗАПИСАТЬСЯ</div>-->
            </div>
    </div>

<!--    <div class="calc_button_signUp"><a href="#">Записаться</a></div>-->


</div>

</body>
</html>