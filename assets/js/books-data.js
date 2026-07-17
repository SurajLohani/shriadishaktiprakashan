/* ============================================================
   श्री आदिशक्ति महाकोश — Books master data
   Source: title/copyright/dedication/preface/TOC pages of the
   3 ready manuscripts (Purn Pustak folder), cross-checked page-by-page.
   ============================================================ */

const SITE_BOOKS = [
  {
    slug: "sitayan",
    title_hi: "सीतायण",
    subtitle_hi: "माँ सीता की दृष्टि से",
    title_en: "Sitayan",
    subtitle_en: "The Ramayan, Retold Through Mother Sita's Eyes",
    series_hi: "श्री आदिशक्ति महाकोश — प्रथम ग्रंथ",
    kand: 7, adhyay: 86, parishisht: 4, pages: 497,
    format: "A4, Paperback / Ebook (PDF)",
    price_paperback: 799,
    price_ebook: 249,
    category: "bhagwati",
    cover: "assets/img/covers/sitayan.jpg",
    blurb_hi: "सहस्रों वर्षों से राम की कथा राम के धनुष, राम के राज्य और राम की मर्यादा के केंद्र से सुनी जाती रही है। \"सीतायण\" वही अमर गाथा है — पर एक भिन्न दृष्टि से। यहाँ सीता पीड़िता नहीं, सूत्रधार हैं। सात काण्डों और छियासी अध्यायों में फैली यह रचना माँ आदिशक्ति की उसी शाश्वत लीला को सीता के स्वरूप में उजागर करती है।",
    toc_note: "काण्ड १: दिव्य संकल्प (अध्याय १-१०) · काण्ड २: जनकपुरी से वन (अध्याय ११-२३) · काण्ड ३: वन-काल · ...आगे काण्ड ४ से ७ तक — कुल ७ काण्ड, ८६ अध्याय, ४ परिशिष्ट।"
  },
  {
    slug: "radhavtaram",
    title_hi: "राधावतारम्",
    subtitle_hi: "राधा-कृष्ण की शाश्वत प्रेम-गाथा",
    title_en: "Radhavtaram",
    subtitle_en: "The Eternal Love Story of Radha-Krishna",
    series_hi: "श्री आदिशक्ति महाकोश — द्वितीय ग्रंथ",
    kand: 7, adhyay: 93, parishisht: 4, pages: 420,
    format: "A4, Paperback / Ebook (PDF)",
    price_paperback: 799,
    price_ebook: 249,
    category: "bhagwati",
    cover: "assets/img/covers/radhavtaram.jpg",
    blurb_hi: "राधा को केवल प्रेयसी के रूप में नहीं, बल्कि स्वयं भगवान की आह्लादिनी शक्ति और प्रेम की सूत्रधार के रूप में देखा गया है। व्रज के आरंभ से लेकर अनन्त प्रेम और शांत-दर्शन तक — सात खण्डों में फैली यह रचना राधा-तत्व को आदिशक्ति भगवती माँ अम्बे के साथ जोड़कर प्रस्तुत करती है।",
    toc_note: "खण्ड १: व्रज का आरम्भ (अध्याय १-१२) · खण्ड २: प्रेम का विकास (अध्याय १३-२३) · ...आगे खण्ड ३ से ७ तक — कुल ७ खण्ड, ९३ अध्याय, ४ परिशिष्ट।"
  },
  {
    slug: "mahasati-gauri",
    title_hi: "महासती गौरी",
    subtitle_hi: "माता गौरी और माता पार्वती की कथा",
    title_en: "Mahasati Gauri",
    subtitle_en: "The Story of Mother Gauri and Mother Parvati",
    series_hi: "श्री आदिशक्ति महाकोश — तृतीय ग्रंथ",
    kand: 7, adhyay: 85, parishisht: 4, pages: 410,
    format: "A4, Paperback / Ebook (PDF)",
    price_paperback: 799,
    price_ebook: 249,
    category: "bhagwati",
    cover: "assets/img/covers/mahasati-gauri.jpg",
    blurb_hi: "सती का बलिदान और पार्वती की तपस्या — एक ही शक्ति की दो लीलाएँ हैं। सती-जन्म से लेकर पार्वती-शिव विवाह और गृहस्थ-लीला तक, सात खण्डों में यह रचना गौरी-तत्व को आदिशक्ति भगवती माँ अम्बे के साथ जोड़कर, अत्यंत संयम और श्रद्धा के साथ प्रस्तुत करती है।",
    toc_note: "खण्ड १: सती-जन्म (अध्याय १-१२) · खण्ड २: सती-शिव विवाह और दक्ष का द्वेष (अध्याय १३-२४) · ...आगे खण्ड ३ से ७ तक — कुल ७ खण्ड, ८५ अध्याय, ४ परिशिष्ट।"
  }
];

const SITE_UPCOMING_BOOKS = [
  "श्रीमद् देवी भागवत महापुराण",
  "कालिका पुराण",
  "देवी पुराण",
  "ब्रह्मवैवर्त पुराण",
  "दुर्गा सप्तशती",
  "दस महाविद्या सम्पूर्ण",
  "भगवती उपासना",
  "भगवती भक्त",
  "माँ समस्त पर्व"
];

const SITE_META = {
  publisher_hi: "श्री आदिशक्ति प्रकाशन",
  series_hi: "श्री आदिशक्ति महाकोश",
  author_hi: "रचयिता — आदिशक्ति भगवती माँ अम्बे (निमित्त — सूरज कुमार लोहानी)",
  tagline: "॥ ज्ञानं परमं भूषणम् ॥",
  email: "shikha@shriadishaktiprakashan.com",
  phone: "+91-7011283542",
  udyam: "UDYAM-UP-29-0247362",
  address_hi: "सिद्धार्थ विहार, ग़ाज़ियाबाद, उत्तर प्रदेश, भारत"
};
