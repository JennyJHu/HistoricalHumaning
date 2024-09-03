import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import AboutPage from './AboutPage';
import SubmitPage from './SubmitPage';
import { useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

// import { MagicMotion } from "react-magic-motion";
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
    cardTitle: 'Preserved homework doodles',
    imageSource: 'images/onfim.jpg',
    description: 'Onfim, A Boy Preserved His Homework on Birch Bark, 13th Century',
    sourceLink: 'https://historydaily.org/13th-century-boy-preserved-homework',
    year: 1200,
    dateAdded: '08-20-2023',
    tag: ['Childhood', 'Education', 'Writing', 'Creating']
  },
  {
    id: 2,
    cardTitle: "King Tut's spintop",
    imageSource: 'images/kingtutspintop.jpg',
    description: `Wooden spintop found in tomb of King Tut, 
    ~1300 BC`,
    sourceLink: 'https://www.artofplay.com/blogs/stories/history-of-spinning-tops',
    year: -1300,
    dateAdded: '08-20-2023',
    tag: ['Childhood', 'Playing', 'Praying']
  },
  {
    id: 3,
    cardTitle: "Roman sex coins",
    imageSource: 'images/romanbrotheltokens.jpg',
    description: 'Spintriae, The Roman Sex Coins That Showed What Was on The Menu, ~20-40 AD',
    sourceLink: 'https://www.ancient-origins.net/artifacts-other-artifacts/pompeii-brothel-mural-009544',
    year: 20,
    dateAdded: '08-21-2023',
    tag: ['Sex', 'Money', 'Art', 'Shopping', 'Loving']
  },
  {
    id: 4,
    cardTitle: "'Salmah wrote this in 23'",
    imageSource: 'images/Salmahwrotethis.png',
    description: 'Arabic graffiti saying "Salmah wrote this in 23", 23 AD',
    sourceLink: 'https://www.islamic-awareness.org/history/islam/inscriptions/muth',
    year: 23,
    dateAdded: '08-22-2023',
    tag: ['Writing', 'Sharing']
  },
  {
    id: 5,
    cardTitle: "Beware of Dog mosaic in Pompeii",
    imageSource: 'images/FUuBiqcXoAArgMz.jpg',
    description: '"Beware of Dog" Roman mosaic at the entrance to the House of the Tragic Poet in Pompeii, Italy, 2nd century BC',
    sourceLink: 'images/FUuBiqcXoAArgMz.jpg',
    year: -20,
    dateAdded: '08-24-2023',
    tag: ['Art', 'Sharing']
  },
  {
    id: 6,
    cardTitle: "A child's rattle",
    imageSource: 'images/Ceramicrattle.jpg',
    description: 'Ceramic rattle from the ancient city of Kültepe Kaniş-Karum',
    sourceLink: 'https://digventures.com/2014/08/worlds-oldest-toy-unearthed-in-capital-of-ancient-kingdom/',
    year: -2000,
    dateAdded: '08-24-2023',
    tag: ['Childhood', 'Playing', 'Toy']
  },
  {
    id: 7,
    cardTitle: "The oldest english love letter",
    imageSource: 'images/margerybrewsletter.png',
    description: `Oldest documented love letter in English by Margery Brews to fiancé John Paston, 1477`,
    sourceLink: 'https://blog.myheritage.com/2011/02/oldest-love-letter-in-history/',
    year: 1477,
    dateAdded: '08-24-2023',
    tag: ['Loving', 'Writing']
  },
  {
    id: 8,
    cardTitle: "A 15th century illustration",
    imageSource: 'images/catchaseduptree.png',
    description: 'A pen and ink illustration of a cat being chased up a tree by  a man and his dogs, late 15th century',
    sourceLink: 'https://www.sophieellafineart.com/the-hifstory-of-pet-art',
    year: 1400,
    dateAdded: '08-24-2023',
    tag: ['Art', 'Creating', 'Drawing', 'Playing']
  },
  {
    id: 9,
    cardTitle: "The oldest known style of gymnasium",
    imageSource: 'images/zoorkhaneh.jpg',
    description: 'Contemporary practice in a zurkhāneh, "house of strength", the oldest known style of gymnasium',
    sourceLink: 'https://en.wikipedia.org/wiki/Pahlevani_and_zoorkhaneh_rituals',
    year: -1000,
    dateAdded: '08-25-2023',
    tag: ['Exercising', 'Gathering', 'Healing']
  },
  {
    id: 10,
    cardTitle: "Early newspapers",
    imageSource: 'images/oldestnewspaper.jpg',
    description: 'The first weekly newspaper by Johann Carolus, 1605',
    sourceLink: 'https://en.wikipedia.org/wiki/List_of_the_oldest_newspapers',
    year: 1605,
    dateAdded: '08-25-2023',
    tag: ['Printing', 'Sharing', 'Writing']
  },
  {
    id: 11,
    cardTitle: "Olympic Games cup",
    imageSource: 'images/atheniangames.jpg',
    description: 'Terracotta skyphos (deep drinking cup) depicting ancient greek olympic games, ca. 500 B.C.',
    sourceLink: 'https://www.metmuseum.org/perspectives/articles/2021/7/ancient-greek-olympic-games',
    year: -500,
    dateAdded: '08-26-2023',
    tag: ['Playing', 'Gathering', 'Exercising', 'Creating', 'Art']
  },
  {
    id: 12,
    cardTitle: "Oracle Bones",
    imageSource: 'images/Shang_Ox_Scapula_Oracle_Bones_1.jpg',
    description: `Oracle bones from Yinxu, Anyang, Henan, China, ~1250 BC`,
    sourceLink: 'https://en.wikipedia.org/wiki/File:Shang_Ox_Scapula_Oracle_Bones_1.jpg',
    year: -1250,
    dateAdded: '08-26-2023',
    tag: ['Writing', 'Sharing', 'Praying', 'Learning']
  },
  {
    id: 13,
    cardTitle: "Editorial notes for news in the 700's",
    imageSource: 'images/KaiYuanZaBaoRemake.jpg',
    description: 'Kaiyuan Za Bao records about a new type of grape brought from the western region in the Han dynasty, which was marked as reviewed and amrked as boring by the emperor and not allowed to publish on Dibao.',
    sourceLink: 'https://en.wikipedia.org/wiki/Dibao_%28ancient_Chinese_gazette%29',
    year: 713,
    dateAdded: '08-26-2023',
    tag: ['Sharing', 'Writing']
  },
  {
    id: 14,
    cardTitle: "Neanderthal Flute",
    imageSource: 'images/neanderthalflute.png',
    description: 'The Neanderthal Flute, found in the cave of Divje Babe in Slovenia, is thought to date back at least 50,000 years, making it the oldest known musical instrument in the world.',
    sourceLink: 'https://www.nms.si/en/collections/highlights/343-Neanderthal-flute',
    year: -48000,
    dateAdded: '08-29-2023',
    tag: ['Music', 'Playing', 'Creating', 'Sharing']
  },
  {
    id: 15,
    cardTitle: "Picasso's fish",
    imageSource: 'images/picassoeatingfish.jpg',
    description: 'Picasso eating a fish, 1957.',
    sourceLink: 'https://www.bbc.co.uk/programmes/articles/5lk8LL9kK3Zrwd6hfkk0bBl/a-feast-for-the-eyes-what-picassos-kitchen-reveals-about-his-art',
    year: 1957,
    dateAdded: '08-29-2023',
    tag: ['Eating', 'Art', 'Creating']
  },
  {
    id: 16,
    cardTitle: "Venus of Willendorf",
    imageSource: 'images/Venus_von_Willendorf.jpg',
    description: 'The Venus of Willendorf, an 11.1-centimetre-tall (4.4 in) Venus figurine representing an early fertility diety.',
    sourceLink: 'https://en.wikipedia.org/wiki/Venus_of_Willendorf',
    year: -25000,
    dateAdded: '08-29-2023',
    tag: ['Art', 'Creating', 'Loving', 'Praying']
  },
  {
    id: 17,
    cardTitle: "Roman Baths",
    imageSource: 'images/Roman_Baths_England.jpg',
    description: 'The Roman Baths in Bath, England, are well-preserved thermae from the first few decades of Roman Britain.',
    sourceLink: 'https://en.wikipedia.org/wiki/Roman_Baths_(Bath)',
    year: 60,
    dateAdded: '09-03-2023',
    tag: ['Healing', 'Gathering', 'Sharing', 'Cleansing']
  },
  {
    id: 18,
    cardTitle: "Mayan Ballgame",
    imageSource: 'images/mayan_ballgame.jpg',
    description: 'Mayan ballgame, a branch of the Mesoamerican Ballgame, 600-900 AD',
    sourceLink: 'https://www.chichenitza.com/mayan-ball-game',
    year: 750,
    dateAdded: '09-03-2023',
    tag: ['Playing', 'Gathering', 'Exercising', 'Creating', 'Praying']
  },
  {
    id: 19,
    cardTitle: "Slop bucket",
    imageSource: 'images/royal_doulton.png',
    description: 'A 19th century slop bucket and cover.',
    sourceLink: 'https://www.liveauctioneers.com/price-result/19th-century-royal-doulton-decorated-slop-bucket/',
    year: 1950,
    dateAdded: '09-04-2023',
    tag: ['Cleansing', 'Healing']
  },
  {
    id: 20,
    cardTitle: "One of the oldest onsen",
    imageSource: 'images/Dogo-Onsen-1.jpg',
    description: "Dogo Onsen (道後温泉, Dōgo Onsen) is one of Japan's oldest and most famous hot springs.",
    sourceLink: 'https://japanstartshere.com/2019/05/07/dogo-onsen/',
    year: 1894,
    dateAdded: '09-05-2023',
    tag: ['Cleansing', 'Gathering', 'Healing']
  },
  {
    id: 21,
    cardTitle: "Early evidence of soap",
    imageSource: 'images/babylon_barrel_large.jpg',
    description: 'A barrel-shaped cylinder seal from Babylon, 2800 BC, that demonstrate evidence of the civilization using an ancient soap making method.',
    sourceLink: 'https://www.bruntwoodlane.com/blogs/news/lesson-1-history-of-soap',
    year: -2800,
    dateAdded: '09-05-2023',
    tag: ['Cleansing', 'Healing']
  }
  ,
  {
    id: 22,
    cardTitle: "The world's oldest temple",
    imageSource: 'images/oldest_temple.jpg',
    description: "Göbekli Tepe in south-east Turkey is thought to be the world's oldest temple.",
    sourceLink: 'https://whc.unesco.org/en/list/1572/',
    year: -95000,
    dateAdded: '09-05-2023',
    tag: ['Gathering', 'Praying', 'Healing']
  }
  ,
  {
    id: 23,
    cardTitle: "An early sex toy?",
    imageSource: 'images/The-Vindolanda-wooden-phallus.jpg',
    description: "The Vindolanda wooden phallus. May have been used for another purpose.",
    sourceLink: 'https://www.barcelona-metropolitan.com/features/history/the-28-000-year-history-of-the-dildo/',
    year: 200,
    dateAdded: '09-05-2023',
    tag: ['Loving', 'Praying']
  },
  {
    id: 24,
    cardTitle: "Condom",
    imageSource: 'images/1900_condom.png',
    description: "A condom made of animal membrane from the 1900s.",
    sourceLink: 'https://wellcomecollection.org/articles/W88vXBIAAOEyzwO_',
    year: 1900,
    dateAdded: '09-05-2023',
    tag: ['Loving']
  },
  {
    id: 25,
    cardTitle: "Roman razors",
    imageSource: 'images/Roman-Bronze-Razors.jpg',
    description: "Two variations of bronze shaving razors from the Roman Empire, c. 100-200 AD.",
    sourceLink: 'https://relicrecord.com/blog/shaving-brief-history-shaving-customs-gear/',
    year: 100,
    dateAdded: '09-06-2023',
    tag: ['Cleansing']
  },
  {
    id: 26,
    cardTitle: "Razors from the 1900's",
    imageSource: 'images/Razor505-SchickTypeARepeating-1926-Ex.jpg',
    description: "Schick Type A, Magazine Repeating Razor from 1926.",
    sourceLink: 'https://relicrecord.com/blog/shaving-brief-history-shaving-customs-gear/',
    year: 1926,
    dateAdded: '09-08-2023',
    tag: ['Cleansing']
  },
  {
    id: 27,
    cardTitle: "Early medicine",
    imageSource: 'images/440px-Medical_recipe_concerning_poisoning._Terracotta_tablet,_from_Nippur,_Iraq,_18th_century_BCE._Ancient_Orient_Museum,_Istanbul.jpg',
    description: "A cuneiform terracotta tablet describing a medicinal recipe for poisoning (c. 18th century BCE). Discovered in Nippur, Iraq.",
    sourceLink: 'https://en.wikipedia.org/wiki/History_of_medicine',
    year: -1800,
    dateAdded: '09-08-2023',
    tag: ['Writing', 'Cleansing']
  },
  {
    id: 28,
    cardTitle: "Healing encantations",
    imageSource: 'images/440px-Magical_stela_or_cippus_of_Horus_MET_DP112603.jpg',
    description: "Magical stela or cippus of Horus inscribed with healing encantations (c. 332 to 280 BCE).",
    sourceLink: 'https://en.wikipedia.org/wiki/History_of_medicine',
    year: -280,
    dateAdded: '09-08-2023',
    tag: ['Cleansing', 'Praying', 'Healing']
  },
  {
    id: 29,
    cardTitle: "Ancient Christian Hymn",
    imageSource: 'images/Hypo_ten_sen_eusplanchnian_(papyros).jpg',
    description: "Earliest known manuscript of Sub tuum praesidium in Greek, dated between 3rd to 4th centuries.",
    sourceLink: 'https://en.wikipedia.org/wiki/Sub_tuum_praesidium',
    year: 400,
    dateAdded: '09-08-2023',
    tag: ['Praying', 'Healing']
  },
  {
    id: 30,
    cardTitle: "Carvings of human faces on rocks",
    imageSource: 'images/amazon_rock_faces.jpg',
    description: "Human faces sculpted into stone up to 2,000 years ago have appeared on a rocky outcropping along the Amazon River since water levels dropped to record lows in the region’s worst drought in more than a century.",
    sourceLink: 'https://www.aljazeera.com/gallery/2023/10/25/amazon-drought-exposes-ancient-rock-carvings',
    year: 500,
    dateAdded: '09-12-2023',
    tag: ['Playing', 'Creating', 'Art']
  },
  {
    id: 31,
    cardTitle: "Beethoven's love letter",
    imageSource: 'images/Immortal_beloved_letter_1.jpg',
    description: "Love letter addressed to an unknown lover from Ludwig van Beethoven.",
    sourceLink: 'https://en.wikipedia.org/wiki/Immortal_Beloved',
    year: 1812,
    dateAdded: '09-12-2023',
    tag: ['Writing', 'Loving']
  },
  {
    id: 32,
    cardTitle: "Vintage grocery list",
    imageSource: 'images/vintage_grocery_list.jpg',
    description: "A vintage metal shopping list dating back to the 1940s (pictured), which can be reused,  has ignited amazement online.",
    sourceLink: 'https://www.dailymail.co.uk/news/article-9477149/Vintage-80-year-old-mechanical-shopping-list-baffles-Facebook-users.html',
    year: 1940,
    dateAdded: '09-13-2023',
    tag: ['Writing', 'Sharing', 'Eating']
  },
  {
    id: 33,
    cardTitle: "Michelangelo's grocery list",
    imageSource: 'images/MichelangelosGroceries.jpg',
    description: "Michelangelo's grocery list, 1518, with drawings in case the servant couldn't read.",
    sourceLink: 'https://www.openculture.com/2013/12/michelangelos-illustrated-grocery-list.html',
    year: 1518,
    dateAdded: '09-13-2023',
    tag: ['Writing', 'Sharing', 'Eating', 'Art']
  },
  {
    id: 34,
    cardTitle: "Medieval rockstar",
    imageSource: 'images/medievalrockstars.jpg',
    description: "Medieval rockstar doodles from the 9th century.",
    sourceLink: 'https://www.amusingplanet.com/2014/10/historian-discovers-800-year-old.html',
    year: 800,
    dateAdded: '09-16-2023',
    tag: ['Art', 'Creating', 'Playing']
  },
  {
    id: 35,
    cardTitle: "Pen trials",
    imageSource: 'images/pen_trials.jpg',
    description: "Pen trials from Oxford, Bodleian Library, Lat. misc. c. 66 (15th century).",
    sourceLink: 'https://www.amusingplanet.com/2014/10/historian-discovers-800-year-old.html',
    year: 1400,
    dateAdded: '09-16-2023',
    tag: ['Art', 'Creating', 'Playing']
  },
  {
    id: 36,
    cardTitle: "An 18th Century Bidet",
    imageSource: 'images/bidet-antique.jpg',
    description: "An 18th Century Bidet.",
    sourceLink: 'https://colonialquills.blogspot.com/2019/08/18th-century-hygiene-part-2-bathing.html',
    year: 1700,
    dateAdded: '09-16-2023',
    tag: ['Cleansing']
  },
  {
    id: 37,
    cardTitle: "Medieval chess",
    imageSource: 'images/charlemagne_playing_chess.jpg',
    description: "Charlemagne playing chess with Garin. British Library MS Royal 20 D XI f. 1 (14th century image).",
    sourceLink: 'https://www.warsoftheroses.com/age-groups/ages-7-11/medieval-games/',
    year: 1300,
    dateAdded: '09-16-2023',
    tag: ['Playing', 'Gathering']
  },
  {
    id: 38,
    cardTitle: "Qi Gong exercise chart",
    imageSource: 'images/qigong.jpg',
    description: "The Daoyin Tu, the oldest physical exercise chart, depicting Qi Gong.",
    sourceLink: 'http://www.shen-nong.com/eng/lifestyles/chinese_qi_gong_history.html',
    year: -168,
    dateAdded: '09-17-2023',
    tag: ['Gathering', 'Exercising', 'Healing']
  },
  {
    id: 39,
    cardTitle: "Prehistoric pipe",
    imageSource: 'images/prehistoric-pipe.jpg',
    description: "A prehistoric Catlinite pipe, probably Ioway, from the protohistoric Wamampito Site, Bremer County, Iowa.",
    sourceLink: 'https://en.wikipedia.org/wiki/Pipe_smoking',
    year: 1700,
    dateAdded: '09-17-2023',
    tag: ['Loving']
  },
  {
    id: 40,
    cardTitle: "Nero's banquets",
    imageSource: 'images/nero-banquet.jpg',
    description: "The Roman Emperor Nero was known to hold lavish banquets.",
    sourceLink: 'https://www.ranker.com/list/biggest-banquets-in-history/bridget-quinlivan',
    year: 68,
    dateAdded: '09-18-2023',
    tag: ['Eating', 'Gathering']
  },
  {
    id: 41,
    cardTitle: "Roman glass",
    imageSource: 'images/roman-glass-cameo.jpg',
    description: "Roman decorative arts include subjects that are of an explicit sexual nature.",
    sourceLink: 'https://www.metmuseum.org/art/collection/search/245495',
    year: 50,
    dateAdded: '09-18-2023',
    tag: ['Loving', 'Art', 'Gathering']
  },
  {
    id: 42,
    cardTitle: "Ancient Roman Spork",
    imageSource: 'images/ancient-roman-spork.jpg',
    description: "Ancient Roman Spork.",
    sourceLink: 'https://www.metmuseum.org/art/collection/search/257863',
    year: 250,
    dateAdded: '09-23-2023',
    tag: ['Eating']
  },
  {
    id: 43,
    cardTitle: "Ancient relief block showing cooking",
    imageSource: 'images/ancient-relief-block-cooking.jpg',
    description: "Relief block depicting plucking and roasting fowl and herds crossing water.",
    sourceLink: 'https://www.metmuseum.org/art/collection/search/546098',
    year: -1952,
    dateAdded: '09-24-2023',
    tag: ['Eating', 'Gathering']
  },
  {
    id: 44,
    cardTitle: "Rosary",
    imageSource: 'images/Rosary.jpg',
    description: "A rosary from 1475 to 1500, Germany.",
    sourceLink: 'https://en.wikipedia.org/wiki/History_of_the_Rosary',
    year: 1500,
    dateAdded: '09-26-2023',
    tag: ['Praying']
  },
  {
    id: 45,
    cardTitle: "Pandora, a fashion doll of 1600",
    imageSource: 'images/Pandora-fashion-doll.jpg',
    description: "Pandora, a fashion doll of 1600.",
    sourceLink: 'http://isiswardrobe.blogspot.com/2013/09/meet-pandora-fashion-doll-of-1600.html',
    year: 1700,
    dateAdded: '09-26-2023',
    tag: ['Playing']
  },
  {
    id: 46,
    cardTitle: "A Roman Ragdoll",
    imageSource: 'images/ragdoll.png',
    description: "A Roman Ragdoll.",
    sourceLink: 'https://www.britishmuseum.org/collection/object/G_1905-1021-13',
    year: 500,
    dateAdded: '09-27-2023',
    tag: ['Playing']
  },
  {
    id: 47,
    cardTitle: "A Children's Puppet Show",
    imageSource: 'images/Childrens_Puppet_Show.jpg',
    description: "A painting by the Song- dynasty era Chinese artist. 120.3x77.2 cm ",
    sourceLink: 'https://en.wikipedia.org/wiki/File:A_Children%27s_Puppet_Show.jpg',
    year: 1200,
    dateAdded: '09-29-2023',
    tag: ['Playing', 'Gathering']
  },
  {
    id: 48,
    cardTitle: "Toy Knight",
    imageSource: 'images/toy-knight.jpg',
    description: "This bronze toy mounted knight is one of the earliest extant toy soldiers.",
    sourceLink: 'https://art.thewalters.org/detail/27938/toy-mounted-knight/',
    year: 1400,
    dateAdded: '09-30-2023',
    tag: ['Playing']
  },
  {
    id: 49,
    cardTitle: "Medieval clasp hands betrothal ring",
    imageSource: 'images/betrothal-ring.png',
    description: "Medieval clasp hands betrothal ring, circa 14th-15th century.",
    sourceLink: 'https://www.berganza.com/Medieval-clasp-hands-betrothal-ring-circa-14th-15th-century.html?feature_id=169',
    year: 1500,
    dateAdded: '09-30-2023',
    tag: ['Loving']
  },
  {
    id: 50,
    cardTitle: "Byzantine betrothal ring",
    imageSource: 'images/byzantine-betrothal-ring.png',
    description: "Byzantine betrothal ring, circa 7th-8th century AD.",
    sourceLink: 'https://www.berganza.com/Byzantine-betrothal-ring-7th-8th-century-AD.html?feature_id=169',
    year: 800,
    dateAdded: '10-02-2023',
    tag: ['Loving', 'Praying']
  },
  {
    id: 51,
    cardTitle: "Theatre of Dionysus",
    imageSource: 'images/Athen_Akropolis.jpg',
    description: "The theatre of Dionysus in Athens, Greece, 400 BC.",
    sourceLink: 'https://en.wikipedia.org/wiki/Theatre_of_Dionysus',
    year: 400,
    dateAdded: '10-03-2023',
    tag: ['Playing', 'Gathering', 'Art', 'Creating', 'Sharing']
  },
  {
    id: 52,
    cardTitle: "Moro-moro",
    imageSource: 'images/moro-moro.png',
    description: "Moro-moro, the earliest known form of organized theatre in the Philippines.",
    sourceLink: 'hhttps://www.britannica.com/art/moro-moro',
    year: 1637,
    dateAdded: '10-04-2023',
    tag: ['Gathering', 'Playing', 'Art', 'Creating', 'Sharing']
  },
  {
    id: 53,
    cardTitle: "A 4,000 year old lunch box",
    imageSource: 'images/old-lunch-box.jpg',
    description: "A 4,000 year old lunch box found in the Bernese Alps.",
    sourceLink: 'https://www.atlasobscura.com/articles/4-000-year-old-lunch-box',
    year: -2000,
    dateAdded: '10-07-2023',
    tag: ['Eating']
  },
  {
    id: 54,
    cardTitle: "An Edo period bento box",
    imageSource: 'images/bento-box.jpg',
    description: "An Edo period bento box.",
    sourceLink: 'https://damien.douxchamps.net/photo/japan/kyoto/higashiyama/hanbei-fu/',
    year: 1867,
    dateAdded: '10-07-2023',
    tag: ['Eating']
  },
  {
    id: 55,
    cardTitle: "The Tiffin Box",
    imageSource: 'images/tiffin-box.png',
    description: "First appearing in the subcontinent in the late 18th century, the Tiffin Box quickly became a staple of Indian cuisine.",
    sourceLink: 'https://mytridesigns.com/pages/indian-tiffin-box-craft',
    year: 1890,
    dateAdded: '10-11-2023',
    tag: ['Eating']
  },
  {
    id: 56,
    cardTitle: "A 1400's cook at the hearth",
    imageSource: 'images/Kuchenmaistrey.jpg',
    description: "A cook at the hearth with his ladle; woodcut from the first printed cookbook in German, Kuchenmaistrey, 1485.",
    sourceLink: 'https://en.wikipedia.org/wiki/Medieval_cuisine',
    year: 1485,
    dateAdded: '10-12-2023',
    tag: ['Eating', 'Gathering']
  },
  {
    id: 57,
    cardTitle: "Portrait of a lady",
    imageSource: 'images/portrait-of-a-lady.jpg',
    description: "A 5th–6th Century portrait of a lady.",
    sourceLink: 'https://www.metmuseum.org/art/collection/search/329980',
    year: 600,
    dateAdded: '10-12-2023',
    tag: ['Art', 'Creating', 'Sharing']
  },
  {
    id: 58,
    cardTitle: "Ancient forks",
    imageSource: 'images/ancientforks.jpg',
    description: "Eighth- to ninth-century molded bronze forks from present-day Iran.",
    sourceLink: 'https://www.ancientpages.com/2018/06/19/troublesome-ancient-history-of-forks-started-in-tuscany-italy-in-11th-century/',
    year: 900,
    dateAdded: '10-21-2023',
    tag: ['Eating']
  },
  {
    id: 59,
    cardTitle: "The oldest chess game",
    imageSource: 'images/oldest-chess.png',
    description: "The oldest chess game recorded played between Abu-Bakr Muhammed Ben Yahya as-Suli and Abu’l- Faraj bin al-Muzaffar bin Sa’-id al-Lajlaj in the 10th century.",
    sourceLink: 'https://www.chess.com/forum/view/game-showcase/the-oldest-chess-game-recorded',
    year: 1000,
    dateAdded: '10-24-2023',
    tag: ['Playing', 'Gathering']
  },
  {
    id: 60,
    cardTitle: "Ancient Sumo",
    imageSource: 'images/Ancient_Sumo_competition.jpg',
    description: "Ancient sumo-wrestling competition from the Japanese Heian or Kamakura period (between 794 and 1333).",
    sourceLink: 'https://en.wikipedia.org/wiki/History_of_sport',
    year: 1333,
    dateAdded: '10-24-2023',
    tag: ['Gathering', 'Exercising', 'Playing']
  },
  {
    id: 61,
    cardTitle: "The oldest joke book",
    imageSource: 'images/philogelos.jpg',
    description: "Philogelos, or 'Love of Laughter', is the oldest existing collection of jokes.",
    sourceLink: 'https://en.wikipedia.org/wiki/Philogelos',
    year: 248,
    dateAdded: '10-24-2023',
    tag: ['Gathering', 'Playing']
  },
  {
    id: 62,
    cardTitle: "The Lovers of Valdaro",
    imageSource: 'images/valdarolovers.jpeg',
    description: "The Lovers of Valdaro, or Valdaro Lovers, are a pair of human skeletons dated as approximately 6,000 years old.",
    sourceLink: 'https://en.wikipedia.org/wiki/Lovers_of_Valdaro',
    year: -4000,
    dateAdded: '11-01-2023',
    tag: ['Loving', 'Praying']
  },
  {
    id: 63,
    cardTitle: "A jade cabbage dowry",
    imageSource: 'images/Jade_cabbage_closeup.jpg',
    description: "Jadeite Cabbage – Jin received it as part of her dowry for her wedding to Guangxu, in 1889.",
    sourceLink: 'https://en.wikipedia.org/wiki/Dowry',
    year: 1889,
    dateAdded: '11-01-2023',
    tag: ['Loving', 'Sharing']
  },
  {
    id: 64,
    cardTitle: "Medieval baths",
    imageSource: 'images/medievalbath.png',
    description: "Medieval baths were often shared and done in washbins.",
    sourceLink: 'https://www.medievalists.net/2013/04/did-people-in-the-middle-ages-take-baths/',
    year: 1300,
    dateAdded: '11-01-2023',
    tag: ['Cleansing', 'Sharing', 'Gathering']
  },
  {
    id: 65,
    cardTitle: "Ancient Greek surgical tools",
    imageSource: 'images/surgicaltoolsfifth.jpg',
    description: "Surgical tools, 5th century BC.",
    sourceLink: 'https://en.wikipedia.org/wiki/Ancient_Greek_medicine',
    year: 500,
    dateAdded: '11-02-2023',
    tag: ['Cleansing', 'Healing']
  },
  {
    id: 66,
    cardTitle: "B.C.E Egyptians Adored their Cats",
    imageSource: 'images/SUBMISSION-cat-column.png',
    description: "Possibly from the Ptolemaic Dynasty, this papyrus column with two cats dating back to 305-30 B.C.E. is made of faience. It is a good demonstration of how much Egyptians adored their house cats that statues like this one were made in their likeness..",
    sourceLink: 'https://www.smithsonianmag.com/history/a-brief-history-of-house-cats-158390681/',
    year: -330,
    dateAdded: '22-12-2023',
    tag: ['Loving', 'Sharing', 'Praying']
  },
  {
    id: 67,
    cardTitle: "A Babylonian Dream Tablet on the Interpretation of Dreams",
    imageSource: 'images/Babylonian-dream-tablet.jpg',
    description: "A tablet which the Babylonians of the time of Moses, or the Cassite period, wrote down their ideas concerning things seen or done in dreams.",
    sourceLink: 'https://www.penn.museum/sites/journal/586/',
    year: -14000,
    dateAdded: '28-12-2023',
    tag: ['Sharing', 'Praying', 'Writing']
  },
  {
    id: 68,
    cardTitle: "Rotating Bookmark",
    imageSource: 'images/Rotating_bookmark.jpg',
    description: "Rotating bookmarks were a kind of bookmark used in medieval Europe. They were attached to a string, along which a marker could be slid up and down to mark a precise level on the page. About 30 such rotating bookmarks have been recorded in libraries in continental Europe, and another half a dozen in England.",
    sourceLink: 'https://en.wikipedia.org/wiki/Rotating_bookmark',
    year: -14000,
    dateAdded: '12-01-2024',
    tag: ['Sharing', 'Writing', 'Praying'],

  },
  {
    id: 69,
    cardTitle: "A guide to lucid dreaming",
    imageSource: 'images/lesrvesetlesmoye.jpeg',
    description: "Frontispiece to Les rêves et les moyens de les diriger; observations pratiques (Dreams and the ways to direct them: practical observations) a guide to lucid dreaming published anonymously in 1867, but later identified as the work of Hervey de Saint-Denys. ",
    sourceLink: 'https://publicdomainreview.org/collection/the-art-of-dreams/',
    year: 1867,
    dateAdded: '29-01-2024',
    tag: ['Gathering', 'Writing', 'Praying']
  },
  {
    id: 70,
    cardTitle: "Dream Vision; A Nightmare",
    imageSource: 'images/dreamvision1525.jpg',
    description: "Dream Vision; A Nightmare (1525), by Albrecht Dürer: a watercolour and accompanying text describing an apocalyptic dream Dürer had on the night of 7-8th June 1525. The text reads: In 1525, during the night between Wednesday and Thursday after Whitsuntide, I had this vision in my sleep, and saw how many great waters fell from heaven. The first struck the ground about four miles away from me with such a terrible force, enormous noise and splashing that it drowned the entire countryside. I was so greatly shocked at this that I awoke before the cloudburst. And the ensuing downpour was huge. Some of the waters fell some distance away and some close by. And they came from such a height that they seemed to fall at an equally slow pace. But the very first water that hit the ground so suddenly had fallen at such velocity, and was accompanied by wind and roaring so frightening, that when I awoke my whole body trembled and I could not recover for a long time. When I arose in the morning, I painted the above as I had seen it. May the Lord turn all things to the best.",
    sourceLink: 'https://publicdomainreview.org/collection/the-art-of-dreams/',
    year: 1525,
    dateAdded: '01-02-2024',
    tag: ['Sharing', 'Writing', 'Praying']
  },
  {
    id: 71,
    cardTitle: "Letters to My Sister of our Experiences on Our First Trip to Europe",
    imageSource: 'images/SUBMISSION-letterstosister1913.png',
    description: "A book of letters written by a young American girl named Lilian McCarron to her sister detailing a trip she made around Europe in the latter half of 1913, before the First World War.",
    sourceLink: 'https://publicdomainreview.org/collection/letters-to-my-sister-of-our-experiences-on-our-first-trip-to-europe-1913/',
    year: 1913,
    dateAdded: '10-03-2024',
    tag: ['Loving', 'Sharing', 'Writing']
  },
  {
    id: 72,
    cardTitle: "The Birthday Gift by Rebecca Solomon",
    imageSource: 'images/SUBMISSION-birthdayGift.jpg',
    description: "The Birthday Gift, a painting of the giving of a personal birthday present circa 1886 by Rebecca Solomon. ",
    sourceLink: 'https://en.wikipedia.org/wiki/The_Dream_of_the_Fisherman%27s_Wife',
    year: 1886,
    dateAdded: '01-04-2024',
    tag: ['Loving', 'Creating']
  },
  {
    id: 73,
    cardTitle: "The Dream of the Fisherman's Wife by Hokusai",
    imageSource: 'images/SUBMISSION-Hokusai.jpg',
    description: "Also known as Girl Diver and Octopi, Diver and Two Octopi, etc., is a woodblock-printed design by the Japanese artist Hokusai. It is included in Kinoe no Komatsu ('Young Pines'), a three-volume book of shunga erotica first published in 1814, and has become Hokusai's most famous shunga design. Playing with themes popular in Japanese art, it depicts a young ama diver entwined sexually with a pair of octopuses. ",
    sourceLink: 'https://en.wikipedia.org/wiki/The_Dream_of_the_Fisherman%27s_Wife',
    year: 1814,
    dateAdded: '21-04-2024',
    tag: ['Loving', 'Writing']
  },
  {
    id: 74,
    cardTitle: "Goddess of War Ring",
    imageSource: 'images/SUBMISSION-Athenaring.jpg',
    description: "The bronze ring, which dates back to the 2nd or 3rd century AD, likely belonged to a woman or girl from the Roman period. Researchers speculate that the ring might have belonged to a resident of the estate or served as a burial offering in one of the nearby graves.",
    sourceLink: 'https://www.ancient-origins.net/artifacts-other-artifacts-news-history-archaeology/bronze-athena-ring-israel-0021104',
    year: 200,
    dateAdded: '20-06-2023',
    tag: ['Loving', 'Praying']
  },
  {
    id: 75,
    cardTitle: "Medieval Game Collection",
    imageSource: 'images/SUBMISSION-medievalgame.jpg',
    description: "Chess figure, tile and dice of the 11th/12th century",
    sourceLink: 'https://uni-tuebingen.de/universitaet/aktuelles-und-publikationen/pressemitteilungen/newsfullview-pressemitteilungen/article/mittelalterliche-spielesammlung-ausgegraben/',
    year: 1100,
    dateAdded: '25-06-2024',
    tag: ['Sharing', 'Playing', 'Gathering']
  },
  // {
  //   id: 72,
  //   cardTitle: "Medieval Game Collection",
  //   imageSource: 'images/SUBMISSION-cat-column.png',
  //   description: "Chess figure, tile and dice of the 11th/12th century",
  //   sourceLink: 'https://uni-tuebingen.de/universitaet/aktuelles-und-publikationen/pressemitteilungen/newsfullview-pressemitteilungen/article/mittelalterliche-spielesammlung-ausgegraben/',
  //   year: 1100,
  //   dateAdded: '25-06-2024',
  //   tag: ['Loving', 'Sharing', 'Playing', 'Gathering']
  // },
];


