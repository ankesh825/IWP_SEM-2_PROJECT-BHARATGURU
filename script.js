/**
 * BharatGuru - Next-Gen JavaScript Engine
 * Features: Dark Mode, Voice Search, Audio Narration Guide, AI Itinerary Planner,
 * Wishlist System, Session Authentication & Live Climate Bar.
 * Author: Ankesh (IWP Coursework | IIPS DAVV)
 */

// Comprehensive Destination Dataset
const destinationsData = [
  {
    id: "tajmahal",
    name: "Taj Mahal, Agra",
    location: "Uttar Pradesh",
    category: "heritage",
    rating: "4.9",
    image: "tajmahal.jpg",
    shortDesc: "The timeless ivory-white marble mausoleum on the right bank of the river Yamuna. A world-renowned UNESCO World Heritage site and symbol of eternal love.",
    bestSeason: "October to March",
    highlights: "Marble Inlay Art, Sunset/Sunrise Views, Yamuna Riverfront, Mehtab Bagh",
    cuisine: "Agra Petha, Bedmi Puri, Mughlai Delicacies",
    howToReach: "Air: Kheria Airport (AGR) or IGI Airport Delhi (200 km) | Train: Agra Cantt Railway Station",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra",
    audioText: "Welcome to the Taj Mahal in Agra, Uttar Pradesh. Commissioned in 1631 by Mughal Emperor Shah Jahan to house the tomb of his favorite wife Mumtaz Mahal. Built entirely of ivory white marble, it reflects changing hues from pink at dawn to shimmering gold under the full moon."
  },
  {
    id: "indorerajwada",
    name: "Rajwada Palace & Sarafa",
    location: "Indore, Madhya Pradesh",
    category: "indore",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    shortDesc: "The seven-storey historic royal palace of the Holkar dynasty and the world-famous Sarafa night food bazaar that comes alive after midnight with incredible tastes.",
    bestSeason: "September to March",
    highlights: "Holkar Architecture, Chappan Dukan, Sarafa Night Market, Lal Bagh Palace",
    cuisine: "Poha Jalebi, Bhutte Ka Kees, Garadu, Joshi Dahi Bada",
    howToReach: "Air: Devi Ahilya Bai Holkar Airport (IDR) | Train: Indore Junction Railway Station",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rajwada+Palace+Indore",
    audioText: "Welcome to Indore, the cleanest city in India and home to Devi Ahilya Vishwavidyalaya. Rajwada Palace stands as an iconic symbol of the Holkar rulers, while Sarafa market transforms each midnight into India's most vibrant gastronomic destination."
  },
  {
    id: "varanasi",
    name: "Ghats of Varanasi",
    location: "Uttar Pradesh",
    category: "spiritual",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    shortDesc: "The spiritual heart of India along the sacred Ganges. Witness mystical evening Ganga Aarti at Dashashwamedh Ghat and serene sunrise boat rides.",
    bestSeason: "November to February",
    highlights: "Subah-e-Banaras Boat Ride, Ganga Aarti, Kashi Vishwanath Temple, Sarnath",
    cuisine: "Banarasi Paan, Malaiyo, Tamatar Chaat, Kachori Sabzi",
    howToReach: "Air: Lal Bahadur Shastri Airport (VNS) | Train: Varanasi Junction (BSB)",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dashashwamedh+Ghat+Varanasi",
    audioText: "Welcome to Kashi, or Varanasi, one of the oldest continuously inhabited cities in the world. As evening descends, Dashashwamedh Ghat reverberates with Vedic chants, incense, and ceremonial brass lamps during the sacred Maha Aarti."
  },
  {
    id: "jaipur",
    name: "Hawa Mahal & Amber Fort",
    location: "Jaipur, Rajasthan",
    category: "heritage",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    shortDesc: "The majestic Pink City of royalty, featuring the 953-window Palace of Winds, towering hilltop fortresses, and vibrant Rajasthani bazaar culture.",
    bestSeason: "October to March",
    highlights: "Sheesh Mahal in Amber Fort, City Palace, Jal Mahal, Jantar Mantar",
    cuisine: "Dal Baati Churma, Ghewar, Pyaaz Kachori, Laal Maas",
    howToReach: "Air: Jaipur International Airport (JAI) | Train: Jaipur Junction (JP)",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hawa+Mahal+Jaipur",
    audioText: "Welcome to Jaipur, the Pink City of Rajasthan. Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal's honeycomb pink sandstone lattice allowed royal ladies to observe street life undisturbed while cooling gentle desert breezes."
  },
  {
    id: "kerala",
    name: "Alleppey Backwaters",
    location: "Kerala (God's Own Country)",
    category: "nature",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Drift along emerald palm-fringed lagoons, serene canals, and paddy fields on traditional Kettuvallam houseboats. Pure rejuvenation.",
    bestSeason: "September to March",
    highlights: "Overnight Houseboat Cruise, Ayurvedic Spas, Vembanad Lake, Marari Beach",
    cuisine: "Kerala Sadhya, Karimeen Pollichathu, Appam with Stew",
    howToReach: "Air: Cochin International Airport (COK - 75 km) | Train: Alappuzha Railway Station",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Alleppey+Backwaters+Kerala",
    audioText: "Welcome to Alleppey in Kerala, God's Own Country. Glide through tranquil backwater canals lined with coconut palms aboard traditional wooden houseboats, enjoying fresh spiced coastal feasts and ancient Ayurvedic rejuvenation."
  },
  {
    id: "ladakh",
    name: "Pangong Tso & Nubra Valley",
    location: "Ladakh",
    category: "nature",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    shortDesc: "The mystical high-altitude desert of blue lakes, majestic Himalayan passes, Buddhist monasteries, and double-humped camel dunes.",
    bestSeason: "May to September",
    highlights: "Khardung La Pass, Pangong Lake Color Shifts, Diskit Monastery, Magnetic Hill",
    cuisine: "Ladakhi Thukpa, Momos, Butter Tea, Skyu",
    howToReach: "Air: Kushok Bakula Rimpochee Airport (IXL - Leh) | Road: Manali-Leh Highway",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pangong+Lake+Ladakh",
    audioText: "Welcome to Ladakh, the Land of High Passes. Situated at over 14,000 feet, Pangong Lake shifts colors from deep turquoise to azure beneath towering Himalayan peaks, offering unforgettable starlit desert nights."
  },
  {
    id: "ujjain",
    name: "Mahakaleshwar Jyotirlinga",
    location: "Ujjain, Madhya Pradesh",
    category: "spiritual",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80",
    shortDesc: "One of the 12 sacred Jyotirlingas, home to the revered Bhasma Aarti and the breathtaking Mahakal Lok corridor near Indore.",
    bestSeason: "October to April",
    highlights: "Mahakal Corridor, Bhasma Aarti, Ram Ghat Shipra River, Kal Bhairav Temple",
    cuisine: "Ujjaini Sev, Bhutta Kees, Rabdi Jalebi",
    howToReach: "Air: Indore Airport (55 km away) | Train: Ujjain Junction (UJN)",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mahakaleshwar+Temple+Ujjain",
    audioText: "Welcome to the sacred city of Ujjain, located on the banks of the holy Shipra river. The Mahakaleshwar temple is the only south-facing Jyotirlinga, famous worldwide for its dawn Bhasma Aarti and grand Mahakal Lok spiritual promenade."
  },
  {
    id: "goa",
    name: "Goa Coastline & Heritage",
    location: "Goa",
    category: "nature",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Golden tropical beaches, Portuguese colonial architecture, Dudhsagar waterfalls, and vibrant coastal culture.",
    bestSeason: "November to February",
    highlights: "Basilica of Bom Jesus, Palolem Beach, Fort Aguada, Dudhsagar Falls",
    cuisine: "Goan Fish Curry, Bebinca, Prawn Balchão, Feni",
    howToReach: "Air: Dabolim Airport (GOI) / Mopa Airport (GOX) | Train: Madgaon (MAO)",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Goa+India",
    audioText: "Welcome to Goa, India's sun-drenched coastal paradise. Beyond serene sandy shores and beach shacks lie 400-year-old Portuguese baroque cathedrals, lush spice plantations, and cascade waterfalls."
  }
];

