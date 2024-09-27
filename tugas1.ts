console.log("BAGIAN 1 : TIPE DATA\n");
// String
let nama: string = "Frans";
console.log("Nama : " + nama);

// Literal String
let firstName: string = "Frans";
let lastName: string = "Zalukhu";
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);

// Number Integer
let umur: number = 20;
let angkaNegative: number = -17;
const phi: number = 3.14;
console.log("Umur : " + umur);

// Number Float
let ips: number = 4.0;

// Boolean
let ngodingasik: boolean = true;
console.log("Apakah Ngoding Asik ??\n" + ngodingasik + " min");
let lulus: boolean = false;

// Symbol
let uniqueId: symbol = Symbol("id");
console.log(uniqueId);

// Undefined
let projek: undefined = undefined;

// Null
let nilai: null = null;

// Union Types
let value: string | number;

// Array
let skor: number[] = [90, 80, 70];
console.log(skor);
let buah: string[] = ["Pisang", "Mangga", "Jeruk", "Nanas"];
console.log(buah);

// Tuple
let user: [string, number] = ["Frans", 20];
console.log(user);

// Enum
enum Role {
  Fighter,
  Gunner,
  Blademaster,
  Support,
  Tank,
  NontonAja,
}
let userRole: Role = Role.Gunner;

enum Menu {
  NasiPadang,
  NasiGoreng,
  MieGoreng,
  Rendang,
  Kebab,
}
let menuPilihan: Menu = Menu.NasiGoreng;

// Any
let kamu: any = "Bisa Jadi Apa Saja";
let variableRandom: any = 32;

// Object
let saya: { nama: string; umur: number; hobi: string[]; gameFav: string } = {
  nama: "Frans",
  umur: 20,
  hobi: ["Menggambar", "Bermain Game", "Membaca"],
  gameFav: "Monster Hunter",
};

// Interface
interface Person {
  name: string;
  age: number;
  gender: string;
}

// Void
function cetakPesan(nama: string): void {
  console.log(`Halo, ${nama}!`);
}
cetakPesan("Typescript");

// Unknown
let tidakjelas: unknown = "Sepertinya tipe data ini menginginkan Kebebasan";
console.log(tidakjelas + "\n");

// Aliases
type StringOrNumber = string | number;

console.log("BAGIAN 2 : METHOD\n");
// Penjumlahan
function penjumlahan(a: number, b: number): number {
  return a + b;
}

// Pengurangan
function pengurangan(a: number, b: number): number {
  return a - b;
}

// Perkalian
function perkalian(a: number, b: number): number {
  return a * b;
}

// Pembagian
function pembagian(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Tidak dapat membagi dengan angka 0.");
  }
  return a / b;
}

console.log("Penjumlahan : ", penjumlahan(25, 2));
console.log("Pengurangan : ", pengurangan(7, 3));
console.log("Perkalian   : ", perkalian(7, 7));
console.log("Pembagian   : ", pembagian(75, 5));
