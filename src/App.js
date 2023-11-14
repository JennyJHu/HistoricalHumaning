import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import AboutPage from './AboutPage';
import SubmitPage from './SubmitPage';



/* Tags

eating
playing
listening
exercising
learning
creating
loving
fighting
working
shopping
gathering
praying
healing */


const imagesData = [
  {
    id: 1,
    imageSource: 'images/onfim.jpg',
    description: 'Onfim, A Boy Preserved His Homework on Birch Bark, 13th Century',
    sourceLink: 'https://historydaily.org/13th-century-boy-preserved-homework',
    year: 1200,
    tag: ['Childhood', 'Education', 'Writing', 'Creating']
  },
  {
    id: 2,
    imageSource: 'images/kingtutspintop.jpg',
    description: `Wooden spintop found in tomb of King Tut, 
    ~1300 BC`,
    sourceLink: 'https://www.artofplay.com/blogs/stories/history-of-spinning-tops',
    year: -1300,
    tag: ['Childhood', 'Playing', 'Praying']
  },
  {
    id: 3,
    imageSource: 'images/romanbrotheltokens.jpg',
    description: 'Spintriae, The Roman Sex Coins That Showed What Was on The Menu, ~20-40 AD',
    sourceLink: 'https://www.ancient-origins.net/artifacts-other-artifacts/pompeii-brothel-mural-009544',
    year: 20,
    tag: ['Sex', 'Money', 'Art', 'Shopping', 'Loving']
  },
  {
    id: 4,
    imageSource: 'images/Salmahwrotethis.png',
    description: 'Arabic graffiti saying "Salmah wrote this in 23", 23 AD',
    sourceLink: 'https://www.islamic-awareness.org/history/islam/inscriptions/muth',
    year: 23,
    tag: ['Writing', 'Sharing']
  },
  {
    id: 5,
    imageSource: 'images/FUuBiqcXoAArgMz.jpg',
    description: '"Beware of Dog" Roman mosaic at the entrance to the House of the Tragic Poet in Pompeii, Italy, 2nd century BC',
    sourceLink: 'images/FUuBiqcXoAArgMz.jpg',
    year: -20,
    tag: ['Art', 'Sharing']
  },
  {
    id: 6,
    imageSource: 'images/Ceramicrattle.jpg',
    description: 'Ceramic rattle from the ancient city of Kültepe Kaniş-Karum',
    sourceLink: 'https://digventures.com/2014/08/worlds-oldest-toy-unearthed-in-capital-of-ancient-kingdom/',
    year: -2000,
    tag: ['Childhood', 'Playing', 'Toy']
  },
  {
    id: 7,
    imageSource: 'images/margerybrewsletter.png',
    description: `Oldest documented love letter in English by Margery Brews to fiancé John Paston, 1477`,
    sourceLink: 'https://blog.myheritage.com/2011/02/oldest-love-letter-in-history/',
    year: 1477,
    tag: ['Loving', 'Writing']
  },
  {
    id: 8,
    imageSource: 'images/catchaseduptree.png',
    description: 'A pen and ink illustration of a cat being chased up a tree by  a man and his dogs, late 15th century',
    sourceLink: 'https://www.sophieellafineart.com/the-hifstory-of-pet-art',
    year: 1400,
    tag: ['Art', 'Creating', 'Drawing', 'Playing']
  },
  {
    id: 9,
    imageSource: 'images/zoorkhaneh.jpg',
    description: 'Contemporary practice in a zurkhāneh, "house of strength", the oldest known style of gymnasium',
    sourceLink: 'https://en.wikipedia.org/wiki/Pahlevani_and_zoorkhaneh_rituals',
    year: -1000,
    tag: ['Exercising', 'Gathering', 'Healing']
  },
  {
    id: 10,
    imageSource: 'images/oldestnewspaper.jpg',
    description: 'The first weekly newspaper by Johann Carolus, 1605',
    sourceLink: 'https://en.wikipedia.org/wiki/List_of_the_oldest_newspapers',
    year: 1605,
    tag: ['Printing', 'Sharing', 'Writing']
  },
  {
    id: 11,
    imageSource: 'images/atheniangames.jpg',
    description: 'Terracotta skyphos (deep drinking cup) depicting ancient greek olympic games, ca. 500 B.C.',
    sourceLink: 'https://www.metmuseum.org/perspectives/articles/2021/7/ancient-greek-olympic-games',
    year: -500,
    tag: ['Playing', 'Gathering', 'Exercising', 'Creating', 'Art']
  },
  {
    id: 12,
    imageSource: 'images/Shang_Ox_Scapula_Oracle_Bones_1.jpg',
    description: `Oracle bones from Yinxu, Anyang, Henan, China, ~1250 BC`,
    sourceLink: 'https://en.wikipedia.org/wiki/File:Shang_Ox_Scapula_Oracle_Bones_1.jpg',
    year: -1250,
    tag: ['Writing', 'Sharing', 'Praying', 'Learning']
  },
  {
    id: 13,
    imageSource: 'images/KaiYuanZaBaoRemake.jpg',
    description: 'Kaiyuan Za Bao records about a new type of grape brought from the western region in the Han dynasty, which was marked as reviewed and amrked as boring by the emperor and not allowed to publish on Dibao.',
    sourceLink: 'https://en.wikipedia.org/wiki/Dibao_%28ancient_Chinese_gazette%29',
    year: 713,
    tag: ['Sharing', 'Writing']
  },
  {
    id: 14,
    imageSource: 'images/neanderthalflute.png',
    description: 'The Neanderthal Flute, found in the cave of Divje Babe in Slovenia, is thought to date back at least 50,000 years, making it the oldest known musical instrument in the world.',
    sourceLink: 'https://www.nms.si/en/collections/highlights/343-Neanderthal-flute',
    year: -48000,
    tag: ['Music', 'Playing', 'Creating', 'Sharing']
  },
  {
    id: 15,
    imageSource: 'images/picassoeatingfish.jpg',
    description: 'Picasso eating a fish, 1957.',
    sourceLink: 'https://www.bbc.co.uk/programmes/articles/5lk8LL9kK3Zrwd6hfkk0bBl/a-feast-for-the-eyes-what-picassos-kitchen-reveals-about-his-art',
    year: 1957,
    tag: ['Eating', 'Art', 'Creating']
  },
  {
    id: 16,
    imageSource: 'images/Venus_von_Willendorf.jpg',
    description: 'Venus of Willendorf, an 11.1-centimetre-tall (4.4 in) Venus figurine representing an early fertility diety.',
    sourceLink: 'https://en.wikipedia.org/wiki/Venus_of_Willendorf',
    year: -25000,
    tag: ['Art', 'Creating', 'Loving', 'Praying']
  },
  {
    id: 17,
    imageSource: 'images/Roman_Baths_England.jpg',
    description: 'The Roman Baths in Bath, England, are well-preserved thermae from the first few decades of Roman Britain.',
    sourceLink: 'https://en.wikipedia.org/wiki/Roman_Baths_(Bath)',
    year: 60,
    tag: ['Healing', 'Gathering', 'Sharing', 'Cleansing']
  },
  {
    id: 18,
    imageSource: 'images/mayan_ballgame.jpg',
    description: 'Mayan ballgame, a branch of the Mesoamerican Ballgame, 600-900 AD',
    sourceLink: 'https://www.chichenitza.com/mayan-ball-game',
    year: 750,
    tag: ['Playing', 'Gathering', 'Exercising', 'Creating', 'Praying']
  },
  {
    id: 19,
    imageSource: 'images/royal_doulton.png',
    description: 'A 19th century slop bucket and cover.',
    sourceLink: 'https://www.liveauctioneers.com/price-result/19th-century-royal-doulton-decorated-slop-bucket/',
    year: 1950,
    tag: ['Cleansing', 'Healing']
  },
  {
    id: 20,
    imageSource: 'images/dogo-onsen-1.jpg',
    description: "Dogo Onsen (道後温泉, Dōgo Onsen) is one of Japan's oldest and most famous hot springs.",
    sourceLink: 'https://japanstartshere.com/2019/05/07/dogo-onsen/',
    year: 1894,
    tag: ['Cleansing', 'Gathering', 'Healing']
  },
  {
    id: 21,
    imageSource: 'images/babylon_barrel_large.jpg',
    description: 'A barrel-shaped cylinder seal from Babylon, 2800 BC, that demonstrate evidence of the civilization using an ancient soap making method.',
    sourceLink: 'https://www.bruntwoodlane.com/blogs/news/lesson-1-history-of-soap',
    year: -2800,
    tag: ['Cleansing', 'Healing']
  }
  ,
  {
    id: 22,
    imageSource: 'images/oldest_temple.jpg',
    description: "Göbekli Tepe in south-east Turkey is thought to be the world's oldest temple.",
    sourceLink: 'https://whc.unesco.org/en/list/1572/',
    year: -95000,
    tag: ['Gathering', 'Praying', 'Healing']
  }
  ,
  {
    id: 23,
    imageSource: 'images/The-Vindolanda-wooden-phallus.jpg',
    description: "The Vindolanda wooden phallus. May have been used for another purpose.",
    sourceLink: 'https://www.barcelona-metropolitan.com/features/history/the-28-000-year-history-of-the-dildo/',
    year: 200,
    tag: ['Loving', 'Praying']
  },
  {
    id: 24,
    imageSource: 'images/1900_condom.png',
    description: "A condom made of animal membrane from the 1900s.",
    sourceLink: 'https://wellcomecollection.org/articles/W88vXBIAAOEyzwO_',
    year: 1900,
    tag: ['Loving']
  },
  {
    id: 25,
    imageSource: 'images/Roman-Bronze-Razors.jpg',
    description: "Two variations of bronze shaving razors from the Roman Empire, c. 100-200 AD.",
    sourceLink: 'https://relicrecord.com/blog/shaving-brief-history-shaving-customs-gear/',
    year: 100,
    tag: ['Cleansing']
  },
  {
    id: 26,
    imageSource: 'images/Razor505-SchickTypeARepeating-1926-Ex.jpg',
    description: "Schick Type A, Magazine Repeating Razor from 1926.",
    sourceLink: 'https://relicrecord.com/blog/shaving-brief-history-shaving-customs-gear/',
    year: 1926,
    tag: ['Cleansing']
  },
  {
    id: 27,
    imageSource: 'images/440px-Medical_recipe_concerning_poisoning._Terracotta_tablet,_from_Nippur,_Iraq,_18th_century_BCE._Ancient_Orient_Museum,_Istanbul.jpg',
    description: "A cuneiform terracotta tablet describing a medicinal recipe for poisoning (c. 18th century BCE). Discovered in Nippur, Iraq.",
    sourceLink: 'https://en.wikipedia.org/wiki/History_of_medicine',
    year: -1800,
    tag: ['Writing', 'Cleansing']
  },
  {
    id: 28,
    imageSource: 'images/440px-Magical_stela_or_cippus_of_Horus_MET_DP112603.jpg',
    description: "Magical stela or cippus of Horus inscribed with healing encantations (c. 332 to 280 BCE).",
    sourceLink: 'https://en.wikipedia.org/wiki/History_of_medicine',
    year: -280,
    tag: ['Cleansing', 'Praying', 'Healing']
  },
  {
    id: 29,
    imageSource: 'images/Hypo_ten_sen_eusplanchnian_(papyros).jpg',
    description: "Earliest known manuscript of Sub tuum praesidium in Greek, dated between 3rd to 4th centuries.",
    sourceLink: 'https://en.wikipedia.org/wiki/Sub_tuum_praesidium',
    year: 400,
    tag: ['Praying', 'Healing']
  },
  {
    id: 30,
    imageSource: 'images/amazon_rock_faces.jpg',
    description: "Human faces sculpted into stone up to 2,000 years ago have appeared on a rocky outcropping along the Amazon River since water levels dropped to record lows in the region’s worst drought in more than a century.",
    sourceLink: 'https://www.aljazeera.com/gallery/2023/10/25/amazon-drought-exposes-ancient-rock-carvings',
    year: 500,
    tag: ['Playing', 'Creating', 'Art']
  },
  {
    id: 31,
    imageSource: 'images/Immortal_beloved_letter_1.jpg',
    description: "Love letter addressed to an unknown lover from Ludwig van Beethoven.",
    sourceLink: 'https://en.wikipedia.org/wiki/Immortal_Beloved',
    year: 1812,
    tag: ['Writing', 'Loving']
  },
  {
    id: 32,
    imageSource: 'images/vintage_grocery_list.jpg',
    description: "A vintage metal shopping list dating back to the 1940s (pictured), which can be reused,  has ignited amazement online.",
    sourceLink: 'https://www.dailymail.co.uk/news/article-9477149/Vintage-80-year-old-mechanical-shopping-list-baffles-Facebook-users.html',
    year: 1940,
    tag: ['Writing', 'Sharing', 'Eating']
  },
  {
    id: 33,
    imageSource: 'images/MichelangelosGroceries.jpg',
    description: "Michelaneglo's grocery list, 1518",
    sourceLink: 'https://www.openculture.com/2013/12/michelangelos-illustrated-grocery-list.html',
    year: 1518,
    tag: ['Writing', 'Sharing', 'Eating', 'Art']
  },
  {
    id: 34,
    imageSource: 'images/medievalrockstars.jpg',
    description: "Medieval rockstar doodles from the 9th century.",
    sourceLink: 'https://www.amusingplanet.com/2014/10/historian-discovers-800-year-old.html',
    year: 800,
    tag: ['Art', 'Creating', 'Playing']
  },
  {
    id: 35,
    imageSource: 'images/pen_trials.jpg',
    description: "Pen trials from Oxford, Bodleian Library, Lat. misc. c. 66 (15th century).",
    sourceLink: 'https://www.amusingplanet.com/2014/10/historian-discovers-800-year-old.html',
    year: 1400,
    tag: ['Art', 'Creating', 'Playing']
  },
  {
    id: 36,
    imageSource: 'images/bidet-antique.jpg',
    description: "An 18th Century Bidet.",
    sourceLink: 'https://colonialquills.blogspot.com/2019/08/18th-century-hygiene-part-2-bathing.html',
    year: 1700,
    tag: ['Cleansing']
  },
  {
    id: 37,
    imageSource: 'images/charlemagne_playing_chess.jpg',
    description: "Charlemagne playing chess with Garin. British Library MS Royal 20 D XI f. 1 (14th century image).",
    sourceLink: 'https://www.warsoftheroses.com/age-groups/ages-7-11/medieval-games/',
    year: 1300,
    tag: ['Playing', 'Gathering']
  },
  {
    id: 38,
    imageSource: 'images/qigong.jpg',
    description: "The Daoyin Tu, the oldest physical exercise chart, depicting Qi Gong.",
    sourceLink: 'http://www.shen-nong.com/eng/lifestyles/chinese_qi_gong_history.html',
    year: -168,
    tag: ['Gathering', 'Exercising', 'Healing']
  },
  {
    id: 39,
    imageSource: 'images/prehistoric-pipe.jpg',
    description: "A prehistoric Catlinite pipe, probably Ioway, from the protohistoric Wamampito Site, Bremer County, Iowa.",
    sourceLink: 'https://en.wikipedia.org/wiki/Pipe_smoking',
    year: 1700,
    tag: ['Loving']
  },
  {
    id: 40,
    imageSource: 'images/nero-banquet.jpg',
    description: "The Roman Emperor Nero was known to hold lavish banquets.",
    sourceLink: 'https://www.ranker.com/list/biggest-banquets-in-history/bridget-quinlivan',
    year: 68,
    tag: ['Eating', 'Gathering']
  },
  {
    id: 41,
    imageSource: 'images/roman-glass-cameo.jpg',
    description: "Roman decorative arts include subjects that are of an explicit sexual nature.",
    sourceLink: 'https://www.metmuseum.org/art/collection/search/245495',
    year: 50,
    tag: ['Loving', 'Art', 'Gathering']
  },
  {
    id: 42,
    imageSource: 'images/ancient-roman-spork.jpg',
    description: "Ancient Roman Spork.",
    sourceLink: 'https://www.metmuseum.org/art/collection/search/257863',
    year: 250,
    tag: ['Eating']
  },
  {
    id: 43,
    imageSource: 'images/ancient-relief-block-cooking.jpg',
    description: "Relief block depicting plucking and roasting fowl and herds crossing water.",
    sourceLink: 'https://www.metmuseum.org/art/collection/search/546098',
    year: -1952,
    tag: ['Eating', 'Gathering']
  },
  {
    id: 44,
    imageSource: 'images/rosary.jpg',
    description: "A rosary from 1475 to 1500, Germany.",
    sourceLink: 'https://en.wikipedia.org/wiki/History_of_the_Rosary',
    year: 1500,
    tag: ['Praying']
  },
  {
    id: 45,
    imageSource: 'images/Pandora-fashion-doll.jpg',
    description: "Pandora, a fashion doll of 1600.",
    sourceLink: 'http://isiswardrobe.blogspot.com/2013/09/meet-pandora-fashion-doll-of-1600.html',
    year: 1700,
    tag: ['Playing']
  },
  {
    id: 46,
    imageSource: 'images/ragdoll.png',
    description: "A Roman Ragdoll.",
    sourceLink: 'https://www.britishmuseum.org/collection/object/G_1905-1021-13',
    year: 500,
    tag: ['Playing']
  },
  {
    id: 47,
    imageSource: 'images/Childrens_Puppet_Show.jpg',
    description: "A painting by the Song- dynasty era Chinese artist. 120.3x77.2 cm ",
    sourceLink: 'https://en.wikipedia.org/wiki/File:A_Children%27s_Puppet_Show.jpg',
    year: 1200,
    tag: ['Playing', 'Gathering']
  },
  {
    id: 48,
    imageSource: 'images/toy-knight.jpg',
    description: "This bronze toy mounted knight is one of the earliest extant toy soldiers.",
    sourceLink: 'https://art.thewalters.org/detail/27938/toy-mounted-knight/',
    year: 1400,
    tag: ['Playing']
  },
  {
    id: 49,
    imageSource: 'images/betrothal-ring.png',
    description: "Medieval clasp hands betrothal ring, circa 14th-15th century.",
    sourceLink: 'https://www.berganza.com/Medieval-clasp-hands-betrothal-ring-circa-14th-15th-century.html?feature_id=169',
    year: 1500,
    tag: ['Loving']
  },
  {
    id: 50,
    imageSource: 'images/byzantine-betrothal-ring.png',
    description: "Byzantine betrothal ring, circa 7th-8th century AD.",
    sourceLink: 'https://www.berganza.com/Byzantine-betrothal-ring-7th-8th-century-AD.html?feature_id=169',
    year: 800,
    tag: ['Loving', 'Praying']
  },
  {
    id: 51,
    imageSource: 'images/Athen_Akropolis.jpg',
    description: "The theatre of Dionysus in Athens, Greece, 400 BC.",
    sourceLink: 'https://en.wikipedia.org/wiki/Theatre_of_Dionysus',
    year: 400,
    tag: ['Playing', 'Gathering', 'Art', 'Creating', 'Sharing']
  },
  {
    id: 52,
    imageSource: 'images/moro-moro.png',
    description: "Moro-moro, the earliest known form of organized theatre in the Philippines.",
    sourceLink: 'hhttps://www.britannica.com/art/moro-moro',
    year: 1637,
    tag: ['Gathering', 'Playing', 'Art', 'Creating', 'Sharing']
  },
  {
    id: 53,
    imageSource: 'images/old-lunch-box.jpg',
    description: "A 4,000 year old lunch box found in the Bernese Alps.",
    sourceLink: 'https://www.atlasobscura.com/articles/4-000-year-old-lunch-box',
    year: -2000,
    tag: ['Eating']
  },
  {
    id: 54,
    imageSource: 'images/bento-box.jpg',
    description: "An Edo period bento box.",
    sourceLink: 'https://damien.douxchamps.net/photo/japan/kyoto/higashiyama/hanbei-fu/',
    year: 1867,
    tag: ['Eating']
  },
  {
    id: 55,
    imageSource: 'images/tiffin-box.png',
    description: "First appearing in the subcontinent in the late 18th century, the Tiffin Box quickly became a staple of Indian cuisine.",
    sourceLink: 'https://mytridesigns.com/pages/indian-tiffin-box-craft',
    year: 1890,
    tag: ['Eating']
  },
  {
    id: 56,
    imageSource: 'images/Kuchenmaistrey.jpg',
    description: "A cook at the hearth with his ladle; woodcut from the first printed cookbook in German, Kuchenmaistrey, 1485.",
    sourceLink: 'https://en.wikipedia.org/wiki/Medieval_cuisine',
    year: 1485,
    tag: ['Eating', 'Gathering']
  },
  {
    id: 57,
    imageSource: 'images/portrait-of-a-lady.jpg',
    description: "A 5th–6th Century portrait of a lady.",
    sourceLink: 'https://www.metmuseum.org/art/collection/search/329980',
    year: 600,
    tag: ['Art', 'Creating', 'Sharing']
  },
  {
    id: 58,
    imageSource: 'images/ancientforks.jpg',
    description: "Eighth- to ninth-century molded bronze forks from present-day Iran.",
    sourceLink: 'https://www.ancientpages.com/2018/06/19/troublesome-ancient-history-of-forks-started-in-tuscany-italy-in-11th-century/',
    year: 900,
    tag: ['Eating']
  },
  {
    id: 59,
    imageSource: 'images/oldest-chess.png',
    description: "The oldest chess game recorded played between Abu-Bakr Muhammed Ben Yahya as-Suli and Abu’l- Faraj bin al-Muzaffar bin Sa’-id al-Lajlaj in the 10th century.",
    sourceLink: 'https://www.chess.com/forum/view/game-showcase/the-oldest-chess-game-recorded',
    year: 1000,
    tag: ['Playing', 'Gathering']
  },
  {
    id: 60,
    imageSource: 'images/Ancient_Sumo_competition.jpg',
    description: "Ancient sumo-wrestling competition from the Japanese Heian or Kamakura period (between 794 and 1333).",
    sourceLink: 'https://en.wikipedia.org/wiki/History_of_sport',
    year: 1333,
    tag: ['Gathering', 'Exercising', 'Playing']
  },
  {
    id: 61,
    imageSource: 'images/philogelos.jpg',
    description: "Philogelos, or 'Love of Laughter', is the oldest existing collection of jokes.",
    sourceLink: 'https://en.wikipedia.org/wiki/Philogelos',
    year: 248,
    tag: ['Gathering', 'Playing']
  },
  {
    id: 62,
    imageSource: 'images/valdarolovers.jpeg',
    description: "The Lovers of Valdaro, or Valdaro Lovers, are a pair of human skeletons dated as approximately 6,000 years old.",
    sourceLink: 'https://en.wikipedia.org/wiki/Lovers_of_Valdaro',
    year: -4000,
    tag: ['Loving', 'Praying']
  },
  {
    id: 63,
    imageSource: 'images/Jade_cabbage_closeup.jpg',
    description: "Jadeite Cabbage – Jin received it as part of her dowry for her wedding to Guangxu, in 1889.",
    sourceLink: 'https://en.wikipedia.org/wiki/Dowry',
    year: 1889,
    tag: ['Loving', 'Sharing']
  },
  {
    id: 64,
    imageSource: 'images/medievalbath.png',
    description: "Medieval baths were often shared and done in washbins.",
    sourceLink: 'https://www.medievalists.net/2013/04/did-people-in-the-middle-ages-take-baths/',
    year: 1300,
    tag: ['Cleansing', 'Sharing', 'Gathering']
  },
  {
    id: 65,
    imageSource: 'images/surgicaltoolsfifth.jpg',
    description: "Surgical tools, 5th century BC.",
    sourceLink: 'https://en.wikipedia.org/wiki/Ancient_Greek_medicine',
    year: 500,
    tag: ['Cleansing', 'Healing']
  },
  // {
  //   id: 63,
  //   imageSource: 'images/Jade_cabbage_closeup.jpg',
  //   description: "Jadeite Cabbage – Jin received it as part of her dowry for her wedding to Guangxu, in 1889.",
  //   sourceLink: 'https://en.wikipedia.org/wiki/Dowry',
  //   year: 1889,
  //   tag: [ 'Loving', 'Sharing']
  // },
  // {
  //   id: 63,
  //   imageSource: 'images/Jade_cabbage_closeup.jpg',
  //   description: "Jadeite Cabbage – Jin received it as part of her dowry for her wedding to Guangxu, in 1889.",
  //   sourceLink: 'https://en.wikipedia.org/wiki/Dowry',
  //   year: 1889,
  //   tag: [ 'Loving', 'Sharing']
  // },
];


