document.addEventListener("DOMContentLoaded", function(event) {
    const buttons = document.querySelectorAll('.show-answer');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                this.textContent = 'Скрыть ответ';
            } else {
                answer.style.display = 'none';
                this.textContent = 'Показать ответ';
            }
        });
    });
});
