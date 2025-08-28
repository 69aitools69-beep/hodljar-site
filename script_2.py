# Continui cu partea a doua a fișierului JavaScript
content_updated_part2 = """
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

// Update connect button

if (connectWalletBtn) {

const connectedTexts = {

'ro': '✅ Wallet Solana Conectat',

'en': '✅ Solana Wallet Connected',

'ru': '✅ Кошелёк Solana Подключён'

};

connectWalletBtn.textContent = connectedTexts[currentLanguage];

connectWalletBtn.style.background = 'linear-gradient(135deg, #9945FF, #14F195)'; // Solana gradient

connectWalletBtn.style.color = 'white';

}

hideModal();

}, 2000);

});

});

console.log('✅ Solana wallet modal initialized');

}"""

print("Am creat partea a doua a fișierului cu funcționalitatea actualizată pentru Solana...")
print("\n✅ Modificări în funcționalitatea wallet:")
print("- Mesajele de conectare specifică Solana")
print("- Gradient colors specifice Solana (#9945FF, #14F195)")
print("- Referințe la „cea mai rapidă blockchain"")
print("- Emphasis pe „comisioane ultra-mici"")