const Cards = ({ cards, selectedCard, setSelectedCard }) => {
  const [orderBy, setOrderBy] = useState('id');
  const navigate = useNavigate();
  const location = useLocation();

  let orderedCards = cards.slice(0);

  if (orderBy === 'date') {
    orderedCards.sort((a, b) => a.year - b.year);
  } else if (orderBy === 'id') {
    orderedCards.sort((a, b) => b.id - a.id);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    // navigate.push(`${location.pathname}/${card.id}`);
  };

  const handleCloseClick = () => {
    setSelectedCard(null);
    // navigate.push(location.pathname);
  };

  const getYearString = (year) => {
    if (year < 0) {
      return Math.abs(year) + ' BC';
    } else {
      return year + ' AD';
    }
  };

  const handleOrderButtonClick = () => {
    if (orderBy === 'date') {
      setOrderBy('id');
    } else {
      setOrderBy('date');
    }
  };

  // useEffect(() => {
  //   const cardId = location.pathname.split('/').pop();
  //   const card = cards.find((c) => c.id === parseInt(cardId));
  //   if (card) {
  //     setSelectedCard(card);
  //   } else {
  //     setSelectedCard(null);
  //   }
  // }, [cards, location.pathname, setSelectedCard]);
  return (
    <div>
      {selectedCard && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-image-text">
              <img src={`/${selectedCard.imageSource}`} className="modal-image" alt="Selected Card" />
              <p className="modal-title"> {selectedCard.cardTitle} </p>
              <p className="modal-text"> {selectedCard.description} </p>
            </div>
            <p className="modal-years">{getYearString(selectedCard.year)}</p>
            <p className="modal-date-added">{selectedCard.dateAdded}</p>
            <a className="modal-link" href={selectedCard.sourceLink} target="_blank">
              Source
            </a>
            <button className="modal-close" onClick={handleCloseClick}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="order-buttons">
        <button className="order-button" onClick={handleOrderButtonClick}>
          {orderBy === 'date' ? ' 🔨 Date Created' : ' 🔎 Date Added'}
        </button>
      </div>

      <div className="image-grid" onClick={() => {
        if (selectedCard) {
          setSelectedCard(null);
          navigate("/", { replace: true })
          // history.push(location.pathname);
        }
      }}>
        {orderedCards.map((card) => (
          <Link to={`/card/${card.id}`} key={card.id}>
            <div key={card.id} className="image-card" //onClick={() => handleCardClick(card)}
            >
              <img src={`/${card.imageSource}`} alt="Image" />
              <p className="card-title">{card.cardTitle}</p> {/* Render cardTitle */}
              <p className="years">{getYearString(card.year)}</p>
              <p className="date-added">{card.dateAdded}</p>
              {/* <a className="source-link" href={card.sourceLink} target="_blank"> */}
              {/* Source
          </a> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  const tags = ['Playing', 'Loving', 'Gathering', 'Cleansing', 'Praying', 'Writing', 'Eating'];

  const [selectedTag, setSelectedTag] = useState('');

  let { id } = useParams();


  const filterCards = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag('');
    } else {
      setSelectedTag(tag);
    }
  };

  const filteredCards = selectedTag ? imagesData.filter((card) => card.tag.includes(selectedTag)) : imagesData;

  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (id) {
      const card = imagesData.find((c) => c.id === parseInt(id));
      setSelectedCard(card)
    }
  }, [id]);

  const navigate = useNavigate();

  return (
    <div onClick={(e) => {
      if (selectedCard && !e.target.closest('.card')) {
        setSelectedCard(null);
        navigate("/", { replace: true })
      }
    }}>
      {/* <MagicMotion> */}

      <header>
        {/* <h1> <a className="title" href="./" target="_self"> Historical Humaning</a> </h1> */}

        <p className="about"> <a className="title" href="./" target="_self"> Historical Humaning Archive</a> is an ongoing collection of humans being historically human. Submit a post <a className="linkHighlight" href="https://tally.so/r/mKVZjM" target="_blank"> here</a>. </p>
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
      <Cards cards={filteredCards} orderBy="date" selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      {/* </MagicMotion> */}
    </div>
  );
};


const App = () => {
  return (
    <div className="app">
      <Router>
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/card/:id" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/submit" element={<SubmitPage />} /> */}
          </Routes>
        </main>
        <footer>
          &copy; {new Date().getFullYear()} Historical Humaning Archive. <a href="https://historicalhumaning.com/" target="_blank"> @historical.humaning </a>| Made by <a href="https://jenny-hu.com/" target="_blank">Jenny Hu</a>.
        </footer>
      </Router>
    </div>
  );
};

export default App;