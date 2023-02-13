$(document).ready(function () {
    new WOW().init();
    $('.slider').slick({
        prevArrow: "<img src='../images/стрелка%20влево.png' class='prev' alt='1'>",
        nextArrow: "<img src='../images/стрелка%20вправо.png' class='next' alt='2'>",
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        infinite: true,
        speed: 0,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    if ($(window).width() <='1025') {
        $('.technology-info').css('display', 'none');
        $('.t-point1').click(function () {
            $('.t-info2').css('z-index', '-1');
            $('.t-info3').css('z-index', '-1');
            $('.t-info4').css('z-index', '-1');
            $('.t-info5').css('z-index', '-1');
            $('.t-info1').show('slow');
            $('.t-info1').css('z-index', '10000');
        })
        $('.t-point2').click(function () {
            $('.t-info1').css('z-index', '-1');
            $('.t-info3').css('z-index', '-1');
            $('.t-info4').css('z-index', '-1');
            $('.t-info5').css('z-index', '-1');
            $('.t-info2').show('slow');
            $('.t-info2').css('z-index', '10000');
        })
        $('.t-point3').click(function () {
            $('.t-info1').css('z-index', '-1');
            $('.t-info2').css('z-index', '-1');
            $('.t-info4').css('z-index', '-1');
            $('.t-info5').css('z-index', '-1');
            $('.t-info3').show('slow');
            $('.t-info3').css('z-index', '10000');
        })
        $('.t-point4').click(function () {
            $('.t-info1').css('z-index', '-1');
            $('.t-info2').css('z-index', '-1');
            $('.t-info3').css('z-index', '-1');
            $('.t-info5').css('z-index', '-1');
            $('.t-info4').show('slow');
            $('.t-info4').css('z-index', '10000');
        })
        $('.t-point5').click(function () {
            $('.t-info1').css('z-index', '-1');
            $('.t-info2').css('z-index', '-1');
            $('.t-info3').css('z-index', '-1');
            $('.t-info4').css('z-index', '-1');
            $('.t-info5').show('slow');
            $('.t-info5').css('z-index', '10000');
        })
        $('.step-1').removeClass('animate__animated');
        $('.step-2').removeClass('animate__animated');
        $('.step-3').removeClass('animate__animated');
        $('.step-4').removeClass('animate__animated');
        $('.step-5').removeClass('animate__animated');
        $('.step-6').removeClass('animate__animated');
    }
    if ($(window).width() <='550') {
        $('.slide-house-size-name').text('');
    }
    if ($(window).width() <='376') {
        $('.sroki').removeClass('animated');
        $('.sroki').removeClass('animate__animated');

        $('.sroki').removeClass('wow');
        $('.sroki').removeClass('animate__slideInLeft');
        $('.strahovka').removeClass('animate__animated');
        $('.strahovka').removeClass('animate__slideInRight');
        $('.strahovka').removeClass('animated');
        $('.strahovka').removeClass('wow');
    }



    $('.toggle-projects').hide();
    $('.burger').click(function () {
        $('.menu-add').addClass('open');
        $('.menu').addClass('open');
    })
    $('.close').click(function () {
        $('.menu').removeClass('open');
        $('.menu-add').removeClass('open');
    })
    $('.arrow-more').removeClass('open');
    $('.click-look-more').click(function () {
        $('.toggle-projects').slideToggle('slow');
        $('.arrow-more').toggleClass('open');
    })
    $('.btn-meeting').click(function () {
        $('.popap').addClass('open');


    })
    $('.popap-close').click(function () {
        $('.popap').removeClass('open')
    })

    let consultBtn = $('.btn-get_consult');
    consultBtn.click(function () {
        let loader = $('.loader-back');
        let nameInput = $('.name-input');
        let telInput = $('.tel-input');
        let checkbox = $('.checkbox_input');
        let hasError = false;
        $('.error-input-name').hide();
        $('.error-input-number').hide();
        $('.error-check').hide();

        nameInput.css('border-color', 'white');
        telInput.css('border-color', 'white');

        if (!nameInput.val()) {
            nameInput.next().show();
            nameInput.css('border-color', 'red');
            hasError = true;
        }
        if (!telInput.val()) {
            telInput.next().show();
            telInput.css('border-color', 'red');
            hasError = true;
        }
        if (!checkbox.is(':checked')) {
            $('.error-check').show();
            $('.label-check').css('color', 'red');
            $('.label-href').css('color', 'red')
            hasError = true;
        }
        if (!hasError) {
            loader.css('display', 'flex')
            $.ajax({
                method: 'POST',
                url: 'https://testologia.site/checkout',
                data: {name: nameInput.val(), telephone: telInput.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('.main-form').css('display', 'none');
                        $('.form-title').css('display', 'none');
                        $('.instead-form').show();
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                    }
                })
        }
    })
    let consultBtnPopap = $('.btn-get_consult-popap');
        consultBtnPopap.click(function () {
            let loader = $('.loader-back');
            let nameInput = $('.name-input-popap');
            let telInput = $('.tel-input-popap');
            let checkbox = $('.check-popap');
            let hasErrorPopap = false;
            nameInput.next().hide();
            telInput.next().hide();
            nameInput.css('border-color', 'white');
            telInput.css('border-color', 'white');

            if (!nameInput.val()) {
                if ($(window).width() <='322') {
                    nameInput.css('border-color', 'red');
                } else {
                    nameInput.next().show();
                    nameInput.css('border-color', 'red');
                }
                hasErrorPopap = true;
            }
            if (!telInput.val()) {
                if ($(window).width() <='322') {
                    telInput.css('border-color', 'red');
                } else {
                    telInput.next().show();
                    telInput.css('border-color', 'red');
                }
                hasErrorPopap = true;
            }
            if (!checkbox.is(':checked')) {
                $('.btn-get_consult-popap').next().children().css('color', 'red');
                $('.label-href-popap').css('color', 'red');
                hasErrorPopap = true;
            }
            if (!hasErrorPopap) {
                loader.css('display', 'flex')
                $.ajax({
                    method: 'POST',
                    url: 'https://testologia.site/checkout',
                    data: {name: nameInput.val(), telephone: telInput.val()}
                })
                    .done(function (msg) {
                        loader.hide();
                        if (msg.success) {
                            $('.popap-form').css('display', 'none');
                            $('.popap-title').text('Cпасибо, мы свяжемся с Вами в ближайшее время!');
                            if ($(window).width() <='376') {
                                $('.popap-title').css('font-size', '30px');
                            } else {
                                $('.popap-title').css('font-size', '40px');
                            }

                        } else {
                            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                        }
                    })
            }
        })

    let phoneInput =  document.getElementById('telephone'); let phoneInpPopap = document.getElementById('telephone-popap')
    let getInputNumbersValue = function (input) {
        return input.value.replace(/\D/g, '');
    }
    let onPhonePaste = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        let pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            let pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
                return;
            }
        }
    }
    let onPhoneInput = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    let onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        let inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
    phoneInpPopap.addEventListener('keydown', onPhoneKeyDown);
    phoneInpPopap.addEventListener('input', onPhoneInput, false);
    phoneInpPopap.addEventListener('paste', onPhonePaste, false);

})
