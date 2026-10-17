import { MarketStructureInfo, ScenarioCard, QuizQuestion } from '../types/market';

export const MARKET_STRUCTURES: Record<string, MarketStructureInfo> = {
  perfect_competition: {
    id: 'perfect_competition',
    title: {
      en: 'Perfect Competition',
      id: 'Pasar Persaingan Sempurna',
    },
    subtitle: {
      en: 'Countless buyers and sellers with identical commodities',
      id: 'Banyak penjual & pembeli dengan produk homogen (serupa)',
    },
    summary: {
      en: 'A theoretical market benchmark where a vast number of small firms sell identical (homogenous) goods. No single buyer or seller can influence the market price, making every participant a "Price Taker".',
      id: 'Struktur pasar ideal di mana terdapat banyak sekali penjual dan pembeli yang memperjualbelikan barang homogen (serupa/sama persis). Penjual tidak dapat menentukan harga sendiri melainkan mengikuti harga pasar (Price Taker).',
    },
    imagePath: '/src/assets/images/market_perfect_comp_1792207632292.jpg',
    imageAlt: 'Agricultural farmers market showing many stalls selling identical grains and vegetables with clear equilibrium prices',
    keyStats: {
      numberOfFirms: { en: 'Infinite / Very Many', id: 'Sangat Banyak' },
      productType: { en: 'Identical (Homogeneous)', id: 'Homogen (Identik/Sama)' },
      entryBarriers: { en: 'None (Free Entry & Exit)', id: 'Tidak Ada (Bebas Masuk/Keluar)' },
      pricingPower: { en: 'Zero (Price Taker)', id: 'Nol (Penerima Harga / Price Taker)' },
      demandElasticity: { en: 'Perfect Elastic (Horizontal)', id: 'Elastis Sempurna' },
    },
    characteristics: [
      {
        title: { en: 'Price Takers, Not Makers', id: 'Penjual Sebagai Penerima Harga' },
        description: {
          en: 'If a farmer charges even 1 cent above the market equilibrium price, buyers instantly purchase from thousands of identical competitors.',
          id: 'Jika seorang petani menaikkan harga sedikit saja di atas harga pasar, pembeli akan langsung beralih ke penjual lain karena barangnya sama persis.',
        },
      },
      {
        title: { en: 'Homogeneous Products', id: 'Produk Homogen / Identik' },
        description: {
          en: 'Products are perfect substitutes (e.g., standard wheat, raw grain, unbranded commodities). Consumers have zero brand preference.',
          id: 'Barang yang dijual bersifat saling menggantikan secara sempurna (misal: gabah, beras IR64, jagung pipil curah). Konsumen tidak peduli beli dari petani mana.',
        },
      },
      {
        title: { en: 'Free Entry and Exit', id: 'Kebebasan Keluar Masuk Pasar' },
        description: {
          en: 'Firms can enter when there are short-run profits and exit when facing losses without government licenses or heavy capital hurdles.',
          id: 'Produsen bebas masuk jika industri menghasilkan laba, dan bebas keluar jika merugi tanpa terhalang izin rumit atau modal raksasa.',
        },
      },
      {
        title: { en: 'Perfect Knowledge', id: 'Informasi Pasar Sempurna' },
        description: {
          en: 'All buyers and sellers have full transparency on prices, quality, and production techniques.',
          id: 'Baik pembeli maupun penjual memiliki pengetahuan lengkap mengenai harga yang berlaku dan kualitas barang di pasar.',
        },
      },
    ],
    realExamples: [
      {
        name: { en: 'Agricultural Crop Markets (Wheat, Corn, Rice)', id: 'Pasar Hasil Pertanian (Padi, Jagung, Gandum)' },
        description: {
          en: 'Individual farmers selling standard grade wheat in global commodity exchanges must accept the daily world spot price.',
          id: 'Petani padi yang menjual gabah standar ke penggilingan tidak bisa menentukan harga sendiri; harga ditentukan oleh pasar bursa komoditas.',
        },
        badge: { en: 'Primary Commodities', id: 'Komoditas Pokok' },
      },
      {
        name: { en: 'Foreign Exchange Currency Trading (Forex)', id: 'Pasar Valuta Asing (Valas)' },
        description: {
          en: 'One US Dollar sold by Bank A is virtually indistinguishable from one US Dollar sold by Bank B at spot rate.',
          id: 'Uang 1 Dolar AS di tempat A memiliki nilai dan kegunaan yang persis sama dengan 1 Dolar AS di tempat B mengikuti kurs resmi.',
        },
        badge: { en: 'Liquid Markets', id: 'Pasar Likuid' },
      },
      {
        name: { en: 'Unbranded Fish Markets', id: 'Pasar Ikan Tradisional' },
        description: {
          en: 'Fresh wild-caught mackerel at an open morning dock where dozens of fishermen sell the same fresh catch side-by-side.',
          id: 'Nelayan di tempat pelelangan ikan menjual ikan kembung segar hasil tangkapan harian dengan kualitas dan harga bersaing ketat.',
        },
        badge: { en: 'Local Fresh Produce', id: 'Hasil Laut' },
      },
    ],
    advantages: [
      {
        en: 'Allocative & Productive Efficiency: Goods are produced at the lowest possible cost, maximizing consumer welfare.',
        id: 'Efisiensi Alokatif & Produktif: Barang diproduksi dengan biaya terendah dan dijual dengan harga termurah bagi konsumen.',
      },
      {
        en: 'No Consumer Exploitation: Sellers cannot mark up excessive prices due to fierce competition.',
        id: 'Tidak Ada Eksploitasi: Penjual tidak dapat menarik keuntungan abnormal atau mempermainkan harga pembeli.',
      },
    ],
    disadvantages: [
      {
        en: 'No Product Variety: Everything is identical; lacks innovation, creative design, or personalized customization.',
        id: 'Kurang Variasi: Produk seragam dan monoton, kurang insentif untuk riset dan inovasi produk berteknologi tinggi.',
      },
      {
        en: 'Thin Profit Margins: Long-run economic profits are zero, leaving small producers vulnerable to shocks.',
        id: 'Margin Tipis: Dalam jangka panjang produsen hanya memperoleh laba normal, rentan terhadap krisis cuaca/biaya.',
      },
    ],
    teacherTip: {
      en: 'Ask students: "Why doesn\'t a wheat farmer advertise their wheat on TV during the Super Bowl?" Answer: Because advertising is costly and all wheat is identical — customers would just buy any farmer\'s wheat!',
      id: 'Pertanyaan pemicu diskusi: "Mengapa petani padi tidak memasang iklan mahal di baliho jalan tol?" Jawab: Karena beras curah itu homogen! Pasang iklan mahal hanya membuang uang karena pembeli tetap membeli beras siapa saja yang murah.',
    },
  },

  monopoly: {
    id: 'monopoly',
    title: {
      en: 'Monopoly',
      id: 'Pasar Monopoli',
    },
    subtitle: {
      en: 'A single dominant seller with insurmountable barriers to entry',
      id: 'Satu penjual tunggal dengan hambatan masuk pasar yang sangat tinggi',
    },
    summary: {
      en: 'A market structure characterized by a single firm controlling the entire supply of a good or service with no close substitutes. High barriers prevent any new competitors from entering, giving the firm substantial "Price Maker" authority.',
      id: 'Struktur pasar di mana hanya ada satu penjual tunggal yang menguasai seluruh pasokan barang atau jasa tanpa adanya barang pengganti (substitusi) yang dekat. Hambatan masuk sangat tinggi, sehingga penjual berstatus sebagai penentu harga (Price Maker).',
    },
    imagePath: '/src/assets/images/market_monopoly_1792207633983.jpg',
    imageAlt: 'Monopoly market showing single city utility company controlling electric grid and water tower distribution network',
    keyStats: {
      numberOfFirms: { en: 'Single (One) Seller', id: 'Satu (Tunggal)' },
      productType: { en: 'Unique (No Close Substitute)', id: 'Unik (Tanpa Pengganti Dekat)' },
      entryBarriers: { en: 'Extremely High (Patents, Utilities, State)', id: 'Sangat Tinggi (Lisensi, Modal, Paten)' },
      pricingPower: { en: 'High (Price Maker)', id: 'Tinggi (Penentu Harga / Price Maker)' },
      demandElasticity: { en: 'Inelastic Downward Sloping', id: 'Inelastis (Kemiringan Negatif)' },
    },
    characteristics: [
      {
        title: { en: 'Sole Supplier', id: 'Penjual Tunggal' },
        description: {
          en: 'The firm IS the entire industry. Total industry demand curve is the firm’s demand curve.',
          id: 'Perusahaan tersebut adalah seluruh industri itu sendiri. Kurva permintaan pasar sama dengan kurva perusahaan.',
        },
      },
      {
        title: { en: 'No Close Substitutes', id: 'Tidak Ada Barang Substitusi Dekat' },
        description: {
          en: 'Consumers cannot easily switch to another product if dissatisfied with prices or service.',
          id: 'Masyarakat tidak dapat dengan mudah beralih ke barang alternatif jika harga naik atau pelayanan kurang.',
        },
      },
      {
        title: { en: 'Enormous Entry Barriers', id: 'Hambatan Masuk Raksasa' },
        description: {
          en: 'Barriers include government franchises, natural monopolies (high fixed infrastructure costs), exclusive resource ownership, or legal patents.',
          id: 'Bisa berupa monopoli alamiah (biaya pipa/kabel sangat mahal jika dibangun ganda), hak paten obat, atau mandat regulasi pemerintah.',
        },
      },
      {
        title: { en: 'Price Maker & Price Discrimination', id: 'Penentu Harga & Diskriminasi Harga' },
        description: {
          en: 'Can restrict output to raise prices and may charge different consumer groups different rates (e.g. household vs industrial tariffs).',
          id: 'Dapat menentukan harga dengan membatasi jumlah produksi serta dapat menerapkan tarif berbeda untuk golongan rumah tangga dan industri.',
        },
      },
    ],
    realExamples: [
      {
        name: { en: 'State Electric Utility (e.g., PLN in Indonesia, Local Power Grids)', id: 'PT Perusahaan Listrik Negara (PLN)' },
        description: {
          en: 'It is economically inefficient to run duplicate high-voltage power transmission cables down the same neighborhood.',
          id: 'Monopoli alamiah & negara: Tidak efisien jika ada 3 perusahaan berbeda memasang tiang dan kabel listrik tegangan tinggi di jalan yang sama.',
        },
        badge: { en: 'Natural / State Monopoly', id: 'Monopoli Negara' },
      },
      {
        name: { en: 'Municipal Tap Water (e.g., PDAM / City Waterworks)', id: 'Perusahaan Air Minum (PDAM)' },
        description: {
          en: 'Only one underground clean water distribution pipe network connects to residential homes in a city district.',
          id: 'Hanya ada satu jaringan pipa air bersih bawah tanah yang menghubungkan ke rumah warga di satu kota madya.',
        },
        badge: { en: 'Public Utility', id: 'Utilitas Publik' },
      },
      {
        name: { en: 'Patented Life-Saving Pharmaceuticals', id: 'Obat Paten Farmasi' },
        description: {
          en: 'A pharmaceutical laboratory that invents a breakthrough cancer drug receives a 20-year legal monopoly patent.',
          id: 'Perusahaan farmasi yang menemukan obat baru yang dilindungi hak paten eksklusif selama 20 tahun.',
        },
        badge: { en: 'Legal Patent', id: 'Hak Paten Eksklusif' },
      },
    ],
    advantages: [
      {
        en: 'Massive Economies of Scale: Lower average production costs for large-scale infrastructure like power grids.',
        id: 'Skala Ekonomi Raksasa: Biaya rata-rata turun drastis jika dilayani oleh satu jaringan infrastruktur tunggal.',
      },
      {
        en: 'Research & Development Funding: Supernormal profits allow billions to be reinvested into groundbreaking technological breakthroughs.',
        id: 'Dana Riset Besar: Keuntungan jangka panjang memungkinkan investasi miliaran dolar untuk riset ilmiah mutakhir.',
      },
    ],
    disadvantages: [
      {
        en: 'Deadweight Loss & Higher Prices: Restricting output leads to underproduction and lost consumer surplus.',
        id: 'Kerugian Bobot Mati (Deadweight Loss): Harga cenderung lebih mahal dan jumlah produksi lebih sedikit dibanding pasar kompetitif.',
      },
      {
        en: 'Risk of Inefficiency & Poor Customer Service: Without competitors, firms might lack urgency to respond to consumer complaints.',
        id: 'Risiko Inefisiensi X: Kurangnya dorongan kompetisi bisa membuat pelayanan kurang responsif terhadap keluhan pelanggan.',
      },
    ],
    teacherTip: {
      en: 'Ask students: "Why does the government allow tap water or electricity companies to be monopolies?" Point out the concept of Natural Monopoly: building two competing sewer or water pipe networks under the street would cost billions and destroy streets!',
      id: 'Diskusikan bersama siswa: "Mengapa pemerintah mengizinkan PLN atau PDAM menjadi monopoli?" Jelaskan konsep Monopoli Alamiah: Bayangkan jika ada 5 perusahaan menggali aspal jalan raya Anda untuk menanam 5 pipa air berbeda!',
    },
  },

  oligopoly: {
    id: 'oligopoly',
    title: {
      en: 'Oligopoly',
      id: 'Pasar Oligopoli',
    },
    subtitle: {
      en: 'A few powerful titans controlling the majority of market share',
      id: 'Hanya beberapa perusahaan raksasa yang menguasai sebagian besar pangsa pasar',
    },
    summary: {
      en: 'A market dominated by a small number of large sellers. Because each firm commands a massive share of the industry, every decision on price, marketing, or capacity triggers direct reactions from rivals (Strategic Interdependence).',
      id: 'Struktur pasar di mana hanya ada sedikit penjual besar (biasanya 2 hingga 8 perusahaan raksasa) yang menguasai pasar. Keputusan satu perusahaan (harga, promo, fitur baru) langsung memicu reaksi balik dari pesaing (Saling Ketergantungan Strategis).',
    },
    imagePath: '/src/assets/images/market_oligopoly_1792207636170.jpg',
    imageAlt: 'Oligopoly market showing few giant aviation and telecommunication aerospace hangars competing in city center',
    keyStats: {
      numberOfFirms: { en: 'A Few Dominant Giants (2-8)', id: 'Sedikit Perusahaan Raksasa' },
      productType: { en: 'Standardized or Differentiated', id: 'Bisa Standar atau Terdiferensiasi' },
      entryBarriers: { en: 'High (Capital, Scale, Technology)', id: 'Tinggi (Modal Raksasa, Teknologi)' },
      pricingPower: { en: 'Interdependent (Kinked Demand)', id: 'Saling Bergantung (Interdependen)' },
      demandElasticity: { en: 'Kinked (Elastic up, Inelastic down)', id: 'Kurva Permintaan Patah (Kinked)' },
    },
    characteristics: [
      {
        title: { en: 'Strategic Interdependence', id: 'Saling Ketergantungan Strategis' },
        description: {
          en: 'Firms watch each other like chess players. If Firm A cuts prices, Firm B and C will match it immediately to prevent losing customers.',
          id: 'Setiap gerakan seperti permainan catur. Jika Operator A menurunkan harga paket data, Operator B dan C langsung membalas dalam hitungan jam.',
        },
      },
      {
        title: { en: 'Non-Price Competition', id: 'Persaingan Non-Harga yang Intensif' },
        description: {
          en: 'Because price cuts spark destructive price wars, firms compete fiercely through celebrity endorsements, warranty terms, loyalty points, and branding.',
          id: 'Karena perang harga merugikan semua pihak, mereka bersaing lewat iklan TV megah, duta merek (brand ambassador), kualitas sinyal, dan bonus kuota.',
        },
      },
      {
        title: { en: 'High Barriers to Entry', id: 'Hambatan Masuk Tinggi' },
        description: {
          en: 'Massive capital outlays (e.g. buying semiconductor fabs or aircraft factories) prevent new startups from entering easily.',
          id: 'Dibutuhkan modal triliunan rupiah (misal pabrik perakitan pesawat, lisensi spektrum frekuensi telekomunikasi, kilang minyak).',
        },
      },
      {
        title: { en: 'Risk of Collusion or Cartels', id: 'Risiko Kolusi / Kartel' },
        description: {
          en: 'Firms may be tempted to secretly coordinate prices (like OPEC in oil), which is why antitrust laws strictly regulate them.',
          id: 'Godaan untuk bersekongkol mengatur kuota dan harga (seperti kartel minyak OPEC), sehingga diawasi ketat oleh KPPU (Komisi Pengawas Persaingan Usaha).',
        },
      },
    ],
    realExamples: [
      {
        name: { en: 'Commercial Aircraft Manufacturing (Boeing vs. Airbus)', id: 'Industri Pesawat Komersial (Airbus & Boeing)' },
        description: {
          en: 'A global duopoly where two giants produce virtually all the world\'s passenger twin-aisle jets.',
          id: 'Duopoli global: Maskapai penerbangan dunia hanya memesan pesawat jet penumpang utama dari dua raksasa ini.',
        },
        badge: { en: 'Global Duopoly', id: 'Duopoli Global' },
      },
      {
        name: { en: 'Cellular Telecommunication Operators', id: 'Operator Jaringan Seluler (Telkomsel, Indosat, XL)' },
        description: {
          en: '3-4 major telecom giants maintain cell towers and spectrum across thousands of islands.',
          id: 'Hanya ada 3-4 operator seluler besar yang memiliki infrastruktur BTS dan spektrum frekuensi di seluruh nusantara.',
        },
        badge: { en: 'Telecom Giants', id: 'Telekomunikasi' },
      },
      {
        name: { en: 'Mobile Operating Systems (Apple iOS vs. Google Android)', id: 'Sistem Operasi Smartphone (Android & iOS)' },
        description: {
          en: 'Over 99% of global smartphones run on software created by just two tech conglomerates.',
          id: 'Lebih dari 99% smartphone di seluruh dunia ditenagai oleh dua ekosistem raksasa ini.',
        },
        badge: { en: 'Tech Ecosystem', id: 'Teknologi Digital' },
      },
    ],
    advantages: [
      {
        en: 'Technological Innovation: Intense rivalry between wealthy titans sparks rapid smartphone and aerospace advances.',
        id: 'Inovasi Teknologi Cepat: Persaingan antar raksasa mendorong kemajuan pesat dalam fitur kamera, baterai, dan kecepatan jaringan.',
      },
      {
        en: 'Product Reliability: Big brands offer national warranties, extensive customer support, and stable supply chains.',
        id: 'Keandalan & Jaminan: Skala raksasa memastikan adanya jaringan purnajual, garansi resmi, dan stabilitas layanan.',
      },
    ],
    disadvantages: [
      {
        en: 'Sticky High Prices: Prices often remain higher than perfectly competitive levels as firms avoid price competition.',
        id: 'Harga Cenderung Kaku (Sticky): Harga relatif tinggi karena perusahaan menghindari perang harga yang merusak.',
      },
      {
        en: 'Cartel Collusion Danger: Risk of price-fixing agreements that silently hurt everyday consumers.',
        id: 'Bahaya Kartel: Potensi kesepakatan rahasia membagi wilayah atau mematok harga minimum yang merugikan masyarakat.',
      },
    ],
    teacherTip: {
      en: 'Illustrate with the Game Theory / Prisoner\'s Dilemma: If Coke and Pepsi both advertise, they spend millions and split the market 50/50. But if one stops advertising, the other wins all customers! That is why they must keep advertising.',
      id: 'Ajak siswa bermain Teori Permainan (Game Theory): Jika dua operator seluler sama-sama menahan harga, laba mereka aman. Tapi jika satu operator tiba-tiba banting harga, pesaing wajib membalas seketika agar pelanggannya tidak kabur!',
    },
  },

  monopolistic_competition: {
    id: 'monopolistic_competition',
    title: {
      en: 'Monopolistic Competition',
      id: 'Pasar Persaingan Monopolistis',
    },
    subtitle: {
      en: 'Many competing sellers offering differentiated, branded products',
      id: 'Banyak penjual yang menawarkan produk serupa namun memiliki diferensiasi / merek berbeda',
    },
    summary: {
      en: 'A realistic, hybrid market structure combining elements of both monopoly and competition. Many firms sell products that are close substitutes but differentiated by brand, styling, taste, packaging, or customer service.',
      id: 'Struktur pasar yang sangat umum di kehidupan sehari-hari, memadukan sifat persaingan dan monopoli. Terdapat banyak penjual yang menawarkan barang sejenis, namun masing-masing memiliki ciri khas (diferensiasi produk), aroma, kemasan, atau merek sendiri.',
    },
    imagePath: '/src/assets/images/market_monopolistic_comp_1792207634846.jpg',
    imageAlt: 'Lively urban street with numerous unique coffee shops, bakeries, and clothing boutiques each with distinct branding',
    keyStats: {
      numberOfFirms: { en: 'Many Firms', id: 'Banyak Penjual' },
      productType: { en: 'Differentiated (Branded, Flavors, Style)', id: 'Terdiferensiasi (Merek, Rasa, Kemasan)' },
      entryBarriers: { en: 'Low (Easy to Open a Store)', id: 'Rendah (Mudah Membuka Usaha Baru)' },
      pricingPower: { en: 'Slight / Moderate (Brand Loyalty)', id: 'Sedang (Tergantung Loyalitas Merek)' },
      demandElasticity: { en: 'Elastic (Many Alternatives)', id: 'Cukup Elastis (Banyak Pilihan Pengganti)' },
    },
    characteristics: [
      {
        title: { en: 'Product Differentiation', id: 'Diferensiasi Produk Nyata' },
        description: {
          en: 'Coffee is still coffee, but Starbucks tastes different from Dunkin\', Fore, or local specialty roasters due to atmosphere, roasting style, and syrups.',
          id: 'Sama-sama menjual kopi, namun Kopi Kenangan, Janji Jiwa, Point Coffee, dan Starbucks memiliki racikan, susu, kemasan, dan suasana berbeda.',
        },
      },
      {
        title: { en: 'Mini-Monopoly on Brand', id: 'Monopoli Merek Sendiri' },
        description: {
          en: 'Only Nike can sell shoes with the "Swoosh" logo. Loyal customers will willingly pay a $20 premium for that specific identity.',
          id: 'Hanya satu toko yang boleh menjual dengan nama mereknya. Pelanggan setia rela membayar sedikit lebih mahal demi merek favorit.',
        },
      },
      {
        title: { en: 'Low Barriers to Entry', id: 'Hambatan Masuk Relatif Rendah' },
        description: {
          en: 'Anyone with culinary skill or capital can lease a storefront, buy an espresso machine, and open a new cafe in the neighborhood.',
          id: 'Siapa pun yang memiliki resep lezat atau tabungan dapat menyewa ruko dan membuka kedai kafe atau salon baru.',
        },
      },
      {
        title: { en: 'Heavy Marketing & Packaging', id: 'Peran Kuat Promosi & Kemasan' },
        description: {
          en: 'Firms spend significantly on Instagram ads, aesthetic store decor, loyalty punch cards, and influencer reviews.',
          id: 'Penjual gencar mempromosikan keunikan produk lewat media sosial, desain tempat yang "instagrammable", dan layanan ramah.',
        },
      },
    ],
    realExamples: [
      {
        name: { en: 'Coffee Shops & Bubble Tea Stalls', id: 'Kedai Kopi & Minuman Boba' },
        description: {
          en: 'Hundreds of cafes compete in every city; each wins fans through signature recipes, ambiance, and music playlists.',
          id: 'Ratusan kedai kopi dalam satu kota bersaing dengan menawarkan racikan aren khas, suasana nyaman bekerja, atau promo pesan antar.',
        },
        badge: { en: 'Urban Food & Beverage', id: 'Kuliner & Kafe' },
      },
      {
        name: { en: 'Fast Food Burger & Fried Chicken Chains', id: 'Restoran Cepat Saji' },
        description: {
          en: 'McDonald\'s, Burger King, Wendy\'s, and local gourmet burger joints all sell burgers, but with distinct seasoning and branding.',
          id: 'KFC, McD, Richeese, Sabana, dan Hisana sama-sama menjual ayam goreng krispi, namun resep tepung dan sausnya berbeda.',
        },
        badge: { en: 'Quick Service Dining', id: 'Makanan Cepat Saji' },
      },
      {
        name: { en: 'Clothing Brands & Sneaker Makers', id: 'Industri Pakaian & Sepatu Fashion' },
        description: {
          en: 'Zara, H&M, Uniqlo, and local indie designers all sell basic t-shirts and jeans with varied cuts, fabrics, and prestige.',
          id: 'Erigo, Uniqlo, Zara, dan distro lokal menjual kaos dan celana dengan potongan pola, bahan kain, dan gaya fesyen berbeda.',
        },
        badge: { en: 'Apparel & Fashion', id: 'Pakaian & Mode' },
      },
    ],
    advantages: [
      {
        en: 'Vibrant Consumer Variety: Shoppers enjoy endless choices of flavors, colors, designs, and shopping experiences.',
        id: 'Banyak Pilihan bagi Konsumen: Konsumen dimanjakan dengan aneka variasi rasa, desain estetis, dan kenyamanan tempat.',
      },
      {
        en: 'Dynamic Innovation: Constant incentive to invent seasonal drinks, trendy merchandise, or friendly perks.',
        id: 'Inovasi Berkelanjutan: Produsen terpacu menciptakan menu musiman baru, packaging menarik, dan peningkatan servis.',
      },
    ],
    disadvantages: [
      {
        en: 'Excess Advertising Costs: Billions spent on persuasive marketing and packaging passed down to retail prices.',
        id: 'Biaya Iklan & Kemasan Tinggi: Pengeluaran untuk promosi dan branding estetis seringkali membebani harga jual akhir.',
      },
      {
        en: 'Excess Capacity: Stores often operate below full theoretical capacity (empty tables on weekday afternoons).',
        id: 'Kapasitas Berlebih: Seringkali ada meja kafe yang kosong di siang hari kerja, mencerminkan inefisiensi skala pabrik/toko.',
      },
    ],
    teacherTip: {
      en: 'Ask students: "Why do you buy a particular brand of shampoo or shoes instead of the absolute cheapest one on the shelf?" This immediately connects them to product differentiation and brand loyalty!',
      id: 'Tanyakan ke siswa: "Mengapa kamu rela membeli sepatu merek tertentu padahal ada sepatu lain yang harganya separuhnya?" Jawaban mereka tentang kenyamanan, desain, dan gengsi merek membuktikan esensi Pasar Monopolistis!',
    },
  },
};

