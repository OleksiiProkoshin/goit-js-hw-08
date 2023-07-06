    import throttle from 'lodash.throttle';

    // Отримання посилання на форму
    const form = document.querySelector('.feedback-form');

    // Отримання полів форми
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    // Отримання ключа для сховища
    const storageKey = 'feedback-form-state';

    // Функція, яка зберігає значення полів у локальне сховище
    const saveFormState = () => {
      const state = {
        email: emailInput.value,
        message: messageInput.value}
        localStorage.setItem(storageKey, JSON.stringify(state))
      };
        
    // Функція, яка заповнює поля форми зі значеннями з локального сховища
    const fillFormFromStorage = () => {
      const savedState = localStorage.getItem(storageKey);
      if (savedState) {
        const state = JSON.parse(savedState);
        emailInput.value = state.email;
        messageInput.value = state.message;
      }
    };

    // Очищення сховища та полів форми при сабміті форми
    const submitHandler = (e) => {
      e.preventDefault();
      const dataForm = {email: emailInput.value, message: messageInput.value};
      console.log(dataForm);
      emailInput.value = '';
      messageInput.value = '';
      localStorage.removeItem(storageKey);
    };
    
    form.addEventListener('input', throttle(saveFormState, 500));
    document.addEventListener('DOMContentLoaded', fillFormFromStorage);
    form.addEventListener('submit', submitHandler);

