// Definisi kelas BankAccount (superclass)
class BankAccount {
  constructor(saldo) {
    this.saldo = saldo;
  }

  async deposit() {
    const amount = parseFloat(prompt("Masukkan jumlah uang yang ingin Anda depositkan:"));
    if (!isNaN(amount) && amount > 0) {
      // Simulasikan operasi deposit asynchronous dengan delay 1 detik
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.saldo += amount;
      // simpan saldo ke localstorage
      this.simpanSaldo()
      alert(`Anda berhasil mendepositkan ${amount}. Saldo Anda sekarang: ${this.saldo}`);
    } else {
      alert("Masukkan jumlah deposit yang valid.");
    }
    return;
  }

  async withdraw() {
    const amount = parseFloat(prompt("Masukkan jumlah uang yang ingin Anda tarik:"));
    if (!isNaN(amount) && amount > 0 && amount <= this.saldo) {
      // Simulasikan operasi withdraw asynchronous dengan delay 1 detik
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.saldo -= amount;
      // simpan saldo ke localstorage
      this.simpanSaldo()
      alert(`Anda berhasil menarik ${amount}. Saldo Anda sekarang: ${this.saldo}`);
    } else if (amount > this.saldo) {
      alert("Saldo tidak mencukupi untuk melakukan penarikan.");
    } else {
      alert("Masukkan jumlah penarikan yang valid.");
    }
    return;
  }

  simpanSaldo() {
    localStorage.setItem("saldo", this.saldo.toString());
    return;
  }
}

// Definisi kelas SavingsAccount (subclass) yang mewarisi dari BankAccount
class SavingsAccount extends BankAccount {
  constructor(saldo) {
    super(saldo);
  }
}

// Membuat objek dari class SavingsAccount
const savingsAccount = new SavingsAccount(0);

// tampilkan di html.
document.getElementById("saldo").innerHTML = new Intl.NumberFormat("id").format(
  localStorage.getItem("saldo"),
);