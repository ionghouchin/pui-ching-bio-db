// 獲取所有生物數據
const allBioData = [...bioData.plants, ...bioData.birds, ...bioData.insects];

// DOM 元素
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const bioList = document.getElementById('bioList');
const bioModal = document.getElementById('bioModal');
const bioDetails = document.getElementById('bioDetails');
const closeBtn = document.querySelector('.close');
const navLinks = document.querySelectorAll('.nav-link');

// 當前選中的分類
let currentCategory = 'all';

// 初始化頁面
function initializePage() {
    displayBioList(allBioData);
    setupEventListeners();
}

// 設置事件監聽器
function setupEventListeners() {
    // 搜索框事件
    searchInput.addEventListener('input', handleSearch);
    
    // 導航鏈接事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = e.target.dataset.category;
            updateActiveNav();
            filterAndDisplayBio();
        });
    });
    
    // 模態框關閉事件
    closeBtn.addEventListener('click', () => {
        bioModal.style.display = 'none';
    });
    
    // 點擊模態框外部關閉
    window.addEventListener('click', (e) => {
        if (e.target === bioModal) {
            bioModal.style.display = 'none';
        }
    });
}

// 處理搜索
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2) {
        searchSuggestions.classList.remove('active');
        return;
    }
    
    const suggestions = allBioData.filter(bio => 
        bio.name.toLowerCase().includes(searchTerm)
    ).slice(0, 5);
    
    displaySuggestions(suggestions);
}

// 顯示搜索建議
function displaySuggestions(suggestions) {
    searchSuggestions.innerHTML = suggestions.map(bio => `
        <div class="suggestion-item" onclick="showBioDetails(${bio.id})">
            ${bio.name}
        </div>
    `).join('');
    
    searchSuggestions.classList.add('active');
}

// 過濾並顯示生物列表
function filterAndDisplayBio() {
    let filteredData = allBioData;
    if (currentCategory !== 'all') {
        filteredData = allBioData.filter(bio => bio.category === currentCategory);
    }
    displayBioList(filteredData);
}

// 顯示生物列表
function displayBioList(bioData) {
    bioList.innerHTML = bioData.map(bio => `
        <div class="bio-card" onclick="showBioDetails(${bio.id})">
            <img src="${bio.image}" alt="${bio.name}">
            <div class="bio-card-content">
                <h3>${bio.name}</h3>
                <p>${bio.description}</p>
            </div>
        </div>
    `).join('');
}

// 顯示生物詳情
function showBioDetails(id) {
    const bio = allBioData.find(bio => bio.id === id);
    if (!bio) return;
    
    let detailsHTML = `
        <h2>${bio.name}</h2>
        <div class="media-gallery">
            <div class="main-image">
                <img src="${bio.image}" alt="${bio.name}" style="max-width: 100%; height: auto;">
            </div>`;
    
    // 先顯示圖片庫
    if (bio.images && bio.images.length > 0) {
        detailsHTML += `
            <div class="image-gallery">
                <h3>圖片庫</h3>
                <div class="gallery-grid">
                    ${bio.images.map(img => `
                        <div class="gallery-item">
                            <img src="${img}" alt="${bio.name}" onclick="updateMainImage(this.src)">
                        </div>
                    `).join('')}
                </div>
            </div>`;
    }
    
    // 在圖片庫後顯示音頻播放器
    if (bio.audio) {
        detailsHTML += `
            <div class="audio-section">
                <h3>鳴叫聲</h3>
                <div class="audio-player">
                    <audio controls>
                        <source src="${bio.audio.url}" type="audio/mpeg">
                        您的瀏覽器不支持音頻播放。
                    </audio>
                    <h4>${bio.audio.title}</h4>
                    <p>${bio.audio.description}</p>
                </div>
            </div>`;
    }

    // 然後是視頻部分和其他內容
    if (bio.videos && bio.videos.length > 0) {
        detailsHTML += `
            <div class="video-gallery">
                <h3>視頻資料</h3>
                <div class="gallery-grid">
                    ${bio.videos.map(video => `
                        <div class="video-item">
                            <h4>${video.title}</h4>
                            <video controls muted>
                                <source src="${video.url}" type="video/mp4">
                                您的瀏覽器不支持視頻播放。
                            </video>
                            <p>${video.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    }
    
    detailsHTML += `</div>
        <div class="bio-info">
            <h3>描述</h3>
            <p>${bio.description}</p>
            <h3>分布</h3>
            <p>${bio.distribution}</p>
            <h3>特徵</h3>
            <p>${bio.features}</p>`;
    
    // 如果有學名，顯示學名
    if (bio.scientificName) {
        detailsHTML += `
            <h3>學名</h3>
            <p>${bio.scientificName}</p>`;
    }
    
    // 如果有分類信息，顯示分類
    if (bio.classification) {
        detailsHTML += `
            <h3>分類</h3>
            <ul>
                <li>界：${bio.classification.kingdom}</li>
                <li>門：${bio.classification.phylum}</li>
                <li>綱：${bio.classification.class}</li>
                <li>目：${bio.classification.order}</li>
                <li>科：${bio.classification.family}</li>
                <li>屬：${bio.classification.genus}</li>
                <li>種：${bio.classification.species}</li>
            </ul>`;
    }
    
    // 如果有棲息環境信息，顯示棲息環境
    if (bio.habitat) {
        detailsHTML += `
            <h3>棲息環境</h3>
            <p>${bio.habitat}</p>`;
    }
    
    // 如果有保護信息，顯示保護信息
    if (bio.conservation) {
        detailsHTML += `
            <h3>保護狀況</h3>
            <p>${bio.conservation}</p>`;
    }
    
    detailsHTML += `</div>`;
    
    bioDetails.innerHTML = detailsHTML;
    bioModal.style.display = 'block';
    searchSuggestions.classList.remove('active');
}

// 更新主圖片
function updateMainImage(src) {
    const mainImage = document.querySelector('.main-image img');
    if (mainImage) {
        mainImage.src = src;
    }
}

// 更新活動導航鏈接
function updateActiveNav() {
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.category === currentCategory);
    });
}

// 初始化頁面
initializePage(); 