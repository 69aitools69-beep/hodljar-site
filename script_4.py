# Adaugă partea funcțională completă la fișierul JavaScript
functional_code = '''

// Global state

let currentLanguage = 'ro';

let chartInstance = null;

// Chart labels for different languages

const chartLabels = {

'ro': ['Community Rewards (40%)', 'Lichiditate (30%)', 'Team (15%)', 'Marketing (10%)', 'Treasury (5%)'],

'en': ['Community Rewards (40%)', 'Liquidity (30%)', 'Team (15%)', 'Marketing (10%)', 'Treasury (5%)'],

'ru': ['Награды Сообщества (40%)', 'Ликвидность (30%)', 'Команда (15%)', 'Маркетинг (10%)', 'Казначейство (5%)']

};

// FIXED Language switching functionality

function switchLanguage(lang) {

console.log(`🌍 Switching to language: ${lang}`);

if (!translations[lang]) {

console.error(`❌ Language ${lang} not found`);

return;

}

currentLanguage = lang;

document.documentElement.lang = lang;

// Update page title

document.title = translations[lang]["meta-title"];

// Update meta description

const metaDescription = document.querySelector('meta[name="description"]');

if (metaDescription) {

metaDescription.setAttribute('content', translations[lang]["meta-description"]);

}

// Update all translatable elements

const translatableElements = document.querySelectorAll('[data-translate]');

console.log(`🔄 Found ${translatableElements.length} translatable elements`);

translatableElements.forEach(element => {

const key = element.getAttribute('data-translate');

if (translations[lang][key]) {

element.textContent = translations[lang][key];

} else {

console.warn(`⚠️ Missing translation for key: ${key}`);

}

});

// Update tooltip titles

const titleElements = document.querySelectorAll('[data-translate-title]');

titleElements.forEach(element => {

const key = element.getAttribute('data-translate-title');

if (translations[lang][key]) {

element.setAttribute('title', translations[lang][key]);

}

});

// Update language buttons

const languageButtons = document.querySelectorAll('.language-btn');

languageButtons.forEach(btn => {

btn.classList.remove('active');

if (btn.getAttribute('data-lang') === lang) {

btn.classList.add('active');

console.log(`✅ Set ${lang} button as active`);

}

});

// Update chart if exists

updateChartLabels(lang);

console.log(`✅ Language switched to: ${lang}`);

}

// FIXED Language switcher initialization

function initLanguageSwitcher() {

const languageButtons = document.querySelectorAll('.language-btn');

console.log(`🎛️ Found ${languageButtons.length} language buttons`);

languageButtons.forEach(button => {

button.addEventListener('click', function(e) {

e.preventDefault();

e.stopPropagation();

const lang = this.getAttribute('data-lang');

console.log(`🖱️ Language button clicked: ${lang}`);

if (lang && translations[lang]) {

// Add visual feedback

this.style.transform = 'scale(0.95)';

setTimeout(() => {

this.style.transform = 'scale(1)';

}, 150);

switchLanguage(lang);

} else {

console.error(`❌ Invalid language: ${lang}`);

}

});

});

console.log('✅ Language switcher initialized');

}

// FIXED Modal functionality - UPDATED FOR SOLANA

function initWalletModal() {

const connectWalletBtn = document.querySelector('.btn-connect-wallet');

const walletModal = document.getElementById('walletModal');

const modalClose = document.querySelector('.modal-close');

const walletOptions = document.querySelectorAll('.wallet-option');

const loadingState = document.querySelector('.loading-state');

console.log('💼 Initializing Solana wallet modal...');

console.log('Connect button:', !!connectWalletBtn);

console.log('Modal:', !!walletModal);

console.log('Close button:', !!modalClose);

console.log('Wallet options:', walletOptions.length);

// Show modal function

function showModal() {

if (walletModal) {

console.log('💼 Opening Solana wallet modal');

walletModal.classList.remove('hidden');

walletModal.style.display = 'flex';

document.body.style.overflow = 'hidden';

// Add fade in animation

setTimeout(() => {

walletModal.style.opacity = '1';

}, 10);

}

}

// Hide modal function

function hideModal() {

if (walletModal) {

console.log('❌ Closing wallet modal');

walletModal.style.opacity = '0';

setTimeout(() => {

walletModal.classList.add('hidden');

walletModal.style.display = 'none';

document.body.style.overflow = 'auto';

// Reset modal state

if (loadingState) loadingState.classList.add('hidden');

walletOptions.forEach(option => option.style.display = 'flex');

}, 300);

}

}

// Connect wallet button

if (connectWalletBtn) {

connectWalletBtn.addEventListener('click', function(e) {

e.preventDefault();

e.stopPropagation();

console.log('💼 Connect Solana wallet button clicked');

showModal();

});

}

// Close modal button

if (modalClose) {

modalClose.addEventListener('click', function(e) {

e.preventDefault();

e.stopPropagation();

console.log('❌ Modal close button clicked');

hideModal();

});

}

// Click outside to close

if (walletModal) {

walletModal.addEventListener('click', function(e) {

if (e.target === walletModal) {

console.log('👆 Clicked outside modal');

hideModal();

}

});

}

// Wallet option selection - UPDATED FOR SOLANA

walletOptions.forEach(option => {

option.addEventListener('click', function(e) {

e.preventDefault();

e.stopPropagation();

const walletType = this.getAttribute('data-wallet');

const walletName = this.querySelector('.wallet-name')?.textContent || 'Unknown Wallet';

console.log(`💼 Selected Solana wallet: ${walletName}`);

// Hide options, show loading

walletOptions.forEach(opt => opt.style.display = 'none');

if (loadingState) loadingState.classList.remove('hidden');

// Simulate Solana connection

setTimeout(() => {

const messages = {

'ro': `🎉 Conectare ${walletName} simulată cu succes pe Solana!\\n\\n✅ Wallet conectat\\n🚀 Ești gata pentru vânătoarea de comori pe cea mai rapidă blockchain!\\n⚡ Bucură-te de comisioane ultra-mici!`,

'en': `🎉 ${walletName} connection simulated successfully on Solana!\\n\\n✅ Wallet connected\\n🚀 You're ready for the treasure hunt on the fastest blockchain!\\n⚡ Enjoy ultra-low fees!`,

'ru': `🎉 Подключение ${walletName} успешно симулировано на Solana!\\n\\n✅ Кошелёк подключён\\n🚀 Готов к охоте за сокровищами на самом быстром блокчейне!\\n⚡ Наслаждайтесь ультра-низкими комиссиями!`

};

alert(messages[currentLanguage]);

// Update connect button with Solana branding

if (connectWalletBtn) {

const connectedTexts = {

'ro': '✅ Wallet Solana Conectat',

'en': '✅ Solana Wallet Connected',

'ru': '✅ Кошелёк Solana Подключён'

};

connectWalletBtn.textContent = connectedTexts[currentLanguage];

connectWalletBtn.style.background = 'linear-gradient(135deg, #9945FF, #14F195)'; // Solana gradient colors

connectWalletBtn.style.color = 'white';

}

hideModal();

}, 2000);

});

});

console.log('✅ Solana wallet modal initialized');

}

// FIXED Navigation functionality

function initNavigation() {

const navLinks = document.querySelectorAll('a[href^="#"]');

console.log(`🧭 Found ${navLinks.length} navigation links`);

navLinks.forEach(link => {

link.addEventListener('click', function(e) {

e.preventDefault();

e.stopPropagation();

const targetId = this.getAttribute('href').substring(1);

const targetSection = document.getElementById(targetId);

console.log(`🎯 Navigation clicked: ${targetId}`);

if (targetSection) {

const headerHeight = 80; // Fixed header height

const targetPosition = targetSection.offsetTop - headerHeight - 20;

window.scrollTo({

top: targetPosition,

behavior: 'smooth'

});

console.log(`📍 Scrolling to: ${targetId}`);

} else {

console.warn(`⚠️ Target section not found: ${targetId}`);

}

// Close mobile menu if open

const navLinksContainer = document.querySelector('.nav-links');

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

if (navLinksContainer && navLinksContainer.classList.contains('active')) {

navLinksContainer.classList.remove('active');

if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');

}

});

});

console.log('✅ Navigation initialized');

}

// Mobile menu

function initMobileMenu() {

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {

mobileMenuBtn.addEventListener('click', function(e) {

e.preventDefault();

e.stopPropagation();

navLinks.classList.toggle('active');

mobileMenuBtn.classList.toggle('active');

console.log('📱 Mobile menu toggled:', navLinks.classList.contains('active'));

});

}

console.log('✅ Mobile menu initialized');

}

// Counter animations

function initCounters() {

function animateCounter(element, target, duration = 2000) {

const start = 0;

const increment = target / (duration / 16);

let current = start;

const timer = setInterval(() => {

current += increment;

if (current >= target) {

current = target;

clearInterval(timer);

}

element.textContent = Math.floor(current).toLocaleString();

}, 16);

}

const counterObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting && !entry.target.classList.contains('animated')) {

const target = parseInt(entry.target.getAttribute('data-target'));

if (target) {

animateCounter(entry.target, target);

entry.target.classList.add('animated');

console.log(`📊 Animating counter to: ${target}`);

}

}

});

}, { threshold: 0.3 });

const statNumbers = document.querySelectorAll('.stat-number[data-target]');

statNumbers.forEach(stat => counterObserver.observe(stat));

console.log(`✅ ${statNumbers.length} counters initialized`);

}

// Chart functionality

function createTokenomicsChart() {

const ctx = document.getElementById('tokenomicsChart');

if (!ctx) {

console.warn('⚠️ Chart canvas not found');

return;

}

if (typeof Chart === 'undefined') {

console.warn('⚠️ Chart.js not loaded yet, retrying...');

setTimeout(createTokenomicsChart, 500);

return;

}

const data = {

labels: chartLabels[currentLanguage],

datasets: [{

data: [40, 30, 15, 10, 5],

backgroundColor: ['#9945FF', '#14F195', '#B4413C', '#ECEBD5', '#5D878F'], // Updated with Solana colors

borderColor: ['#9945FF', '#14F195', '#B4413C', '#ECEBD5', '#5D878F'],

borderWidth: 2,

hoverBorderWidth: 3,

hoverOffset: 10

}]

};

const config = {

type: 'doughnut',

data: data,

options: {

responsive: true,

maintainAspectRatio: false,

plugins: {

legend: { display: false },

tooltip: {

backgroundColor: 'rgba(26, 26, 46, 0.95)',

titleColor: '#14F195', // Solana green

bodyColor: '#f5f5f5',

borderColor: '#9945FF', // Solana purple

borderWidth: 1,

cornerRadius: 12,

displayColors: true,

callbacks: {

label: function(context) {

return context.label + ': ' + context.parsed + '%';

}

}

}

},

cutout: '60%',

animation: {

animateRotate: true,

animateScale: true,

duration: 2000

}

}

};

try {

if (chartInstance) chartInstance.destroy();

chartInstance = new Chart(ctx, config);

console.log('📊 Solana-themed chart created successfully');

} catch (error) {

console.error('❌ Chart creation error:', error);

}

}

function updateChartLabels(lang) {

if (chartInstance && chartLabels[lang]) {

chartInstance.data.labels = chartLabels[lang];

chartInstance.update('none');

console.log(`📊 Chart labels updated for: ${lang}`);

}

}

function initChartObserver() {

const chartContainer = document.querySelector('.chart-container');

if (chartContainer) {

const chartObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting && !entry.target.classList.contains('chart-loaded')) {

setTimeout(createTokenomicsChart, 100);

entry.target.classList.add('chart-loaded');

console.log('📊 Chart container in viewport');

}

});

}, { threshold: 0.3 });

chartObserver.observe(chartContainer);

console.log('✅ Chart observer initialized');

}

}

// Hero buttons - UPDATED FOR SOLANA

function initHeroButtons() {

const startHuntBtn = document.querySelector('.hero-actions .btn-primary');

const treasureMapBtn = document.querySelector('.hero-actions .btn-outline');

if (startHuntBtn) {

startHuntBtn.addEventListener('click', function(e) {

e.preventDefault();

const messages = {

'ro': '🏴☠️ Bine ai venit la vânătoarea HODLJAR pe Solana! 💎\\n\\nPrimele misiuni vor fi disponibile în curând.\\n🚀 Conectează wallet-ul Solana pentru notificări!\\n⚡ Bucură-te de viteza și comisioanele mici!',

'en': '🏴☠️ Welcome to HODLJAR treasure hunt on Solana! 💎\\n\\nFirst missions coming soon.\\n🚀 Connect your Solana wallet for notifications!\\n⚡ Enjoy lightning speed and low fees!',

'ru': '🏴☠️ Добро пожаловать в охоту HODLJAR на Solana! 💎\\n\\nПервые миссии скоро будут доступны.\\n🚀 Подключи кошелёк Solana для уведомлений!\\n⚡ Наслаждайся молниеносной скоростью!'

};

this.style.transform = 'scale(0.95)';

setTimeout(() => {

this.style.transform = 'scale(1)';

alert(messages[currentLanguage]);

}, 150);

});

}

if (treasureMapBtn) {

treasureMapBtn.addEventListener('click', function(e) {

e.preventDefault();

const roadmapSection = document.getElementById('roadmap');

if (roadmapSection) {

const headerHeight = 80;

const targetPosition = roadmapSection.offsetTop - headerHeight - 20;

window.scrollTo({

top: targetPosition,

behavior: 'smooth'

});

console.log('🗺️ Scrolling to Solana roadmap');

}

});

}

}

// Back to top

function initBackToTop() {

const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {

backToTopBtn.addEventListener('click', function(e) {

e.preventDefault();

window.scrollTo({ top: 0, behavior: 'smooth' });

console.log('⬆️ Scrolling to top');

});

}

}

// Contract address copy - UPDATED FOR SOLANA

function initContractCopy() {

const contractAddress = document.querySelector('.contract-address');

if (contractAddress) {

contractAddress.addEventListener('click', function() {

const fullAddress = 'SoLaNaExAmPlE1234567890aBcDeF1234567890AbCdEf'; // Example Solana address format

if (navigator.clipboard) {

navigator.clipboard.writeText(fullAddress).then(() => {

showCopyFeedback(this);

});

} else {

// Fallback

const tempInput = document.createElement('input');

tempInput.value = fullAddress;

document.body.appendChild(tempInput);

tempInput.select();

document.execCommand('copy');

document.body.removeChild(tempInput);

showCopyFeedback(this);

}

});

}

function showCopyFeedback(element) {

const originalText = element.textContent;

const copiedTexts = {

'ro': 'Copiat! ✓',

'en': 'Copied! ✓',

'ru': 'Скопировано! ✓'

};

element.textContent = copiedTexts[currentLanguage];

element.style.color = '#14F195'; // Solana green

setTimeout(() => {

element.textContent = originalText;

element.style.color = '#9945FF'; // Solana purple

}, 2000);

}

}

// Header scroll effect

function initHeaderScroll() {

const header = document.querySelector('.header');

if (header) {

window.addEventListener('scroll', () => {

if (window.scrollY > 100) {

header.style.background = 'rgba(26, 26, 46, 0.98)';

header.style.boxShadow = '0 2px 20px rgba(153, 69, 255, 0.1)'; // Solana purple glow

} else {

header.style.background = 'rgba(26, 26, 46, 0.95)';

header.style.boxShadow = 'none';

}

});

}

}

// MAIN INITIALIZATION FUNCTION - UPDATED FOR SOLANA

function initializeApp() {

console.log('🏴☠️ HODLJAR - Initializing Solana application...');

try {

// Initialize all components in sequence

initLanguageSwitcher();

initWalletModal();

initNavigation();

initMobileMenu();

initCounters();

initChartObserver();

initHeroButtons();

initBackToTop();

initContractCopy();

initHeaderScroll();

// Set default language after a small delay to ensure DOM is ready

setTimeout(() => {

switchLanguage('ro');

console.log('🎯 Default language set to Romanian');

}, 100);

console.log('🚀 HODLJAR Solana application initialized successfully!');

console.log('✅ Features active:');

console.log(' - Multilingual support (RO, EN, RU)');

console.log(' - Solana wallet connection modal (Phantom, Solflare, Backpack, Sollet)');

console.log(' - Navigation scrolling');

console.log(' - Interactive tokenomics chart with Solana branding');

console.log(' - Animated counters');

console.log(' - Mobile responsive design');

console.log(' - Solana-specific messaging and branding');

} catch (error) {

console.error('❌ Solana initialization error:', error);

}

}

// Start the Solana application

initializeApp();

});'''

# Adaugă partea funcțională la fișierul existent
with open('app_solana.js', 'a', encoding='utf-8') as f:
    f.write(functional_code)

print("✅ Fișierul app_solana.js complet a fost creat cu succes!")
print("\n🔥 Modificări principale pentru Solana:")
print("• Wallet-uri: Phantom, Solflare, Backpack, Sollet (în loc de MetaMask, Trust Wallet)")
print("• Criptomonedă: SOL (în loc de BNB/ETH)")
print("• DEX-uri: Jupiter, Raydium, Orca (în loc de PancakeSwap/Uniswap)")
print("• Comisioane: ultra-mici (~$0.00025) vs gas fees mari")
print("• Slippage: 1-5% (în loc de 5-12%)")
print("• Culori: Solana purple (#9945FF) și green (#14F195)")
print("• Mesaje: 'cea mai rapidă blockchain', 'viteza luminii'")
print("• Explorer: Solana Explorer")
print("• Format adresă: Solana address format")
print("\n🌍 Actualizat pentru toate limbile: Română, Engleză, Rusă")