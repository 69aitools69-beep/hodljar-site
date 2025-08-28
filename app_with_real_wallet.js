// HODLJAR Multilingual Interactive Application - Real Wallet Integration

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
            "wallet-messages-install": "Te rugăm să instalezi {wallet}",
            "wallet-messages-switchNetwork": "Te rugăm să schimbi rețeaua",
            "wallet-messages-wrongNetwork": "Rețea incorectă. Te rugăm să schimbi la BSC sau Ethereum",
            "footer-copyright": "© 2025 HODLJAR. Toate drepturile rezervate.",
            "footer-disclaimer": "Investițiile în criptomonede implică riscuri semnificative. Prețurile pot fluctua dramatic și poți pierde toți banii investiți. Investește doar ce îți permiți să pierzi și consultă un consilier financiar înainte de orice decizie de investiție.",
            "interactive-loading": "Se încarcă...",
            "interactive-pleaseWait": "Te rugăm să aștepți...",
            "interactive-processing": "Se procesează..."
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
            "wallet-messages-install": "Please install {wallet}",
            "wallet-messages-switchNetwork": "Please switch network",
            "wallet-messages-wrongNetwork": "Wrong network. Please switch to BSC or Ethereum",
            "footer-copyright": "© 2025 HODLJAR. All rights reserved.",
            "footer-disclaimer": "Cryptocurrency investments involve significant risks. Prices can fluctuate dramatically and you may lose all invested funds. Only invest what you can afford to lose and consult a financial advisor before any investment decisions.",
            "interactive-loading": "Loading...",
            "interactive-pleaseWait": "Please wait...",
            "interactive-processing": "Processing..."
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
            "wallet-messages-install": "Пожалуйста, установите {wallet}",
            "wallet-messages-switchNetwork": "Пожалуйста, смените сеть",
            "wallet-messages-wrongNetwork": "Неверная сеть. Пожалуйста, переключитесь на BSC или Ethereum",
            "footer-copyright": "© 2025 HODLJAR. Все права защищены.",
            "footer-disclaimer": "Инвестиции в криптовалюты связаны со значительными рисками. Цены могут резко колебаться, и вы можете потерять все вложенные средства. Инвестируйте только то, что можете позволить себе потерять, и консультируйтесь с финансовым консультантом перед любыми инвестиционными решениями.",
            "interactive-loading": "Загрузка...",
            "interactive-pleaseWait": "Пожалуйста, подождите...",
            "interactive-processing": "Обработка..."
        }
    };

    // Global state
    let currentLanguage = 'ro';
    let chartInstance = null;
    let connectedAccount = null;
    let connectedWallet = null;
    let currentChainId = null;

    // Wallet state management
    const walletState = {
        isConnected: false,
        account: null,
        chainId: null,
        walletType: null
    };

    // Network configurations
    const NETWORKS = {
        ETHEREUM: {
            chainId: '0x1',
            chainName: 'Ethereum Mainnet',
            nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
            rpcUrls: ['https://mainnet.infura.io/v3/'],
            blockExplorerUrls: ['https://etherscan.io/']
        },
        BSC: {
            chainId: '0x38',
            chainName: 'Binance Smart Chain',
            nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com/']
        }
    };

    // HODLJAR Token Configuration
    const TOKEN_CONFIG = {
        BSC: {
            address: '0x1234567890abcdef1234567890abcdef12345678',
            symbol: 'HJAR',
            decimals: 18,
            image: 'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/1008fb49-d8f3-456b-9f13-d6d54a379609.png'
        },
        ETHEREUM: {
            address: '0x1234567890abcdef1234567890abcdef12345678',
            symbol: 'HJAR',
            decimals: 18,
            image: 'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/1008fb49-d8f3-456b-9f13-d6d54a379609.png'
        }
    };

    // Chart labels for different languages
    const chartLabels = {
        'ro': ['Community Rewards (40%)', 'Lichiditate (30%)', 'Team (15%)', 'Marketing (10%)', 'Treasury (5%)'],
        'en': ['Community Rewards (40%)', 'Liquidity (30%)', 'Team (15%)', 'Marketing (10%)', 'Treasury (5%)'],
        'ru': ['Награды Сообщества (40%)', 'Ликвидность (30%)', 'Команда (15%)', 'Маркетинг (10%)', 'Казначейство (5%)']
    };

    // =========================
    // WALLET CONNECTION LOGIC
    // =========================

    // Check if wallet is installed
    function isWalletInstalled(walletType) {
        switch (walletType) {
            case 'metamask':
                return typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask;
            case 'trust':
                return typeof window.ethereum !== 'undefined' && window.ethereum.isTrust;
            case 'coinbase':
                return typeof window.ethereum !== 'undefined' && window.ethereum.isCoinbaseWallet;
            case 'walletconnect':
                return true; // WalletConnect works through QR code
            default:
                return false;
        }
    }

    // Connect to MetaMask
    async function connectMetaMask() {
        if (!isWalletInstalled('metamask')) {
            throw new Error(translations[currentLanguage]['wallet-messages-install'].replace('{wallet}', 'MetaMask'));
        }

        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            if (accounts.length === 0) {
                throw new Error('No accounts found');
            }

            const chainId = await window.ethereum.request({ method: 'eth_chainId' });

            return {
                account: accounts[0],
                chainId: chainId,
                walletType: 'metamask'
            };
        } catch (error) {
            console.error('MetaMask connection error:', error);
            throw error;
        }
    }

    // Connect to Trust Wallet
    async function connectTrustWallet() {
        if (!isWalletInstalled('trust')) {
            // Try to connect through generic ethereum provider
            if (typeof window.ethereum !== 'undefined') {
                try {
                    const accounts = await window.ethereum.request({
                        method: 'eth_requestAccounts'
                    });

                    if (accounts.length === 0) {
                        throw new Error('No accounts found');
                    }

                    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

                    return {
                        account: accounts[0],
                        chainId: chainId,
                        walletType: 'trust'
                    };
                } catch (error) {
                    throw error;
                }
            } else {
                throw new Error(translations[currentLanguage]['wallet-messages-install'].replace('{wallet}', 'Trust Wallet'));
            }
        }
    }

    // Connect to Coinbase Wallet
    async function connectCoinbaseWallet() {
        if (!isWalletInstalled('coinbase')) {
            throw new Error(translations[currentLanguage]['wallet-messages-install'].replace('{wallet}', 'Coinbase Wallet'));
        }

        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            if (accounts.length === 0) {
                throw new Error('No accounts found');
            }

            const chainId = await window.ethereum.request({ method: 'eth_chainId' });

            return {
                account: accounts[0],
                chainId: chainId,
                walletType: 'coinbase'
            };
        } catch (error) {
            console.error('Coinbase Wallet connection error:', error);
            throw error;
        }
    }

    // WalletConnect integration (basic implementation)
    async function connectWalletConnect() {
        try {
            // For WalletConnect, we'll show instructions for mobile users
            alert(translations[currentLanguage]['wallet-messages-install'].replace('{wallet}', 'WalletConnect') + '\n\nPentru WalletConnect, folosește aplicația mobilă Trust Wallet sau alt wallet compatibil și scanează codul QR.');
            throw new Error('WalletConnect requires mobile wallet app');
        } catch (error) {
            throw error;
        }
    }

    // Main wallet connection function
    async function connectWallet(walletType) {
        console.log(`🔗 Attempting to connect ${walletType}`);

        try {
            let connectionResult;

            switch (walletType) {
                case 'metamask':
                    connectionResult = await connectMetaMask();
                    break;
                case 'trust':
                    connectionResult = await connectTrustWallet();
                    break;
                case 'coinbase':
                    connectionResult = await connectCoinbaseWallet();
                    break;
                case 'walletconnect':
                    connectionResult = await connectWalletConnect();
                    break;
                default:
                    throw new Error(`Unsupported wallet type: ${walletType}`);
            }

            // Update global state
            walletState.isConnected = true;
            walletState.account = connectionResult.account;
            walletState.chainId = connectionResult.chainId;
            walletState.walletType = connectionResult.walletType;

            connectedAccount = connectionResult.account;
            connectedWallet = connectionResult.walletType;
            currentChainId = connectionResult.chainId;

            console.log(`✅ Successfully connected ${walletType}:`, connectionResult.account);

            return connectionResult;
        } catch (error) {
            console.error(`❌ Failed to connect ${walletType}:`, error);
            throw error;
        }
    }

    // Switch network
    async function switchNetwork(networkKey) {
        const network = NETWORKS[networkKey];
        if (!network) {
            throw new Error(`Unsupported network: ${networkKey}`);
        }

        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: network.chainId }]
            });

            currentChainId = network.chainId;
            return true;
        } catch (switchError) {
            // Network not added to wallet, try to add it
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [network]
                    });
                    currentChainId = network.chainId;
                    return true;
                } catch (addError) {
                    console.error('Failed to add network:', addError);
                    throw addError;
                }
            }
            throw switchError;
        }
    }

    // Add HODLJAR token to wallet
    async function addTokenToWallet(networkKey = 'BSC') {
        const tokenConfig = TOKEN_CONFIG[networkKey];
        if (!tokenConfig) {
            throw new Error(`Token not configured for network: ${networkKey}`);
        }

        try {
            const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: tokenConfig.address,
                        symbol: tokenConfig.symbol,
                        decimals: tokenConfig.decimals,
                        image: tokenConfig.image,
                    },
                },
            });

            if (wasAdded) {
                console.log('HJAR token added to wallet!');
                return true;
            }
        } catch (error) {
            console.error('Error adding token to wallet:', error);
            throw error;
        }
        return false;
    }

    // Disconnect wallet
    function disconnectWallet() {
        walletState.isConnected = false;
        walletState.account = null;
        walletState.chainId = null;
        walletState.walletType = null;

        connectedAccount = null;
        connectedWallet = null;
        currentChainId = null;

        updateWalletUI();
        console.log('🔌 Wallet disconnected');
    }

    // Update wallet UI
    function updateWalletUI() {
        const connectWalletBtn = document.querySelector('.btn-connect-wallet');
        if (!connectWalletBtn) return;

        if (walletState.isConnected && walletState.account) {
            const connectedTexts = {
                'ro': `✅ ${walletState.account.slice(0, 6)}...${walletState.account.slice(-4)}`,
                'en': `✅ ${walletState.account.slice(0, 6)}...${walletState.account.slice(-4)}`,
                'ru': `✅ ${walletState.account.slice(0, 6)}...${walletState.account.slice(-4)}`
            };

            connectWalletBtn.textContent = connectedTexts[currentLanguage];
            connectWalletBtn.style.background = 'linear-gradient(135deg, var(--color-primary-green), #00cc70)';
            connectWalletBtn.style.color = 'var(--color-dark-bg)';

            // Add disconnect functionality on right click
            connectWalletBtn.oncontextmenu = (e) => {
                e.preventDefault();
                if (confirm('Disconnect wallet?')) {
                    disconnectWallet();
                }
            };

            // Add title tooltip
            connectWalletBtn.title = `Connected: ${walletState.walletType} | Right-click to disconnect`;
        } else {
            const connectTexts = {
                'ro': 'Conectează Wallet',
                'en': 'Connect Wallet',
                'ru': 'Подключить Кошелёк'
            };

            connectWalletBtn.textContent = connectTexts[currentLanguage];
            connectWalletBtn.style.background = 'linear-gradient(135deg, var(--color-secondary-orange), #ff8c42)';
            connectWalletBtn.style.color = 'white';
            connectWalletBtn.oncontextmenu = null;
            connectWalletBtn.title = '';
        }
    }

    // Listen for account changes
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {
                disconnectWallet();
            } else if (accounts[0] !== walletState.account) {
                walletState.account = accounts[0];
                connectedAccount = accounts[0];
                updateWalletUI();
                console.log('👤 Account changed:', accounts[0]);
            }
        });

        window.ethereum.on('chainChanged', (chainId) => {
            currentChainId = chainId;
            walletState.chainId = chainId;
            console.log('🔗 Chain changed:', chainId);

            // Check if we're on a supported network
            const supportedChains = [NETWORKS.ETHEREUM.chainId, NETWORKS.BSC.chainId];
            if (!supportedChains.includes(chainId)) {
                const message = translations[currentLanguage]['wallet-messages-wrongNetwork'];
                console.warn(message);
                // You might want to show a notification to the user
            }
        });

        // Listen for disconnect
        window.ethereum.on('disconnect', () => {
            disconnectWallet();
            console.log('🔌 Wallet disconnected by provider');
        });
    }

    // Language switching functionality
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

        // Update wallet UI with new language
        updateWalletUI();

        console.log(`✅ Language switched to: ${lang}`);
    }

    // Language switcher initialization
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

    // ENHANCED Modal functionality with real wallet connections
    function initWalletModal() {
        const connectWalletBtn = document.querySelector('.btn-connect-wallet');
        const walletModal = document.getElementById('walletModal');
        const modalClose = document.querySelector('.modal-close');
        const walletOptions = document.querySelectorAll('.wallet-option');
        const loadingState = document.querySelector('.loading-state');

        console.log('💼 Initializing enhanced wallet modal...');
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

                // If already connected, don't show modal
                if (walletState.isConnected) {
                    console.log('Wallet already connected');
                    return;
                }

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

        // ENHANCED Wallet option selection with real connections
        walletOptions.forEach(option => {
            option.addEventListener('click', async function(e) {
                e.preventDefault();
                e.stopPropagation();

                const walletType = this.getAttribute('data-wallet');
                const walletName = this.querySelector('.wallet-name')?.textContent || 'Unknown Wallet';
                console.log(`💼 Selected wallet: ${walletName} (${walletType})`);

                // Hide options, show loading
                walletOptions.forEach(opt => opt.style.display = 'none');
                if (loadingState) {
                    loadingState.classList.remove('hidden');
                    const loadingText = loadingState.querySelector('p');
                    if (loadingText) {
                        loadingText.textContent = translations[currentLanguage]['wallet-messages-connecting'];
                    }
                }

                try {
                    // Attempt real wallet connection
                    const result = await connectWallet(walletType);

                    // Success message
                    const messages = {
                        'ro': `🎉 ${walletName} conectat cu succes!\n\n✅ Adresa: ${result.account.slice(0, 10)}...${result.account.slice(-8)}\n🌐 Rețea: ${result.chainId}\n🚀 Ești gata pentru vânătoarea de comori!`,
                        'en': `🎉 ${walletName} connected successfully!\n\n✅ Address: ${result.account.slice(0, 10)}...${result.account.slice(-8)}\n🌐 Network: ${result.chainId}\n🚀 You're ready for the treasure hunt!`,
                        'ru': `🎉 ${walletName} успешно подключён!\n\n✅ Адрес: ${result.account.slice(0, 10)}...${result.account.slice(-8)}\n🌐 Сеть: ${result.chainId}\n🚀 Готов к охоте за сокровищами!`
                    };

                    alert(messages[currentLanguage]);
                    updateWalletUI();
                    hideModal();

                    // Check if we're on the right network
                    const supportedChains = [NETWORKS.ETHEREUM.chainId, NETWORKS.BSC.chainId];
                    if (!supportedChains.includes(result.chainId)) {
                        const networkMessage = translations[currentLanguage]['wallet-messages-wrongNetwork'];
                        if (confirm(`${networkMessage}\n\nSwitch to BSC?`)) {
                            try {
                                await switchNetwork('BSC');
                                alert('✅ Switched to Binance Smart Chain');
                            } catch (error) {
                                console.error('Failed to switch network:', error);
                            }
                        }
                    }

                } catch (error) {
                    console.error('Connection failed:', error);

                    // Error message
                    const errorMessages = {
                        'ro': `❌ Conectarea la ${walletName} a eșuat!\n\nEroare: ${error.message}\n\nTe rugăm să verifici că wallet-ul este instalat și deblocat.`,
                        'en': `❌ ${walletName} connection failed!\n\nError: ${error.message}\n\nPlease check that the wallet is installed and unlocked.`,
                        'ru': `❌ Подключение ${walletName} не удалось!\n\nОшибка: ${error.message}\n\nПожалуйста, проверьте, что кошелёк установлен и разблокирован.`
                    };

                    alert(errorMessages[currentLanguage]);

                    // Reset modal state
                    if (loadingState) loadingState.classList.add('hidden');
                    walletOptions.forEach(opt => opt.style.display = 'flex');
                }
            });
        });

        console.log('✅ Enhanced wallet modal initialized with real Web3 connections');
    }

    // Add token to wallet functionality
    function initAddTokenButton() {
        const addTokenBtns = document.querySelectorAll('[data-translate="tokenomics-labels-addToWallet"]');

        addTokenBtns.forEach(btn => {
            btn.addEventListener('click', async function(e) {
                e.preventDefault();

                if (!walletState.isConnected) {
                    alert(translations[currentLanguage]['wallet-messages-install'].replace('{wallet}', 'wallet'));
                    return;
                }

                try {
                    const success = await addTokenToWallet('BSC');
                    if (success) {
                        const messages = {
                            'ro': '✅ HODLJAR (HJAR) a fost adăugat în wallet!',
                            'en': '✅ HODLJAR (HJAR) added to wallet!',
                            'ru': '✅ HODLJAR (HJAR) добавлен в кошелёк!'
                        };
                        alert(messages[currentLanguage]);
                    }
                } catch (error) {
                    console.error('Failed to add token:', error);
                    const messages = {
                        'ro': '❌ Nu s-a putut adăuga tokenul. Încercați manual.',
                        'en': '❌ Could not add token. Please try manually.',
                        'ru': '❌ Не удалось добавить токен. Попробуйте вручную.'
                    };
                    alert(messages[currentLanguage]);
                }
            });
        });
    }

    // [Rest of the functions remain the same - Navigation, counters, charts, etc.]

    // Navigation functionality
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
                    const headerHeight = 80;
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
        }
        console.log('✅ Chart observer initialized');
    }

    // Hero buttons
    function initHeroButtons() {
        const startHuntBtn = document.querySelector('.hero-actions .btn-primary');
        const treasureMapBtn = document.querySelector('.hero-actions .btn-outline');

        if (startHuntBtn) {
            startHuntBtn.addEventListener('click', function(e) {
                e.preventDefault();

                if (!walletState.isConnected) {
                    const messages = {
                        'ro': '🔗 Pentru a începe vânătoarea, conectează-ți mai întâi wallet-ul!\n\nApasă pe butonul "Conectează Wallet" din colțul din dreapta sus.',
                        'en': '🔗 To start the hunt, please connect your wallet first!\n\nClick the "Connect Wallet" button in the top right corner.',
                        'ru': '🔗 Чтобы начать охоту, сначала подключи кошелёк!\n\nНажми кнопку "Подключить Кошелёк" в правом верхнем углу.'
                    };
                    alert(messages[currentLanguage]);
                    return;
                }

                const messages = {
                    'ro': `🏴‍☠️ Bine ai venit la vânătoarea HODLJAR! 💎\n\nAdresa conectată: ${walletState.account.slice(0, 10)}...${walletState.account.slice(-8)}\n🚀 Primele misiuni vor fi disponibile în curând!`,
                    'en': `🏴‍☠️ Welcome to HODLJAR treasure hunt! 💎\n\nConnected address: ${walletState.account.slice(0, 10)}...${walletState.account.slice(-8)}\n🚀 First missions coming soon!`,
                    'ru': `🏴‍☠️ Добро пожаловать в охоту HODLJAR! 💎\n\nПодключенный адрес: ${walletState.account.slice(0, 10)}...${walletState.account.slice(-8)}\n🚀 Первые миссии скоро будут доступны!`
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

    // Auto-detect and restore previous wallet connection
    async function initAutoConnect() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

                    // Restore wallet state
                    walletState.isConnected = true;
                    walletState.account = accounts[0];
                    walletState.chainId = chainId;
                    walletState.walletType = 'detected'; // We don't know the exact type

                    connectedAccount = accounts[0];
                    currentChainId = chainId;

                    updateWalletUI();
                    console.log('🔄 Auto-restored wallet connection:', accounts[0]);
                }
            } catch (error) {
                console.error('Auto-connect failed:', error);
            }
        }
    }

    // MAIN INITIALIZATION FUNCTION
    function initializeApp() {
        console.log('🏴‍☠️ HODLJAR - Initializing enhanced application with real Web3...');

        try {
            // Initialize all components in sequence
            initLanguageSwitcher();
            initWalletModal(); // Enhanced with real Web3
            initNavigation();
            initMobileMenu();
            initCounters();
            initChartObserver();
            initHeroButtons();
            initBackToTop();
            initContractCopy();
            initHeaderScroll();
            initAddTokenButton(); // New function for add token

            // Auto-connect if previously connected
            initAutoConnect();

            // Set default language after a small delay to ensure DOM is ready
            setTimeout(() => {
                switchLanguage('ro');
                console.log('🎯 Default language set to Romanian');
            }, 100);

            console.log('🚀 HODLJAR application initialized successfully!');
            console.log('✅ Features active:');
            console.log(' - Real Web3 wallet connections (MetaMask, Trust, Coinbase)');
            console.log(' - Multilingual support (RO, EN, RU)');
            console.log(' - Network switching and token addition');
            console.log(' - Auto wallet reconnection');
            console.log(' - Interactive tokenomics chart');
            console.log(' - Animated counters');
            console.log(' - Mobile responsive design');

        } catch (error) {
            console.error('❌ Initialization error:', error);
        }
    }

    // Start the enhanced application
    initializeApp();
});