export const COMPARISON_MATRIX = [
  {
    feature: { en: 'Number of Sellers', id: 'Jumlah Penjual' },
    perfect_competition: { en: 'Very Many / Infinite', id: 'Sangat Banyak' },
    monopoly: { en: 'One Single Firm', id: 'Satu (Tunggal)' },
    oligopoly: { en: 'Few Dominant Giants (2-8)', id: 'Sedikit (2-8 Perusahaan Besar)' },
    monopolistic_competition: { en: 'Many Independent Firms', id: 'Banyak' },
  },
  {
    feature: { en: 'Product Characteristics', id: 'Karakteristik Produk' },
    perfect_competition: { en: 'Homogeneous (Identical)', id: 'Homogen (Sama Persis)' },
    monopoly: { en: 'Unique (No Close Substitute)', id: 'Unik (Tanpa Pengganti Dekat)' },
    oligopoly: { en: 'Standardized or Differentiated', id: 'Standar atau Terdiferensiasi' },
    monopolistic_competition: { en: 'Differentiated (Brands, Flavors)', id: 'Terdiferensiasi (Merek, Rasa)' },
  },
  {
    feature: { en: 'Barriers to Entry & Exit', id: 'Hambatan Masuk & Keluar' },
    perfect_competition: { en: 'None (Completely Free)', id: 'Tidak Ada (Bebas)' },
    monopoly: { en: 'Extremely High (Blocked)', id: 'Sangat Tinggi (Tertutup)' },
    oligopoly: { en: 'Substantial / High', id: 'Tinggi (Modal & Lisensi)' },
    monopolistic_competition: { en: 'Relatively Low / Easy', id: 'Rendah (Mudah Masuk)' },
  },
  {
    feature: { en: 'Price Control Ability', id: 'Kemampuan Menentukan Harga' },
    perfect_competition: { en: 'None (Price Taker)', id: 'Tidak Ada (Price Taker)' },
    monopoly: { en: 'High (Price Maker)', id: 'Tinggi (Price Maker)' },
    oligopoly: { en: 'Strategic Interdependence', id: 'Saling Mempengaruhi (Interdependen)' },
    monopolistic_competition: { en: 'Slight to Moderate', id: 'Ada Sedikit (Tergantung Merek)' },
  },
  {
    feature: { en: 'Non-Price Competition (Ads)', id: 'Peran Iklan & Promosi' },
    perfect_competition: { en: 'None (Wastes Money)', id: 'Tidak Ada (Tidak Bermanfaat)' },
    monopoly: { en: 'Informational / Public Relations', id: 'Humas & Edukasi Layanan' },
    oligopoly: { en: 'Intense (Brand Campaigns)', id: 'Sangat Gencar (Perang Iklan)' },
    monopolistic_competition: { en: 'Very High (Differentiating)', id: 'Tinggi (Menonjolkan Keunikan)' },
  },
  {
    feature: { en: 'Classic Examples', id: 'Contoh Nyata' },
    perfect_competition: { en: 'Raw Wheat, Forex, Uncut Gems', id: 'Gabah Padi, Valas, Pasar Ikan' },
    monopoly: { en: 'PLN Electricity, Tap Water, Patented Med', id: 'PLN, PDAM, Kereta Api KAI' },
    oligopoly: { en: 'Airlines, Telecom, Smartphone OS', id: 'Operator Seluler, Maskapai, Semen' },
    monopolistic_competition: { en: 'Coffee Cafes, Burger Joints, Clothing', id: 'Kedai Kopi, Resto Cepat Saji, Kaos' },
  },
];

