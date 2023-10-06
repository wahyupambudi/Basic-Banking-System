// Definisi kelas BankAccount (superclass)
class BankAccount {
  constructor(saldo) {
    this.saldo = saldo;
  }

  async deposit() {
    const amount = parseFloat(
      prompt("Masukkan jumlah uang yang ingin Anda depositkan:"),
    );
    if (!isNaN(amount) && amount > 0) {
      // Simulasikan operasi deposit asynchronous dengan delay 1 detik
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.saldo += amount;
      // simpan saldo ke localstorage
      this.saveSaldo();
      alert(
        `Anda berhasil mendepositkan Rp.${amount}. Saldo Anda sekarang: Rp.${this.saldo}`,
      );
    } else {
      alert("Masukkan jumlah deposit yang valid.");
    }
    return;
  }

  async withdraw() {
    const amount = parseFloat(
      prompt("Masukkan jumlah uang yang ingin Anda tarik:"),
    );
    if (!isNaN(amount) && amount > 0 && amount <= this.saldo) {
      // Simulasikan operasi withdraw asynchronous dengan delay 1 detik
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.saldo -= amount;
      // simpan saldo ke localstorage
      this.saveSaldo();
      alert(
        `Anda berhasil menarik Rp.${amount}. Saldo Anda sekarang: Rp.${this.saldo}`,
      );
    } else if (amount > this.saldo) {
      alert("Saldo tidak mencukupi untuk melakukan penarikan.");
    } else {
      alert("Masukkan jumlah penarikan yang valid.");
    }
    return;
  }

  saveSaldo() {
    localStorage.setItem("saldo", this.saldo.toString());
    return;
  }

  _viewSaldoOnPage(params) {
    params = (document.getElementById("saldo").innerHTML = new Intl.NumberFormat(
      "id",
    ).format(localStorage.getItem("saldo")))
    return params;
  }
}

// Definisi kelas SavingsAccount (subclass) yang mewarisi dari BankAccount
class SavingsAccount extends BankAccount {
  constructor(saldo) {
    super(saldo);
  }

  doViewSaldoOnPage() {
    super._viewSaldoOnPage()
  }
}

// Membuat objek dari class SavingsAccount
const savingsAccount = new SavingsAccount(0);
savingsAccount.doViewSaldoOnPage();
