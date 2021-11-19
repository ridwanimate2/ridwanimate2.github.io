let balance = (localStorage.getItem('balance')) ? +localStorage.getItem('balance') : 0
let displayBalance = document.getElementById("bal")
displayBalance.textContent = balance

let tierBoughtStat = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let balanceTier = [10, 15, 30, 10, 15, 30, 10, 15, 30, 10, 15, 30, 10, 15, 30]


let tierName = [`Tier 1`, `Tier 2`, `Tier 3`]

buttonCheck()

function myFunction(param) {
  let index = ''
  buttonCheck()
  if (param.length === 7) {
    index = Number(param[param.length - 1])
  } else {
    index = Number(`${param[param.length - 2]}${param[param.length - 1]}`)
  }
  let price = balanceTier[index]
  if (balance >= price && tierBoughtStat[index] == false) {
    balance -= price
    displayBalance.textContent = balance
    tierBoughtStat[index] = true
    let x = document.getElementById(param);
    x.style.display = "block";


    let creator = ''
    if (index < 3) creator = `Ridwan`
    else if (index >= 3 && index < 6) {
      creator = `Agyad`
      index -= 3
    } else if (index >= 6 && index < 9) {
      creator = `Bima`
      index -= 6
    } else if (index >= 9 && index < 12) {
      creator = `Dika`
      index -= 9
    } else {
      creator = `Alam`
      index -= 12
    }
    let urut = document.getElementById("lisa")
    const newList = document.createElement("li");
    newList.className = `list-group-item`
    const newContent = document.createTextNode(`${creator} - ${tierName[index]}`);
    newList.appendChild(newContent);
    urut.appendChild(newList);

  }
  buttonCheck()
}

function buttonCheck() {
  for (let i = 0; i < 15; i++) {
    if (tierBoughtStat[i] == false) {
      if (balance >= balanceTier[i]) document.getElementById(`tombol${i}`).disabled = false
      else document.getElementById(`tombol${i}`).disabled = true
    } else document.getElementById(`tombol${i}`).disabled = true
  }


}


function addBalance() {
  balance += 1
  displayBalance.textContent = balance

  localStorage.setItem('balance', balance)
  buttonCheck()

}


// function matchCodePromo() {

//   kodePromo = document.getElementById('inputPromo').value

//   if(flag == false) {
//       if(kodePromo === `#pandikaGanteng`) {
//           balanceTier1 = 5
//           balanceTier2 = 8
//           balanceTier3 = 15
//           flag = true
//           alert(`kode promo digunakan`)
//       } else if(kodePromo === `bimaTampan`) {
//           balance += 10
//           displayBalance.textContent = balance
//           flag = true
//           alert(`kode promo digunakan`)
//       }else alert(`kode promo tidak ditemukan`)

//   } else alert(`anda hanya bisa menggunakan satu voucher`)

//   buttonCheck()


// }



// let displayBalance = document.getElementById("bal")
// function addBalance() {
//   balance+= 1
//   displayBalance.textContent = balance
//   buttonCheck()

// }

function kuranginBalance(param, tier, content) {
  if (balance >= param) {
    balance -= param
    displayBalance.textContent = balance
    tierBoughtStat[tier][content] = true
  }
  buttonCheck()
}

function unsubscribe() {
  let lisa = document.getElementById("lisa")
  lisa.innerHTML = ""
  const newList = document.createElement("li");
  newList.className = `list-group-item active`
  const yourLib = document.createTextNode(`Your Library`)
  newList.appendChild(yourLib)
  lisa.appendChild(newList)


  for (let i = 0; i < balanceTier.length; i++) {
    let kata = `konten` + i
    console.log(kata);
    let x = document.getElementById(kata);
    x.style.display = "none";
  }

  tierBoughtStat = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  balanceTier = [10, 15, 30, 10, 15, 30, 10, 15, 30, 10, 15, 30, 10, 15, 30]


  tierName = [`Tier 1`, `Tier 2`, `Tier 3`]
  buttonCheck()
}


function reset() {
  localStorage.clear()
  document.location = "index.html"

}


document.getElementById('formredeem').addEventListener('submit', function (e) {
  e.preventDefault()
  let input = document.getElementById('half').value

  if (!localStorage.getItem('flag')) {

    if (input === 'alamtampan') {

      balance += 100
      localStorage.setItem('balance', balance)
      document.getElementById('kupon').textContent = 'Anda mendapatkan bonus koin sebesar 100'
      localStorage.setItem('flag', true)

    } else if (input === 'pandikabaja') {

      for (let i = 0; i < balanceTier.length; i++) {
        balanceTier[i] *= 0.5

      }
      document.getElementById('t1').textContent = '5'
      document.getElementById('t2').textContent = '7.5'
      document.getElementById('t3').textContent = '15'
      document.getElementById('kupon').textContent = 'Anda mendapatkan diskon sebesar 50%'
      localStorage.setItem('flag', true)
    } else {
      document.getElementById('kupon').textContent = 'Kupon siapa itu ?'
    }
  } else {
    document.getElementById('kupon').textContent = 'Cuman boleh redeem 1 kali'
  }

  displayBalance.textContent = balance
  buttonCheck()
})
