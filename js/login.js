var content = '�� ����� �� ���� ��� �����. ' +
    '��� ������������� ���� ��� <br />�������������� ������������ ��� ' +
    '���������� <a href="">�����������</a>.' +
    '<br /><br /><lable>�����:</lable>' +
    '<div class="input-control text">' +
    '<input type="text" value="" placeholder="input text"/>' +
    '<button class="btn-clear"></button>' +
    '<br /><lable>������:</lable>' +
    '<div class="input-control password">' +
    '<input type="password" value="" placeholder="input password"/>' +
    '<button class="btn-reveal"></button>' +
    '<br><br><button class="">�����</button>' +
    '<button class="" style="margin-left: 3px;">�����������...</button>' +
    '</div>' +
    '</div>';
$(document).ready(function(){
    $.Dialog({
        shadow: true,
        overlay: true,
        draggable: true,
        icon: '<span class="icon-warning"></span>',
        title: '�����������',
        width: 450,
        height: 285,
        padding: 10,
        content: content
    });
});