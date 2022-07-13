let forms = document.querySelectorAll('form');


let message = {
    loading: 'Загрузка',
    success: 'Спасибо, скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так. Попробуйте ещё раз, чуть позже.'
};

forms.forEach(function (item) {
    postData(item);
});

function postData(form) {
    form.addEventListener('submit', function (elem) {
        elem.preventDefault();

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        let formData = new FormData(form);

        request.send(formData);

        request.addEventListener('load', function () {
            if (request.status === 200) {
                alert(message.success);
                form.reset();
            } else {
                alert(message.failure);
            }
        });
    });


    //====== validate form ======

    let min_name_length = 2;
    let max_name_length = 50;

    let userNameInput = document.querySelector('.user-name');
    userNameInput.addEventListener('input', () => {
        let valueLength = userNameInput.value.length;

        if (valueLength < min_name_length) {
            userNameInput.setCustomValidity(`Ещё ${  min_name_length - valueLength } симв.`);
        } else if (valueLength > max_name_length) {
            userNameInput.setCustomValidity(`Удалите лишние ${  valueLength - max_name_length } симв.`);
        } else {
            userNameInput.setCustomValidity('');
        }

        userNameInput.reportValidity();   
    });


    let userPhone = document.querySelector('.phone');
    let min_tel_length = 7;
    let max_tel_length = 17;
    userPhone.addEventListener('input', ()=>{
        let valueLength = userPhone.value.length;

        if (valueLength < min_tel_length) {
            userPhone.setCustomValidity('Слишком короткий номер');
        } else if (valueLength > max_tel_length) {
            userPhone.setCustomValidity(`Удалите лишние ${valueLength - max_tel_length} симв.`);
        } else {
            userPhone.setCustomValidity('');
        }

        userPhone.reportValidity();  

    })

}






export default postData;