// Data anime contoh (nanti bisa kamu tambah terus)
const animeList = [
  {
    title: "Attack on Titan",
    year: 2013,
    type: "TV",
    genres: ["Action", "Drama", "Fantasy"],
    rating: 8.9,
    cover:
      "https://images.pexels.com/photos/3934512/pexels-photo-3934512.jpeg",
    synopsis:
      "Manusia bertahan hidup di dalam dinding raksasa untuk melawan para Titan pemakan manusia."
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    year: 2019,
    type: "TV",
    genres: ["Action", "Supernatural", "Historical"],
    rating: 8.7,
    cover:
      "https://images.pexels.com/photos/7991500/pexels-photo-7991500.jpeg",
    synopsis:
      "Tanjiro berjuang menjadi pembasmi iblis setelah keluarganya dibantai dan adiknya berubah jadi iblis."
  },
  {
    title: "Your Name",
    year: 2016,
    type: "Movie",
    genres: ["Romance", "Drama", "Supernatural"],
    rating: 8.8,
    cover:
      "https://images.pexels.com/photos/7991510/pexels-photo-7991510.jpeg",
    synopsis:
      "Dua remaja yang saling bertukar tubuh dan mencoba mencari satu sama lain melintasi ruang dan waktu."
  },
  {
    title: "Jujutsu Kaisen",
    year: 2020,
    type: "TV",
    genres: ["Action", "Supernatural", "Dark Fantasy"],
    rating: 8.6,
    cover:
      "https://images.pexels.com/photos/12788516/pexels-photo-12788516.jpeg",
    synopsis:
      "Itadori Yuji memakan jari kutukan terkuat Sukuna dan masuk ke sekolah jujutsu."
  },
  {
    title: "One Piece",
    year: 1999,
    type: "TV",
    genres: ["Adventure", "Action", "Comedy"],
    rating: 9.0,
    cover:
      "https://images.pexels.com/photos/7991524/pexels-photo-7991524.jpeg",
    synopsis:
      "Luffy dan kru Topi Jerami menjelajah Grand Line untuk mencari harta karun legendaris, One Piece."
  },
  {
    title: "Spy x Family",
    year: 2022,
    type: "TV",
    genres: ["Comedy", "Slice of Life", "Action"],
    rating: 8.4,
    cover:
      "https://images.pexels.com/photos/7991534/pexels-photo-7991534.jpeg",
    synopsis:
      "Seorang mata-mata, pembunuh bayaran, dan anak cenayang pura-pura menjadi keluarga demi misi rahasia."
  },
  {
    title: "Tokyo Ghoul",
    year: 2014,
    type: "TV",
    genres: ["Horror", "Action", "Psychological"],
    rating: 7.9,
    cover:
      "https://images.pexels.com/photos/9831585/pexels-photo-9831585.jpeg",
    synopsis:
      "Kaneki berubah menjadi setengah ghoul setelah insiden mematikan dan harus hidup di antara dua dunia."
  },
  {
    title: "Haikyuu!!",
    year: 2014,
    type: "TV",
    genres: ["Sports", "Comedy", "Drama"],
    rating: 8.7,
    cover:
      "https://images.pexels.com/photos/11038343/pexels-photo-11038343.jpeg",
    synopsis:
      "Hinata Shoyo mengejar mimpinya di dunia voli meski bertubuh pendek."
  },
  {
    title: "Kaguya-sama: Love is War",
    year: 2019,
    type: "TV",
    genres: ["Romance", "Comedy", "Psychological"],
    rating: 8.5,
    cover:
      "https://images.pexels.com/photos/7991529/pexels-photo-7991529.jpeg",
    synopsis:
      "Dua orang jenius di OSIS saling berusaha membuat satu sama lain menyatakan cinta duluan."
  },
  {
    title: "Re:Zero − Starting Life in Another World",
    year: 2016,
    type: "TV",
    genres: ["Isekai", "Fantasy", "Drama"],
    rating: 8.1,
    cover:
      "https://images.pexels.com/photos/3934511/pexels-photo-3934511.jpeg",
    synopsis:
      "Subaru terlempar ke dunia lain dan punya kekuatan kembali dari kematian dengan harga yang berat."
  }
];

// DOM elements
const animeContainer = document.getElementById("animeList");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");

// Ambil semua genre unik untuk isi dropdown
function populateGenreFilter() {
  const genreSet = new Set();
  animeList.forEach((anime) => {
    anime.genres.forEach((g) => genreSet.add(g));
  });

  const genres = Array.from(genreSet).sort();
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

// Render card anime
function renderAnime(list) {
  animeContainer.innerHTML = "";

  if (list.length === 0) {
    animeContainer.innerHTML =
      "<p>Tidak ada anime yang cocok dengan pencarian / filter.</p>";
    return;
  }

  list.forEach((anime) => {
    const card = document.createElement("article");
    card.className = "anime-card";

    card.innerHTML = `
      <img src="${anime.cover}" alt="${anime.title}" class="anime-cover" />
      <div class="anime-content">
        <h2 class="anime-title">${anime.title}</h2>
        <div class="anime-meta">
          <span class="badge">${anime.type}</span>
          <span class="badge">${anime.year}</span>
          <span class="badge">⭐ ${anime.rating}</span>
        </div>
        <p class="genre-list">Genre: ${anime.genres.join(", ")}</p>
        <p class="anime-desc">${anime.synopsis}</p>
      </div>
    `;

    animeContainer.appendChild(card);
  });
}

// Filter berdasarkan search + genre
function applyFilters() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const selectedGenre = genreFilter.value;

  const filtered = animeList.filter((anime) => {
    const matchTitle = anime.title.toLowerCase().includes(searchValue);
    const matchGenre =
      selectedGenre === "all" || anime.genres.includes(selectedGenre);
    return matchTitle && matchGenre;
  });

  renderAnime(filtered);
}

// Event listeners
searchInput.addEventListener("input", applyFilters);
genreFilter.addEventListener("change", applyFilters);

// Init
populateGenreFilter();
renderAnime(animeList);
