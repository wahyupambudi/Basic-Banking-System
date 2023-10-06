class BankAccount {
	constructor(saldo) {
		this.saldo = saldo;
	}

	async deposit(amount) {
		if (!isNaN(amount) && amount > 0) {
			// Simulasikan operasi deposit asynchronous dengan delay 1 detik
			await new Promise((resolve) => setTimeout(resolve, 1000));
			this.saldo += amount;
			console.log(
				`Anda berhasil mendepositkan ${amount}. Saldo Anda sekarang: ${this.saldo}`,
			);
		} else {
			console.log("Masukkan jumlah deposit yang valid.");
		}
	}

	async withdraw(amount) {
		if (!isNaN(amount) && amount > 0 && amount <= this.saldo) {
			// Simulasikan operasi withdraw asynchronous dengan delay 1 detik
			await new Promise((resolve) => setTimeout(resolve, 1000));
			this.saldo -= amount;
			console.log(
				`Anda berhasil menarik ${amount}. Saldo Anda sekarang: ${this.saldo}`,
			);
		} else if (amount > this.saldo) {
			console.log("Saldo tidak mencukupi untuk melakukan penarikan.");
		} else {
			console.log("Masukkan jumlah penarikan yang valid.");
		}
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

// Fungsi untuk menangani operasi deposit dan withdraw secara asynchronous
async function handleOperations() {
	console.log("============Start============\n");
	console.log(`Saldo awal: ${savingsAccount.saldo}`);
	await savingsAccount.deposit(5000);
	await savingsAccount.withdraw(2000);
	console.log("\n============Finish============");
}

// Memanggil fungsi untuk menangani operasi deposit dan withdraw
handleOperations();
