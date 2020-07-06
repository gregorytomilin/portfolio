<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap" rel="stylesheet">
    <title>Калькулятор расчета стоимости занятий</title>

    <script src="js/script.js?v=1.4" defer></script>
    <link href="https://class-ege.ru//shablon/images/favicon.ico" rel="icon" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css?v=1.6" type="text/css"/>
</head>
<body>

<div class="calc_main_block">
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
        <p id="typeInfo"></p></div>
    <div class="calc_main_block_left">
        <div class="ranges">
            <p class="calc_text" id="mounthTotal"></p>
            <input type="range" min="1" max="9" value="2" class="disc" name="months" id="rangeMounth">

            <img src="img/question.png" alt="" id="rangesInfoMounth"">

            <div class="rangesInfo" id="rangesInfoMounthBlock">При оплате  за 1 и последний мес, скидка 1000 рубл./за 1 предмет</div>
        </div>
        <div class="ranges">
            <p class="calc_text" id="subjectsTotal"></p>
            <input type="range" min="1" max="4" value="1" class="disc" name="subjects" id="rangeSubjects">
            <img src="img/question.png" alt="" id="rangesInfoSubjects">
            <div class="rangesInfo" id="rangesInfoSubjectsBlock">
                <b>ЕГЭ</b> - Скидка 5% на второй предмет, на третий - 8%, на четвертый - 10%<br>
                <b>ОГЭ</b> - Скидка 6% на второй предмет, на третий - 8%, на четвертый - 10%<br>
                <b>Индивидуальные занятия</b> - Скидка 2% на второй предмет, на третий - 4%, на четвертый - 6%<br>
            </div>
        </div>
    </div>
    </div>

    <div class="calc_main_block_module">
            <div class="calc_main_block_right">
                        <div class="calcblock">


                            <div class="checkbox_div">
                                <div class="chbxInfo" id="chbxInfoFriendBlock">Скидка 25% вам и вашему другу при обучении в одной группе на первый месяц обучения по одному предмету.</div>
                                <div class="checkbox_label">
                            <label class="calc_checkboxLabel" for="chbxFriend"><span>Приведу друга</span></label>
                            <img src="img/question.png" alt="" id="chbxInfoFriend"">
                                </div>
                                <div class="checkbox_toggle">

                            <input type="checkbox" name="friend" id="chbxFriend" style="display:none" checked>
                            <label for="chbxFriend" class="toggle"><span></span></label>
                                </div>
                            </div>



                            <div class="checkbox_div">
                                <div class="chbxInfo" id="chbxInfoRepostBlock">Скидка 5% на первый месяц обучения по одному предмету за репост в социальных сетях. Подробности по телефону.</div>
                                        <div class="checkbox_label">
                                    <label for="chbxRepost"><span>Cделаю репост</span></label>
                                    <img src="img/question.png" alt="" id="chbxInfoRepost">
                                        </div>
                                <div class="checkbox_toggle">

                                    <input type="checkbox" name="repost" id="chbxRepost" style="display:none" checked>
                                    <label for="chbxRepost" class="toggle"><span></span></label>
                                </div>
                            </div>




                            <div class="checkbox_div">

                                <div class="checkbox_label">
                                    <div class="chbxInfo" id="chbxInfoPrepayBlock">Скидка 1000 руб. на каждый месяц при оплате за первый и последний месяцы обучения.</div>
                                <label for="chbxPrepay"><span>Внесу предоплату</span></label>
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