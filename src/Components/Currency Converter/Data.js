const currencyNames = {
    "1inch": "1inch Token",
    "aave": "Aave",
    "ada": "Cardano",
    "aed": "United Arab Emirates Dirham",
    "afn": "Afghan Afghani",
    "akt": "Akash Network",
    "algo": "Algorand",
    "all": "Albanian Lek",
    "amd": "Armenian Dram",
    "amp": "Amp Token",
    "ang": "Netherlands Antillean Guilder",
    "aoa": "Angolan Kwanza",
    "ape": "ApeCoin",
    "apt": "Aptos",
    "ar": "Arweave",
    "arb": "Arbitrum",
    "ars": "Argentine Peso",
    "atom": "Cosmos",
    "ats": "Austrian Schilling",
    "aud": "Australian Dollar",
    "avax": "Avalanche",
    "awg": "Aruban Florin",
    "axs": "Axie Infinity",
    "azm": "Azerbaijani Manat (Old)",
    "azn": "Azerbaijani Manat",
    "bake": "BakeryToken",
    "bam": "Bosnia-Herzegovina Convertible Mark",
    "bat": "Basic Attention Token",
    "bbd": "Barbadian Dollar",
    "bch": "Bitcoin Cash",
    "bdt": "Bangladeshi Taka",
    "bef": "Belgian Franc",
    "bgn": "Bulgarian Lev",
    "bhd": "Bahraini Dinar",
    "bif": "Burundian Franc",
    "bmd": "Bermudian Dollar",
    "bnb": "Binance Coin",
    "bnd": "Brunei Dollar",
    "bob": "Bolivian Boliviano",
    "brl": "Brazilian Real",
    "bsd": "Bahamian Dollar",
    "bsv": "Bitcoin SV",
    "bsw": "Biswap",
    "btc": "Bitcoin",
    "btg": "Bitcoin Gold",
    "btn": "Bhutanese Ngultrum",
    "btt": "BitTorrent",
    "busd": "Binance USD",
    "bwp": "Botswanan Pula",
    "byn": "Belarusian Ruble",
    "byr": "Belarusian Ruble (Old)",
    "bzd": "Belize Dollar",
    "cad": "Canadian Dollar",
    "cake": "PancakeSwap",
    "cdf": "Congolese Franc",
    "celo": "Celo",
    "cfx": "Conflux",
    "chf": "Swiss Franc",
    "chz": "Chiliz",
    "clp": "Chilean Peso",
    "cnh": "Chinese Yuan (Offshore)",
    "cny": "Chinese Yuan",
    "comp": "Compound",
    "cop": "Colombian Peso",
    "crc": "Costa Rican Colón",
    "cro": "Cronos",
    "crv": "Curve DAO Token",
    "cspr": "Casper",
    "cuc": "Cuban Convertible Peso",
    "cup": "Cuban Peso",
    "cve": "Cape Verdean Escudo",
    "cvx": "Convex Finance",
    "cyp": "Cypriot Pound",
    "czk": "Czech Koruna",
    "dai": "Dai",
    "dash": "Dash",
    "dcr": "Decred",
    "dem": "German Mark",
    "dfi": "DeFiChain",
    "djf": "Djiboutian Franc",
    "dkk": "Danish Krone",
    "doge": "Dogecoin",
    "dop": "Dominican Peso",
    "dot": "Polkadot",
    "dydx": "dYdX",
    "dzd": "Algerian Dinar",
    "eek": "Estonian Kroon",
    "egld": "MultiversX (Elrond)",
    "egp": "Egyptian Pound",
    "enj": "Enjin Coin",
    "eos": "EOS",
    "ern": "Eritrean Nakfa",
    "esp": "Spanish Peseta",
    "etb": "Ethiopian Birr",
    "etc": "Ethereum Classic",
    "eth": "Ethereum",
    "eur": "Euro",
    "fei": "Fei USD",
    "fil": "Filecoin",
    "fjd": "Fijian Dollar",
    "fkp": "Falkland Islands Pound",
    "flow": "Flow",
    "flr": "Flare",
    "frax": "Frax",
    "frf": "French Franc",
    "ftt": "FTX Token",
    "fxs": "Frax Share",
    "gala": "Gala",
    "gbp": "British Pound Sterling",
    "gel": "Georgian Lari",
    "ggp": "Guernsey Pound",
    "ghs": "Ghanaian Cedi",
    "gip": "Gibraltar Pound",
    "gmd": "Gambian Dalasi",
    "gmx": "GMX",
    "gnf": "Guinean Franc",
    "gno": "Gnosis",
    "grd": "Greek Drachma",
    "grt": "The Graph",
    "gt": "GateToken",
    "gtq": "Guatemalan Quetzal",
    "gusd": "Gemini Dollar",
    "gyd": "Guyanese Dollar",
    "hbar": "Hedera",
    "hkd": "Hong Kong Dollar",
    "hnl": "Honduran Lempira",
    "hnt": "Helium",
    "hot": "Holo",
    "hrk": "Croatian Kuna",
    "ht": "Huobi Token",
    "htg": "Haitian Gourde",
    "huf": "Hungarian Forint",
    "icp": "Internet Computer",
    "idr": "Indonesian Rupiah",
    "iep": "Irish Pound",
    "ils": "Israeli New Shekel",
    "imp": "Isle of Man Pound",
    "imx": "Immutable X",
    "inj": "Injective",
    "inr": "Indian Rupee",
    "iqd": "Iraqi Dinar",
    "irr": "Iranian Rial",
    "isk": "Icelandic Króna",
    "itl": "Italian Lira",
    "jep": "Jersey Pound",
    "jmd": "Jamaican Dollar",
    "jod": "Jordanian Dinar",
    "jpy": "Japanese Yen",
    "kas": "Kaspa",
    "kava": "Kava",
    "kcs": "KuCoin Token",
    "kda": "Kadena",
    "kes": "Kenyan Shilling",
    "kgs": "Kyrgyzstani Som",
    "khr": "Cambodian Riel",
    "klay": "Klaytn",
    "kmf": "Comorian Franc",
    "knc": "Kyber Network",
    "kpw": "North Korean Won",
    "krw": "South Korean Won",
    "ksm": "Kusama",
    "kwd": "Kuwaiti Dinar",
    "kyd": "Cayman Islands Dollar",
    "kzt": "Kazakhstani Tenge",
    "lak": "Laotian Kip",
    "lbp": "Lebanese Pound",
    "ldo": "Lido DAO",
    "leo": "UNUS SED LEO",
    "link": "Chainlink",
    "lkr": "Sri Lankan Rupee",
    "lrc": "Loopring",
    "lrd": "Liberian Dollar",
    "lsl": "Lesotho Loti",
    "ltc": "Litecoin",
    "ltl": "Lithuanian Litas",
    "luna": "Terra",
    "lunc": "Terra Classic",
    "lvl": "Latvian Lats",
    "lyd": "Libyan Dinar",
    "mad": "Moroccan Dirham",
    "mana": "Decentraland",
    "mbx": "MobiePay",
    "mdl": "Moldovan Leu",
    "mga": "Malagasy Ariary",
    "mina": "Mina",
    "mkd": "Macedonian Denar",
    "mkr": "Maker",
    "mmk": "Myanmar Kyat",
    "mnt": "Mongolian Tugrik",
    "mop": "Macanese Pataca",
    "mur": "Mauritian Rupee",
    "mvr": "Maldivian Rufiyaa",
    "mwk": "Malawian Kwacha",
    "mxn": "Mexican Peso",
    "myr": "Malaysian Ringgit",
    "mzn": "Mozambican Metical",
    "nad": "Namibian Dollar",
    "near": "NEAR Protocol",
    "neo": "Neo",
    "nexo": "Nexo",
    "ngn": "Nigerian Naira",
    "nio": "Nicaraguan Córdoba",
    "nok": "Norwegian Krone",
    "npr": "Nepalese Rupee",
    "nzd": "New Zealand Dollar",
    "okb": "OKB",
    "omr": "Omani Rial",
    "one": "Harmony",
    "op": "Optimism",
    "pab": "Panamanian Balboa",
    "paxg": "PAX Gold",
    "pen": "Peruvian Sol",
    "pgk": "Papua New Guinean Kina",
    "php": "Philippine Peso",
    "pkr": "Pakistani Rupee",
    "pln": "Polish Zloty",
    "pyg": "Paraguayan Guarani",
    "qar": "Qatari Rial",
    "qnt": "Quant",
    "qtum": "Qtum",
    "ron": "Romanian Leu",
    "rsd": "Serbian Dinar",
    "rub": "Russian Ruble",
    "rune": "THORChain",
    "rvn": "Ravencoin",
    "rwf": "Rwandan Franc",
    "sand": "The Sandbox",
    "sar": "Saudi Riyal",
    "sbd": "Solomon Islands Dollar",
    "scr": "Seychellois Rupee",
    "sdg": "Sudanese Pound",
    "sek": "Swedish Krona",
    "sgd": "Singapore Dollar",
    "shib": "Shiba Inu",
    "sll": "Sierra Leonean Leone",
    "snx": "Synthetix",
    "sol": "Solana",
    "sos": "Somali Shilling",
    "stx": "Stacks",
    "sui": "Sui",
    "svc": "Salvadoran Colón",
    "syp": "Syrian Pound",
    "szl": "Swazi Lilangeni",
    "thb": "Thai Baht",
    "theta": "Theta Network",
    "tjs": "Tajikistani Somoni",
    "tmt": "Turkmenistani Manat",
    "tnd": "Tunisian Dinar",
    "ton": "Toncoin",
    "top": "Tongan Paʻanga",
    "trx": "TRON",
    "try": "Turkish Lira",
    "ttd": "Trinidad and Tobago Dollar",
    "tusd": "TrueUSD",
    "twd": "New Taiwan Dollar",
    "twt": "Trust Wallet Token",
    "tzs": "Tanzanian Shilling",
    "uah": "Ukrainian Hryvnia",
    "ugx": "Ugandan Shilling",
    "uni": "Uniswap",
    "usd": "United States Dollar",
    "usdc": "USD Coin",
    "usdd": "Decentralized USD",
    "usdt": "Tether",
    "uyu": "Uruguayan Peso",
    "uzs": "Uzbekistani Som",
    "vet": "VeChain",
    "vnd": "Vietnamese Dong",
    "vuv": "Vanuatu Vatu",
    "waves": "Waves",
    "wemix": "WEMIX",
    "woo": "WOO Network",
    "wst": "Samoan Tala",
    "xaf": "Central African CFA Franc",
    "xag": "Silver (troy ounce)",
    "xau": "Gold (troy ounce)",
    "xaut": "Tether Gold",
    "xbt": "Bitcoin",
    "xcd": "East Caribbean Dollar",
    "xch": "Chia",
    "xdc": "XDC Network",
    "xdr": "IMF Special Drawing Rights",
    "xec": "eCash",
    "xem": "NEM",
    "xlm": "Stellar",
    "xmr": "Monero",
    "xof": "West African CFA Franc",
    "xpd": "Palladium (troy ounce)",
    "xpf": "CFP Franc",
    "xpt": "Platinum (troy ounce)",
    "xrp": "XRP",
    "xtz": "Tezos",
    "yer": "Yemeni Rial",
    "zar": "South African Rand",
    "zec": "Zcash",
    "zil": "Zilliqa",
    "zmw": "Zambian Kwacha",
    "zwl": "Zimbabwean Dollar"
  };
  
  
  export default currencyNames