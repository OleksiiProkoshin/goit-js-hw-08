
    // Функція, яка зберігає стан форми в локальне сховище
    function saveFormState() {
      const email = document.querySelector('input[name="email"]').value;
      const message = document.querySelector('textarea[name="message"]').value;
      const formData = { email, message };

      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }

    // Оновлення сховища не частіше, ніж раз на 500 мілісекунд
    import throttle from 'lodash.throttle';
    const saveFormStateThrottled = throttle(saveFormState, 500);

    // Виклик функції saveFormStateThrottled при події input на формі
    document.querySelector('.feedback-form').addEventListener('input', saveFormStateThrottled);

    // Функція, яка завантажує стан форми з локального сховища
    function loadFormState() {
      const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

      if (formData) {
        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
      }
    }

    // Виклик функції loadFormState під час завантаження сторінки
    window.addEventListener('load', loadFormState);

    // Очищення сховища та полів форми при сабміті форми
    document.querySelector('.feedback-form').addEventListener('submit', function(event) {
      event.preventDefault();
      clearFormState();
      console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    });

    // Очищення сховища та полів форми
    function clearFormState() {
      localStorage.removeItem('feedback-form-state');
      document.querySelector('input[name="email"]').value = '';
      document.querySelector('textarea[name="message"]').value = '';
    }

   


    

