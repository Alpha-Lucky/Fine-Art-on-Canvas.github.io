for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw'; // Случайная позиция по горизонтали
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Случайная скорость падения
    snowflake.style.opacity = Math.random(); // Случайная прозрачность
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Случайная задержка
    document.body.appendChild(snowflake);
}