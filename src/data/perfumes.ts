import { Perfume, CustomerReview, CurrencyConfig, CurrencyCode } from '../types';
import dkhoonDesert from '../assets/images/dkhoon_desert.jpeg';
import zumarFragrance from '../assets/images/zumar.jpeg';
import utooratSignatureBlue from '../assets/images/utoorat_e_azami_signature_blue.jpeg';
import afnanNightOut from '../assets/images/afnan_9pm_night_out.jpeg';
import lumiereParfum from '../assets/images/lumiere_parfum.jpeg';

export const HERO_IMAGE = utooratSignatureBlue;
export const FLAGSHIP_PERFUME_IMAGE = utooratSignatureBlue;

export {
  dkhoonDesert,
  zumarFragrance,
  utooratSignatureBlue,
  afnanNightOut,
  lumiereParfum
};

export const PERFUMES: Perfume[] = [
  {
    id: 'dkhoon-desert',
    name: 'Dkhoon Desert',
    nameAr: 'دخون ديزرت',
    subName: 'دخون الإماراتية',
    collection: 'Oud Collection',
    collectionAr: 'مجموعة العود النادر',
    price: 185,
    originalPrice: 215,
    rating: 4.95,
    reviewCount: 142,
    volume: '100ml / 3.4 fl oz',
    concentration: 'Eau de Parfum',
    image: dkhoonDesert,
    description: 'An evocative olfactory mirage born from golden desert dunes and mystic royal frankincense. Harmonizes sparkling golden saffron with aged Cambodian agarwood and delicate Taif rose petals.',
    descriptionAr: 'تحفة عطرية مستوحاة من رمال الصحراء الذهبية والبخور الإماراتي الأصيل مع نفحات الزعفران النادر والورد الطائفي وعود كمبودي عتيق.',
    notes: {
      top: ['Rare Golden Saffron', 'Sunlit Bergamot', 'Warm Cardamom'],
      heart: ['Taif Royal Rose', 'Omani Frankincense', 'Smoked Cinnamon Bark'],
      base: ['Cambodian Agarwood (Oud)', 'Desert Ambergris', 'Atlas Cedar']
    },
    accords: ['Smoky Oud', 'Warm Spicy', 'Amber', 'Resinous', 'Rose'],
    longevity: '14+ Hours',
    sillage: 'Regal & Expansive',
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: 'zumar',
    name: 'Zumar',
    nameAr: 'زُمَر',
    subName: 'Extrait Royal',
    collection: 'Evening Collection',
    collectionAr: 'مجموعة السهرة الفاخرة',
    price: 220,
    originalPrice: 250,
    rating: 4.98,
    reviewCount: 98,
    volume: '100ml / 3.4 fl oz',
    concentration: 'Extrait de Parfum',
    image: zumarFragrance,
    description: 'A sovereign nectar steeped in aged cognac barrels and velvety Damascena rose. Zumar envelops the wearer in warm smoked bourbon vanilla, golden molten amber, and creamy Mysore sandalwood.',
    descriptionAr: 'إكسير ملوكي غني بلمسات الكونياك المعتق والورد الدمشقي، يتألق مع الفانيليا المدخنة والعنبر الذائب وخشب الصندل الميسوري الفاخر.',
    notes: {
      top: ['Aged French Cognac', 'Pink Peppercorn', 'Honeyed Dried Fig'],
      heart: ['Damascena Rose Petals', 'Molten Golden Amber', 'Grated Nutmeg'],
      base: ['Smoked Bourbon Vanilla', 'Mysore Sandalwood', 'Cashmere Accord']
    },
    accords: ['Boozy Gourmand', 'Amber Floral', 'Woody Warmth', 'Vanilla'],
    longevity: '16+ Hours',
    sillage: 'Hypnotic & Intimate',
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    badge: 'Masterpiece'
  },
  {
    id: 'signature-blue',
    name: 'Utoorat-e-Azami Signature Blue',
    nameAr: 'عطورات اعظمی سيجنتشر بلو',
    subName: 'Hersh Iahab Extrait',
    collection: 'Signature Collection',
    collectionAr: 'المجموعة الملكية الخاصة',
    price: 260,
    originalPrice: 295,
    rating: 5.0,
    reviewCount: 184,
    volume: '50ml / 1.7 fl oz',
    concentration: 'Extrait de Parfum',
    image: utooratSignatureBlue,
    description: 'The crown jewel of the Azami house. Cut like a blue diamond with crystalline Mediterranean citrus, precious Florentine iris, sparkling ambroxan, and ethereal silken white musk.',
    descriptionAr: 'درة التاج من دار أعظمي. عطر يستحضر بريق الماس الأزرق بنقاء الحمضيات الإيطالية وسحر زنبق الوادي والأمبروكسان البلوري والمسك الأبيض الحريري.',
    notes: {
      top: ['Crisp Azure Mint', 'Calabrian Bergamot', 'Green Apple Skin'],
      heart: ['Florentine Iris', 'French Lavender Absolute', 'Crushed White Pepper'],
      base: ['Crystal Ambroxan', 'Smoked Royal Cedar', 'Silken White Musk']
    },
    accords: ['Aquatic Crystal', 'Fresh Aromatic', 'Iris Powder', 'Musk Amber'],
    longevity: '18+ Hours',
    sillage: 'Monolithic & Magnetic',
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    badge: 'House Signature'
  },
  {
    id: 'afnan-9pm',
    name: 'Afnan 9PM Night Out',
    nameAr: 'أفنان ٩ بي إم نايت أوت',
    subName: 'Extrait de Parfum',
    collection: 'Evening Collection',
    collectionAr: 'مجموعة السهرة الفاخرة',
    price: 160,
    originalPrice: 185,
    rating: 4.92,
    reviewCount: 310,
    volume: '100ml / 3.4 fl oz',
    concentration: 'Extrait de Parfum',
    image: afnanNightOut,
    description: 'Created for electrifying nights under neon skylines. Opens with dark spiced plum and crisp apple, leading to an intoxicating heart of orange blossom wrapped in black marble amber and wild patchouli.',
    descriptionAr: 'صُمم لليالي الساحرة المفعمة بالحيوية والجاذبية. يفتتح بنفحات البرقوق الأسود والقرفة المنعشة مع زهر البرتقال وعنبر الرخام الأسود والباتشولي البري.',
    notes: {
      top: ['Black Plum', 'Crisp Red Apple', 'Wild Ceylon Cinnamon', 'Bergamot'],
      heart: ['Spiced Lily of the Valley', 'Orange Blossom Absolute', 'Nutmeg'],
      base: ['Black Marble Amber', 'Indonesian Patchouli', 'Tonka Bean', 'Dark Vanilla']
    },
    accords: ['Spicy Sweet', 'Fruity Amber', 'Vanilla Patchouli', 'Night Out'],
    longevity: '12+ Hours',
    sillage: 'Loud & Seductive',
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    badge: 'Night Icon'
  },
  {
    id: 'lumiere-parfum',
    name: 'Lumière Parfum',
    nameAr: 'لوميير بارفان',
    subName: 'Sculpted Pure Parfum',
    collection: 'Fresh Collection',
    collectionAr: 'المجموعة المنعشة الراقية',
    price: 210,
    originalPrice: 240,
    rating: 4.89,
    reviewCount: 86,
    volume: '100ml / 3.4 fl oz',
    concentration: 'Parfum',
    image: lumiereParfum,
    description: 'An architectural tribute to ethereal radiance and timeless purity. Silky white Sambac jasmine and morning peony float over translucent white agarwood and soft cashmere wool.',
    descriptionAr: 'تحفة معمارية بيضاء ترمز إلى النقاء والفخامة الهادئة. مزيج من ياسمين السامباك الأبيض والفاوانيا الوردية مع العود الأبيض النقي وخشب الكشمير المخملي.',
    notes: {
      top: ['White Jasmine Sambac', 'Tunisian Neroli', 'Mandora Citrus'],
      heart: ['Dewy Pink Peony', 'Golden Osmanthus', 'Powdered Florentine Orris'],
      base: ['Velvet White Agarwood', 'Cashmere Wood', 'Clean Luminescent Musk']
    },
    accords: ['White Floral', 'Airy Musky', 'Soft Wood', 'Citrus Blossom'],
    longevity: '12+ Hours',
    sillage: 'Graceful & Elegant',
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    badge: 'Artisanal Flacon'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    perfumeId: 'signature-blue',
    perfumeName: 'Utoorat-e-Azami Signature Blue',
    author: 'Sheikh Tariq Al-Qasimi',
    authorAr: 'الشيخ طارق القاسمي',
    location: 'Dubai, UAE',
    rating: 5,
    date: '14 Sept 2026',
    title: 'The pinnacle of Arabic haute perfumery',
    comment: 'The crystalline projection of Signature Blue is unlike any niche fragrance I have collected in Europe or the Gulf. Lasted over 20 hours on my bisht during a royal reception. Pure distinction.',
    verified: true
  },
  {
    id: 'rev-2',
    perfumeId: 'dkhoon-desert',
    perfumeName: 'Dkhoon Desert',
    author: 'Farah Mansoori',
    authorAr: 'فرح المنصوري',
    location: 'Abu Dhabi, UAE',
    rating: 5,
    date: '02 Sept 2026',
    title: 'A nostalgic yet ultra-modern masterpiece',
    comment: 'The drydown of Dkhoon Desert takes you directly to incense burning under desert starlight. The golden flacon is breathtaking on my vanity. Fast delivery to Abu Dhabi within 18 hours!',
    verified: true
  },
  {
    id: 'rev-3',
    perfumeId: 'zumar',
    perfumeName: 'Zumar',
    author: 'Lord Julian Sterling',
    authorAr: 'جوليان ستيرلينغ',
    location: 'Mayfair, London',
    rating: 5,
    date: '28 Aug 2026',
    title: 'Rich, boozy, and deeply magnetic',
    comment: 'The cognac and smoked bourbon vanilla harmonize so seamlessly with Damascena rose. I receive compliments every time I wear Zumar into private dining clubs.',
    verified: true
  },
  {
    id: 'rev-4',
    perfumeId: 'afnan-9pm',
    perfumeName: 'Afnan 9PM Night Out',
    author: 'Zaid Al-Harbi',
    authorAr: 'زيد الحربي',
    location: 'Riyadh, Saudi Arabia',
    rating: 5,
    date: '19 Aug 2026',
    title: 'Unstoppable longevity and sillage',
    comment: 'Afnan 9PM turns heads the second you step into any room. The heavy granite stone feel of the bottle exudes authority and luxury. Outstanding value for an Extrait.',
    verified: true
  },
  {
    id: 'rev-5',
    perfumeId: 'lumiere-parfum',
    perfumeName: 'Lumière Parfum',
    author: 'Camille Delacroix',
    authorAr: 'كاميل ديلاكروا',
    location: 'Paris, France',
    rating: 5,
    date: '08 Aug 2026',
    title: 'Sublime architectural elegance',
    comment: 'The fluted column bottle is an art piece on its own, and the white agarwood with fresh Jasmine Sambac has a crystalline brightness I have never encountered in Paris.',
    verified: true
  }
];

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rate: 1 },
  AED: { code: 'AED', symbol: 'AED ', rate: 3.67 },
  SAR: { code: 'SAR', symbol: 'SAR ', rate: 3.75 },
  GBP: { code: 'GBP', symbol: '£', rate: 0.77 },
  EUR: { code: 'EUR', symbol: '€', rate: 0.91 }
};

