// HODLJAR Multilingual Interactive Application - SOLANA VERSION

document.addEventListener('DOMContentLoaded', function() {

console.log('🚀 HODLJAR - Starting application initialization...');

// Complete translations data - SOLANA UPDATED

const translations = {

"ro": {

"meta-title": "HODLJAR - Vânătoarea Comorii Crypto | Meme Coin cu Misiuni On-Chain",

"meta-description": "Descoperă HODLJAR - meme coin-ul cu vânătoare de comori crypto. Participă la misiuni on-chain, câștigă airdrops și colecționează NFT-uri rare.",

"navigation-home": "Acasă",

"navigation-about": "Despre",

"navigation-tokenomics": "Tokenomics",

"navigation-roadmap": "Roadmap",

"navigation-howToBuy": "Cum să Cumperi",

"navigation-community": "Comunitate",

"navigation-mobileMenu": "Meniu",

"navigation-close": "Închide",

"buttons-connectWallet": "Conectează Wallet",

"buttons-startHunt": "Începe Vânătoarea",

"buttons-seeMap": "Vezi Harta Comorii",

"buttons-buyNow": "Cumpără Acum",

"buttons-learnMore": "Află Mai Mult",

"buttons-joinCommunity": "Alătură-te Comunității",

"buttons-copy": "Copiază",

"buttons-copied": "Copiat!",

"buttons-share": "Distribuie",

"buttons-download": "Descarcă",

"hero-title": "Vânătoarea Comorii Crypto",

"hero-subtitle": "Descoperă comorile ascunse ale bull market-ului prin misiuni on-chain și puzzle-uri interactive",

"hero-description": "HODLJAR nu este doar un meme coin - este o aventură gamificată unde fiecare deținător devine un explorator digital în căutarea comorilor crypto.",

"about-title": "Ce este HODLJAR?",

"about-subtitle": "Un ecosistem gamificat de vânătoare de comori pe blockchain",

"about-feature-1-title": "Vânătoare On-Chain",

"about-feature-1-description": "Rezolvă puzzle-uri complexe și participă la misiuni pentru a debloca airdrops și recompense exclusive",

"about-feature-2-title": "Proof of HODL",

"about-feature-2-description": "Sistemul nostru recompensează loialitatea - cu cât ții mai mult, cu atât câștigi mai mult",

"about-feature-3-title": "Artefacte NFT",

"about-feature-3-description": "Colecționează NFT-uri rare care oferă boosturi, acces VIP și privilegii speciale în ecosistem",

"tokenomics-title": "Tokenomics - Harta Comorii",

"tokenomics-token-symbol": "Simbolul Token:",

"tokenomics-labels-totalSupply": "Oferta Totală:",

"tokenomics-labels-contractAddress": "Adresa Contractului:",

"tokenomics-token-network": "Rețeaua:",

"tokenomics-mechanism-burn": "🔥 1% Burn la evenimente de raid",

"tokenomics-mechanism-rewards": "2% Redistribuire către holderi",

"tokenomics-labels-addToWallet": "Adaugă în Wallet",

"tokenomics-labels-viewOnExplorer": "Vezi pe Explorer",

"tokenomics-distribution-community": "40% Community Rewards & Misiuni",

"tokenomics-distribution-liquidity": "30% Lichiditate & Listare Exchanges",

"tokenomics-distribution-team": "15% Echipa (blocat 12 luni)",

"tokenomics-distribution-marketing": "10% Marketing & Partnerships",

"tokenomics-distribution-treasury": "5% Trezorerie & Dezvoltare",

"howToBuy-title": "Cum să Cumperi HJAR",

"howToBuy-subtitle": "Ghid pas cu pas pentru a te alătura vânătorilor pe Solana",

"howToBuy-step-1-number": "1",

"howToBuy-step-1-title": "Conectează Wallet-ul Solana",

"howToBuy-step-1-description": "Folosește Phantom, Solflare, Backpack sau alt wallet compatibil cu rețeaua Solana",

"howToBuy-step-1-action": "Conectează Wallet",

"howToBuy-step-2-number": "2",

"howToBuy-step-2-title": "Obține SOL",

"howToBuy-step-2-description": "Ai nevoie de SOL pentru comisioanele ultra-mici de pe Solana și pentru schimbul în HJAR",

"howToBuy-step-2-action": "Cumpără SOL",

"howToBuy-step-3-number": "3",

"howToBuy-step-3-title": "Swap pe DEX Solana",

"howToBuy-step-3-description": "Mergi pe Jupiter, Raydium sau Orca și schimbă SOL pentru HJAR cu viteza luminii",

"howToBuy-step-3-action": "Deschide DEX",

"howToBuy-step-4-number": "4",

"howToBuy-step-4-title": "Alătură-te Comunității",

"howToBuy-step-4-description": "Intră pe canalele noastre pentru misiuni exclusive, airdrops și actualizări",

"howToBuy-step-4-action": "Alătură-te Acum",

"howToBuy-warnings-title": "Informații Importante",

"howToBuy-warnings-slippage": "Setează slippage la 1-5% pentru tranzacții rapide și ieftine pe Solana",

"howToBuy-warnings-gas": "Bucură-te de comisioanele ultra-mici de pe Solana (~0.00025 SOL)",

"howToBuy-warnings-scam": "Verifică întotdeauna adresa contractului oficial pe Solana",

"roadmap-title": "Harta Viitorului",

"roadmap-subtitle": "Călătoria noastră către dominația meme coin pe Solana",

"roadmap-phase-1-title": "Lansare & Primele Misiuni",

"roadmap-phase-1-date": "T4 2025",

"roadmap-phase-1-item-1": "Lansare token HJAR pe Solana cu viteza luminii",

"roadmap-phase-1-item-2": "Prima hartă de comori și sistem de misiuni beta",

"roadmap-phase-1-item-3": "Comunitate de 10K membri și primii 1K holderi",

"roadmap-phase-1-item-4": "Listare pe DEX-uri majore Solana și platforme tracking",

"roadmap-phase-2-title": "NFT Artefacte & Partnerships",

"roadmap-phase-2-date": "T1 2026",

"roadmap-phase-2-item-1": "Lansare marketplace NFT pentru artefacte pe Solana",

"roadmap-phase-2-item-2": "Colecția de NFT-uri Genesis cu utilități",

"roadmap-phase-2-item-3": "Partnerships cu proiecte Solana și influenceri",

"roadmap-phase-2-item-4": "Bot social pentru Telegram cu gamificare",

"roadmap-phase-3-title": "Mobile App & Advanced Raids",

"roadmap-phase-3-date": "T2 2026",

"roadmap-phase-3-item-1": "Aplicație mobilă iOS și Android cu integrare Solana",

"roadmap-phase-3-item-2": "Sistem avansat de raid-uri cross-chain",

"roadmap-phase-3-item-3": "Integrare cu layer 2 solutions",

"roadmap-phase-3-item-4": "Program de staking cu recompense APR pe Solana",

"roadmap-phase-4-title": "Cross-Chain & Global Expansion",

"roadmap-phase-4-date": "T3 2026",

"roadmap-phase-4-item-1": "Expandare multi-blockchain (Ethereum, Polygon)",

"roadmap-phase-4-item-2": "Evenimente globale de vânătoare cu premii",

"roadmap-phase-4-item-3": "DAO governance complet descentralizat pe Solana",

"roadmap-phase-4-item-4": "Expansiune în metaverse și GameFi",

"roadmap-statusLabels-completed": "Finalizat",

"roadmap-statusLabels-inProgress": "În Progres",

"roadmap-statusLabels-planned": "Planificat",

"roadmap-statusLabels-vision": "Viziune",

"community-title": "Alătură-te Expedițiunii",

"community-description": "Peste 15.000 de vânători de comori s-au alăturat deja misiunii noastre pe Solana. Fii parte din istoria crypto!",

"community-stats-members": "Membri Comunitate",

"community-stats-holders": "Deținători Token",

"community-stats-treasures": "Comori Găsite",

"community-stats-rewards": "Recompense Distribuite",

"community-platforms-telegram-title": "Telegram",

"community-platforms-telegram-description": "Chat principal și anunțuri oficiale",

"community-platforms-discord-title": "Discord",

"community-platforms-discord-description": "Comunitatea gamers și evenimente",

"community-platforms-twitter-title": "Twitter/X",

"community-platforms-twitter-description": "Actualizări și meme-uri zilnice",

"community-platforms-reddit-title": "Reddit",

"community-platforms-reddit-description": "Discuții și analiza comunității",

"wallet-title": "Conectează Wallet-ul Solana",

"wallet-subtitle": "Alege wallet-ul tău preferat pentru Solana",

"wallet-option-1-name": "Phantom",

"wallet-option-1-description": "Wallet-ul cel mai popular pentru ecosistemul Solana",

"wallet-option-1-status": "Recomandat",

"wallet-option-2-name": "Solflare",

"wallet-option-2-description": "Wallet premium cu funcții avansate pentru Solana",

"wallet-option-2-status": "Popular",

"wallet-option-3-name": "Backpack",

"wallet-option-3-description": "Wallet modern cu suport complet pentru Solana",

"wallet-option-3-status": "Nou",

"wallet-option-4-name": "Sollet",

"wallet-option-4-description": "Wallet web pentru accesul rapid la Solana",

"wallet-option-4-status": "Simplu",

"wallet-messages-connecting": "Se conectează...",

"wallet-messages-connected": "Conectat cu succes!",

"wallet-messages-failed": "Conexiunea a eșuat",

"wallet-messages-retry": "Încearcă din nou",

"footer-copyright": "© 2025 HODLJAR. Toate drepturile rezervate.",

"footer-disclaimer": "Investițiile în criptomonede implică riscuri semnificative. Prețurile pot fluctua dramatic și poți pierde toți banii investiți. Investește doar ce îți permiți să pierzi și consultă un consilier financiar înainte de orice decizie de investiție.",

"footer-links-audit": "Raport Audit",

"footer-links-documentation": "Documentație",

"footer-links-terms": "Termeni și Condiții",

"footer-links-privacy": "Politica de Confidențialitate",

"footer-links-legal": "Legal",

"footer-backToTop": "Înapoi Sus",

"interactive-loading": "Se încarcă...",

"interactive-pleaseWait": "Te rugăm să aștepți...",

"interactive-processing": "Se procesează...",

"tooltips-copyAddress": "Copiază adresa contractului",

"tooltips-openExplorer": "Deschide în Solana Explorer",

"tooltips-addToMetaMask": "Adaugă token în wallet",

"tooltips-shareOnSocial": "Distribuie pe rețelele sociale",

"tooltips-downloadWhitepaper": "Descarcă documentația"

},

"en": {

"meta-title": "HODLJAR - Crypto Treasure Hunt | Meme Coin with On-Chain Missions",

"meta-description": "Discover HODLJAR - the meme coin with crypto treasure hunting. Participate in on-chain missions, earn airdrops, and collect rare NFTs.",

"navigation-home": "Home",

"navigation-about": "About",

"navigation-tokenomics": "Tokenomics",

"navigation-roadmap": "Roadmap",

"navigation-howToBuy": "How to Buy",

"navigation-community": "Community",

"navigation-mobileMenu": "Menu",

"navigation-close": "Close",

"buttons-connectWallet": "Connect Wallet",

"buttons-startHunt": "Start the Hunt",

"buttons-seeMap": "See Treasure Map",

"buttons-buyNow": "Buy Now",

"buttons-learnMore": "Learn More",

"buttons-joinCommunity": "Join Community",

"buttons-copy": "Copy",

"buttons-copied": "Copied!",

"buttons-share": "Share",

"buttons-download": "Download",

"hero-title": "Crypto Treasure Hunt",

"hero-subtitle": "Discover hidden treasures of the bull market through on-chain missions and interactive puzzles",

"hero-description": "HODLJAR isn't just a meme coin - it's a gamified adventure where every holder becomes a digital explorer searching for crypto treasures.",

"about-title": "What is HODLJAR?",

"about-subtitle": "A gamified treasure hunting ecosystem on blockchain",

"about-feature-1-title": "On-Chain Hunt",

"about-feature-1-description": "Solve complex puzzles and participate in missions to unlock exclusive airdrops and rewards",

"about-feature-2-title": "Proof of HODL",

"about-feature-2-description": "Our system rewards loyalty - the longer you hold, the more you earn through diamond hands",

"about-feature-3-title": "NFT Artifacts",

"about-feature-3-description": "Collect rare NFTs that provide boosts, VIP access, and special privileges within the ecosystem",

"tokenomics-title": "Tokenomics - Treasure Map",

"tokenomics-token-symbol": "Token Symbol:",

"tokenomics-labels-totalSupply": "Total Supply:",

"tokenomics-labels-contractAddress": "Contract Address:",

"tokenomics-token-network": "Network:",

"tokenomics-mechanism-burn": "🔥 1% Burn on raid events",

"tokenomics-mechanism-rewards": "2% Redistribution to holders",

"tokenomics-labels-addToWallet": "Add to Wallet",

"tokenomics-labels-viewOnExplorer": "View on Explorer",

"tokenomics-distribution-community": "40% Community Rewards & Missions",

"tokenomics-distribution-liquidity": "30% Liquidity & Exchange Listings",

"tokenomics-distribution-team": "15% Team (locked 12 months)",

"tokenomics-distribution-marketing": "10% Marketing & Partnerships",

"tokenomics-distribution-treasury": "5% Treasury & Development",

"howToBuy-title": "How to Buy HJAR",

"howToBuy-subtitle": "Step-by-step guide to join the hunters on Solana",

"howToBuy-step-1-number": "1",

"howToBuy-step-1-title": "Connect Your Solana Wallet",

"howToBuy-step-1-description": "Use Phantom, Solflare, Backpack, or any Solana-compatible wallet",

"howToBuy-step-1-action": "Connect Wallet",

"howToBuy-step-2-number": "2",

"howToBuy-step-2-title": "Get SOL",

"howToBuy-step-2-description": "You need SOL for ultra-low fees on Solana and to swap for HJAR tokens",

"howToBuy-step-2-action": "Buy SOL",

"howToBuy-step-3-number": "3",

"howToBuy-step-3-title": "Swap on Solana DEX",

"howToBuy-step-3-description": "Go to Jupiter, Raydium, or Orca and swap your SOL for HJAR at lightning speed",

"howToBuy-step-3-action": "Open DEX",

"howToBuy-step-4-number": "4",

"howToBuy-step-4-title": "Join the Community",

"howToBuy-step-4-description": "Enter our channels for exclusive missions, airdrops, and updates",

"howToBuy-step-4-action": "Join Now",

"howToBuy-warnings-title": "Important Information",

"howToBuy-warnings-slippage": "Set slippage to 1-5% for fast and cheap transactions on Solana",

"howToBuy-warnings-gas": "Enjoy ultra-low fees on Solana (~$0.00025 per transaction)",

"howToBuy-warnings-scam": "Always verify the official contract address on Solana",

"roadmap-title": "Future Map",

"roadmap-subtitle": "Our journey to meme coin dominance on Solana",

"roadmap-phase-1-title": "Launch & First Missions",

"roadmap-phase-1-date": "Q4 2025",

"roadmap-phase-1-item-1": "HJAR token launch on Solana at lightning speed",

"roadmap-phase-1-item-2": "First treasure map and beta mission system",

"roadmap-phase-1-item-3": "Community of 10K members and first 1K holders",

"roadmap-phase-1-item-4": "Listing on major Solana DEXs and tracking platforms",

"roadmap-phase-2-title": "NFT Artifacts & Partnerships",

"roadmap-phase-2-date": "Q1 2026",

"roadmap-phase-2-item-1": "NFT marketplace launch for artifacts on Solana",

"roadmap-phase-2-item-2": "Genesis NFT collection with utilities",

"roadmap-phase-2-item-3": "Partnerships with Solana projects and influencers",

"roadmap-phase-2-item-4": "Social bot for Telegram with gamification",

"roadmap-phase-3-title": "Mobile App & Advanced Raids",

"roadmap-phase-3-date": "Q2 2026",

"roadmap-phase-3-item-1": "iOS and Android mobile app with Solana integration",

"roadmap-phase-3-item-2": "Advanced cross-chain raid system",

"roadmap-phase-3-item-3": "Layer 2 solutions integration",

"roadmap-phase-3-item-4": "Staking program with APR rewards on Solana",

"roadmap-phase-4-title": "Cross-Chain & Global Expansion",

"roadmap-phase-4-date": "Q3 2026",

"roadmap-phase-4-item-1": "Multi-blockchain expansion (Ethereum, Polygon)",

"roadmap-phase-4-item-2": "Global hunting events with prizes",

"roadmap-phase-4-item-3": "Fully decentralized DAO governance on Solana",

"roadmap-phase-4-item-4": "Metaverse and GameFi expansion",

"roadmap-statusLabels-completed": "Completed",

"roadmap-statusLabels-inProgress": "In Progress",

"roadmap-statusLabels-planned": "Planned",

"roadmap-statusLabels-vision": "Vision",

"community-title": "Join the Expedition",

"community-description": "Over 15,000 treasure hunters have already joined our mission on Solana. Be part of crypto history!",

"community-stats-members": "Community Members",

"community-stats-holders": "Token Holders",

"community-stats-treasures": "Treasures Found",

"community-stats-rewards": "Rewards Distributed",

"community-platforms-telegram-title": "Telegram",

"community-platforms-telegram-description": "Main chat and official announcements",

"community-platforms-discord-title": "Discord",

"community-platforms-discord-description": "Gaming community and events",

"community-platforms-twitter-title": "Twitter/X",

"community-platforms-twitter-description": "Daily updates and memes",

"community-platforms-reddit-title": "Reddit",

"community-platforms-reddit-description": "Community discussions and analysis",

"wallet-title": "Connect Solana Wallet",

"wallet-subtitle": "Choose your preferred Solana wallet",

"wallet-option-1-name": "Phantom",

"wallet-option-1-description": "Most popular wallet for Solana ecosystem",

"wallet-option-1-status": "Recommended",

"wallet-option-2-name": "Solflare",

"wallet-option-2-description": "Premium wallet with advanced Solana features",

"wallet-option-2-status": "Popular",

"wallet-option-3-name": "Backpack",

"wallet-option-3-description": "Modern wallet with full Solana support",

"wallet-option-3-status": "New",

"wallet-option-4-name": "Sollet",

"wallet-option-4-description": "Web wallet for quick Solana access",

"wallet-option-4-status": "Simple",

"wallet-messages-connecting": "Connecting...",

"wallet-messages-connected": "Successfully connected!",

"wallet-messages-failed": "Connection failed",

"wallet-messages-retry": "Try again",

"footer-copyright": "© 2025 HODLJAR. All rights reserved.",

"footer-disclaimer": "Cryptocurrency investments involve significant risks. Prices can fluctuate dramatically and you may lose all invested funds. Only invest what you can afford to lose and consult a financial advisor before any investment decisions.",

"footer-links-audit": "Audit Report",

"footer-links-documentation": "Documentation",

"footer-links-terms": "Terms & Conditions",

"footer-links-privacy": "Privacy Policy",

"footer-links-legal": "Legal",

"footer-backToTop": "Back to Top",

"interactive-loading": "Loading...",

"interactive-pleaseWait": "Please wait...",

"interactive-processing": "Processing...",

"tooltips-copyAddress": "Copy contract address",

"tooltips-openExplorer": "Open in Solana Explorer",

"tooltips-addToMetaMask": "Add token to wallet",

"tooltips-shareOnSocial": "Share on social media",

"tooltips-downloadWhitepaper": "Download documentation"

},

"ru": {

"meta-title": "HODLJAR - Криптоохота за Сокровищами | Мем Коин с On-Chain Миссиями",

"meta-description": "Откройте HODLJAR - мем коин с охотой за криптосокровищами. Участвуйте в on-chain миссиях, зарабатывайте аирдропы и собирайте редкие NFT.",

"navigation-home": "Главная",

"navigation-about": "О проекте",

"navigation-tokenomics": "Токеномика",

"navigation-roadmap": "Дорожная карта",

"navigation-howToBuy": "Как купить",

"navigation-community": "Сообщество",

"navigation-mobileMenu": "Меню",

"navigation-close": "Закрыть",

"buttons-connectWallet": "Подключить Кошелёк",

"buttons-startHunt": "Начать Охоту",

"buttons-seeMap": "Посмотреть Карту Сокровищ",

"buttons-buyNow": "Купить Сейчас",

"buttons-learnMore": "Узнать Больше",

"buttons-joinCommunity": "Присоединиться",

"buttons-copy": "Копировать",

"buttons-copied": "Скопировано!",

"buttons-share": "Поделиться",

"buttons-download": "Скачать",

"hero-title": "Криптоохота за Сокровищами",

"hero-subtitle": "Открывайте скрытые сокровища бычьего рынка через on-chain миссии и интерактивные головоломки",

"hero-description": "HODLJAR - это не просто мем коин, это геймифицированное приключение, где каждый держатель становится цифровым исследователем в поисках криптосокровищ.",

"about-title": "Что такое HODLJAR?",

"about-subtitle": "Геймифицированная экосистема охоты за сокровищами на блокчейне",

"about-feature-1-title": "On-Chain Охота",

"about-feature-1-description": "Решайте сложные головоломки и участвуйте в миссиях для разблокировки эксклюзивных аирдропов и наград",

"about-feature-2-title": "Доказательство HODL",

"about-feature-2-description": "Наша система вознаграждает лояльность - чем дольше держите, тем больше зарабатываете алмазными руками",

"about-feature-3-title": "NFT Артефакты",

"about-feature-3-description": "Собирайте редкие NFT, которые дают усиления, VIP доступ и специальные привилегии в экосистеме",

"tokenomics-title": "Токеномика - Карта Сокровищ",

"tokenomics-token-symbol": "Символ Токена:",

"tokenomics-labels-totalSupply": "Общее Предложение:",

"tokenomics-labels-contractAddress": "Адрес Контракта:",

"tokenomics-token-network": "Сеть:",

"tokenomics-mechanism-burn": "🔥 1% сжигание на рейдовых событиях",

"tokenomics-mechanism-rewards": "2% перераспределение держателям",

"tokenomics-labels-addToWallet": "Добавить в Кошелёк",

"tokenomics-labels-viewOnExplorer": "Посмотреть в Проводнике",

"tokenomics-distribution-community": "40% Награды Сообщества и Миссии",

"tokenomics-distribution-liquidity": "30% Ликвидность и Листинги",

"tokenomics-distribution-team": "15% Команда (заблокировано 12 месяцев)",

"tokenomics-distribution-marketing": "10% Маркетинг и Партнёрства",

"tokenomics-distribution-treasury": "5% Казначейство и Разработка",

"howToBuy-title": "Как Купить HJAR",

"howToBuy-subtitle": "Пошаговое руководство для присоединения к охотникам на Solana",

"howToBuy-step-1-number": "1",

"howToBuy-step-1-title": "Подключите Кошелёк Solana",

"howToBuy-step-1-description": "Используйте Phantom, Solflare, Backpack или любой совместимый с Solana кошелёк",

"howToBuy-step-1-action": "Подключить Кошелёк",

"howToBuy-step-2-number": "2",

"howToBuy-step-2-title": "Получите SOL",

"howToBuy-step-2-description": "Вам нужен SOL для ультра-низких комиссий на Solana и для обмена на токены HJAR",

"howToBuy-step-2-action": "Купить SOL",

"howToBuy-step-3-number": "3",

"howToBuy-step-3-title": "Обменяйте на DEX Solana",

"howToBuy-step-3-description": "Перейдите на Jupiter, Raydium или Orca и обменяйте ваш SOL на HJAR со скоростью молнии",

"howToBuy-step-3-action": "Открыть DEX",

"howToBuy-step-4-number": "4",

"howToBuy-step-4-title": "Присоединитесь к Сообществу",

"howToBuy-step-4-description": "Войдите в наши каналы для эксклюзивных миссий, аирдропов и обновлений",

"howToBuy-step-4-action": "Присоединиться Сейчас",

"howToBuy-warnings-title": "Важная Информация",

"howToBuy-warnings-slippage": "Установите проскальзывание на 1-5% для быстрых и дешевых транзакций на Solana",

"howToBuy-warnings-gas": "Наслаждайтесь ультра-низкими комиссиями на Solana (~$0.00025 за транзакцию)",

"howToBuy-warnings-scam": "Всегда проверяйте официальный адрес контракта на Solana",

"roadmap-title": "Карта Будущего",

"roadmap-subtitle": "Наш путь к доминированию мем коинов на Solana",

"roadmap-phase-1-title": "Запуск и Первые Миссии",

"roadmap-phase-1-date": "Q4 2025",

"roadmap-phase-1-item-1": "Запуск токена HJAR на Solana со скоростью молнии",

"roadmap-phase-1-item-2": "Первая карта сокровищ и бета система миссий",

"roadmap-phase-1-item-3": "Сообщество 10К участников и первые 1К держателей",

"roadmap-phase-1-item-4": "Листинг на основных DEX Solana и платформах отслеживания",

"roadmap-phase-2-title": "NFT Артефакты и Партнёрства",

"roadmap-phase-2-date": "Q1 2026",

"roadmap-phase-2-item-1": "Запуск NFT маркетплейса для артефактов на Solana",

"roadmap-phase-2-item-2": "Коллекция Genesis NFT с утилитами",

"roadmap-phase-2-item-3": "Партнёрства с проектами Solana и инфлюенсерами",

"roadmap-phase-2-item-4": "Социальный бот для Telegram с геймификацией",

"roadmap-phase-3-title": "Мобильное Приложение и Продвинутые Рейды",

"roadmap-phase-3-date": "Q2 2026",

"roadmap-phase-3-item-1": "Мобильное приложение iOS и Android с интеграцией Solana",

"roadmap-phase-3-item-2": "Продвинутая система кросс-чейн рейдов",

"roadmap-phase-3-item-3": "Интеграция с решениями 2 уровня",

"roadmap-phase-3-item-4": "Программа стейкинга с APR наградами на Solana",

"roadmap-phase-4-title": "Кросс-чейн и Глобальная Экспансия",

"roadmap-phase-4-date": "Q3 2026",

"roadmap-phase-4-item-1": "Мульти-блокчейн экспансия (Ethereum, Polygon)",

"roadmap-phase-4-item-2": "Глобальные охотничьи события с призами",

"roadmap-phase-4-item-3": "Полностью децентрализованное DAO управление на Solana",

"roadmap-phase-4-item-4": "Экспансия в метавселенную и GameFi",

"roadmap-statusLabels-completed": "Завершено",

"roadmap-statusLabels-inProgress": "В Процессе",

"roadmap-statusLabels-planned": "Запланировано",

"roadmap-statusLabels-vision": "Видение",

"community-title": "Присоединяйтесь к Экспедиции",

"community-description": "Более 15 000 охотников за сокровищами уже присоединились к нашей миссии на Solana. Станьте частью криптоистории!",

"community-stats-members": "Участники Сообщества",

"community-stats-holders": "Держатели Токенов",

"community-stats-treasures": "Найденные Сокровища",

"community-stats-rewards": "Распределённые Награды",

"community-platforms-telegram-title": "Telegram",

"community-platforms-telegram-description": "Основной чат и официальные объявления",

"community-platforms-discord-title": "Discord",

"community-platforms-discord-description": "Игровое сообщество и события",

"community-platforms-twitter-title": "Twitter/X",

"community-platforms-twitter-description": "Ежедневные обновления и мемы",

"community-platforms-reddit-title": "Reddit",

"community-platforms-reddit-description": "Обсуждения сообщества и анализ",

"wallet-title": "Подключить Кошелёк Solana",

"wallet-subtitle": "Выберите предпочитаемый кошелёк для Solana",

"wallet-option-1-name": "Phantom",

"wallet-option-1-description": "Самый популярный кошелёк для экосистемы Solana",

"wallet-option-1-status": "Рекомендуемый",

"wallet-option-2-name": "Solflare",

"wallet-option-2-description": "Премиум кошелёк с продвинутыми функциями Solana",

"wallet-option-2-status": "Популярный",

"wallet-option-3-name": "Backpack",

"wallet-option-3-description": "Современный кошелёк с полной поддержкой Solana",

"wallet-option-3-status": "Новый",

"wallet-option-4-name": "Sollet",

"wallet-option-4-description": "Веб-кошелёк для быстрого доступа к Solana",

"wallet-option-4-status": "Простой",

"wallet-messages-connecting": "Подключение...",

"wallet-messages-connected": "Успешно подключено!",

"wallet-messages-failed": "Подключение не удалось",

"wallet-messages-retry": "Попробовать снова",

"footer-copyright": "© 2025 HODLJAR. Все права защищены.",

"footer-disclaimer": "Инвестиции в криптовалюты связаны со значительными рисками. Цены могут резко колебаться, и вы можете потерять все вложенные средства. Инвестируйте только то, что можете позволить себе потерять, и консультируйтесь с финансовым консультантом перед любыми инвестиционными решениями.",

"footer-links-audit": "Отчёт Аудита",

"footer-links-documentation": "Документация",

"footer-links-terms": "Условия использования",

"footer-links-privacy": "Политика Конфиденциальности",

"footer-links-legal": "Правовая информация",

"footer-backToTop": "Наверх",

"interactive-loading": "Загрузка...",

"interactive-pleaseWait": "Пожалуйста, подождите...",

"interactive-processing": "Обработка...",

"tooltips-copyAddress": "Копировать адрес контракта",

"tooltips-openExplorer": "Открыть в Solana Explorer",

"tooltips-addToMetaMask": "Добавить токен в кошелёк",

"tooltips-shareOnSocial": "Поделиться в соцсетях",

"tooltips-downloadWhitepaper": "Скачать документацию"

}

};