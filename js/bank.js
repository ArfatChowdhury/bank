document.getElementById('btn-submit').addEventListener('click',function(){
    const userEmail = document.getElementById('user-email')
    email = userEmail.value;
    

    const userPassword = document.getElementById('user-password')
    password = userPassword.value
    

    if(email === 'arfatchowdhury@gmail.com' && password === '12345'){
       window.location.href = 'bankhome.html'
    }
    else{
        alert('Opps! Invalid User')

    }
})