export const FRAGRANCE_NOTES_LIBRARY = [
  {
    category: 'Top Notes',
    title: 'The First Breath',
    titleAr: 'النفحة الأولى (القمة)',
    timing: '0 – 30 Minutes',
    description: 'The luminous opening impression that captivates upon first spray with volatile botanical essences.',
    notes: [
      { name: 'Calabrian Bergamot', nameAr: 'برغموت كالابريا', aroma: 'Sunlit crisp citrus with zesty golden undertones' },
      { name: 'Rare Golden Saffron', nameAr: 'زعفران أحمر نادر', aroma: 'Warm, bittersweet, precious culinary gold' },
      { name: 'French Cognac', nameAr: 'كونياك فرنسي معتق', aroma: 'Rich oak barrel booziness with candied fruit' },
      { name: 'Crisp Azure Mint', nameAr: 'نعناع جبلي منعش', aroma: 'Frosty crystalline freshness and uplifting vapor' }
    ]
  },
  {
    category: 'Heart Notes',
    title: 'The Soul & Essence',
    titleAr: 'قلب العطر (الروح)',
    timing: '30 Min – 4 Hours',
    description: 'The harmonic core defining the persona of each perfume, unfolding opulent florals and rich spices.',
    notes: [
      { name: 'Taif Royal Rose', nameAr: 'ورد الطائف الملكي', aroma: 'Velvety mountain rose with morning dew' },
      { name: 'Omani Frankincense', nameAr: 'لبان حوجري عماني', aroma: 'Sacred resinous smoke, sacred and serene' },
      { name: 'Florentine Iris', nameAr: 'سوسن فلورنسا', aroma: 'Powdery, regal, aristocratic earthy softness' },
      { name: 'Damascena Rose', nameAr: 'ورد جوري دمشقي', aroma: 'Opulent, deep, nectar-sweet floral body' }
    ]
  },
  {
    category: 'Base Notes',
    title: 'The Eternal Memory',
    titleAr: 'قاعدة العطر (الأثر الخالد)',
    timing: '4 – 24+ Hours',
    description: 'The foundation that anchors the fragrance to skin and garment, leaving an unforgettable regal trail.',
    notes: [
      { name: 'Cambodian Oud', nameAr: 'دهن عود كمبودي معتق', aroma: 'Deep, resinous, dark woody grandeur' },
      { name: 'Desert Ambergris', nameAr: 'عنبر الحوت الصحراوي', aroma: 'Warm marine luminescence and sensual depth' },
      { name: 'Bourbon Vanilla', nameAr: 'فانيليا البوربون المدخنة', aroma: 'Smoky, dark, velvet caramel decadence' },
      { name: 'Mysore Sandalwood', nameAr: 'صندل ميسور الهندي', aroma: 'Milky, sacred wood with therapeutic warmth' }
    ]
  }
];
