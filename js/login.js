var content = 'Вы вошли на сайт как гость. ' +
    'Для использования ряда его <br />дополнительных возможностей Вам ' +
    'необходима <a href="">авторизация</a>.' +
    '<br /><br /><lable>Логин:</lable>' +
    '<div class="input-control text">' +
    '<input type="text" value="" placeholder="input text"/>' +
    '<button class="btn-clear"></button>' +
    '<br /><lable>Пароль:</lable>' +
    '<div class="input-control password">' +
    '<input type="password" value="" placeholder="input password"/>' +
    '<button class="btn-reveal"></button>' +
    '<br><br><button class="">Войти</button>' +
    '<button class="" style="margin-left: 3px;">Регистрация...</button>' +
    '</div>' +
    '</div>';
$(document).ready(function(){
    $.Dialog({
        shadow: true,
        overlay: true,
        draggable: true,
        icon: '<span class="icon-warning"></span>',
        title: 'Авторизация',
        width: 450,
        height: 285,
        padding: 10,
        content: content
    });
});