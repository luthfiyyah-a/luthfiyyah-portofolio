# luthfiyyah-portofolio

Portfolio statis, di-host GitHub Pages (Jekyll bawaan Pages, tanpa build manual).
Live: https://luthfiyyah-a.github.io/luthfiyyah-portofolio/

## Mau ubah apa? Edit file ini

| Ubah | File |
|---|---|
| Nama, tagline, email, LinkedIn, paragraf "about" | `_config.yml` (bagian `author`) |
| Tambah/ubah pengalaman kerja | `_data/experience.yml` |
| Pendidikan & prestasi | `_data/education.yml` |
| Skill | `_data/skills.yml` |
| Foto profil (opsional; kosong = monogram "LH") | `photo:` di `_config.yml`, mis. `assets/img/photo.jpg` |
| Warna, font, jarak | `assets/css/style.css` (variabel di `:root`) |
| Tata letak satu entri | `_includes/*.html` |

Isi (data) dan tampilan (HTML/CSS) sengaja dipisah: menambah pekerjaan cukup
salin satu blok di `experience.yml`, tanpa menyentuh HTML.

## Struktur

```
_config.yml           pengaturan situs + data profil
_data/                isi konten (YAML)
_layouts/default.html kerangka halaman (<head>, header, footer)
_includes/            potongan HTML yang dipakai ulang
assets/css/style.css  semua styling
index.html            urutan section halaman utama
```

## Preview lokal

```
docker compose up
```
Buka http://localhost:4000/luthfiyyah-portofolio/ . Berhenti: Ctrl+C.

## Deploy

Push ke `main` → GitHub Pages build otomatis (1–2 menit).
