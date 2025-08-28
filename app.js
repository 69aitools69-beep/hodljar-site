// HODLJAR Multilingual Interactive Application - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 HODLJAR - Starting application initialization...');
    
    // Complete translations data - ABSOLUTE COVERAGE
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
            "howToBuy-subtitle": "Ghid pas cu pas pentru a te alătura vânătorilor",
            "howToBuy-step-1-number": "1",
            "howToBuy-step-1-title": "Conectează Wallet-ul",
            "howToBuy-step-1-description": "Folosește MetaMask, Trust Wallet, WalletConnect sau alt wallet compatibil cu BSC/Ethereum",
            "howToBuy-step-1-action": "Conectează Wallet",
            "howToBuy-step-2-number": "2", 
            "howToBuy-step-2-title": "Obține BNB/ETH",
            "howToBuy-step-2-description": "Ai nevoie de crypto pentru comisioanele de gas și pentru schimbul în HJAR",
            "howToBuy-step-2-action": "Cumpără Crypto",
            "howToBuy-step-3-number": "3",
            "howToBuy-step-3-title": "Swap pe DEX", 
            "howToBuy-step-3-description": "Mergi pe PancakeSwap (BSC) sau Uniswap (ETH) și schimbă crypto pentru HJAR",
            "howToBuy-step-3-action": "Deschide DEX",
            "howToBuy-step-4-number": "4",
            "howToBuy-step-4-title": "Alătură-te Comunității",
            "howToBuy-step-4-description": "Intră pe canalele noastre pentru misiuni exclusive, airdrops și actualizări",
            "howToBuy-step-4-action": "Alătură-te Acum",
            "howToBuy-warnings-title": "Informații Importante",
            "howToBuy-warnings-slippage": "Setează slippage la 5-12% pentru tranzacții reușite",
            "howToBuy-warnings-gas": "Verifică comisioanele de gas înainte de confirmare",
            "howToBuy-warnings-scam": "Verifică întotdeauna adresa contractului oficial",
            "roadmap-title": "Harta Viitorului",
            "roadmap-subtitle": "Călătoria noastră către dominația meme coin",
            "roadmap-phase-1-title": "Lansare & Primele Misiuni",
            "roadmap-phase-1-date": "T4 2025",
            "roadmap-phase-1-item-1": "Lansare token HJAR pe BSC și Ethereum",
            "roadmap-phase-1-item-2": "Prima hartă de comori și sistem de misiuni beta",
            "roadmap-phase-1-item-3": "Comunitate de 10K membri și primii 1K holderi", 
            "roadmap-phase-1-item-4": "Listare pe DEX-uri majore și platforme tracking",
            "roadmap-phase-2-title": "NFT Artefacte & Partnerships",
            "roadmap-phase-2-date": "T1 2026",
            "roadmap-phase-2-item-1": "Lansare marketplace NFT pentru artefacte",
            "roadmap-phase-2-item-2": "Colecția de NFT-uri Genesis cu utilități",
            "roadmap-phase-2-item-3": "Partnerships cu proiecte crypto și influenceri",
            "roadmap-phase-2-item-4": "Bot social pentru Telegram cu gamificare",
            "roadmap-phase-3-title": "Mobile App & Advanced Raids",
            "roadmap-phase-3-date": "T2 2026",
            "roadmap-phase-3-item-1": "Aplicație mobilă iOS și Android",
            "roadmap-phase-3-item-2": "Sistem avansat de raid-uri cross-chain",
            "roadmap-phase-3-item-3": "Integrare cu layer 2 solutions",
            "roadmap-phase-3-item-4": "Program de staking cu recompense APR",
            "roadmap-phase-4-title": "Cross-Chain & Global Expansion",
            "roadmap-phase-4-date": "T3 2026",
            "roadmap-phase-4-item-1": "Suport multi-blockchain (Polygon, Avalanche)",
            "roadmap-phase-4-item-2": "Evenimente globale de vânătoare cu premii",
            "roadmap-phase-4-item-3": "DAO governance complet descentralizat",
            "roadmap-phase-4-item-4": "Expansiune în metaverse și GameFi",
            "roadmap-statusLabels-completed": "Finalizat",
            "roadmap-statusLabels-inProgress": "În Progres", 
            "roadmap-statusLabels-planned": "Planificat",
            "roadmap-statusLabels-vision": "Viziune",
            "community-title": "Alătură-te Expedițiunii",
            "community-description": "Peste 15.000 de vânători de comori s-au alăturat deja misiunii noastre. Fii parte din istoria crypto!",
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
            "wallet-title": "Conectează Wallet-ul",
            "wallet-subtitle": "Alege wallet-ul tău preferat",
            "wallet-option-1-name": "MetaMask",
            "wallet-option-1-description": "Wallet-ul cel mai popular pentru DeFi",
            "wallet-option-1-status": "Recomandat",
            "wallet-option-2-name": "Trust Wallet",
            "wallet-option-2-description": "Wallet mobil cu suport multi-chain",
            "wallet-option-2-status": "Popular",
            "wallet-option-3-name": "WalletConnect",
            "wallet-option-3-description": "Conectează orice wallet compatibil",
            "wallet-option-3-status": "Universal",
            "wallet-option-4-name": "Coinbase Wallet",
            "wallet-option-4-description": "Wallet oficial Coinbase",
            "wallet-option-4-status": "Sigur",
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
            "tooltips-openExplorer": "Deschide în block explorer",
            "tooltips-addToMetaMask": "Adaugă token în MetaMask",
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
            "howToBuy-subtitle": "Step-by-step guide to join the hunters",
            "howToBuy-step-1-number": "1",
            "howToBuy-step-1-title": "Connect Your Wallet",
            "howToBuy-step-1-description": "Use MetaMask, Trust Wallet, WalletConnect, or any BSC/Ethereum compatible wallet",
            "howToBuy-step-1-action": "Connect Wallet",
            "howToBuy-step-2-number": "2",
            "howToBuy-step-2-title": "Get BNB/ETH",
            "howToBuy-step-2-description": "You need crypto for gas fees and to swap for HJAR tokens",
            "howToBuy-step-2-action": "Buy Crypto",
            "howToBuy-step-3-number": "3",
            "howToBuy-step-3-title": "Swap on DEX",
            "howToBuy-step-3-description": "Go to PancakeSwap (BSC) or Uniswap (ETH) and swap your crypto for HJAR",
            "howToBuy-step-3-action": "Open DEX",
            "howToBuy-step-4-number": "4",
            "howToBuy-step-4-title": "Join the Community",
            "howToBuy-step-4-description": "Enter our channels for exclusive missions, airdrops, and updates",
            "howToBuy-step-4-action": "Join Now",
            "howToBuy-warnings-title": "Important Information",
            "howToBuy-warnings-slippage": "Set slippage to 5-12% for successful transactions",
            "howToBuy-warnings-gas": "Check gas fees before confirming transactions",
            "howToBuy-warnings-scam": "Always verify the official contract address",
            "roadmap-title": "Future Map",
            "roadmap-subtitle": "Our journey to meme coin dominance",
            "roadmap-phase-1-title": "Launch & First Missions",
            "roadmap-phase-1-date": "Q4 2025",
            "roadmap-phase-1-item-1": "HJAR token launch on BSC and Ethereum",
            "roadmap-phase-1-item-2": "First treasure map and beta mission system",
            "roadmap-phase-1-item-3": "Community of 10K members and first 1K holders",
            "roadmap-phase-1-item-4": "Listing on major DEXs and tracking platforms",
            "roadmap-phase-2-title": "NFT Artifacts & Partnerships",
            "roadmap-phase-2-date": "Q1 2026",
            "roadmap-phase-2-item-1": "NFT marketplace launch for artifacts",
            "roadmap-phase-2-item-2": "Genesis NFT collection with utilities",
            "roadmap-phase-2-item-3": "Partnerships with crypto projects and influencers",
            "roadmap-phase-2-item-4": "Social bot for Telegram with gamification",
            "roadmap-phase-3-title": "Mobile App & Advanced Raids",
            "roadmap-phase-3-date": "Q2 2026",
            "roadmap-phase-3-item-1": "iOS and Android mobile application",
            "roadmap-phase-3-item-2": "Advanced cross-chain raid system",
            "roadmap-phase-3-item-3": "Layer 2 solutions integration",
            "roadmap-phase-3-item-4": "Staking program with APR rewards",
            "roadmap-phase-4-title": "Cross-Chain & Global Expansion",
            "roadmap-phase-4-date": "Q3 2026",
            "roadmap-phase-4-item-1": "Multi-blockchain support (Polygon, Avalanche)",
            "roadmap-phase-4-item-2": "Global hunting events with prizes",
            "roadmap-phase-4-item-3": "Fully decentralized DAO governance",
            "roadmap-phase-4-item-4": "Metaverse and GameFi expansion",
            "roadmap-statusLabels-completed": "Completed",
            "roadmap-statusLabels-inProgress": "In Progress",
            "roadmap-statusLabels-planned": "Planned",
            "roadmap-statusLabels-vision": "Vision",
            "community-title": "Join the Expedition",
            "community-description": "Over 15,000 treasure hunters have already joined our mission. Be part of crypto history!",
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
            "wallet-title": "Connect Wallet",
            "wallet-subtitle": "Choose your preferred wallet",
            "wallet-option-1-name": "MetaMask",
            "wallet-option-1-description": "Most popular wallet for DeFi",
            "wallet-option-1-status": "Recommended",
            "wallet-option-2-name": "Trust Wallet",
            "wallet-option-2-description": "Mobile wallet with multi-chain support",
            "wallet-option-2-status": "Popular",
            "wallet-option-3-name": "WalletConnect",
            "wallet-option-3-description": "Connect any compatible wallet",
            "wallet-option-3-status": "Universal",
            "wallet-option-4-name": "Coinbase Wallet",
            "wallet-option-4-description": "Official Coinbase wallet",
            "wallet-option-4-status": "Secure",
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
            "tooltips-openExplorer": "Open in block explorer",
            "tooltips-addToMetaMask": "Add token to MetaMask",
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
            "howToBuy-subtitle": "Пошаговое руководство для присоединения к охотникам",
            "howToBuy-step-1-number": "1",
            "howToBuy-step-1-title": "Подключите Кошелёк",
            "howToBuy-step-1-description": "Используйте MetaMask, Trust Wallet, WalletConnect или любой совместимый с BSC/Ethereum кошелёк",
            "howToBuy-step-1-action": "Подключить Кошелёк",
            "howToBuy-step-2-number": "2",
            "howToBuy-step-2-title": "Получите BNB/ETH",
            "howToBuy-step-2-description": "Вам нужна криптовалюта для комиссий за газ и для обмена на токены HJAR",
            "howToBuy-step-2-action": "Купить Криптовалюту",
            "howToBuy-step-3-number": "3",
            "howToBuy-step-3-title": "Обменяйте на DEX",
            "howToBuy-step-3-description": "Перейдите на PancakeSwap (BSC) или Uniswap (ETH) и обменяйте вашу криптовалюту на HJAR",
            "howToBuy-step-3-action": "Открыть DEX",
            "howToBuy-step-4-number": "4",
            "howToBuy-step-4-title": "Присоединитесь к Сообществу",
            "howToBuy-step-4-description": "Войдите в наши каналы для эксклюзивных миссий, аирдропов и обновлений",
            "howToBuy-step-4-action": "Присоединиться Сейчас",
            "howToBuy-warnings-title": "Важная Информация",
            "howToBuy-warnings-slippage": "Установите проскальзывание на 5-12% для успешных транзакций",
            "howToBuy-warnings-gas": "Проверьте комиссии за газ перед подтверждением транзакций",
            "howToBuy-warnings-scam": "Всегда проверяйте официальный адрес контракта",
            "roadmap-title": "Карта Будущего",
            "roadmap-subtitle": "Наш путь к доминированию мем коинов",
            "roadmap-phase-1-title": "Запуск и Первые Миссии",
            "roadmap-phase-1-date": "Q4 2025",
            "roadmap-phase-1-item-1": "Запуск токена HJAR на BSC и Ethereum",
            "roadmap-phase-1-item-2": "Первая карта сокровищ и бета система миссий",
            "roadmap-phase-1-item-3": "Сообщество 10К участников и первые 1К держателей",
            "roadmap-phase-1-item-4": "Листинг на основных DEX и платформах отслеживания",
            "roadmap-phase-2-title": "NFT Артефакты и Партнёрства",
            "roadmap-phase-2-date": "Q1 2026",
            "roadmap-phase-2-item-1": "Запуск NFT маркетплейса для артефактов",
            "roadmap-phase-2-item-2": "Коллекция Genesis NFT с утилитами",
            "roadmap-phase-2-item-3": "Партнёрства с крипто проектами и инфлюенсерами",
            "roadmap-phase-2-item-4": "Социальный бот для Telegram с геймификацией",
            "roadmap-phase-3-title": "Мобильное Приложение и Продвинутые Рейды",
            "roadmap-phase-3-date": "Q2 2026",
            "roadmap-phase-3-item-1": "Мобильное приложение для iOS и Android",
            "roadmap-phase-3-item-2": "Продвинутая система кросс-чейн рейдов",
            "roadmap-phase-3-item-3": "Интеграция с решениями 2 уровня",
            "roadmap-phase-3-item-4": "Программа стейкинга с APR наградами",
            "roadmap-phase-4-title": "Кросс-чейн и Глобальная Экспансия",
            "roadmap-phase-4-date": "Q3 2026",
            "roadmap-phase-4-item-1": "Мульти-блокчейн поддержка (Polygon, Avalanche)",
            "roadmap-phase-4-item-2": "Глобальные охотничьи события с призами",
            "roadmap-phase-4-item-3": "Полностью децентрализованное DAO управление",
            "roadmap-phase-4-item-4": "Экспансия в метавселенную и GameFi",
            "roadmap-statusLabels-completed": "Завершено",
            "roadmap-statusLabels-inProgress": "В Процессе",
            "roadmap-statusLabels-planned": "Запланировано",
            "roadmap-statusLabels-vision": "Видение",
            "community-title": "Присоединяйтесь к Экспедиции",
            "community-description": "Более 15 000 охотников за сокровищами уже присоединились к нашей миссии. Станьте частью криптоистории!",
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
            "wallet-title": "Подключить Кошелёк",
            "wallet-subtitle": "Выберите предпочитаемый кошелёк",
            "wallet-option-1-name": "MetaMask",
            "wallet-option-1-description": "Самый популярный кошелёк для DeFi",
            "wallet-option-1-status": "Рекомендуемый",
            "wallet-option-2-name": "Trust Wallet",
            "wallet-option-2-description": "Мобильный кошелёк с мульти-чейн поддержкой",
            "wallet-option-2-status": "Популярный",
            "wallet-option-3-name": "WalletConnect",
            "wallet-option-3-description": "Подключите любой совместимый кошелёк",
            "wallet-option-3-status": "Универсальный",
            "wallet-option-4-name": "Coinbase Wallet",
            "wallet-option-4-description": "Официальный кошелёк Coinbase",
            "wallet-option-4-status": "Безопасный",
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
            "tooltips-openExplorer": "Открыть в блок-проводнике",
            "tooltips-addToMetaMask": "Добавить токен в MetaMask",
            "tooltips-shareOnSocial": "Поделиться в соцсетях",
            "tooltips-downloadWhitepaper": "Скачать документацию"
        }
    };

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

    // FIXED Modal functionality
    function initWalletModal() {
        const connectWalletBtn = document.querySelector('.btn-connect-wallet');
        const walletModal = document.getElementById('walletModal');
        const modalClose = document.querySelector('.modal-close');
        const walletOptions = document.querySelectorAll('.wallet-option');
        const loadingState = document.querySelector('.loading-state');

        console.log('💼 Initializing wallet modal...');
        console.log('Connect button:', !!connectWalletBtn);
        console.log('Modal:', !!walletModal);
        console.log('Close button:', !!modalClose);
        console.log('Wallet options:', walletOptions.length);

        // Show modal function
        function showModal() {
            if (walletModal) {
                console.log('💼 Opening wallet modal');
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
                console.log('💼 Connect wallet button clicked');
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

        // Wallet option selection
        walletOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const walletType = this.getAttribute('data-wallet');
                const walletName = this.querySelector('.wallet-name')?.textContent || 'Unknown Wallet';
                console.log(`💼 Selected wallet: ${walletName}`);
                
                // Hide options, show loading
                walletOptions.forEach(opt => opt.style.display = 'none');
                if (loadingState) loadingState.classList.remove('hidden');
                
                // Simulate connection
                setTimeout(() => {
                    const messages = {
                        'ro': `🎉 Conectare ${walletName} simulată cu succes!\n\n✅ Wallet conectat\n🚀 Ești gata pentru vânătoarea de comori!`,
                        'en': `🎉 ${walletName} connection simulated successfully!\n\n✅ Wallet connected\n🚀 You're ready for the treasure hunt!`,
                        'ru': `🎉 Подключение ${walletName} успешно симулировано!\n\n✅ Кошелёк подключён\n🚀 Готов к охоте за сокровищами!`
                    };
                    
                    alert(messages[currentLanguage]);
                    
                    // Update connect button
                    if (connectWalletBtn) {
                        const connectedTexts = {
                            'ro': '✅ Wallet Conectat',
                            'en': '✅ Wallet Connected', 
                            'ru': '✅ Кошелёк Подключён'
                        };
                        connectWalletBtn.textContent = connectedTexts[currentLanguage];
                        connectWalletBtn.style.background = 'linear-gradient(135deg, var(--color-primary-green), #00cc70)';
                        connectWalletBtn.style.color = 'var(--color-dark-bg)';
                    }
                    
                    hideModal();
                }, 2000);
            });
        });

        console.log('✅ Wallet modal initialized');
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
            
            console.log('✅ Mobile menu initialized');
        }
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
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
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
                        titleColor: '#00ff88',
                        bodyColor: '#f5f5f5',
                        borderColor: '#00ff88',
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
            console.log('📊 Chart created successfully');
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

    // Hero buttons
    function initHeroButtons() {
        const startHuntBtn = document.querySelector('.hero-actions .btn-primary');
        const treasureMapBtn = document.querySelector('.hero-actions .btn-outline');

        if (startHuntBtn) {
            startHuntBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const messages = {
                    'ro': '🏴‍☠️ Bine ai venit la vânătoarea HODLJAR! 💎\n\nPrimele misiuni vor fi disponibile în curând.\n🚀 Conectează wallet-ul pentru notificări!',
                    'en': '🏴‍☠️ Welcome to HODLJAR treasure hunt! 💎\n\nFirst missions coming soon.\n🚀 Connect your wallet for notifications!',
                    'ru': '🏴‍☠️ Добро пожаловать в охоту HODLJAR! 💎\n\nПервые миссии скоро будут доступны.\n🚀 Подключи кошелёк для уведомлений!'
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
                    
                    console.log('🗺️ Scrolling to roadmap');
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

    // Contract address copy
    function initContractCopy() {
        const contractAddress = document.querySelector('.contract-address');
        if (contractAddress) {
            contractAddress.addEventListener('click', function() {
                const fullAddress = '0x1234567890abcdef1234567890abcdef12345678';
                
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
            element.style.color = 'var(--color-primary-green)';
            
            setTimeout(() => {
                element.textContent = originalText;
                element.style.color = 'var(--color-treasure-gold)';
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
                    header.style.boxShadow = '0 2px 20px rgba(0, 255, 136, 0.1)';
                } else {
                    header.style.background = 'rgba(26, 26, 46, 0.95)';
                    header.style.boxShadow = 'none';
                }
            });
        }
    }

    // MAIN INITIALIZATION FUNCTION
    function initializeApp() {
        console.log('🏴‍☠️ HODLJAR - Initializing application...');
        
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
            
            console.log('🚀 HODLJAR application initialized successfully!');
            console.log('✅ Features active:');
            console.log('   - Multilingual support (RO, EN, RU)');
            console.log('   - Wallet connection modal'); 
            console.log('   - Navigation scrolling');
            console.log('   - Interactive tokenomics chart');
            console.log('   - Animated counters');
            console.log('   - Mobile responsive design');
            
        } catch (error) {
            console.error('❌ Initialization error:', error);
        }
    }

    // Start the application
    initializeApp();

});