export const SCENARIO_CARDS: ScenarioCard[] = [
  {
    id: 's1',
    title: { en: 'Farmer Wayan’s Unmilled Grain', id: 'Gabah Kering Petani Wayan' },
    business: { en: 'Wayan Rice Paddy Farm', id: 'Sawah Padi Petani Wayan' },
    scenario: {
      en: 'Wayan harvests 5 tons of standard IR-64 paddy grain. All neighboring farmers grow the exact same grain. When Wayan asked for $0.10 more per kilogram, wholesale buyers simply purchased from the farmer next door.',
      id: 'Pak Wayan memanen 5 ton gabah kering IR-64 standar. Ribuan petani di desanya menanam gabah yang persis sama. Saat Pak Wayan mencoba menaikkan harga Rp 200 per kg, tengkulak langsung pindah membeli ke sawah sebelah.',
    },
    clues: [
      { en: 'Homogeneous product with no branding', id: 'Barang homogen tanpa merek khusus' },
      { en: 'Cannot dictate price (Price Taker)', id: 'Tidak punya kuasa menentukan harga' },
      { en: 'Thousands of identical producers', id: 'Terdapat ribuan petani sejenis' },
    ],
    correctMarket: 'perfect_competition',
    explanation: {
      en: 'Because standard agricultural raw crops are identical and produced by thousands of independent farmers, any attempt to raise price above market equilibrium results in lost sales.',
      id: 'Karena hasil panen pertanian standar bersifat homogen dan dijual oleh banyak petani, penjual menjadi "Price Taker" dan wajib mengikuti harga pasar.',
    },
    difficulty: 'easy',
  },
  {
    id: 's2',
    title: { en: 'National Clean Water Utility', id: 'Penyedia Air Bersih Kota' },
    business: { en: 'Metropolis Water Board (PDAM)', id: 'Perusahaan Air Minum Daerah (PDAM)' },
    scenario: {
      en: 'Metropolis Water Board owns the only treated underground water pipe network supplying city homes. Citizens who want piped tap water cannot subscribe to any competing supplier.',
      id: 'PDAM memiliki satu-satunya jaringan pipa air minum bawah tanah yang tersambung ke rumah warga di kota. Warga tidak memiliki pilihan perusahaan pipa air alternatif.',
    },
    clues: [
      { en: 'Single supplier with zero close substitutes', id: 'Hanya ada satu penyedia tunggal' },
      { en: 'Infrastructure barrier to entry (Natural Monopoly)', id: 'Hambatan infrastruktur biaya tinggi (Monopoli Alami)' },
      { en: 'Government authorized utility', id: 'Diberikan wewenang monopoli oleh pemerintah' },
    ],
    correctMarket: 'monopoly',
    explanation: {
      en: 'A natural monopoly arises when one firm can supply the entire market at a lower cost than multiple competing firms could, due to massive pipeline infrastructure.',
      id: 'Merupakan monopoli alamiah karena sangat tidak efisien jika banyak perusahaan membongkar jalan untuk menanam beberapa pipa air yang bersaing.',
    },
    difficulty: 'easy',
  },
  {
    id: 's3',
    title: { en: 'The Great Mobile Data Price War', id: 'Perang Tarif Paket Data Seluler' },
    business: { en: 'Telco Connect & Three Rival Carriers', id: '3-4 Operator Jaringan Telekomunikasi' },
    scenario: {
      en: 'When Telco Connect launched a special unlimited evening data plan, the other two major cellular operators updated their mobile apps within 24 hours to offer identical perks to retain subscribers.',
      id: 'Ketika Operator A meluncurkan paket kuota malam murah, dua operator telekomunikasi lainnya langsung merilis paket tandingan dalam waktu kurang dari 24 jam.',
    },
    clues: [
      { en: 'Dominated by 3-4 giant network providers', id: 'Dikuasai 3 hingga 4 operator raksasa' },
      { en: 'Decisions directly trigger rival counter-moves (Interdependence)', id: 'Aksi satu perusahaan langsung direspons pesaing (Saling Bergantung)' },
      { en: 'Huge capital required for spectrum and cell towers', id: 'Modal spektrum dan menara BTS sangat tinggi' },
    ],
    correctMarket: 'oligopoly',
    explanation: {
      en: 'Oligopoly is defined by mutual interdependence among few dominant firms. Actions by one player immediately force responses from the others.',
      id: 'Ciri utama oligopoli adalah ketergantungan strategis (mutual interdependence), di mana keputusan harga satu perusahaan langsung memicu respons pesaing.',
    },
    difficulty: 'medium',
  },
  {
    id: 's4',
    title: { en: 'The Specialty Espresso Roaster', id: 'Kedai Kopi Artisan & Susu Gula Aren' },
    business: { en: 'Urban Beans Boutique Cafe', id: 'Kedai Kopi "Senja Rasa"' },
    scenario: {
      en: 'Urban Beans opened on a street with six other coffee spots. Even though coffee is readily available nearby, customers happily pay $4.50 because of their signature toasted hazelnut syrup and aesthetic vinyl record lounge.',
      id: 'Kedai kopi ini berada di jalan yang sudah memiliki 5 kedai kopi lain. Meski demikian, pembeli tetap ramai karena menyukai racikan sirup kayu manis buatan sendiri dan suasana kafe yang nyaman.',
    },
    clues: [
      { en: 'Many competitors in the same district', id: 'Banyak pesaing di area yang sama' },
      { en: 'Product differentiated by flavor, ambiance, and branding', id: 'Produk terdiferensiasi lewat rasa unik dan suasana' },
      { en: 'Easy for new cafes to lease a nearby shop', id: 'Mudah bagi kafe baru untuk membuka toko' },
    ],
    correctMarket: 'monopolistic_competition',
    explanation: {
      en: 'Monopolistic competition features many sellers with differentiated products. The unique atmosphere and recipe give the cafe modest pricing power over loyal fans.',
      id: 'Pasar monopolistik memiliki banyak penjual dengan produk yang memiliki ciri khas (diferensiasi), sehingga penjual punya sedikit kuasa harga pada pelanggan setianya.',
    },
    difficulty: 'easy',
  },
  {
    id: 's5',
    title: { en: 'Commercial Airliner Manufacturers', id: 'Pabrik Pesawat Terbang Penumpang' },
    business: { en: 'AeroJet vs SkyTitan (Global Aircraft)', id: 'Airbus vs Boeing' },
    scenario: {
      en: 'Virtually all commercial airlines buying new 300-seat twin-engine passenger aircraft must choose between two aerospace conglomerates due to the multi-billion-dollar R&D cost of designing an airliner.',
      id: 'Hampir seluruh maskapai penerbangan dunia yang ingin memesan armada pesawat jet lorong ganda hanya memiliki pilihan antara dua perusahaan manufaktur dirgantara raksasa dunia.',
    },
    clues: [
      { en: 'Only two major global manufacturers (Duopoly)', id: 'Hanya ada 2 produsen utama di dunia (Duopoli)' },
      { en: 'Billions required in technological certification and factory scale', id: 'Hambatan modal dan teknologi mencapai ratusan triliun rupiah' },
    ],
    correctMarket: 'oligopoly',
    explanation: {
      en: 'Commercial aerospace manufacturing is a classic duopoly/oligopoly characterized by extreme barriers to entry and strategic competitive maneuvers.',
      id: 'Manufaktur pesawat jet komersial adalah contoh nyata oligopoli (duopoli) karena tingginya hambatan teknologi, regulasi keselamatan udara, dan modal pabrik.',
    },
    difficulty: 'medium',
  },
  {
    id: 's6',
    title: { en: 'State Railway Track Corporation', id: 'Operator Kereta Api Nasional' },
    business: { en: 'National Rail Transit', id: 'PT Kereta Api Indonesia (KAI)' },
    scenario: {
      en: 'A passenger traveling by rail across the country must buy tickets from the single national rail agency that owns the locomotives, schedules, and cross-island railway tracks.',
      id: 'Penumpang yang ingin bepergian antar kota menggunakan moda transportasi kereta api rel jalur utama hanya dapat membeli tiket dari satu perusahaan operator resmi milik negara.',
    },
    clues: [
      { en: 'Sole operator of physical train tracks and intercity rail', id: 'Operator tunggal jalur dan armada kereta api' },
      { en: 'State-designated national enterprise', id: 'Dikelola oleh BUMN atas mandat undang-undang' },
    ],
    correctMarket: 'monopoly',
    explanation: {
      en: 'Intercity rail operates as a government-regulated monopoly due to the immense national capital required to lay and maintain physical steel track corridors.',
      id: 'Transportasi kereta api antar kota beroperasi sebagai monopoli negara karena biaya pengadaan jalur rel ganda sangat besar dan vital bagi publik.',
    },
    difficulty: 'easy',
  },
  {
    id: 's7',
    title: { en: 'Handmade Street Food Martabak Stalls', id: 'Pedagang Martabak Manis & Telur' },
    business: { en: 'Bang Somad Martabak Delights', id: 'Gerobak Martabak Bang Somad' },
    scenario: {
      en: 'In a single sub-district, over twenty martabak food carts operate. Bang Somad stands out by offering a signature green matcha batter and premium melted mozzarella, charging $1 extra.',
      id: 'Di sepanjang jalan terdapat 15 gerobak martabak. Bang Somad memiliki banyak langganan karena menawarkan adonan pandan wangi dan keju lumer istimewa, dengan harga sedikit lebih tinggi.',
    },
    clues: [
      { en: 'Dozens of food sellers in the immediate vicinity', id: 'Banyak pedagang makanan serupa di sekitar' },
      { en: 'Differentiated by special toppings and dough recipe', id: 'Diferensiasi rasa adonan dan topping istimewa' },
      { en: 'Low initial capital to start a cart', id: 'Modal relatif terjangkau untuk memulai usaha gerobak' },
    ],
    correctMarket: 'monopolistic_competition',
    explanation: {
      en: 'Street food with personalized recipes and distinctive ingredients exemplifies monopolistic competition: low entry barriers, many vendors, and differentiated goods.',
      id: 'Usaha kuliner jalanan dengan racikan resep istimewa adalah contoh pasar persaingan monopolistik: banyak penjual, produk terdiferensiasi, dan modal masuk rendah.',
    },
    difficulty: 'easy',
  },
  {
    id: 's8',
    title: { en: 'Global Crude Oil Extraction Cartel', id: 'Organisasi Negara Pengekspor Minyak Bumi' },
    business: { en: 'Petroleum Exporters Alliance', id: 'Aliansi Produsen Minyak (OPEC)' },
    scenario: {
      en: 'Representatives from a dozen major oil-exporting member states convene in Vienna to agree on national crude extraction quotas to prevent prices from dropping.',
      id: 'Perwakilan negara-negara produsen minyak utama dunia bertemu untuk menyepakati kuota produksi minyak mentah bersama demi menjaga kestabilan harga minyak dunia.',
    },
    clues: [
      { en: 'A small group of dominant exporters coordinate production', id: 'Sekelompok produsen besar berkoordinasi mengatur kuota' },
      { en: 'Collusion / Cartel behavior', id: 'Praktik kartel / kesepakatan bersama' },
    ],
    correctMarket: 'oligopoly',
    explanation: {
      en: 'The international oil market is an oligopoly where key producing nations form a cartel to influence global supply and pricing.',
      id: 'Pasar minyak dunia merupakan oligopoli terkoordinasi (kartel) di mana segelintir produsen utama berkolusi menentukan volume pasokan.',
    },
    difficulty: 'hard',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: {
      en: 'In which market structure is the individual firm a "Price Taker" that has ZERO control over the market selling price?',
      id: 'Pada struktur pasar manakah produsen bertindak sebagai "Price Taker" (penerima harga) dan sama sekali tidak bisa menentukan harga jual sendiri?',
    },
    options: [
      { en: 'Monopoly', id: 'Pasar Monopoli' },
      { en: 'Oligopoly', id: 'Pasar Oligopoli' },
      { en: 'Perfect Competition', id: 'Pasar Persaingan Sempurna' },
      { en: 'Monopolistic Competition', id: 'Pasar Persaingan Monopolistis' },
    ],
    correctIndex: 2,
    hint: {
      en: 'Think of thousands of wheat farmers selling identical bushels of grain.',
      id: 'Ingat contoh ribuan petani yang menjual gabah atau beras dengan jenis yang sama persis.',
    },
    explanation: {
      en: 'In Perfect Competition, firms sell identical products and represent such a minuscule fraction of total supply that attempting to raise price causes all buyers to go to rivals.',
      id: 'Dalam Pasar Persaingan Sempurna, produknya homogen dan penjual sangat banyak, sehingga penjual hanya mengikuti harga keseimbangan pasar (Price Taker).',
    },
    conceptTag: { en: 'Pricing Power', id: 'Kekuasaan Harga' },
  },
  {
    id: 'q2',
    question: {
      en: 'What is the primary difference between Perfect Competition and Monopolistic Competition?',
      id: 'Apa perbedaan paling mendasar antara Pasar Persaingan Sempurna dan Pasar Persaingan Monopolistis?',
    },
    options: [
      {
        en: 'Perfect competition has one seller, while monopolistic competition has few.',
        id: 'Persaingan sempurna memiliki 1 penjual, sedangkan monopolistis memiliki sedikit penjual.',
      },
      {
        en: 'Products are identical in perfect competition, but differentiated in monopolistic competition.',
        id: 'Produknya homogen pada persaingan sempurna, namun terdiferensiasi (berbeda corak/merek) pada monopolistis.',
      },
      {
        en: 'Monopolistic competition has insurmountable barriers to entry.',
        id: 'Pasar monopolistis memiliki hambatan masuk yang tidak bisa ditembus.',
      },
      {
        en: 'Advertising is unnecessary in monopolistic competition.',
        id: 'Iklan sama sekali tidak dibutuhkan pada pasar persaingan monopolistis.',
      },
    ],
    correctIndex: 1,
    hint: {
      en: 'Think about how every coffee cafe or shoe brand tries to make their product unique.',
      id: 'Pikirkan mengapa setiap kedai kopi atau merek sepatu berusaha membuat produknya terlihat berbeda dari yang lain.',
    },
    explanation: {
      en: 'Both have many sellers and low entry barriers, but perfect competition sells identical goods while monopolistic competition features differentiated goods (brands, styles, packaging).',
      id: 'Keduanya sama-sama memiliki banyak penjual dan mudah dimasuki, namun pada persaingan sempurna barangnya identik (homogen), sedangkan pada monopolistis barangnya terdiferensiasi (punya ciri khas/merek).',
    },
    conceptTag: { en: 'Product Differentiation', id: 'Diferensiasi Produk' },
  },
  {
    id: 'q3',
    question: {
      en: 'Why do governments often permit a single municipal company to supply tap water or electricity grids?',
      id: 'Mengapa pemerintah sering mengizinkan satu perusahaan saja yang mengelola jaringan pipa air bersih atau transmisi listrik (Monopoli Alamiah)?',
    },
    options: [
      {
        en: 'Because politicians do not want citizens to have choices.',
        id: 'Karena pemerintah tidak ingin masyarakat memiliki banyak pilihan.',
      },
      {
        en: 'It is a Natural Monopoly where building duplicate infrastructure networks is economically wasteful.',
        id: 'Merupakan Monopoli Alamiah di mana membangun jaringan pipa/kabel ganda yang bersaing sangat boros biaya.',
      },
      {
        en: 'Tap water has thousands of close substitutes like bottled tea.',
        id: 'Karena air keran memiliki ribuan barang pengganti seperti teh kemasan.',
      },
      {
        en: 'Because utility prices naturally decrease when there is no regulation.',
        id: 'Karena harga utilitas akan otomatis turun tanpa pengawasan.',
      },
    ],
    correctIndex: 1,
    hint: {
      en: 'Imagine three competing water companies digging up your street to lay three sets of pipes.',
      id: 'Bayangkan jika 3 perusahaan air berbeda menggali aspal depan rumahmu untuk memasang 3 pipa terpisah.',
    },
    explanation: {
      en: 'A Natural Monopoly has massive fixed infrastructure costs. Having a single network achieves immense economies of scale, provided the government regulates prices to protect the public.',
      id: 'Monopoli alamiah terjadi ketika biaya infrastruktur awal sangat tinggi, sehingga satu perusahaan tunggal dengan skala besar lebih efisien melayani masyarakat dibanding banyak jaringan ganda yang tumpang tindih.',
    },
    conceptTag: { en: 'Natural Monopoly', id: 'Monopoli Alamiah' },
  },
  {
    id: 'q4',
    question: {
      en: 'Which market structure is famous for "Strategic Interdependence", where firms closely monitor and react to their rivals\' moves like chess grandmasters?',
      id: 'Struktur pasar manakah yang terkenal dengan "Saling Ketergantungan Strategis" (Strategic Interdependence), di mana keputusan harga satu perusahaan langsung memicu respons pesaingnya?',
    },
    options: [
      { en: 'Oligopoly', id: 'Pasar Oligopoli' },
      { en: 'Perfect Competition', id: 'Pasar Persaingan Sempurna' },
      { en: 'Pure Monopoly', id: 'Pasar Monopoli Murni' },
      { en: 'Bilateral Monopoly', id: 'Monopoli Bilateral' },
    ],
    correctIndex: 0,
    hint: {
      en: 'Look at smartphone mobile operators or airline fare battles.',
      id: 'Lihat persaingan antara operator seluler besar atau maskapai penerbangan.',
    },
    explanation: {
      en: 'In an Oligopoly, only a few large players dominate. Because each player controls a huge chunk of market share, one firm’s promotion or price cut directly impacts all others.',
      id: 'Dalam Oligopoli, pasar dikuasai segelintir perusahaan raksasa. Gerak-gerik satu pemain (diskon, paket baru) langsung berimbas besar pada penjualan pemain lain.',
    },
    conceptTag: { en: 'Game Theory & Interdependence', id: 'Ketergantungan Strategis' },
  },
  {
    id: 'q5',
    question: {
      en: 'Which of the following is the BEST real-world example of an Oligopoly?',
      id: 'Manakah dari pilihan berikut yang merupakan contoh paling tepat dari Pasar Oligopoli?',
    },
    options: [
      { en: 'A traditional morning fish market at the seaside dock', id: 'Pasar pelelangan ikan segar di dermaga nelayan' },
      { en: 'Commercial passenger aircraft manufacturing (Boeing & Airbus)', id: 'Industri pesawat jet komersial dunia (Boeing & Airbus)' },
      { en: 'A local neighborhood tailor who repairs zippers', id: 'Penjahit vermak levis keliling di perumahan' },
      { en: 'State electric transmission network (PLN)', id: 'Jaringan transmisi listrik nasional (PLN)' },
    ],
    correctIndex: 1,
    hint: {
      en: 'Think of an industry dominated by just two global titans with multi-billion-dollar factories.',
      id: 'Cari industri yang didominasi oleh hanya dua raksasa dunia dengan modal bernilai ratusan triliun.',
    },
    explanation: {
      en: 'Boeing and Airbus form a worldwide duopoly (an oligopoly with 2 firms), controlling almost the entire global market for commercial passenger airliners.',
      id: 'Boeing dan Airbus adalah contoh duopoli/oligopoli dunia paling terkenal karena hanya dua raksasa inilah yang mampu memproduksi pesawat jet penumpang komersial skala besar.',
    },
    conceptTag: { en: 'Real-world Examples', id: 'Contoh Nyata' },
  },
  {
    id: 'q6',
    question: {
      en: 'Why do restaurants and cafes spend heavily on branding, neon aesthetics, and social media influencers?',
      id: 'Mengapa kafe dan restoran banyak mengeluarkan biaya untuk desain tempat estetik, merek unik, dan endorse influencer?',
    },
    options: [
      {
        en: 'To differentiate their product and build customer brand loyalty in Monopolistic Competition.',
        id: 'Untuk menciptakan diferensiasi produk dan membangun loyalitas pelanggan pada Pasar Monopolistis.',
      },
      {
        en: 'Because the government forces all restaurants to advertise equally.',
        id: 'Karena pemerintah mewajibkan semua kafe beriklan dengan biaya yang sama.',
      },
      {
        en: 'To turn their restaurant into a natural monopoly with no food alternatives.',
        id: 'Agar kafe tersebut menjadi monopoli alamiah tanpa alternatif makanan lain.',
      },
      {
        en: 'Because their food is 100% identical to every other restaurant.',
        id: 'Karena menu makanan mereka sama persis 100% tanpa ada beda sedikit pun.',
      },
    ],
    correctIndex: 0,
    hint: {
      en: 'A good aesthetic helps justify charging $5 for a latte instead of $1.50.',
      id: 'Suasana estetik membuat pelanggan bersedia membayar lebih mahal untuk secangkir kopi.',
    },
    explanation: {
      en: 'In Monopolistic Competition, product differentiation allows a business to carve out a loyal following, giving them pricing power over close substitutes.',
      id: 'Diferensiasi produk (lewat merek, kenyamanan, dan rasa khas) memberikan produsen sedikit kendali atas harga, karena pembeli menyukai keunikan tersebut.',
    },
    conceptTag: { en: 'Product Differentiation', id: 'Diferensiasi Produk' },
  },
];
