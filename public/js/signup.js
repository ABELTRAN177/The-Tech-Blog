const signupFormHandler = async (event) => {
    event.preventDefault();

const usernameEl = document
.querySelector('#username-input-signup') 
.value.trim();
const passwordEl = document
.querySelector('#password-input-signup')
.value.trim();

if (passwordEl.length >= 8 && usernameEl) {
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username: usernameEl, password: passwordEl }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to sign up');
    }
} else {
    alert('Please enter a valid username and password');
};  
}

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);