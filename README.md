🚀 Next.js Blog Backend (Express, Node.js, Axios, Docker)

Ini adalah backend untuk aplikasi blog berbasis Next.js, dibangun dengan Express.js dan Node.js. Backend ini menyediakan API untuk mengelola postingan, komentar, dan pengguna. Menggunakan Axios untuk komunikasi HTTP dan dikemas dalam Docker untuk kemudahan deployment.
✨ Fitur

    REST API untuk mengelola blog (CRUD Post & Comment)
    Autentikasi dan otorisasi pengguna
    Konsumsi API eksternal dengan Axios
    Containerized dengan Docker
    Logging dan error handling

🛠️ Teknologi yang Digunakan

    Node.js & Express.js
    Axios untuk HTTP request
    MongoDB / PostgreSQL (pilihan database)
    Docker untuk containerization
    JWT untuk autentikasi

📦 Instalasi & Menjalankan Aplikasi

# Clone repositori
git clone https://github.com/username/repo-name.git  
cd repo-name  

# Install dependencies
npm install  

# Konfigurasi environment
cp .env.example .env  

# Menjalankan aplikasi secara lokal
npm run dev  

🔥 Menjalankan dengan Docker

docker build -t blog-backend .  
docker run -p 5000:5000 blog-backend  

📌 API Endpoint Contoh

    GET /posts → Ambil semua postingan
    POST /posts → Tambah postingan baru
    GET /posts/:id → Detail postingan
    POST /auth/login → Login pengguna

💡 Kontribusi

Pull request dipersilakan! Silakan buat issue jika menemukan bug atau memiliki saran fitur baru.
📜 Lisensi

MIT License
