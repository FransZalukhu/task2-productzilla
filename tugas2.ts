// Informasi Arion
let namaPahlawan: string = "Arion";
let umurPahlawan: number = 30;
let siapBertarung: boolean = true;

// Sumber Daya Kerajaan
let emasKerajaan: number = 5000;
let makananKerajaan: number = 120;
let jumlahPrajurit: number = 200;

// Hasil Petualangan
let emasTambahan: number = 1500;
emasKerajaan += emasTambahan; // Tambahkan emas hasil petualangan

let pengalamanBertarung: number = 75;

// Misi Penyembuhan
function kurangiKesehatan(
  jumlahPrajurit: number,
  poinKesehatanHilang: number
): void {
  let kesehatanPrajurit: number = 100;

  kesehatanPrajurit -= poinKesehatanHilang;

  if (kesehatanPrajurit <= 0) {
    console.log("Prajurit tidak bisa bertarung lagi!");
  } else {
    console.log(`Kesehatan prajurit sekarang: ${kesehatanPrajurit}` + "\n");
  }
}

// Fungsi untuk menampilkan rangkuman hasil misi
function rangkumanMisi(): void {
  console.log("RANGKUMAN MISI : \n");
  console.log(`Nama Pahlawan: ${namaPahlawan}`);
  console.log(`Emas yang dikumpulkan: ${emasTambahan}`);
  console.log(`Poin pengalaman yang didapat: ${pengalamanBertarung}`);
}

kurangiKesehatan(300, 5);
rangkumanMisi();
