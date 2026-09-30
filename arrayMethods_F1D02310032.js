const karakter = [
  { nama: "Diluc", senjata: "Claymore", rarity: 5 },
  { nama: "Jean", senjata: "Sword", rarity: 5 },
  { nama: "Mona", senjata: "Catalyst", rarity: 5 },
  { nama: "Qiqi", senjata: "Sword", rarity: 5 },
  { nama: "Keqing", senjata: "Sword", rarity: 5 },
  { nama: "Fischl", senjata: "Bow", rarity: 4 },
  { nama: "Xiangling", senjata: "Polearm", rarity: 4 },
  { nama: "Noelle", senjata: "Claymore", rarity: 4 },
  { nama: "Barbara", senjata: "Catalyst", rarity: 4 },
  { nama: "Beidou", senjata: "Claymore", rarity: 4 },
  { nama: "Wanderer", senjata: "Catalyst", rarity: 5 },
  { nama: "Durin", senjata: "Sword", rarity: 5 },
  { nama: "Furina", senjata: "Sword", rarity: 5 },
  { nama: "Arlecchino", senjata: "Polearm", rarity: 5 },
  { nama: "Skirk", senjata: "Sword", rarity: 5 },
  { nama: "Citlali", senjata: "Catalyst", rarity: 5 },
  { nama: "Mavuika", senjata: "Claymore", rarity: 5 },
  { nama: "Aino", senjata: "Claymore", rarity: 4 },
  { nama: "Nahida", senjata: "Catalyst", rarity: 5 },
  { nama: "Cyno", senjata: "Polearm", rarity: 5 },
];

const warna = process.stdout.isTTY
  ? {
      reset: "\x1b[0m",
      tebal: "\x1b[1m",
      redup: "\x1b[2m",
      cyan: "\x1b[36m",
      hijau: "\x1b[32m",
      kuning: "\x1b[33m",
    }
  : {
      reset: "",
      tebal: "",
      redup: "",
      cyan: "",
      hijau: "",
      kuning: "",
    };

const tampilkanHasil = (metode, deskripsi, hasil) => {
  console.log(`\n${warna.tebal}${warna.cyan}${metode}${warna.reset}`);
  console.log(`${warna.redup}${deskripsi}${warna.reset}`);

  if (Array.isArray(hasil)) {
    hasil.forEach((item, indeks) => {
      const nomor = String(indeks + 1).padStart(2, "0");
      const detail = typeof item === "object" && item !== null
        ? `${item.nama.padEnd(10)} | ${item.senjata.padEnd(8)} | ${item.rarity} bintang`
        : item;
      console.log(`  ${warna.kuning}${nomor}.${warna.reset} ${detail}`);
    });
  } else if (hasil !== null && typeof hasil === "object") {
    Object.entries(hasil).forEach(([kunci, nilai]) => {
      console.log(`  ${warna.kuning}${kunci.padEnd(15)}${warna.reset} ${nilai}`);
    });
  } else {
    console.log(`  ${warna.hijau}${hasil}${warna.reset}`);
  }
};

console.log(`${warna.tebal}${warna.cyan}TUGAS 2 | ARRAY METHODS${warna.reset}`);
console.log(`${warna.redup}ADITYA | F1D02310032 | ${karakter.length} karakter${warna.reset}`);
console.log(`${warna.redup}${"-".repeat(48)}${warna.reset}`);

const ringkasanKarakter = karakter.map(
  (item) => `${item.nama} | ${item.senjata} | ${item.rarity} bintang`,
);
tampilkanHasil(
  "map()",
  "nama, senjata, dan rarity semua karakter",
  ringkasanKarakter,
);

const karakterBintangLima = karakter.filter((item) => item.rarity === 5);
tampilkanHasil(
  "filter()",
  "Karakter dengan rarity bintang 5",
  karakterBintangLima,
);

const jumlahPerRarity = karakter.reduce((rekap, item) => {
  const kunci = `${item.rarity}-star`;
  rekap[kunci] = (rekap[kunci] || 0) + 1;
  return rekap;
}, {});
tampilkanHasil(
  "reduce()",
  "Jumlah karakter untuk setiap rarity",
  jumlahPerRarity,
);

const karakterCatalyst = karakter.find((item) => item.senjata === "Catalyst");
tampilkanHasil(
  "find()",
  "Karakter pertama yang menggunakan Catalyst",
  karakterCatalyst,
);

const adaKarakterBintangLimaClaymore = karakter.some(
  (item) => item.rarity === 5 && item.senjata === "Claymore",
);
tampilkanHasil(
  "some()",
  "Apakah ada karakter rarity 5 yang menggunakan Claymore?",
  adaKarakterBintangLimaClaymore,
);

const semuaSenjataSama = karakter.every(
  (item) => item.senjata === karakter[0].senjata,
);
tampilkanHasil(
  "every()",
  "Apakah semua karakter menggunakan senjata yang sama?",
  semuaSenjataSama,
);