// Document Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderDestinations(destinationsData);
  initSearchAndFilters();
  initVoiceSearch();
  initTripPlanner();
  initItineraryBuilder();
  initWishlist();
  initWeatherTicker();
  initQuiz();
  checkAuthState();
  initMobileMenu();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('bharatguru_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonUI(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('bharatguru_theme', newTheme);
  updateThemeButtonUI(newTheme);
  showToast(`Switched to ${newTheme === 'dark' ? 'Heritage Dark Mode 🌙' : 'Sand Light Mode ☀️'}`, 'success');
}

function updateThemeButtonUI(theme) {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
}

/* ==========================================================================
   2. Destination Rendering & Wishlist Integration
   ========================================================================== */
function renderDestinations(items) {
  const container = document.getElementById('destinationsGrid');
  if (!container) return;

  const wishlist = getWishlist();

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; background: var(--card-bg); border-radius: 12px; border: 1px dashed var(--border-color);">
        <p style="font-size: 18px; color: var(--p-green); font-weight: 700; margin-bottom: 8px;">No destinations found</p>
        <p style="color: var(--text-muted); font-size: 14px;">Try searching for a different spot or click "All Spots"!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(dest => {
    const isSaved = wishlist.includes(dest.id);
    return `
      <div class="destination-card" data-category="${dest.category}">
        <div class="card-image-wrap">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy" onerror="this.src='tajmahal.jpg'">
          <span class="card-badge">${dest.category.toUpperCase()}</span>
          <button class="card-wishlist-btn ${isSaved ? 'active' : ''}" onclick="toggleWishlist('${dest.id}', event)" title="Save to Wishlist">
            ${isSaved ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="card-body">
          <div class="card-location">📍 ${dest.location}</div>
          <h3 class="card-title">${dest.name}</h3>
          <p class="card-desc">${dest.shortDesc}</p>
          <div class="card-footer">
            <span class="card-tag">🗓 ${dest.bestSeason}</span>
            <button class="card-btn" onclick="openDestinationModal('${dest.id}')">
              Explore Guide →
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   3. Search & Filter System
   ========================================================================== */
let currentCategory = 'all';

function initSearchAndFilters() {
  const searchInput = document.getElementById('searchBox');
  const catButtons = document.querySelectorAll('.cat-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterDestinations(e.target.value, currentCategory);
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const val = searchInput.value.trim();
        if (val) filterDestinations(val, currentCategory);
      }
    });
  }

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat') || 'all';
      const term = searchInput ? searchInput.value : '';
      filterDestinations(term, currentCategory);
    });
  });
}

function filterDestinations(query = '', category = 'all') {
  const cleanQuery = query.toLowerCase().trim();
  
  const filtered = destinationsData.filter(item => {
    const matchesCategory = (category === 'all') || (item.category === category);
    const matchesQuery = !cleanQuery || 
      item.name.toLowerCase().includes(cleanQuery) ||
      item.location.toLowerCase().includes(cleanQuery) ||
      item.shortDesc.toLowerCase().includes(cleanQuery) ||
      item.cuisine.toLowerCase().includes(cleanQuery);

    return matchesCategory && matchesQuery;
  });

  renderDestinations(filtered);
}

function searchGoogle() {
  const input = document.getElementById('searchBox');
  const query = input ? input.value.trim() : '';
  if (query) {
    window.open('https://www.google.com/search?q=' + encodeURIComponent('India Tourism ' + query), '_blank');
  } else {
    showToast('Please enter a destination to search on web!', 'error');
  }
}

/* ==========================================================================
   4. Voice Search (Speech Recognition)
   ========================================================================== */
function initVoiceSearch() {
  const micBtn = document.getElementById('voiceMicBtn');
  const searchInput = document.getElementById('searchBox');
  if (!micBtn || !searchInput) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    micBtn.style.display = 'none';
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-IN';

  micBtn.addEventListener('click', () => {
    try {
      micBtn.classList.add('listening');
      showToast('Listening... Speak a destination like "Indore" or "Agra"', 'success');
      recognition.start();
    } catch (err) {
      recognition.stop();
      micBtn.classList.remove('listening');
    }
  });

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    searchInput.value = transcript;
    filterDestinations(transcript, currentCategory);
    showToast(`Voice Search: "${transcript}"`, 'success');
  };

  recognition.onerror = () => {
    micBtn.classList.remove('listening');
    showToast('Could not capture voice. Try typing instead.', 'error');
  };

  recognition.onend = () => {
    micBtn.classList.remove('listening');
  };
}

/* ==========================================================================
   5. Destination Modal & Audio Narration Guide
   ========================================================================== */
let currentAudioUtterance = null;
let activeModalDestId = null;

function openDestinationModal(id) {
  const item = destinationsData.find(d => d.id === id);
  if (!item) return;

  activeModalDestId = id;
  stopAudioGuide();

  let modal = document.getElementById('destinationModal');
  if (!modal) {
    createModalDOM();
    modal = document.getElementById('destinationModal');
  }

  document.getElementById('modalImg').src = item.image;
  document.getElementById('modalImg').onerror = function() { this.src = 'tajmahal.jpg'; };
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalLoc').textContent = `📍 ${item.location} • Category: ${item.category.toUpperCase()}`;
  document.getElementById('modalDesc').textContent = item.shortDesc;
  document.getElementById('modalSeason').textContent = item.bestSeason;
  document.getElementById('modalHighlights').textContent = item.highlights;
  document.getElementById('modalFood').textContent = item.cuisine;
  document.getElementById('modalReach').textContent = item.howToReach;
  document.getElementById('modalMapLink').href = item.mapsUrl;

  const audioBtn = document.getElementById('modalAudioBtn');
  if (audioBtn) {
    audioBtn.innerHTML = '🔊 Listen to Audio Guide';
    audioBtn.classList.remove('playing');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDestinationModal() {
  const modal = document.getElementById('destinationModal');
  if (modal) {
    stopAudioGuide();
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function toggleAudioGuide() {
  const item = destinationsData.find(d => d.id === activeModalDestId);
  const btn = document.getElementById('modalAudioBtn');
  if (!item || !btn) return;

  if (window.speechSynthesis.speaking) {
    stopAudioGuide();
    btn.innerHTML = '🔊 Listen to Audio Guide';
    btn.classList.remove('playing');
  } else {
    if ('speechSynthesis' in window) {
      currentAudioUtterance = new SpeechSynthesisUtterance(item.audioText || item.shortDesc);
      currentAudioUtterance.rate = 0.95;
      currentAudioUtterance.pitch = 1.0;
      
      currentAudioUtterance.onend = () => {
        btn.innerHTML = '🔊 Listen to Audio Guide';
        btn.classList.remove('playing');
      };

      window.speechSynthesis.speak(currentAudioUtterance);
      btn.innerHTML = '⏹ Stop Audio Guide';
      btn.classList.add('playing');
      showToast('Playing audio tour narration...', 'success');
    } else {
      showToast('Speech audio is not supported in this browser.', 'error');
    }
  }
}

function stopAudioGuide() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

function createModalDOM() {
  const modalDiv = document.createElement('div');
  modalDiv.id = 'destinationModal';
  modalDiv.className = 'modal-overlay';
  modalDiv.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <img id="modalImg" src="" alt="Destination Image">
        <button class="modal-close" onclick="closeDestinationModal()" title="Close">&times;</button>
      </div>
      <div class="modal-body">
        <h3 id="modalTitle" class="modal-title"></h3>
        <div id="modalLoc" class="modal-subtitle"></div>
        
        <div class="audio-guide-bar">
          <span style="font-size: 13px; font-weight: 600;">🎙️ AI Voice Tour Guide</span>
          <button id="modalAudioBtn" class="audio-btn" onclick="toggleAudioGuide()">
            🔊 Listen to Audio Guide
          </button>
        </div>

        <p id="modalDesc" style="font-size: 14px; margin-bottom: 16px;"></p>
        
        <div class="modal-info-grid">
          <div class="info-item">
            <h5>Best Time to Visit</h5>
            <p id="modalSeason"></p>
          </div>
          <div class="info-item">
            <h5>Must-Try Food</h5>
            <p id="modalFood"></p>
          </div>
          <div class="info-item" style="grid-column: 1/-1;">
            <h5>Key Highlights</h5>
            <p id="modalHighlights"></p>
          </div>
          <div class="info-item" style="grid-column: 1/-1;">
            <h5>How to Reach</h5>
            <p id="modalReach"></p>
          </div>
        </div>

        <div style="display: flex; gap: 12px; margin-top: 20px;">
          <a id="modalMapLink" href="#" target="_blank" class="btn btn-primary" style="flex: 1;">
            📍 Open in Google Maps
          </a>
          <button onclick="closeDestinationModal()" class="btn btn-outline">
            Close
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);

  modalDiv.addEventListener('click', (e) => {
    if (e.target === modalDiv) closeDestinationModal();
  });
}

/* ==========================================================================
   6. Wishlist Management Engine
   ========================================================================== */
function initWishlist() {
  updateWishlistBadge();
}

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem('bharatguru_wishlist')) || [];
  } catch (e) {
    return [];
  }
}

function toggleWishlist(id, event) {
  if (event) event.stopPropagation();
  let list = getWishlist();
  const index = list.indexOf(id);

  if (index > -1) {
    list.splice(index, 1);
    showToast('Removed from Saved Wishlist.', 'error');
  } else {
    list.push(id);
    showToast('Added to your Saved Wishlist! ❤️', 'success');
  }

  localStorage.setItem('bharatguru_wishlist', JSON.stringify(list));
  updateWishlistBadge();
  renderDestinations(destinationsData);
  renderWishlistDrawer();
}

function updateWishlistBadge() {
  const count = getWishlist().length;
  const badges = document.querySelectorAll('.wishlist-badge');
  badges.forEach(b => {
    b.textContent = count;
  });
}

function openWishlistDrawer() {
  let drawer = document.getElementById('wishlistDrawer');
  if (!drawer) {
    createWishlistDrawerDOM();
    drawer = document.getElementById('wishlistDrawer');
  }
  renderWishlistDrawer();
  drawer.classList.add('open');
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  if (drawer) drawer.classList.remove('open');
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlistItemsContainer');
  if (!container) return;

  const savedIds = getWishlist();
  const savedItems = destinationsData.filter(d => savedIds.includes(d.id));

  if (savedItems.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <div style="font-size: 32px; margin-bottom: 8px;">🤍</div>
        <p style="font-weight: 700; margin-bottom: 4px;">Your Wishlist is Empty</p>
        <p style="font-size: 12px;">Click the heart icon on any destination card to bookmark your favorites.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = savedItems.map(item => `
    <div class="wishlist-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='tajmahal.jpg'">
      <div class="wishlist-item-info">
        <div class="wishlist-item-title">${item.name}</div>
        <div class="wishlist-item-loc">📍 ${item.location}</div>
      </div>
      <button class="wishlist-remove" onclick="toggleWishlist('${item.id}')" title="Remove">&times;</button>
    </div>
  `).join('');
}

function createWishlistDrawerDOM() {
  const drawer = document.createElement('div');
  drawer.id = 'wishlistDrawer';
  drawer.className = 'wishlist-drawer';
  drawer.innerHTML = `
    <div class="wishlist-header">
      <h3 style="font-size: 18px; color: var(--p-green-900);">❤️ Saved Places (<span class="wishlist-badge">0</span>)</h3>
      <button onclick="closeWishlistDrawer()" style="background:none; border:none; font-size: 20px; cursor:pointer; color:var(--text-main);">&times;</button>
    </div>
    <div class="wishlist-body" id="wishlistItemsContainer"></div>
    <div style="padding: 16px 24px; border-top: 1px solid var(--border-color); display: flex; gap: 8px;">
      <button class="btn btn-primary" style="flex: 1;" onclick="closeWishlistDrawer(); document.getElementById('destinations').scrollIntoView();">Explore More</button>
    </div>
  `;
  document.body.appendChild(drawer);
}

/* ==========================================================================
   7. AI-Style Day-by-Day Itinerary Builder
   ========================================================================== */
function initItineraryBuilder() {
  const form = document.getElementById('itineraryBuilderForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    generateAIItinerary();
  });
}

function generateAIItinerary() {
  const dest = document.getElementById('itineraryDest').value;
  const days = parseInt(document.getElementById('itineraryDays').value, 10);
  const companion = document.getElementById('itineraryCompanion').value;
  const pace = document.getElementById('itineraryPace').value;

  const container = document.getElementById('itineraryTimelineOutput');
  const resultCard = document.getElementById('itineraryResultWrapper');

  const itineraries = {
    "Indore": [
      { morning: "Breakfast of Poha-Jalebi at Chappan Dukan", afternoon: "Explore historic 7-storey Rajwada Palace and Lal Bagh Estate", evening: "Visit Khajrana Ganesh Temple and enjoy street culture", night: "Late night feast at the famous Sarafa Jewelry & Food Bazaar" },
      { morning: "Day trip to sacred Mahakaleshwar Jyotirlinga in Ujjain", afternoon: "Walk through the grand Mahakal Lok spiritual corridor", evening: "Sunset boat ride at Ram Ghat on Shipra river", night: "Return to Indore, try Joshi Dahi Bada and Garadu" },
      { morning: "Excursion to the romantic fortress city of Mandu", afternoon: "Visit Jahaz Mahal, Hindola Mahal, and Rani Roopmati Pavilion", evening: "Sunset views over Narmada valley", night: "Traditional Malwi Dal-Bafla dinner" }
    ],
    "Agra": [
      { morning: "Sunrise viewing of Taj Mahal in pristine light", afternoon: "Explore massive red sandstone Agra Fort & Diwan-i-Khas", evening: "Mehtab Bagh sunset garden view across Yamuna", night: "Taste authentic Agra Petha and Mughlai kebabs at Sadar Bazaar" },
      { morning: "Trip to Emperor Akbar's ghost city of Fatehpur Sikri", afternoon: "Marvel at the 54-meter-tall Buland Darwaza", evening: "Visit Tomb of I'timad-ud-Daulah (Baby Taj)", night: "Rooftop dining with illuminated view of Taj Mahal" }
    ],
    "Varanasi": [
      { morning: "Subah-e-Banaras sunrise boat ride from Assi to Dashashwamedh Ghat", afternoon: "Explore Kashi Vishwanath Corridor & ancient alleyways", evening: "Witness the magnificent Ganga Aarti ceremony from the river", night: "Savor Banarasi Tamatar Chaat, Malaiyo, and royal Paan" },
      { morning: "Excursion to Sarnath where Lord Buddha gave his first sermon", afternoon: "Visit Dhamek Stupa and Sarnath Archaeological Museum", evening: "Sunset walk on Manikarnika & Harishchandra Ghats", night: "Classical Indian music performance in old haveli" }
    ],
    "Jaipur": [
      { morning: "Early photo shoot at Hawa Mahal & City Palace", afternoon: "Elephant/Jeep ride up to hilltop Amber Fort & Sheesh Mahal", evening: "Panoramic sunset from Nahargarh Fort overlooking the city", night: "Royal Rajasthani Thali at Chokhi Dhani cultural village" },
      { morning: "Visit ancient astronomical marvel Jantar Mantar", afternoon: "Shopping for blue pottery & textiles in Johari Bazaar", evening: "Serene sunset by Jal Mahal lake", night: "Traditional Ghewar and Dal Baati Churma banquet" }
    ],
    "Kerala": [
      { morning: "Board private luxury Kettuvallam houseboat in Alleppey", afternoon: "Cruise through palm-canopied lagoons and paddy fields", evening: "Authentic Ayurvedic massage and wellness session", night: "Traditional candlelight dinner of Karimeen on the backwaters" },
      { morning: "Drive through lush green tea gardens of Munnar", afternoon: "Visit Eravikulam National Park to spot Nilgiri Tahr", evening: "Walk through aromatic spice plantations", night: "Sip freshly brewed cardamom tea in cool mountain mist" }
    ]
  };

  const selectedList = itineraries[dest] || itineraries["Indore"];
  let html = '';

  for (let d = 1; d <= days; d++) {
    const dayData = selectedList[(d - 1) % selectedList.length];
    html += `
      <div class="day-schedule-card">
        <span class="day-badge">DAY 0${d} • ${pace.toUpperCase()} PACED</span>
        <div class="time-slots-grid">
          <div class="time-slot">
            <span class="time-slot-label">🌅 08:00 AM - MORNING</span>
            <div class="time-slot-title">${dayData.morning}</div>
          </div>
          <div class="time-slot">
            <span class="time-slot-label">☀️ 01:00 PM - AFTERNOON</span>
            <div class="time-slot-title">${dayData.afternoon}</div>
          </div>
          <div class="time-slot">
            <span class="time-slot-label">🌇 05:30 PM - EVENING</span>
            <div class="time-slot-title">${dayData.evening}</div>
          </div>
          <div class="time-slot">
            <span class="time-slot-label">🌙 08:30 PM - NIGHT</span>
            <div class="time-slot-title">${dayData.night}</div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
  resultCard.style.display = 'block';
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  showToast(`Generated ${days}-day AI itinerary for ${dest}!`, 'success');
}

function copyItineraryText() {
  const container = document.getElementById('itineraryTimelineOutput');
  if (!container) return;
  navigator.clipboard.writeText(container.innerText).then(() => {
    showToast('Itinerary copied to clipboard! 📋', 'success');
  });
}

function printItinerary() {
  window.print();
}

/* ==========================================================================
   8. Live City Climate Explorer Bar
   ========================================================================== */
function initWeatherTicker() {
  const ticker = document.getElementById('weatherTicker');
  if (!ticker) return;

  const weatherData = [
    { city: "Indore", temp: "26°C", condition: "☀️ Pleasant & Clear", tip: "Great for street food" },
    { city: "Agra", temp: "24°C", condition: "🌤️ Mild Sun", tip: "Ideal sunrise view" },
    { city: "Varanasi", temp: "25°C", condition: "✨ Serene Evening", tip: "Perfect for Ganga Aarti" },
    { city: "Jaipur", temp: "27°C", condition: "🏰 Warm & Royal", tip: "Comfortable forts visit" },
    { city: "Alleppey", temp: "29°C", condition: "🌴 Gentle Coastal Breeze", tip: "Houseboat ready" },
    { city: "Leh Ladakh", temp: "8°C", condition: "🏔️ Crisp Mountain Air", tip: "Carry warm jackets" }
  ];

  ticker.innerHTML = weatherData.map(w => `
    <div class="weather-chip">
      <span class="city">📍 ${w.city}:</span>
      <span>${w.temp}</span>
      <span>${w.condition}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   9. Travel Vibe Match Quiz
   ========================================================================== */
let quizStep = 1;
let quizAnswers = {};

function initQuiz() {
  const options = document.querySelectorAll('.quiz-option-btn');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const q = opt.getAttribute('data-q');
      const val = opt.getAttribute('data-val');
      
      document.querySelectorAll(`[data-q="${q}"]`).forEach(b => b.classList.remove('selected'));
      opt.classList.add('selected');
      quizAnswers[q] = val;

      if (Object.keys(quizAnswers).length >= 3) {
        showQuizResult();
      }
    });
  });
}

function showQuizResult() {
  const resultCard = document.getElementById('quizResultCard');
  if (!resultCard) return;

  let destName = "Indore & Ujjain (Madhya Pradesh)";
  let why = "You appreciate rich culinary traditions, iconic royal palaces, and sacred spiritual vibes!";

  if (quizAnswers.landscape === 'mountains') {
    destName = "Pangong Lake & Leh (Ladakh)";
    why = "You crave majestic Himalayan vistas, tranquil blue lakes, and thrill adventures!";
  } else if (quizAnswers.landscape === 'coastal') {
    destName = "Alleppey & Munnar (Kerala)";
    why = "You love relaxing backwaters, rejuvenating Ayurvedic wellness, and lush greenery!";
  } else if (quizAnswers.vibe === 'heritage') {
    destName = "Jaipur & Agra Golden Triangle";
    why = "You are enchanted by royal Mughal & Rajput architecture, vibrant bazaars, and fortresses!";
  }

  document.getElementById('quizMatchName').textContent = destName;
  document.getElementById('quizMatchDesc').textContent = why;
  resultCard.classList.add('active');
  showToast('🎉 Found your perfect travel match!', 'success');
}

/* ==========================================================================
   10. User Session & Authentication Sync
   ========================================================================== */
function checkAuthState() {
  const user = localStorage.getItem('bharatguru_current_user');
  const authContainer = document.getElementById('navAuthContainer');
  if (!authContainer) return;

  if (user) {
    authContainer.innerHTML = `
      <div class="user-badge">
        <span>👤 ${user}</span>
        <a class="logout-link" onclick="logoutUser()">Logout</a>
      </div>
    `;
  } else {
    authContainer.innerHTML = `
      <a href="login.html" class="btn btn-ghost">Login</a>
      <a href="registationform.html" class="btn btn-primary">Register</a>
    `;
  }
}

function logoutUser() {
  localStorage.removeItem('bharatguru_current_user');
  showToast('Logged out successfully.', 'success');
  checkAuthState();
}

/* ==========================================================================
   11. Budget Calculator Widget
   ========================================================================== */
function initTripPlanner() {
  const form = document.getElementById('tripPlannerForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const destination = document.getElementById('planDestination').value;
    const days = parseInt(document.getElementById('planDays').value, 10) || 3;
    const travelers = parseInt(document.getElementById('planTravelers').value, 10) || 1;
    const style = document.getElementById('planStyle').value;

    let baseDailyCost = 1500;
    if (style === 'moderate') baseDailyCost = 3500;
    if (style === 'luxury') baseDailyCost = 8000;

    const totalEstimate = baseDailyCost * days * travelers;
    const formattedCost = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(totalEstimate);

    const resultBox = document.getElementById('plannerResult');
    if (resultBox) {
      document.getElementById('resultCostText').textContent = formattedCost;
      document.getElementById('resultDetails').textContent = `Estimated for ${days} days trip to ${destination} for ${travelers} traveler(s) under ${style.toUpperCase()} travel style. Includes hotel, local transport, meals & sightseeing.`;
      resultBox.classList.add('active');
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

/* ==========================================================================
   12. Utilities & Toast Notifications
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}

function showToast(message, type = 'success') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <span>${type === 'success' ? '✓' : '⚠️'}</span>
      <span style="font-size: 13.5px; font-weight: 600;">${message}</span>
    </div>
    <button onclick="this.parentElement.remove()" style="background:none; border:none; cursor:pointer; color:inherit; font-size:16px;">&times;</button>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}
