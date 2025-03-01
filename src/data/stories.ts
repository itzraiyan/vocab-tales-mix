
export interface Vocabulary {
  id: string;
  english: string;
  bengaliPronunciation: string;
  meaning: string;
}

export interface Footnote {
  id: string;
  text: string;
}

export interface Story {
  id: number;
  title: string;
  description: string;
  category: string;
  readingTime: number;
  content: string[];
  vocabulary: Vocabulary[];
  footnotes: Footnote[];
}

export const stories: Story[] = [
  {
    id: 1,
    title: "নির্জনতার সঙ্গী (The Companion of Solitude)",
    description: "একজন নিঃসঙ্গ ব্যক্তির অভিজ্ঞতা যেখানে তিনি প্রকৃতির মধ্যে নতুন অর্থ খুঁজে পান।",
    category: "philosophy",
    readingTime: 5,
    content: [
      "একজন {hermit} গভীর জঙ্গলে বসবাস করত। সে খুব {taciturn} ছিল, তাই গ্রামবাসীরা তাকে ভয় পেত। কিন্তু সে ছিল {benevolent}। একদিন এক {naive} শিশু হারিয়ে গেলে সে তাকে সাহায্য করে। শিশুটি তার {benevolence} দেখে অবাক হয়ে যায়।",
      "শিশুটি জিজ্ঞেস করল, \"আপনি এত {austere} জীবন কেন বেছে নিয়েছেন?\" {hermit} একটু মুচকি হেসে জবাব দিল, \"নির্জনতা আমাকে {introspection}-এর সুযোগ দেয়।\"",
      "সেই দিন থেকে শিশুটি প্রায়ই {hermit}-এর কুটিরে যেত। ধীরে ধীরে গ্রামবাসীরাও বুঝতে পারল যে এই {recluse} আসলে একজন {erudite} মানুষ যিনি জীবনের গভীরতা সম্পর্কে অনেক কিছু জানেন [p1]।",
      "একদিন ভয়ঙ্কর ঝড় হল। গ্রামের অনেক বাড়ি {dilapidated} হয়ে গেল। {hermit} তার {frugal} সঞ্চয় দিয়ে সবাইকে সাহায্য করল। তার এই {altruistic} আচরণ দেখে সবাই বিস্মিত হল।",
      "গ্রামবাসীরা তাকে {venerate} করতে শুরু করল এবং তার {sagacity} সম্পর্কে কথা বলত। তবুও সে {ostentatious} হয়ে উঠল না। সে বলত, \"{Humility} হল প্রকৃত জ্ঞানের প্রথম পাঠ।\"",
      "সময়ের সাথে সাথে গ্রামে অনেক লোক তার কাছে {esoteric} জ্ঞান শিখতে আসতে লাগল। তার {eloquence} এবং {perspicacity} মানুষকে মুগ্ধ করত।",
      "তবে, একদিন সে অসুস্থ হয়ে পড়ল। গ্রামবাসীরা তার জন্য {ubiquitous} হয়ে উঠল, সবাই সাহায্য করতে চাইল। কিন্তু সে জানত তার সময় সীমিত।",
      "মৃত্যুর আগে সে বলল, \"জীবনে {ephemeral} সুখের পিছনে না ছুটে, {transcendent} অর্থ খোঁজা উচিত।\" এই ছিল তার শেষ বার্তা, যা গ্রামবাসীদের জীবন পরিবর্তন করে দিয়েছিল [p2]।"
    ],
    vocabulary: [
      {
        id: "hermit",
        english: "hermit",
        bengaliPronunciation: "সন্ন্যাসী",
        meaning: "A person who lives in solitude, often for religious reasons; a recluse who withdraws from society."
      },
      {
        id: "taciturn",
        english: "taciturn",
        bengaliPronunciation: "অল্পভাষী",
        meaning: "Reserved or uncommunicative in speech; saying little; not inclined to conversation or verbal expression."
      },
      {
        id: "benevolent",
        english: "benevolent",
        bengaliPronunciation: "পরোপকারী",
        meaning: "Well-meaning and kindly; characterized by or expressing goodwill or kindly feelings."
      },
      {
        id: "naive",
        english: "naive",
        bengaliPronunciation: "সরলমনা",
        meaning: "Showing a lack of experience, wisdom, or judgment; innocent and unworldly."
      },
      {
        id: "benevolence",
        english: "benevolence",
        bengaliPronunciation: "পরোপকারিতা",
        meaning: "The quality of being well-meaning; kindness; an act of kindness."
      },
      {
        id: "austere",
        english: "austere",
        bengaliPronunciation: "কঠোর",
        meaning: "Severe or strict in manner, attitude, or appearance; having no comforts or luxuries; simple and plain."
      },
      {
        id: "introspection",
        english: "introspection",
        bengaliPronunciation: "আত্মদর্শন",
        meaning: "The examination or observation of one's own mental and emotional processes."
      },
      {
        id: "recluse",
        english: "recluse",
        bengaliPronunciation: "নিভৃতচারী",
        meaning: "A person who lives in solitude or isolation from society."
      },
      {
        id: "erudite",
        english: "erudite",
        bengaliPronunciation: "পণ্ডিত",
        meaning: "Having or showing great knowledge or learning; scholarly and well-read."
      },
      {
        id: "dilapidated",
        english: "dilapidated",
        bengaliPronunciation: "জীর্ণ",
        meaning: "In a state of disrepair or ruin due to age or neglect."
      },
      {
        id: "frugal",
        english: "frugal",
        bengaliPronunciation: "মিতব্যয়ী",
        meaning: "Sparing or economical with regard to money or food; simple and plain."
      },
      {
        id: "altruistic",
        english: "altruistic",
        bengaliPronunciation: "পরার্থপর",
        meaning: "Showing a selfless concern for the well-being of others; unselfish."
      },
      {
        id: "venerate",
        english: "venerate",
        bengaliPronunciation: "সম্মান করা",
        meaning: "To regard with great respect; to revere or worship."
      },
      {
        id: "sagacity",
        english: "sagacity",
        bengaliPronunciation: "প্রজ্ঞা",
        meaning: "The quality of being wise and having sound judgment, especially as a result of experience."
      },
      {
        id: "ostentatious",
        english: "ostentatious",
        bengaliPronunciation: "জাঁকজমকপূর্ণ",
        meaning: "Characterized by pretentious or showy display; designed to impress."
      },
      {
        id: "humility",
        english: "humility",
        bengaliPronunciation: "বিনয়",
        meaning: "The quality of having a modest or low view of one's importance; humbleness."
      },
      {
        id: "esoteric",
        english: "esoteric",
        bengaliPronunciation: "গুপ্ত",
        meaning: "Intended for or likely to be understood by only a small number of people with specialized knowledge."
      },
      {
        id: "eloquence",
        english: "eloquence",
        bengaliPronunciation: "বাগ্মিতা",
        meaning: "Fluent or persuasive speaking or writing; the art of using language in an elegant and effective way."
      },
      {
        id: "perspicacity",
        english: "perspicacity",
        bengaliPronunciation: "তীক্ষ্ণবুদ্ধি",
        meaning: "The quality of having a ready insight into things; shrewdness or discernment."
      },
      {
        id: "ubiquitous",
        english: "ubiquitous",
        bengaliPronunciation: "সর্বব্যাপী",
        meaning: "Present, appearing, or found everywhere; omnipresent."
      },
      {
        id: "ephemeral",
        english: "ephemeral",
        bengaliPronunciation: "ক্ষণস্থায়ী",
        meaning: "Lasting for a very short time; transitory; fleeting."
      },
      {
        id: "transcendent",
        english: "transcendent",
        bengaliPronunciation: "অতিউচ্চ",
        meaning: "Beyond or above the range of normal or physical human experience; surpassing the ordinary; exceptional."
      }
    ],
    footnotes: [
      {
        id: "p1",
        text: "বাংলা সংস্কৃতিতে, 'নিঃসঙ্গ জ্ঞানী' একটি গভীর ধারণা, যা প্রাচীন ভারতীয় সন্ন্যাসী ঐতিহ্যের থেকে এসেছে। (In Bengali culture, the 'solitary sage' is a profound concept derived from ancient Indian ascetic traditions.)"
      },
      {
        id: "p2",
        text: "রবীন্দ্রনাথ ঠাকুর তাঁর অনেক লেখায় নিঃসঙ্গতা ও আধ্যাত্মিকতার সম্পর্ক নিয়ে আলোচনা করেছিলেন। (Rabindranath Tagore discussed the relationship between solitude and spirituality in many of his works.)"
      }
    ]
  },
  {
    id: 2,
    title: "শহুরে সমস্যা (Urban Predicaments)",
    description: "কলকাতার ব্যস্ত জীবনে এক তরুণীর প্রতিদিনের চ্যালেঞ্জ মোকাবেলার গল্প।",
    category: "urban",
    readingTime: 6,
    content: [
      "আধুনিক কলকাতা শহরে মিতালি একটি {prestigious} কোম্পানিতে চাকরি করে। তার প্রতিদিনের জীবন খুবই {hectic}, কিন্তু সে তার কাজে {meticulous} এবং সবসময় {punctual}।",
      "একদিন সকালে অফিস যাওয়ার সময় সে দেখল যে শহরে জলবদ্ধতা হয়েছে। রাস্তাগুলো {inundated} ছিল এবং ট্রাফিক {gridlocked} হয়ে গিয়েছিল। মিতালি {perplexed} হয়ে ভাবতে লাগল কীভাবে অফিসে যাবে।",
      "সে হঠাৎ একটি {novel} আইডিয়া পেল। সে একটি সাইকেল রিকশা নিল এবং পিছনের রাস্তা দিয়ে যাওয়ার সিদ্ধান্ত নিল। এটা একটু {unorthodox} পদ্ধতি ছিল, কিন্তু সে জানত যে {conventional} পথে যাওয়া এখন {futile} হবে [u1]।",
      "রিকশাওয়ালা একটু {reluctant} ছিল, কিন্তু মিতালির {persuasive} কথা শুনে রাজি হয়ে গেল। তারা শহরের {labyrinthine} গলি দিয়ে যেতে লাগল। পথে মিতালি আরও অনেক মানুষকে দেখল যারা {ingenious} উপায়ে তাদের গন্তব্যে পৌঁছাচ্ছিল।",
      "রাস্তায় এক জায়গায় একটি বড় গাছ পড়ে রাস্তা {obstructed} করে দিয়েছিল। সেখানে কিছু {altruistic} যুবক মিলে গাছটি সরাচ্ছিল। মিতালি তাদের সাহায্য করতে এগিয়ে গেল, যদিও তার {immaculate} পোশাক নষ্ট হওয়ার ভয় ছিল।",
      "তার এই {spontaneous} সিদ্ধান্ত অন্যদের {galvanize} করল এবং আরও অনেকে এগিয়ে এলো। এই সামূহিক প্রচেষ্টায় গাছটি তাড়াতাড়ি সরানো গেল এবং পথ {traversable} হয়ে গেল।",
      "শেষ পর্যন্ত মিতালি অফিসে পৌঁছাল, কিছুটা দেরি হলেও। তার বস যিনি সাধারণত খুব {fastidious}, সেদিন তার কাহিনী শুনে {empathetic} ছিলেন, কারণ তিনিও একই সমস্যার সম্মুখীন হয়েছিলেন।",
      "সেই দিনের অভিজ্ঞতা মিতালিকে শেখাল যে শহুরে জীবনে {adaptability} খুবই গুরুত্বপূর্ণ এবং কখনও কখনও {serendipitous} ঘটনাগুলো আমাদের জীবনে সুন্দর পরিবর্তন নিয়ে আসে [u2]।"
    ],
    vocabulary: [
      {
        id: "prestigious",
        english: "prestigious",
        bengaliPronunciation: "মর্যাদাপূর্ণ",
        meaning: "Inspiring respect and admiration; having high status or reputation."
      },
      {
        id: "hectic",
        english: "hectic",
        bengaliPronunciation: "ব্যস্ততাপূর্ণ",
        meaning: "Full of incessant or frantic activity; very busy and filled with activity."
      },
      {
        id: "meticulous",
        english: "meticulous",
        bengaliPronunciation: "খুঁতখুঁতে",
        meaning: "Showing great attention to detail; very careful and precise."
      },
      {
        id: "punctual",
        english: "punctual",
        bengaliPronunciation: "সময়নিষ্ঠ",
        meaning: "Happening or doing something at the agreed or proper time; on time."
      },
      {
        id: "inundated",
        english: "inundated",
        bengaliPronunciation: "প্লাবিত",
        meaning: "Overwhelmed by things or people to be dealt with; flooded."
      },
      {
        id: "gridlocked",
        english: "gridlocked",
        bengaliPronunciation: "যানজটপূর্ণ",
        meaning: "A situation of very severe traffic congestion where nothing can move."
      },
      {
        id: "perplexed",
        english: "perplexed",
        bengaliPronunciation: "বিভ্রান্ত",
        meaning: "Completely baffled; very puzzled or confused."
      },
      {
        id: "novel",
        english: "novel",
        bengaliPronunciation: "অভিনব",
        meaning: "New or unusual in an interesting way; original or striking especially in conception or style."
      },
      {
        id: "unorthodox",
        english: "unorthodox",
        bengaliPronunciation: "অপ্রচলিত",
        meaning: "Not conforming to traditional or accepted rules, beliefs, or methods."
      },
      {
        id: "conventional",
        english: "conventional",
        bengaliPronunciation: "প্রথাগত",
        meaning: "Based on or in accordance with what is generally done or believed; traditional and ordinary."
      },
      {
        id: "futile",
        english: "futile",
        bengaliPronunciation: "নিষ্ফল",
        meaning: "Incapable of producing any useful result; pointless or ineffective."
      },
      {
        id: "reluctant",
        english: "reluctant",
        bengaliPronunciation: "অনিচ্ছুক",
        meaning: "Unwilling and hesitant; disinclined to do something."
      },
      {
        id: "persuasive",
        english: "persuasive",
        bengaliPronunciation: "প্রভাবশালী",
        meaning: "Good at persuading someone to do or believe something through reasoning or argument."
      },
      {
        id: "labyrinthine",
        english: "labyrinthine",
        bengaliPronunciation: "জটিল পথযুক্ত",
        meaning: "Resembling a labyrinth in form or complexity; intricate and confusing."
      },
      {
        id: "ingenious",
        english: "ingenious",
        bengaliPronunciation: "কৌশলপূর্ণ",
        meaning: "Clever, original, and inventive; showing resourcefulness and skill."
      },
      {
        id: "obstructed",
        english: "obstructed",
        bengaliPronunciation: "বাধাগ্রস্ত",
        meaning: "Blocked or hindered; impeded by obstacles."
      },
      {
        id: "altruistic",
        english: "altruistic",
        bengaliPronunciation: "পরার্থপর",
        meaning: "Showing a selfless concern for the well-being of others; unselfish."
      },
      {
        id: "immaculate",
        english: "immaculate",
        bengaliPronunciation: "নিখুঁত",
        meaning: "Perfectly clean, neat, or tidy; without spot or blemish; free from fault or error."
      },
      {
        id: "spontaneous",
        english: "spontaneous",
        bengaliPronunciation: "স্বতঃস্ফূর্ত",
        meaning: "Performed or occurring as a result of a sudden inner impulse or inclination; without premeditation."
      },
      {
        id: "galvanize",
        english: "galvanize",
        bengaliPronunciation: "উদ্দীপিত করা",
        meaning: "Shock or excite someone into taking action; stimulate into activity."
      },
      {
        id: "traversable",
        english: "traversable",
        bengaliPronunciation: "অতিক্রমযোগ্য",
        meaning: "Capable of being traversed or crossed; passable."
      },
      {
        id: "fastidious",
        english: "fastidious",
        bengaliPronunciation: "বাছবিচারপূর্ণ",
        meaning: "Very attentive to and concerned about accuracy and detail; difficult to please; excessively particular."
      },
      {
        id: "empathetic",
        english: "empathetic",
        bengaliPronunciation: "সহানুভূতিশীল",
        meaning: "Showing an ability to understand and share the feelings of another; empathic."
      },
      {
        id: "adaptability",
        english: "adaptability",
        bengaliPronunciation: "খাপ খাওয়ানোর ক্ষমতা",
        meaning: "The quality of being able to adjust to new conditions; the ability to change to suit different conditions."
      },
      {
        id: "serendipitous",
        english: "serendipitous",
        bengaliPronunciation: "সৌভাগ্যক্রমে ঘটা",
        meaning: "Occurring or discovered by chance in a happy or beneficial way; fortunate and unexpected."
      }
    ],
    footnotes: [
      {
        id: "u1",
        text: "কলকাতা শহরে বর্ষাকালে জলবদ্ধতা একটি নিয়মিত সমস্যা, যা প্রায়শই নাগরিক জীবনকে থমকে দেয়। (Waterlogging during the monsoon is a regular problem in Kolkata city, often bringing urban life to a standstill.)"
      },
      {
        id: "u2",
        text: "আধুনিক শহুরে বাংলা সংস্কৃতিতে, গলি এবং পার্শ্ব-রাস্তা নেভিগেশনের দক্ষতা একটি গুরুত্বপূর্ণ দৈনন্দিন কৌশল। (In modern urban Bengali culture, the skill of navigating alleys and side-streets is an important everyday strategy.)"
      }
    ]
  },
  {
    id: 3,
    title: "অদৃশ্য সম্পদ (The Invisible Wealth)",
    description: "একটি গ্রামীণ পরিবারের গল্প যারা উপলব্ধি করে যে প্রকৃত সম্পদ অর্থের বাইরেও থাকতে পারে।",
    category: "moral",
    readingTime: 4,
    content: [
      "অনন্ত গ্রামের বাসিন্দা মনোহর চাষী একজন {impoverished} কৃষক ছিলেন। তিনি সংসার চালাতে {incessant} পরিশ্রম করতেন, কিন্তু প্রাকৃতিক দুর্যোগের কারণে প্রায়ই ফসল নষ্ট হয়ে যেত।",
      "একদিন গ্রামে একজন {affluent} ব্যবসায়ী এলেন যিনি গ্রামে একটি কারখানা খুলতে চেয়েছিলেন। তিনি মনোহরের জমি কিনতে একটি {lucrative} প্রস্তাব দিলেন।",
      "মনোহর {equivocal} ছিলেন। একদিকে অর্থের প্রলোভন, অন্যদিকে পূর্বপুরুষের জমি ছেড়ে দেওয়ার {trepidation}। তার স্ত্রী সবিতা তাকে বলল, \"অর্থ {ephemeral}, কিন্তু আমাদের ভূমি সম্পর্ক {perpetual}।\"",
      "ব্যবসায়ী মনোহরকে {coerce} করার চেষ্টা করলেন, বলে যে তার ছেলেমেয়েরা {destitute} থাকবে যদি সে এই সুযোগ হারায়। গ্রামের কিছু লোক এই যুক্তি {corroborate} করল।",
      "কিন্তু মনোহরের ছেলে যিনি শহরে পড়াশোনা করেন, তিনি গ্রামে ফিরে এসে {vociferous} প্রতিবাদ করলেন। তিনি {elucidate} করলেন যে কারখানা গ্রামের পরিবেশকে {contaminate} করবে।",
      "গ্রামে একটি সভা ডাকা হল যেখানে মনোহর একটি {eloquent} বক্তৃতা দিলেন। তিনি বললেন, \"আমরা প্রকৃতির {custodian}, অর্থের {subservient} নই। আমাদের {paradigm} হওয়া উচিত টেকসই জীবন।\"",
      "তার কথা শুনে গ্রামবাসীরা {contemplative} হয়ে গেলেন। ব্যবসায়ী {disdainful} হয়ে চলে গেলেন। কিন্তু পরের বছর গ্রামবাসীরা মিলে জৈব কৃষি শুরু করলেন, যা {sustainable} এবং {profitable} ছিল।",
      "অল্প সময়ের মধ্যেই, তাদের গ্রাম {exemplary} হয়ে উঠল। সবাই বুঝল যে প্রকৃত সম্পদ হল জ্ঞান, একতা এবং প্রকৃতির সাথে {symbiotic} সম্পর্ক - যা অর্থ দিয়ে কেনা যায় না [m1]।"
    ],
    vocabulary: [
      {
        id: "impoverished",
        english: "impoverished",
        bengaliPronunciation: "দরিদ্র",
        meaning: "Made poor; lacking money, possessions, or resources; characterized by poverty."
      },
      {
        id: "incessant",
        english: "incessant",
        bengaliPronunciation: "অবিরাম",
        meaning: "Continuing without pause or interruption; ceaseless; unending."
      },
      {
        id: "affluent",
        english: "affluent",
        bengaliPronunciation: "সম্পন্ন",
        meaning: "Having a great deal of money; wealthy; abundant; plentiful."
      },
      {
        id: "lucrative",
        english: "lucrative",
        bengaliPronunciation: "লাভজনক",
        meaning: "Producing a great deal of profit; financially rewarding or profitable."
      },
      {
        id: "equivocal",
        english: "equivocal",
        bengaliPronunciation: "দ্বিধাগ্রস্ত",
        meaning: "Open to more than one interpretation; ambiguous or uncertain; unclear."
      },
      {
        id: "trepidation",
        english: "trepidation",
        bengaliPronunciation: "আশঙ্কা",
        meaning: "A feeling of fear or anxiety about something that may happen; trembling movement."
      },
      {
        id: "ephemeral",
        english: "ephemeral",
        bengaliPronunciation: "ক্ষণস্থায়ী",
        meaning: "Lasting for a very short time; transitory; fleeting."
      },
      {
        id: "perpetual",
        english: "perpetual",
        bengaliPronunciation: "চিরস্থায়ী",
        meaning: "Never ending or changing; continuing or lasting forever; everlasting."
      },
      {
        id: "coerce",
        english: "coerce",
        bengaliPronunciation: "জোর করা",
        meaning: "To persuade or force someone to do something by using threats or violence."
      },
      {
        id: "destitute",
        english: "destitute",
        bengaliPronunciation: "নিঃস্ব",
        meaning: "Extremely poor and lacking the means to provide for oneself; without resources."
      },
      {
        id: "corroborate",
        english: "corroborate",
        bengaliPronunciation: "সমর্থন করা",
        meaning: "To confirm or give support to a statement, theory, or finding; to support with evidence."
      },
      {
        id: "vociferous",
        english: "vociferous",
        bengaliPronunciation: "উচ্চকণ্ঠ",
        meaning: "Expressing or characterized by vehement opinions; loud and forceful; clamorous."
      },
      {
        id: "elucidate",
        english: "elucidate",
        bengaliPronunciation: "ব্যাখ্যা করা",
        meaning: "To make clear or plain; to explain or clarify something that is difficult to understand."
      },
      {
        id: "contaminate",
        english: "contaminate",
        bengaliPronunciation: "দূষিত করা",
        meaning: "To make something impure, unclean, or poisonous by adding a harmful substance."
      },
      {
        id: "eloquent",
        english: "eloquent",
        bengaliPronunciation: "বাগ্মী",
        meaning: "Fluent or persuasive in speaking or writing; clearly expressing or indicating something."
      },
      {
        id: "custodian",
        english: "custodian",
        bengaliPronunciation: "রক্ষক",
        meaning: "A person who has responsibility for taking care of or protecting something."
      },
      {
        id: "subservient",
        english: "subservient",
        bengaliPronunciation: "অধীনস্থ",
        meaning: "Prepared to obey others unquestioningly; less important; subordinate."
      },
      {
        id: "paradigm",
        english: "paradigm",
        bengaliPronunciation: "আদর্শ",
        meaning: "A typical example or pattern of something; a standard or model."
      },
      {
        id: "contemplative",
        english: "contemplative",
        bengaliPronunciation: "চিন্তাশীল",
        meaning: "Spending time in or dedicated to deep thoughtful study or reflection."
      },
      {
        id: "disdainful",
        english: "disdainful",
        bengaliPronunciation: "অবজ্ঞাপূর্ণ",
        meaning: "Showing contempt or lack of respect; scornful or dismissive."
      },
      {
        id: "sustainable",
        english: "sustainable",
        bengaliPronunciation: "টেকসই",
        meaning: "Able to be maintained at a certain rate or level; conserving an ecological balance."
      },
      {
        id: "profitable",
        english: "profitable",
        bengaliPronunciation: "লাভজনক",
        meaning: "Yielding profit or financial gain; beneficial or useful."
      },
      {
        id: "exemplary",
        english: "exemplary",
        bengaliPronunciation: "অনুকরণীয়",
        meaning: "Serving as a desirable model or example; worthy of imitation; commendable."
      },
      {
        id: "symbiotic",
        english: "symbiotic",
        bengaliPronunciation: "সহাবস্থানমূলক",
        meaning: "Involving interaction between two different organisms living in close physical association, typically to the advantage of both."
      }
    ],
    footnotes: [
      {
        id: "m1",
        text: "বাংলাদেশ ও পশ্চিমবঙ্গের গ্রামীণ সমাজে জমির সাথে মানুষের সম্পর্ক শুধু অর্থনৈতিক নয়, সাংস্কৃতিক ও আধ্যাত্মিক। (In rural societies of Bangladesh and West Bengal, people's relationship with land is not merely economic but cultural and spiritual.)"
      }
    ]
  }
];

