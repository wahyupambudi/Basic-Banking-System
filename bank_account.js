// Definisi kelas BankAccount
class BankAccount {
  constructor() {
    this.saldo = parseFloat(localStorage.getItem("saldo")) || 0;
  }

  deposit() {
    const inputJumlah = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
    if (!isNaN(inputJumlah) && inputJumlah > 0) {
      this.saldo += inputJumlah;
      this.simpanSaldo();
    } else {
      alert("Masukkan jumlah saldo yang valid.");
    }
    return;
  }

  withdraw() {
    const inputPengurangan = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangkan:"));
    if (!isNaN(inputPengurangan) && inputPengurangan > 0 && inputPengurangan <= this.saldo) {
      this.saldo -= inputPengurangan;
      this.simpanSaldo();
    } else {
      alert("Masukkan jumlah saldo yang valid atau saldo tidak mencukupi.");
    }
    return;
  }

  simpanSaldo() {
    localStorage.setItem("saldo", this.saldo.toString());
	document.location.reload();
    return;
  }
}

// Membuat objek bank
const bank = new BankAccount();

// tampilkan di html.
document.getElementById("saldo").innerHTML = new Intl.NumberFormat("id").format(
	localStorage.getItem("saldo"),
);