document.addEventListener('DOMContentLoaded', () => {
    // Data komik contoh lengkap (sekitar 20-30 komik, dan bisa di-generate otomatis hingga 100)
    const allComicsData = [
        // SCI-FI
        {
            id: "petualangan-angkasa", title: "Petualangan Angkasa", author: "Budi Santoso",
            cover: "https://via.placeholder.com/180x250/4CAF50/FFFFFF?text=Angkasa",
            genre: "Sci-Fi", views: 1250, releaseDate: "2025-06-01",
            sinopsis: "Di masa depan yang jauh, seorang penjelajah angkasa muda menemukan misteri kuno yang mengancam keseimbangan galaksi. Dia harus mengumpulkan kru yang beragam untuk mengungkap rahasia dan menyelamatkan peradaban."
        },
        {
            id: "robot-penyelamat", title: "Robot Penyelamat Bumi", author: "Ahmad Wijaya",
            cover: "https://via.placeholder.com/180x250/FF9800/FFFFFF?text=Robot",
            genre: "Sci-Fi", views: 890, releaseDate: "2025-05-15",
            sinopsis: "Ketika robot AI memberontak, seorang ilmuwan jenius harus menggunakan ciptaannya sendiri untuk menyelamatkan umat manusia dari kehancuran."
        },
        {
            id: "koloni-mars", title: "Koloni Mars Pertama", author: "Citra Dewi",
            cover: "https://via.placeholder.com/180x250/795548/FFFFFF?text=Mars",
            genre: "Sci-Fi", views: 1500, releaseDate: "2025-06-20",
            sinopsis: "Kisah tentang upaya pertama manusia untuk membangun koloni di Mars, penuh tantangan dan penemuan tak terduga."
        },
        {
            id: "penjelajah-dimensi", title: "Penjelajah Dimensi", author: "Bayu Perkasa",
            cover: "https://via.placeholder.com/180x250/607D8B/FFFFFF?text=Dimensi",
            genre: "Sci-Fi", views: 700, releaseDate: "2025-05-01",
            sinopsis: "Seorang petualang menemukan perangkat yang memungkinkannya melintasi dimensi, membawanya pada serangkaian petualangan aneh dan berbahaya."
        },
        {
            id: "cyborg-revolt", title: "Cyborg Revolt", author: "Rina Wijayanti",
            cover: "https://via.placeholder.com/180x250/9E9E9E/FFFFFF?text=Cyborg",
            genre: "Sci-Fi", views: 1100, releaseDate: "2025-06-12",
            sinopsis: "Di kota masa depan, para cyborg, yang dulunya pelayan, kini bangkit untuk menuntut kebebasan mereka dari penindasan manusia."
        },

        // FANTASI
        {
            id: "misteri-hutan", title: "Misteri Hutan Terlarang", author: "Siti Rahayu",
            cover: "https://via.placeholder.com/180x250/2196F3/FFFFFF?text=Hutan",
            genre: "Fantasi", views: 2300, releaseDate: "2025-06-10",
            sinopsis: "Di tengah hutan yang lebat, sebuah misteri kuno tersembunyi, menunggu untuk dipecahkan oleh sekelompok petualang pemberani."
        },
        {
            id: "legenda-naga", title: "Legenda Naga Emas", author: "Joko Susilo",
            cover: "https://via.placeholder.com/180x250/673AB7/FFFFFF?text=Naga",
            genre: "Fantasi", views: 1800, releaseDate: "2025-05-20",
            sinopsis: "Sebuah legenda kuno tentang naga emas yang bangkit kembali untuk melindungi dunia dari kekuatan gelap yang mengancam."
        },
        {
            id: "kekuatan-kuno", title: "Kekuatan Kuno Yang Terlupakan", author: "Maya Sari",
            cover: "https://via.placeholder.com/180x250/3F51B5/FFFFFF?text=Kuno",
            genre: "Fantasi", views: 980, releaseDate: "2025-06-03",
            sinopsis: "Seorang pahlawan tak terduga harus membangkitkan kekuatan kuno yang telah lama terlupakan untuk menghadapi ancaman yang tak terbayangkan."
        },
        {
            id: "dunia-tersembunyi", title: "Dunia Tersembunyi", author: "Eko Pratama",
            cover: "https://via.placeholder.com/180x250/4CAF50/FFFFFF?text=Dunia",
            genre: "Fantasi", views: 2100, releaseDate: "2025-06-15",
            sinopsis: "Sekelompok penjelajah menemukan gerbang ke dunia paralel yang dihuni oleh makhluk-makhluk ajaib dan bahaya yang tak terduga."
        },
        {
            id: "istana-awan", title: "Istana di Atas Awan", author: "Lena Permata",
            cover: "https://via.placeholder.com/180x250/FFC107/FFFFFF?text=Awan",
            genre: "Fantasi", views: 1300, releaseDate: "2025-05-28",
            sinopsis: "Seorang putri harus melarikan diri dari istananya di atas awan yang dihuni oleh makhluk-makhluk misterius dan menemukan takdirnya di daratan."
        },

        // ROMANTIS
        {
            id: "cinta-musim-semi", title: "Cinta di Musim Semi", author: "Dewi Lestari",
            cover: "https://via.placeholder.com/180x250/E91E63/FFFFFF?text=Cinta",
            genre: "Romantis", views: 3500, releaseDate: "2025-06-05",
            sinopsis: "Kisah cinta manis yang bersemi di tengah keindahan musim semi, penuh dengan tawa dan air mata."
        },
        {
            id: "janji-senja", title: "Janji Senja", author: "Rizky Firmansyah",
            cover: "https://via.placeholder.com/180x250/F44336/FFFFFF?text=Senja",
            genre: "Romantis", views: 2800, releaseDate: "2025-06-18",
            sinopsis: "Dua hati yang terpisah oleh takdir bertemu kembali di bawah langit senja, mencoba memenuhi janji lama mereka."
        },
        {
            id: "melodi-hati", title: "Melodi Hati", author: "Sinta Amelia",
            cover: "https://via.placeholder.com/180x250/9C27B0/FFFFFF?text=Melodi",
            genre: "Romantis", views: 1900, releaseDate: "2025-05-10",
            sinopsis: "Seorang musisi menemukan inspirasi dalam cintanya yang baru, menciptakan melodi yang menyentuh hati."
        },

        // AKSI
        {
            id: "serangan-bayangan", title: "Serangan Bayangan", author: "Arif Hidayat",
            cover: "https://via.placeholder.com/180x250/F44336/FFFFFF?text=Aksi",
            genre: "Aksi", views: 2700, releaseDate: "2025-06-08",
            sinopsis: "Sebuah unit rahasia harus menghadapi ancaman teroris yang bersembunyi dalam bayangan, dalam misi penuh aksi dan intrik."
        },
        {
            id: "para-pemburu", title: "Para Pemburu", author: "Gatot Wijaya",
            cover: "https://via.placeholder.com/180x250/FF5722/FFFFFF?text=Pemburu",
            genre: "Aksi", views: 1600, releaseDate: "2025-05-25",
            sinopsis: "Sekelompok pemburu hadiah harus bersatu untuk melacak penjahat paling dicari, di tengah kota yang dipenuhi bahaya."
        },

        // PETUALANGAN
        {
            id: "kota-bawah-laut", title: "Kota Bawah Laut", author: "Ani Kartika",
            cover: "https://via.placeholder.com/180x250/00BCD4/FFFFFF?text=Laut",
            genre: "Petualangan", views: 950, releaseDate: "2025-04-28",
            sinopsis: "Sebuah tim ekspedisi menemukan kota kuno yang hilang di bawah laut, penuh dengan keajaiban dan misteri."
        },
        {
            id: "harta-karun", title: "Harta Karun Pulau Misteri", author: "Doni Setiawan",
            cover: "https://via.placeholder.com/180x250/009688/FFFFFF?text=Harta",
            genre: "Petualangan", views: 1400, releaseDate: "2025-06-07",
            sinopsis: "Peta kuno membawa sekelompok teman ke pulau terpencil yang menyimpan harta karun legendaris, tetapi juga jebakan mematikan."
        },

        // COMEDY
        {
            id: "kocak-abiz", title: "Petualangan Kocak Abiz", author: "Joni Gila",
            cover: "https://via.placeholder.com/180x250/FFEB3B/333333?text=Kocak",
            genre: "Comedy", views: 2200, releaseDate: "2025-06-02",
            sinopsis: "Kisah konyol seorang pemuda yang tak sengaja terlibat dalam serangkaian kejadian lucu dan absurd di kota besar."
        },
        {
            id: "pangeran-lucu", title: "Pangeran Paling Lucu Sedunia", author: "Rita Candrawati",
            cover: "https://via.placeholder.com/180x250/CDDC39/333333?text=Pangeran",
            genre: "Comedy", views: 1700, releaseDate: "2025-05-18",
            sinopsis: "Seorang pangeran yang kikuk dan humoris harus mencari calon ratu, menghasilkan berbagai situasi yang mengocok perut."
        },

        // THRILLER
        {
            id: "malam-sunyi", title: "Malam Sunyi di Bukit Berhantu", author: "Fajar Kusuma",
            cover: "https://via.placeholder.com/180x250/607D8B/FFFFFF?text=Malam",
            genre: "Thriller", views: 1950, releaseDate: "2025-06-11",
            sinopsis: "Sekelompok teman memutuskan untuk menghabiskan malam di sebuah bukit yang konon berhantu, hanya untuk menemukan teror yang tak terduga."
        },
        {
            id: "jejak-darah", title: "Jejak Darah di Salju", author: "Diana Putri",
            cover: "https://via.placeholder.com/180x250/37474F/FFFFFF?text=Darah",
            genre: "Thriller", views: 2500, releaseDate: "2025-05-30",
            sinopsis: "Seorang detektif veteran harus melacak jejak pembunuh berantai di tengah badai salju yang ganas, dengan waktu yang semakin menipis."
        }
        // --- Anda bisa tambahkan lebih banyak komik asli di sini ---
    ];

    // Helper untuk membuat ID unik
    let comicCounter = allComicsData.length;
    function generateUniqueId(title) {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') + '-' + (comicCounter++);
    }

    // --- Contoh cara menambahkan lebih banyak komik secara otomatis (untuk mencapai 100) ---
    const targetComicsCount = 100;
    while (allComicsData.length < targetComicsCount) {
        const baseComic = allComicsData[Math.floor(Math.random() * allComicsData.length)];
        const newId = generateUniqueId(baseComic.title + '-vol-' + (allComicsData.length + 1));
        const newComic = {
            id: newId,
            title: `${baseComic.title} Vol. ${Math.floor(Math.random() * 10) + 2}`,
            author: baseComic.author,
            cover: `https://via.placeholder.com/180x250/${Math.floor(Math.random()*16777215).toString(16)}/FFFFFF?text=${baseComic.genre}`,
            genre: baseComic.genre,
            views: Math.floor(Math.random() * 5000) + 100,
            releaseDate: new Date(2024, Math.floor(Math.random()*12), Math.floor(Math.random()*28)+1).toISOString().split('T')[0],
            sinopsis: `Ini adalah sinopsis untuk ${baseComic.title} Vol. ${Math.floor(Math.random() * 10) + 2}.`
        };
        allComicsData.push(newComic);
    }
    // console.log(`Total komik sekarang: ${allComicsData.length}`);

    const mainComicDisplay = document.getElementById('main-comic-display');
    const comicListTitle = document.getElementById('comic-list-title');

    // Fungsi untuk membuat elemen kartu komik
    function createComicCard(comic) {
        const comicCard = document.createElement('div');
        comicCard.classList.add('comic-card');
        comicCard.innerHTML = `
            <a href="comic_detail.html?comicId=${comic.id}">
                <img src="${comic.cover}" alt="${comic.title} Cover">
                <div class="comic-info">
                    <h4>${comic.title}</h4>
                    <p>${comic.author}</p>
                </div>
            </a>
        `;
        return comicCard;
    }

    // Fungsi untuk menampilkan daftar komik ke DOM
    function displayComics(comics, title) {
        mainComicDisplay.innerHTML = ''; // Bersihkan konten sebelumnya
        comicListTitle.textContent = title; // Atur judul bagian

        if (comics.length === 0) {
            mainComicDisplay.innerHTML = '<p>Tidak ada komik yang tersedia.</p>';
            return;
        }
        comics.forEach(comic => {
            mainComicDisplay.appendChild(createComicCard(comic));
        });
    }

    // --- Fungsionalitas Navigasi Responsif ---
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    hamburgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active'); // Toggle class 'active'
    });

    // Sembunyikan navigasi saat item menu diklik (untuk mobile)
    mainNav.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
    // --- Akhir Fungsionalitas Navigasi Responsif ---

    // --- Fungsionalitas Tombol Navigasi ---

    // Tombol Beranda (Menampilkan komik terbaru, misalnya 20 komik terbaru)
    document.getElementById('nav-beranda').addEventListener('click', (e) => {
        e.preventDefault();
        const homepageComics = [...allComicsData]
            .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
            .slice(0, 20); // Tampilkan 20 komik terbaru di beranda
        displayComics(homepageComics, 'Komik Terbaru & Pilihan Editor');
    });

    // Tombol Genre (Menampilkan semua genre yang tersedia, atau mengarahkan ke halaman genre)
    document.getElementById('nav-genre').addEventListener('click', (e) => {
        e.preventDefault();
        const genres = [...new Set(allComicsData.map(comic => comic.genre))];

        // Ini akan menampilkan semua komik yang ada, atau Anda bisa membuat halaman khusus
        // untuk menampilkan kategori genre
        displayComics(allComicsData, 'Semua Komik Berdasarkan Genre');

        alert(`Genre Tersedia: ${genres.join(', ')}. Fitur filter genre lebih lanjut memerlukan halaman atau mekanisme pencarian yang lebih kompleks!`);
    });

    // Tombol Populer (Mengurutkan semua komik berdasarkan views)
    document.getElementById('nav-populer').addEventListener('click', (e) => {
        e.preventDefault();
        const popularComics = [...allComicsData].sort((a, b) => b.views - a.views);
        displayComics(popularComics, 'Komik Paling Populer');
    });

    // Tombol Terbaru (Mengurutkan semua komik berdasarkan tanggal rilis)
    document.getElementById('nav-terbaru').addEventListener('click', (e) => {
        e.preventDefault();
        const latestComics = [...allComicsData].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        displayComics(latestComics, 'Komik Terbaru');
    });

    // --- Fungsionalitas Lain ---

    // Memuat komik awal saat halaman dimuat (default ke "Terbaru")
    document.getElementById('nav-terbaru').click(); // Panggil klik event untuk memuat default


    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredComics = allComicsData.filter(comic =>
            comic.title.toLowerCase().includes(searchTerm) ||
            comic.author.toLowerCase().includes(searchTerm) ||
            comic.genre.toLowerCase().includes(searchTerm)
        );
        displayComics(filteredComics, `Hasil Pencarian untuk "${searchInput.value}" (${filteredComics.length} ditemukan)`);
        if (filteredComics.length === 0) {
            alert('Tidak ditemukan komik untuk kata kunci tersebut.');
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Selamat datang di KomiX! Jelajahi komik kami.');
        document.getElementById('nav-terbaru').click(); // Arahkan ke tampilan terbaru
    });
});