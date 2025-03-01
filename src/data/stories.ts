
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
    title: "The Adventure of a Lifetime",
    description: "A young explorer discovers a hidden world beneath the streets of Kolkata.",
    category: "adventure",
    readingTime: 5,
    content: [
      "সকাল বেলা রাজীব একটি চিঠি পেল। It was a {mysterious} letter with no return address.",
      "\"এটা কিভাবে আসল?\" রাজীব ভাবল। He felt {curious} about who might have sent it.",
      "চিঠিতে লেখা ছিল, \"If you want to find the {treasure}, follow the map.\" চিঠির সাথে একটি পুরানো {map} ছিল।",
      "রাজীব দেখল মানচিত্রে কলকাতার পুরানো এলাকার একটি secret {passage} চিহ্নিত করা আছে। This was the {beginning} of an exciting adventure.",
      "সে ভাবল, \"I should {explore} this hidden passage.\" রাজীব তার {backpack} নিয়ে রওনা দিল।",
      "পুরানো বাড়ির নিচে, he found a {hidden} door that led to an underground tunnel [r1].",
      "The tunnel was dark and {narrow}, but রাজীব তার টর্চ জ্বালাল and continued walking.",
      "After walking for what seemed like hours, he discovered a {massive} underground library filled with ancient books.",
      "\"এই অসাধারণ! What a {discovery}!\" he exclaimed.",
      "The library had been {abandoned} for decades, but every book was perfectly preserved.",
      "রাজীব একটি বই খুলল and found that it contained {valuable} information about Bengal's history.",
      "He decided to {share} his discovery with the city museum. \"লোকেদের জানা উচিত এই সম্পদের কথা,\" he thought.",
      "His {journey} had led him to something far more precious than any material treasure.",
      "Sometimes the greatest {adventures} are those that expand our knowledge and understanding of the world [r2]."
    ],
    vocabulary: [
      {
        id: "mysterious",
        english: "mysterious",
        bengaliPronunciation: "রহস্যময়",
        meaning: "Something difficult to understand, explain, or identify; causing curiosity or wonder."
      },
      {
        id: "curious",
        english: "curious",
        bengaliPronunciation: "কৌতূহলী",
        meaning: "Eager to learn or know something; showing interest."
      },
      {
        id: "treasure",
        english: "treasure",
        bengaliPronunciation: "ধনসম্পদ",
        meaning: "A quantity of precious metals, gems, or other valuable objects."
      },
      {
        id: "map",
        english: "map",
        bengaliPronunciation: "মানচিত্র",
        meaning: "A diagrammatic representation of an area showing physical features."
      },
      {
        id: "passage",
        english: "passage",
        bengaliPronunciation: "পথ",
        meaning: "A way of getting from one place to another, especially a narrow or difficult one."
      },
      {
        id: "beginning",
        english: "beginning",
        bengaliPronunciation: "শুরু",
        meaning: "The point in time or space at which something starts."
      },
      {
        id: "explore",
        english: "explore",
        bengaliPronunciation: "অন্বেষণ করা",
        meaning: "To travel through an unfamiliar area to learn about it."
      },
      {
        id: "backpack",
        english: "backpack",
        bengaliPronunciation: "ব্যাকপ্যাক",
        meaning: "A bag with shoulder straps that allow it to be carried on someone's back."
      },
      {
        id: "hidden",
        english: "hidden",
        bengaliPronunciation: "লুকানো",
        meaning: "Kept out of sight; concealed."
      },
      {
        id: "narrow",
        english: "narrow",
        bengaliPronunciation: "সরু",
        meaning: "Of small width in relation to length or height."
      },
      {
        id: "massive",
        english: "massive",
        bengaliPronunciation: "বিশাল",
        meaning: "Large and heavy or solid."
      },
      {
        id: "discovery",
        english: "discovery",
        bengaliPronunciation: "আবিষ্কার",
        meaning: "The act or process of finding something or someone previously unknown."
      },
      {
        id: "abandoned",
        english: "abandoned",
        bengaliPronunciation: "পরিত্যক্ত",
        meaning: "Having been deserted or left."
      },
      {
        id: "valuable",
        english: "valuable",
        bengaliPronunciation: "মূল্যবান",
        meaning: "Worth a lot of money; having great worth in a different way."
      },
      {
        id: "share",
        english: "share",
        bengaliPronunciation: "ভাগ করা",
        meaning: "To give a portion of something to another or others."
      },
      {
        id: "journey",
        english: "journey",
        bengaliPronunciation: "যাত্রা",
        meaning: "An act of traveling from one place to another."
      },
      {
        id: "adventures",
        english: "adventures",
        bengaliPronunciation: "অভিযানগুলি",
        meaning: "Unusual, exciting, and possibly dangerous experiences or activities."
      }
    ],
    footnotes: [
      {
        id: "r1",
        text: "পুরানো কলকাতায় অনেক গোপন সুড়ঙ্গ রয়েছে বলে ঐতিহাসিকরা বিশ্বাস করেন। (Historians believe there are many secret tunnels in old Kolkata.)"
      },
      {
        id: "r2",
        text: "এই বাক্যাংশটি একটি প্রাচীন বাংলা প্রবাদের ইংরেজি অনুবাদ। (This phrase is an English translation of an old Bengali proverb.)"
      }
    ]
  },
  {
    id: 2,
    title: "The Wise Fisherman",
    description: "A tale of wisdom from an old fisherman who teaches valuable life lessons.",
    category: "wisdom",
    readingTime: 4,
    content: [
      "A young man named সুমন visited a small fishing village near the Bay of Bengal.",
      "There, he met an old fisherman who was known for his {wisdom}. লোকেরা তাকে 'জ্ঞানী জেলে' বলে ডাকত।",
      "One day, সুমন asked the fisherman, \"How do you always catch the biggest fish? What's your {secret}?\"",
      "The old man smiled and said, \"{Patience} is my secret. আমি সঠিক সময়ের জন্য অপেক্ষা করি।\"",
      "\"But how do you know the right time?\" সুমন was {confused}.",
      "\"When you've spent as many years as I have {observing} the sea, you begin to understand its rhythms [w1],\" the fisherman explained.",
      "The fisherman continued, \"Many young people are in a {hurry} to succeed. তারা ভুল সমাধান খুঁজে।\"",
      "\"What do you mean?\" সুমন was now very {interested} in the old man's philosophy.",
      "\"Success is like fishing. It requires the right {strategy}, the right tools, and yes, sometimes a bit of luck.\"",
      "সুমন thought about this and asked, \"So, should I just wait for opportunities to come?\"",
      "The fisherman laughed, \"No, no! {Preparation} is also key. আমি প্রতিদিন আমার জাল ঠিক করি। I check my boat. I study the weather.\"",
      "\"I think I {understand} now,\" said সুমন. \"It's about balance - being ready but also being patient.\"",
      "\"Exactly! You have {learned} the most important lesson,\" smiled the old fisherman.",
      "As সুমন was leaving, the fisherman gave him a small carved wooden fish as a {reminder} of their conversation.",
      "Years later, when সুমন became a successful {businessman}, he kept that wooden fish on his desk to remember the wise fisherman's lessons [w2]."
    ],
    vocabulary: [
      {
        id: "wisdom",
        english: "wisdom",
        bengaliPronunciation: "জ্ঞান",
        meaning: "The quality of having experience, knowledge, and good judgment."
      },
      {
        id: "secret",
        english: "secret",
        bengaliPronunciation: "গোপন",
        meaning: "Something that is kept or meant to be kept unknown or hidden from others."
      },
      {
        id: "patience",
        english: "patience",
        bengaliPronunciation: "ধৈর্য",
        meaning: "The capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset."
      },
      {
        id: "confused",
        english: "confused",
        bengaliPronunciation: "বিভ্রান্ত",
        meaning: "Unable to think clearly; bewildered or puzzled."
      },
      {
        id: "observing",
        english: "observing",
        bengaliPronunciation: "পর্যবেক্ষণ করা",
        meaning: "To watch carefully; to notice or perceive something and register it as significant."
      },
      {
        id: "hurry",
        english: "hurry",
        bengaliPronunciation: "তাড়াহুড়ো",
        meaning: "To move or act with haste, often due to a sense of urgency."
      },
      {
        id: "interested",
        english: "interested",
        bengaliPronunciation: "আগ্রহী",
        meaning: "Showing curiosity or concern about something or someone; having a feeling of interest."
      },
      {
        id: "strategy",
        english: "strategy",
        bengaliPronunciation: "কৌশল",
        meaning: "A plan of action designed to achieve a long-term or overall aim."
      },
      {
        id: "preparation",
        english: "preparation",
        bengaliPronunciation: "প্রস্তুতি",
        meaning: "The action or process of making something ready for use or consideration."
      },
      {
        id: "understand",
        english: "understand",
        bengaliPronunciation: "বোঝা",
        meaning: "To perceive the intended meaning of words, language, or a speaker; to interpret or view something in a particular way."
      },
      {
        id: "learned",
        english: "learned",
        bengaliPronunciation: "শিখেছেন",
        meaning: "Having acquired knowledge or skill through study or experience."
      },
      {
        id: "reminder",
        english: "reminder",
        bengaliPronunciation: "স্মারক",
        meaning: "A thing that causes someone to remember something."
      },
      {
        id: "businessman",
        english: "businessman",
        bengaliPronunciation: "ব্যবসায়ী",
        meaning: "A man who works in business, especially at an executive level."
      }
    ],
    footnotes: [
      {
        id: "w1",
        text: "বাংলাদেশ ও পশ্চিমবঙ্গের জেলেরা সমুদ্রের বিষয়ে গভীর জ্ঞান রাখেন, যা প্রজন্ম থেকে প্রজন্মে প্রেরিত হয়। (Fishermen in Bangladesh and West Bengal carry deep knowledge about the sea, passed down through generations.)"
      },
      {
        id: "w2",
        text: "বাংলা সংস্কৃতিতে, কাঠের ছোট মূর্তিগুলি প্রায়ই শিক্ষামূলক উপহার হিসাবে দেওয়া হয়। (In Bengali culture, small wooden figurines are often given as educational gifts.)"
      }
    ]
  },
  {
    id: 3,
    title: "The Ghost of Howrah Bridge",
    description: "A mysterious tale set around Kolkata's famous landmark.",
    category: "mystery",
    readingTime: 6,
    content: [
      "কলকাতার হাওড়া ব্রিজ শুধু একটি ঐতিহাসিক স্থাপত্য নয়, it's also the center of many {supernatural} stories.",
      "অনেক টাক্সি ড্রাইভার বলেন যে মাঝরাতে তারা a {ghostly} figure দেখেছেন bridge এর উপর হাঁটতে.",
      "One such driver, রিতেশ দা, told me his {encounter} with the bridge's famous ghost.",
      "\"It was about 2 AM, and I was driving back from Howrah station. The bridge was almost {empty},\" he began.",
      "\"হঠাৎ, I saw a woman in a white sari standing in the middle of the bridge. She looked {distressed}.\"",
      "\"আমি গাড়ি থামিয়ে জিজ্ঞেস করলাম if she needed help, but when I got closer, I was {shocked} by what I saw.\"",
      "রিতেশ দা's voice lowered to a whisper, \"She had no feet! She was {floating} above the ground!\"",
      "\"I was {terrified} and quickly got back in my taxi. When I looked in my rearview mirror, she had vanished.\"",
      "Local {historians} say the story may have originated from a real {tragedy} that happened in the 1940s [m1].",
      "A young woman reportedly jumped off the bridge after receiving news of her husband's death in the war.",
      "Some believe her spirit still {wanders} the bridge, looking for a way home.",
      "Others say it's just an urban {legend} created to explain strange lights caused by fog and car headlights.",
      "বিজ্ঞানী পাণ্ডেরা বলেন, \"Many such stories have {logical} explanations, but people prefer the mysterious version.\"",
      "Whether you {believe} these stories or not, next time you cross Howrah Bridge at night, you might find yourself looking twice at any woman in a white sari [m2]."
    ],
    vocabulary: [
      {
        id: "supernatural",
        english: "supernatural",
        bengaliPronunciation: "অলৌকিক",
        meaning: "Attributed to some force beyond scientific understanding or the laws of nature."
      },
      {
        id: "ghostly",
        english: "ghostly",
        bengaliPronunciation: "প্রেতাত্মা সদৃশ",
        meaning: "Of or like a ghost; spectral."
      },
      {
        id: "encounter",
        english: "encounter",
        bengaliPronunciation: "সাক্ষাৎ",
        meaning: "An unexpected or casual meeting with someone or something."
      },
      {
        id: "empty",
        english: "empty",
        bengaliPronunciation: "খালি",
        meaning: "Containing nothing; not filled or occupied."
      },
      {
        id: "distressed",
        english: "distressed",
        bengaliPronunciation: "বিপন্ন",
        meaning: "Suffering from anxiety, sorrow, or pain."
      },
      {
        id: "shocked",
        english: "shocked",
        bengaliPronunciation: "হতবাক",
        meaning: "Surprised and upset by something unexpected and unpleasant."
      },
      {
        id: "floating",
        english: "floating",
        bengaliPronunciation: "ভাসমান",
        meaning: "Suspended in liquid or air without sinking or falling."
      },
      {
        id: "terrified",
        english: "terrified",
        bengaliPronunciation: "আতঙ্কিত",
        meaning: "Extremely frightened; filled with terror."
      },
      {
        id: "historians",
        english: "historians",
        bengaliPronunciation: "ঐতিহাসিকরা",
        meaning: "Experts or scholars who study or write about history."
      },
      {
        id: "tragedy",
        english: "tragedy",
        bengaliPronunciation: "বিয়োগান্ত ঘটনা",
        meaning: "An event causing great suffering, destruction, and distress."
      },
      {
        id: "wanders",
        english: "wanders",
        bengaliPronunciation: "ঘুরে বেড়ায়",
        meaning: "Moves around or travels aimlessly or without a fixed destination."
      },
      {
        id: "legend",
        english: "legend",
        bengaliPronunciation: "কিংবদন্তি",
        meaning: "A traditional story sometimes popularly regarded as historical but not authenticated."
      },
      {
        id: "logical",
        english: "logical",
        bengaliPronunciation: "যুক্তিসঙ্গত",
        meaning: "According to the rules of logic or formal argument; characterized by clear thinking."
      },
      {
        id: "believe",
        english: "believe",
        bengaliPronunciation: "বিশ্বাস করা",
        meaning: "Accept that something is true, especially without proof."
      }
    ],
    footnotes: [
      {
        id: "m1",
        text: "১৯৪০-এর দশকে দ্বিতীয় বিশ্বযুদ্ধের সময় বাংলায় অনেক যুবক ব্রিটিশ সেনাবাহিনীতে যোগ দিয়েছিলেন। (During the 1940s, many young Bengali men joined the British Army during World War II.)"
      },
      {
        id: "m2",
        text: "শাদা শাড়ি বাংলা সংস্কৃতিতে বিধবা মহিলাদের পোশাক হিসেবে পরিচিত। (The white sari is traditionally associated with widows in Bengali culture.)"
      }
    ]
  }
];
