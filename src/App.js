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
  // {
  //   id: 29,
  //   imageSource: 'images/Hypo_ten_sen_eusplanchnian_(papyros).jpg',
  //   description: "Earliest known manuscript of Sub tuum praesidium in Greek, dated between 3rd to 4th centuries.",
  //   sourceLink: 'https://en.wikipedia.org/wiki/Sub_tuum_praesidium',
  //   year: 400,
  //   tag: [ 'Praying', 'Healing']
  // },
  // {
  //   id: 29,
  //   imageSource: 'images/Hypo_ten_sen_eusplanchnian_(papyros).jpg',
  //   description: "Earliest known manuscript of Sub tuum praesidium in Greek, dated between 3rd to 4th centuries.",
  //   sourceLink: 'https://en.wikipedia.org/wiki/Sub_tuum_praesidium',
  //   year: 400,
  //   tag: [ 'Praying', 'Healing']
  // },
  // {
  //   id: 29,
  //   imageSource: 'images/Hypo_ten_sen_eusplanchnian_(papyros).jpg',
  //   description: "Earliest known manuscript of Sub tuum praesidium in Greek, dated between 3rd to 4th centuries.",
  //   sourceLink: 'https://en.wikipedia.org/wiki/Sub_tuum_praesidium',
  //   year: 400,
  //   tag: [ 'Praying', 'Healing']
  // }
];

const renderCard = (card) => (
  <div key={card.id} className="image-card">
    <img src={card.imageSource} alt="Image" />
    <p>{card.description}</p>
    <p className="years" >{card.year} </p>
    <a className="source-link" href={card.sourceLink} target="_blank">Source</a>
  </div>
)

const Cards = ({ cards, orderBy }) => {
  let orderedCards = cards.slice(0);

  if (orderBy === "date") {
    orderedCards.sort((a, b) => a.year - b.year);
  }

  return (
    <div className="image-grid">
      {orderedCards.map(renderCard)}
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