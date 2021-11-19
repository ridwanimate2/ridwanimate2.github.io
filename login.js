let user = '';
let pass = '';

function login() {
  
    user = document.getElementById(`username`).value
    pass = document.getElementById(`password`).value
    
    let userAdmin = `admin`
    let passAdmin = `12345`

    if(user === userAdmin && pass === passAdmin) {
        alert(`Username dan password benar! Tapi belum ada konten disini :D`)
    } else if(user === '' && pass === '') {
        alert(`Mohon isi username dan password`)
    } else if(user === userAdmin) {
        alert(`Username sudah benar tapi password salah`)
    } else if(pass === passAdmin) {
        alert(`Username tidak ditemukan`)
    } else if(user === '') {
        alert(`Mohon isi username`)
    } else if(pass === '') {
        alert(`Mohon isi password`)
    } else {
        alert(`Username atau password salah`)
    }

}