// ====== DATA ANIME (banyak judul beneran) ======
const animeData = [
  {
    title: "Naruto",
    titleJp: "ナルト",
    year: 2002,
    type: "TV",
    episodes: 220,
    status: "Completed",
    genres: ["Action", "Adventure", "Shounen"],
    rating: 8.0,
    cover: "https://images.pexels.com/photos/9831585/pexels-photo-9831585.jpeg",
    synopsis:
      "Uzumaki Naruto, seorang ninja bocah yang bercita-cita menjadi Hokage dan di dalam tubuhnya tersegel Kyuubi."
  },
  {
    title: "Naruto: Shippuden",
    titleJp: "ナルト 疾風伝",
    year: 2007,
    type: "TV",
    episodes: 500,
    status: "Completed",
    genres: ["Action", "Adventure", "Shounen"],
    rating: 8.6,
    cover: "https://images.pexels.com/photos/3934512/pexels-photo-3934512.jpeg",
    synopsis:
      "Naruto kembali ke Konoha setelah latihan keras dan berhadapan dengan Akatsuki serta ancaman besar dunia ninja."
  },
  {
    title: "Boruto: Naruto Next Generations",
    titleJp: "BORUTO-ボルト- NARUTO NEXT GENERATIONS",
    year: 2017,
    type: "TV",
    episodes: 293,
    status: "On Break",
    genres: ["Action", "Adventure", "Shounen"],
    rating: 6.5,
    cover: "https://images.pexels.com/photos/7991500/pexels-photo-7991500.jpeg",
    synopsis:
      "Kisah Boruto, anak Naruto, yang hidup di era ninja modern dengan teknologi dan ancaman baru."
  },
  {
    title: "One Piece",
    titleJp: "ワンピース",
    year: 1999,
    type: "TV",
    episodes: 1000,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    rating: 9.0,
    cover: "https://images.pexels.com/photos/7991524/pexels-photo-7991524.jpeg",
    synopsis:
      "Monkey D. Luffy berlayar bersama kru Topi Jerami untuk mencari harta karun legendaris One Piece dan menjadi Raja Bajak Laut."
  },
  {
    title: "Bleach",
    titleJp: "ブリーチ",
    year: 2004,
    type: "TV",
    episodes: 366,
    status: "Completed",
    genres: ["Action", "Supernatural", "Shounen"],
    rating: 8.1,
    cover: "https://images.pexels.com/photos/12788516/pexels-photo-12788516.jpeg",
    synopsis:
      "Kurosaki Ichigo menjadi Shinigami pengganti dan terlibat dalam konflik besar antara dunia manusia, Soul Society, dan Hollow."
  },
  {
    title: "Bleach: Thousand-Year Blood War",
    titleJp: "ブリーチ 千年血戦篇",
    year: 2022,
    type: "TV",
    episodes: 26,
    status: "Ongoing",
    genres: ["Action", "Supernatural", "Shounen"],
    rating: 8.9,
    cover: "https://images.pexels.com/photos/9831585/pexels-photo-9831585.jpeg",
    synopsis:
      "Arc terakhir Bleach yang menceritakan perang besar antara Soul Society dan Quincy."
  },
  {
    title: "Attack on Titan",
    titleJp: "進撃の巨人",
    year: 2013,
    type: "TV",
    episodes: 75,
    status: "Completed",
    genres: ["Action", "Drama", "Fantasy"],
    rating: 9.0,
    cover: "https://images.pexels.com/photos/3934512/pexels-photo-3934512.jpeg",
    synopsis:
      "Umat manusia tinggal di dalam dinding raksasa untuk melindungi diri dari Titan pemakan manusia."
  },
  {
    title: "Attack on Titan Final Season",
    titleJp: "進撃の巨人 The Final Season",
    year: 2020,
    type: "TV",
    episodes: 28,
    status: "Completed",
    genres: ["Action", "Drama", "Fantasy"],
    rating: 9.1,
    cover: "https://images.pexels.com/photos/3934511/pexels-photo-3934511.jpeg",
    synopsis:
      "Tahap akhir perjuangan Eren dan kawan-kawan yang memperlihatkan konflik besar antara Pulau Paradis dan dunia luar."
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    titleJp: "鬼滅の刃",
    year: 2019,
    type: "TV",
    episodes: 26,
    status: "Ongoing",
    genres: ["Action", "Supernatural", "Historical"],
    rating: 8.7,
    cover: "https://images.pexels.com/photos/7991500/pexels-photo-7991500.jpeg",
    synopsis:
      "Tanjiro berjuang menjadi pembasmi iblis setelah keluarganya dibantai dan adiknya berubah menjadi iblis."
  },
  {
    title: "Demon Slayer: Mugen Train",
    titleJp: "鬼滅の刃 無限列車編",
    year: 2020,
    type: "Movie",
    episodes: 1,
    status: "Completed",
    genres: ["Action", "Supernatural", "Drama"],
    rating: 8.6,
    cover: "https://images.pexels.com/photos/7991510/pexels-photo-7991510.jpeg",
    synopsis:
      "Tanjiro dan kawan-kawan bergabung dengan Rengoku di kereta misterius yang penuh iblis."
  },
  {
    title: "Jujutsu Kaisen",
    titleJp: "呪術廻戦",
    year: 2020,
    type: "TV",
    episodes: 24,
    status: "Ongoing",
    genres: ["Action", "Supernatural", "Dark Fantasy"],
    rating: 8.6,
    cover: "https://images.pexels.com/photos/12788516/pexels-photo-12788516.jpeg",
    synopsis:
      "Itadori Yuji memakan jari kutukan terkuat Sukuna dan masuk ke sekolah jujutsu."
  },
  {
    title: "Jujutsu Kaisen 0",
    titleJp: "劇場版 呪術廻戦 0",
    year: 2021,
    type: "Movie",
    episodes: 1,
    status: "Completed",
    genres: ["Action", "Supernatural", "Dark Fantasy"],
    rating: 8.4,
    cover: "https://images.pexels.com/photos/3934512/pexels-photo-3934512.jpeg",
    synopsis:
      "Kisah Okkotsu Yuta dan roh terkutuk Rika sebelum kejadian di seri utama."
  },
  {
    title: "My Hero Academia",
    titleJp: "僕のヒーローアカデミア",
    year: 2016,
    type: "TV",
    episodes: 138,
    status: "Ongoing",
    genres: ["Action", "Comedy", "Super Power", "Shounen"],
    rating: 8.0,
    cover: "https://images.pexels.com/photos/7991529/pexels-photo-7991529.jpeg",
    synopsis:
      "Di dunia di mana hampir semua orang memiliki Quirk, Midoriya Izuku lahir tanpa kekuatan tetapi bermimpi jadi pahlawan."
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    titleJp: "鋼の錬金術師 FULLMETAL ALCHEMIST",
    year: 2009,
    type: "TV",
    episodes: 64,
    status: "Completed",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    rating: 9.2,
    cover: "https://images.pexels.com/photos/3934511/pexels-photo-3934511.jpeg",
    synopsis:
      "Dua bersaudara alkemis, Edward dan Alphonse Elric, mencari Batu Bertuah untuk mengembalikan tubuh mereka."
  },
  {
    title: "Death Note",
    titleJp: "デスノート",
    year: 2006,
    type: "TV",
    episodes: 37,
    status: "Completed",
    genres: ["Mystery", "Supernatural", "Psychological", "Thriller"],
    rating: 8.7,
    cover: "https://images.pexels.com/photos/3934512/pexels-photo-3934512.jpeg",
    synopsis:
      "Yagami Light menemukan buku kematian yang dapat membunuh siapa pun yang namanya tertulis di dalamnya."
  },
  {
    title: "Tokyo Ghoul",
    titleJp: "東京喰種トーキョーグール",
    year: 2014,
    type: "TV",
    episodes: 12,
    status: "Completed",
    genres: ["Horror", "Action", "Psychological"],
    rating: 7.9,
    cover: "https://images.pexels.com/photos/9831585/pexels-photo-9831585.jpeg",
    synopsis:
      "Kaneki berubah menjadi setengah ghoul setelah insiden mematikan dan harus hidup di antara dua dunia."
  },
  {
    title: "Sword Art Online",
    titleJp: "ソードアート・オンライン",
    year: 2012,
    type: "TV",
    episodes: 25,
    status: "Completed",
    genres: ["Action", "Adventure", "Fantasy", "Game"],
    rating: 7.2,
    cover: "https://images.pexels.com/photos/7991510/pexels-photo-7991510.jpeg",
    synopsis:
      "Ribuan pemain terjebak dalam game VRMMO mematikan di mana kematian di game berarti kematian di dunia nyata."
  },
  {
    title: "Re:Zero − Starting Life in Another World",
    titleJp: "Re：ゼロから始める異世界生活",
    year: 2016,
    type: "TV",
    episodes: 25,
    status: "Ongoing",
    genres: ["Isekai", "Fantasy", "Drama", "Psychological"],
    rating: 8.2,
    cover: "https://images.pexels.com/photos/3934511/pexels-photo-3934511.jpeg",
    synopsis:
      "Subaru terlempar ke dunia lain dan menyadari ia memiliki kekuatan kembali dari kematian."
  },
  {
    title: "That Time I Got Reincarnated as a Slime",
    titleJp: "転生したらスライムだった件",
    year: 2018,
    type: "TV",
    episodes: 24,
    status: "Ongoing",
    genres: ["Isekai", "Fantasy", "Adventure"],
    rating: 8.1,
    cover: "https://images.pexels.com/photos/3934512/pexels-photo-3934512.jpeg",
    synopsis:
      "Seorang pria biasa bereinkarnasi di dunia lain sebagai slime dengan kemampuan unik."
  },
  {
    title: "Konosuba: God's Blessing on This Wonderful World!",
    titleJp: "この素晴らしい世界に祝福を！",
    year: 2016,
    type: "TV",
    episodes: 10,
    status: "Completed",
    genres: ["Isekai", "Comedy", "Fantasy"],
    rating: 8.1,
    cover: "https://images.pexels.com/photos/7991534/pexels-photo-7991534.jpeg",
    synopsis:
      "Kazuma mati dengan cara konyol dan bereinkarnasi di dunia fantasi bersama party yang lebih konyol lagi."
  },
  {
    title: "Spy x Family",
    titleJp: "SPY×FAMILY",
    year: 2022,
    type: "TV",
    episodes: 25,
    status: "Ongoing",
    genres: ["Comedy", "Slice of Life", "Action"],
    rating: 8.4,
    cover: "https://images.pexels.com/photos/7991534/pexels-photo-7991534.jpeg",
    synopsis:
      "Seorang mata-mata, pembunuh bayaran, dan anak cenayang pura-pura menjadi keluarga demi misi rahasia."
  },
  {
    title: "Haikyuu!!",
    titleJp: "ハイキュー!!",
    year: 2014,
    type: "TV",
    episodes: 25,
    status: "Completed",
    genres: ["Sports", "Comedy", "Drama"],
    rating: 8.7,
    cover: "https://images.pexels.com/photos/11038343/pexels-photo-11038343.jpeg",
    synopsis:
      "Hinata Shoyo mengejar mimpinya di dunia voli meski bertubuh pendek."
  },
  {
    title: "Kuroko's Basketball",
    titleJp: "黒子のバスケ",
    year: 2012,
    type: "TV",
    episodes: 25,
    status: "Completed",
    genres: ["Sports", "Shounen"],
    rating: 8.1,
    cover: "https://images.pexels.com/photos/11038343/pexels-photo-11038343.jpeg",
    synopsis:
      "Kuroko dan Kagami berusaha menjatuhkan Generasi Keajaiban di dunia basket SMA."
  },
  {
    title: "Blue Lock",
    titleJp: "ブルーロック",
    year: 2022,
    type: "TV",
    episodes: 24,
    status: "Ongoing",
    genres: ["Sports", "Psychological"],
    rating: 8.2,
    cover: "https://images.pexels.com/photos/11038343/pexels-photo-11038343.jpeg",
    synopsis:
      "Proyek gila Blue Lock dibuat untuk menciptakan striker egois terbaik demi kejayaan sepak bola Jepang."
  },
  {
    title: "Your Name",
    titleJp: "君の名は。",
    year: 2016,
    type: "Movie",
    episodes: 1,
    status: "Completed",
    genres: ["Romance", "Drama", "Supernatural"],
    rating: 8.9,
    cover: "https://images.pexels.com/photos/7991510/pexels-photo-7991510.jpeg",
    synopsis:
      "Dua remaja yang terhubung lewat pertukaran tubuh dan mencoba mencari satu sama lain melintasi ruang dan waktu."
  },
  {
    title: "Weathering with You",
    titleJp: "天気の子",
    year: 2019,
    type: "Movie",
    episodes: 1,
    status: "Completed",
    genres: ["Romance", "Drama", "Fantasy"],
    rating: 8.1,
    cover: "https://images.pexels.com/photos/7991510/pexels-photo-7991510.jpeg",
    synopsis:
      "Seorang anak kabur ke Tokyo dan bertemu gadis yang bisa memanggil sinar matahari di tengah cuaca ekstrem."
  },
  {
    title: "A Silent Voice",
    titleJp: "聲の形",
    year: 2016,
    type: "Movie",
    episodes: 1,
    status: "Completed",
    genres: ["Drama", "Romance", "Slice of Life"],
    rating: 8.9,
    cover: "https://images.pexels.com/photos/7991510/pexels-photo-7991510.jpeg",
    synopsis:
      "Kisah penebusan seorang mantan pembully yang mencoba meminta maaf kepada gadis tuna rungu yang dulu ia sakiti."
  },
  {
    title: "Kaguya-sama: Love is War",
    titleJp: "かぐや様は告らせたい",
    year: 2019,
    type: "TV",
    episodes: 12,
    status: "Completed",
    genres: ["Romance", "Comedy", "Psychological"],
    rating: 8.5,
    cover: "https://images.pexels.com/photos/7991529/pexels-photo-7991529.jpeg",
    synopsis:
      "Dua orang jenius di OSIS saling berusaha membuat satu sama lain menyatakan cinta duluan."
  },
  {
    title: "Horimiya",
    titleJp: "ホリミヤ",
    year: 2021,
    type: "TV",
    episodes: 13,
    status: "Completed",
    genres: ["Romance", "Slice of Life"],
    rating: 8.2,
    cover: "https://images.pexels.com/photos/7991529/pexels-photo-7991529.jpeg",
    synopsis:
      "Di balik image mereka di sekolah, Hori dan Miyamura punya sisi lain yang hanya mereka tunjukkan satu sama lain."
  },
  {
    title: "Fruit Basket (2019)",
    titleJp: "フルーツバスケット",
    year: 2019,
    type: "TV",
    episodes: 25,
    status: "Completed",
    genres: ["Drama", "Romance", "Supernatural"],
    rating: 8.8,
    cover: "https://images.pexels.com/photos/7991529/pexels-photo-7991529.jpeg",
    synopsis:
      "Tohru Honda tinggal dengan keluarga Soma yang dikutuk berubah jadi hewan zodiak saat dipeluk lawan jenis."
  },
  {
    title: "Solo Leveling",
    titleJp: "俺だけレベルアップな件",
    year: 2024,
    type: "TV",
    episodes: 12,
    status: "Ongoing",
    genres: ["Action", "Fantasy"],
    rating: 8.3,
    cover: "https://images.pexels.com/photos/12788516/pexels-photo-12788516.jpeg",
    synopsis:
      "Hunter terlemah, Sung Jin-Woo, mendapatkan kekuatan misterius yang memungkinkannya terus naik level sendirian."
  },
  {
    title: "Chainsaw Man",
    titleJp: "チェンソーマン",
    year: 2022,
    type: "TV",
    episodes: 12,
    status: "Ongoing",
    genres: ["Action", "Horror", "Dark Fantasy"],
    rating: 8.5,
    cover: "https://images.pexels.com/photos/9831585/pexels-photo-9831585.jpeg",
    synopsis:
      "Denji bergabung dengan pemburu iblis setelah menyatu dengan iblis gergaji mesin peliharaannya, Pochita."
  },
  {
    title: "Oshi no Ko",
    titleJp: "【推しの子】",
    year: 2023,
    type: "TV",
    episodes: 11,
    status: "Ongoing",
    genres: ["Drama", "Supernatural", "Idol"],
    rating: 8.7,
    cover: "https://images.pexels.com/photos/7991534/pexels-photo-7991534.jpeg",
    synopsis:
      "Seorang dokter dan pasiennya bereinkarnasi sebagai anak kembar dari idol favorit mereka."
  },
  {
    title: "Sword Art Online: Alicization",
    titleJp: "ソードアート・オンライン アリシゼーション",
    year: 2018,
    type: "TV",
    episodes: 24,
    status: "Completed",
    genres: ["Action", "Fantasy", "Game"],
    rating: 7.7,
    cover: "https://images.pexels.com/photos/7991510/pexels-photo-7991510.jpeg",
    synopsis:
      "Kirito terjebak di dunia virtual baru bernama Underworld dengan misteri yang lebih dalam."
  }
];

