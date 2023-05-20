/**Inserting an event listener for a click in login button */

document.querySelector('#login').addEventListener('click', () => {
    username = document.getElementById('username').value;
    console.log(username);
    alert("Welcome " + username + " !");
    window.location.href='views/homescreen.html';
    })

document.querySelector('#login').addEventListener('click', (event) => {
    password = document.getElementById('password').value;
    console.log(password );
    event.stopPropagation();
    event.preventDefault();
    })
