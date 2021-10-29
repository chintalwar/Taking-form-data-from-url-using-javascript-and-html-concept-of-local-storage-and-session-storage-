window.addEventListener('load', () =>{

    const params = (new URL (document.location)).searchParams;

    const name = params.get('name');
    const surname = params.get('surname');

    document.getElementById("nameResult").innerHTML = name;
    document.getElementById("surnameResult").innerHTML = surname;
})