const Cards = ({ cards, orderBy }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  let orderedCards = cards.slice(0);

  if (orderBy === "date") {
    orderedCards.sort((a, b) => a.year - b.year);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleCloseClick = () => {
    setSelectedCard(null);
  }

  const getYearString = (year) => {
    if (year < 0) {
      return Math.abs(year) + " BC";
    } else {
      return year + " AD";
    }
  }

  return (
    <div>
      {selectedCard && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-image-text">
              <img src={selectedCard.imageSource} className="modal-image" alt="Selected Card" />
              <p className="modal-text"> {selectedCard.description} </p>
            </div>
            <p className="modal-years">{getYearString(selectedCard.year)}</p>
            <a className="modal-link" href={selectedCard.sourceLink} target="_blank">
              Source
            </a>
            <button className="modal-close" onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}

      <div className="image-grid">
        {orderedCards.map((card) => (
          <div key={card.id} className="image-card" onClick={() => handleCardClick(card)}>
            <img src={card.imageSource} alt="Image" />
            <p>{card.description}</p>
            <p className="years">{getYearString(card.year)}</p>
            <a className="source-link" href={card.sourceLink} target="_blank">
              Source
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};


const HomePage = () => {
  const tags = ['Playing', 'Loving', 'Gathering', 'Cleansing', 'Praying', 'Writing', 'Eating'];

  const [selectedTag, setSelectedTag] = useState('');

  const filterCards = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag('');
    } else {
      setSelectedTag(tag);
    }
  };

  const filteredCards = selectedTag ? imagesData.filter((card) => card.tag.includes(selectedTag)) : imagesData;

  return (
    <div>
      <header>
        <p class="about"> Historical Humaning Archive is a place to explore and log examples of human behavior across history. There's no strict framework for it, just whatever feels particularly human. Submit a post <a href="./submit" target="_self"> here</a>. </p>
      </header>
      <div className="tags">
        {tags.map((tag) => (
          <li className="main-tags" key={tag}>
            <button
              onClick={() => filterCards(tag)}
              className={selectedTag === tag ? 'selected' : ''}
            >
              {tag}
            </button>
          </li>
        ))}
      </div>
      <Cards cards={filteredCards} orderBy="date" />
    </div>
  );
};


const App = () => {
  return (
    <div className="app">
      <Router>
        <header>
          <h1> <a className="title" href="./" target="_self"> Historical Humaning</a> </h1>
        </header>
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/submit" element={<SubmitPage />} />
          </Routes>
        </main>
        <footer>
          &copy; {new Date().getFullYear()} Historical Humaning Archive. Made by <a href="https://jenny-hu.com/" target="_blank">Jenny Hu</a>. All rights reserved.
        </footer>
      </Router>
    </div>
  );
};

export default App;