// ====== KONFIGURASI PAGINATION ======
const PAGE_SIZE = 24;
let currentPage = 1;

// ====== DOM ELEMENTS ======
const animeContainer = document.getElementById("animeList");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const typeFilter = document.getElementById("typeFilter");
const sortSelect = document.getElementById("sortSelect");

const totalCountEl = document.getElementById("totalCount");
const currentPageEl = document.getElementById("currentPage");
const totalPagesEl = document.getElementById("totalPages");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");

// Modal
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalTitleJp = document.getElementById("modalTitleJp");
const modalMeta = document.getElementById("modalMeta");
const modalGenres = document.getElementById("modalGenres");
const modalSynopsis = document.getElementById("modalSynopsis");

// ====== UTIL ======
function getUniqueGenres(data) {
  const set = new Set();
  data.forEach((anime) => {
    anime.genres.forEach((g) => set.add(g));
  });
  return Array.from(set).sort();
}

function populateGenreFilter() {
  const genres = getUniqueGenres(animeData);
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

// ====== FILTER & SORT ======
function getFilteredSortedData() {
  const search = searchInput.value.toLowerCase().trim();
  const selectedGenre = genreFilter.value;
  const selectedType = typeFilter.value;
  const sortBy = sortSelect.value;

  let list = animeData.filter((anime) => {
    const inSearch =
      anime.title.toLowerCase().includes(search) ||
      anime.titleJp.toLowerCase().includes(search);
    const inGenre =
      selectedGenre === "all" || anime.genres.includes(selectedGenre);
    const inType = selectedType === "all" || anime.type === selectedType;
    return inSearch && inGenre && inType;
  });

  // sort
  list.sort((a, b) => {
    if (sortBy === "rating-desc") {
      return b.rating - a.rating;
    }
    if (sortBy === "year-desc") {
      return b.year - a.year;
    }
    if (sortBy === "title-asc") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return list;
}

// ====== RENDER ======
function renderAnime() {
  const filtered = getFilteredSortedData();

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pageData = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  animeContainer.innerHTML = "";

  if (pageData.length === 0) {
    animeContainer.innerHTML =
      "<p>Tidak ada anime yang cocok dengan pencarian / filter.</p>";
  } else {
    pageData.forEach((anime) => {
      const card = document.createElement("article");
      card.className = "anime-card";
      card.innerHTML = `
        <img src="${anime.cover}" alt="${anime.title}" class="anime-cover" />
        <div class="anime-content">
          <div class="anime-meta-top">
            <span class="badge">${anime.type}</span>
            <span>${anime.year}</span>
            <span>⭐ ${anime.rating.toFixed(1)}</span>
          </div>
          <h2 class="anime-title">${anime.title}</h2>
          <p class="anime-genres">${anime.genres.join(", ")}</p>
          <p class="anime-desc">${anime.synopsis.slice(0, 90)}...</p>
        </div>
      `;

      card.addEventListener("click", () => openModal(anime));
      animeContainer.appendChild(card);
    });
  }

  // Update info
  totalCountEl.textContent = total;
  currentPageEl.textContent = currentPage;
  totalPagesEl.textContent = totalPages;

  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;
}

// ====== MODAL ======
function openModal(anime) {
  modalImage.src = anime.cover;
  modalImage.alt = anime.title;
  modalTitle.textContent = anime.title;
  modalTitleJp.textContent = anime.titleJp || "";
  modalMeta.textContent = `${anime.type} • ${anime.year} • ${anime.episodes} eps • ⭐ ${anime.rating.toFixed(
    1
  )} • ${anime.status}`;
  modalGenres.textContent = `Genre: ${anime.genres.join(", ")}`;
  modalSynopsis.textContent = anime.synopsis;

  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  modalOverlay.classList.add("hidden");
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ====== EVENT LISTENER ======
searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderAnime();
});
genreFilter.addEventListener("change", () => {
  currentPage = 1;
  renderAnime();
});
typeFilter.addEventListener("change", () => {
  currentPage = 1;
  renderAnime();
});
sortSelect.addEventListener("change", () => {
  currentPage = 1;
  renderAnime();
});

prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderAnime();
  }
});

nextPageBtn.addEventListener("click", () => {
  currentPage++;
  renderAnime();
});

// ====== INIT ======
populateGenreFilter();
renderAnime();
