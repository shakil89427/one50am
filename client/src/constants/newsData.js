const data = [
  {
    newsId: `01LNRNg7du4PkHXCWltm`,
    title: `Elon Musk tweeted to create an ‘everything app’; what is it?`,
    description: `Musk is now willing to proceed with his original plan to buy the social media company for $44 billion and late on Tuesday he tweeted: “Buying Twitter is an accelerant to creating X, the everything app.” The concept of an everything app, often referred to as a “super app,” is massively popular in Asia and tech companies across the world have tried to replicate it. A super app, or what Musk refers to as an “everything app,” has been described as the Swiss army knife of mobile apps, offering a suite of services for users such as messaging, social networking, peer-to-peer payments and e-commerce shopping.`,
    creationDate: Date.now() - 14400000,
    readTime: 120,
  },
  {
    newsId: `07bkspz4kVlG4X3Oph6l`,
    title: `This Diwali, Flipkart to woo customers with a Metaverse shopping experience`,
    description: `Flipkart﻿ is launching Flipverse, an interactive virtual shopping destination, in India. Sources close to the development have confirmed to The Decrypting Story that the ecommerce giant has teamed up with social media behemoth Meta and Ethereum scaling solution Polygon for the project. Social media influencer Mukul Sharma tweeted about Flipverse's launch. The source said that Flipkart is expected to make an official announcement of Flipverse during Flipkart's Big Billion Day sale, which takes place during Diwali.`,
    creationDate: Date.now() - 86400000 * 2,
    readTime: 180,
  },
  {
    newsId: `0D3H6WobHV0AJPO00Kti`,
    title: `Chinese vlogger gets into trouble, after eating a great white shark`,
    description: `Influencer from china is under police investigation after a clip of her roasting and eating a great white shark went viral. Tiji (vlogger name) said, 'It may look vicious, but its meat is truly very tender,' while tearing off large chunks of the animal's barbecued meat, in a video posted in mid-July. In China, they great white shark listed as protected. Illegal possession can lead to a five-to-10-year prison term.`,
    creationDate: Date.now() - 86400000 * 3,
    readTime: 240,
  },
  {
    newsId: `0Ekr2pLriNZzs31Uvp7M`,
    title: `Virat Kohli and Priyanka Chopra rank first and second in Asian influencers`,
    description: `India’s very own Virat Kohli, the former Indian cricket team captain, is ranked as the first-highest-earning celebrity on Instagram and the third-highest-earning celebrity with an estimated earning of $36.7 million purely through Instagram sponsorships. The only Bollywood actress, global icon and most talked Indian celebrity Priyanka Chopra Jonas endorses multiple brands like Bumble, Appy Fizz, Schmitten Luxury Chocolates and so on. Her earning per Instagram post is $423k and she is the second Asian Indian influencer with the highest earnings per Instagram post.`,
    creationDate: Date.now() - 86400000 * 4,
    readTime: 120,
  },
  {
    newsId: `0FHoU6WYbeU3dZE2COCs`,
    title: `Lionel Messi is BYJU'S ambassador of 'Education for All'`,
    description: `Ed-tech firm BYJU'S on Friday announced football star and global sports icon Lionel Messi as the global brand ambassador of its social impact arm -- Education For All. Lionel Messi, who plays for Paris Saint-Germain and captains the Argentinian football team, has signed an agreement with BYJU'S to promote the cause of equitable education. This association with one of the world's most popular sports persons is in sync with the expanding global footprint of BYJU'S and its commitment to making education accessible, equitable, and affordable for all, a statement said on Friday.`,
    creationDate: Date.now() - 86400000 * 6,
    readTime: 180,
  },
  {
    newsId: `0SSaZ9Zb7SbqhM0gvM6s`,
    title: `Logan Paul Will Take On Roman Reigns For The WWE Championship Title`,
    description: `Logan Paul will fight Undisputed WWE Universal Championship holder Roman Reigns at Crown Jewel, set to take place on November 5 in Riyadh, Saudi Arabia. The announcement was made last night by Triple H at the WWE press event held in Las Vegas.n"We need to talk about Crown Jewel, and we need to talk about the biggest spectacle that will be happening on November 5 in Saudi Arabia," said Triple H.`,
    creationDate: Date.now() - 86400000 * 7,
    readTime: 240,
  },
  {
    newsId: `0TrfHSKxhRUM3GftFmOC`,
    title: `TheSaudis NFTs : Latest collection gets Twitter personalities fueled up`,
    description: `"TheSaudis" NFT topped the volume charts in its debut weekend with $7.7 million in sales. The collection of 5,555 NFTs, whose artwork is a derivative of the famed CryptoPunks collectables, was free to mint on July 9 & sold out within hours. The project kept its momentum going with goblin noise-filled Twitter Spaces and influencer partnerships, most recently taking over NFT.NYC with a slew of ghoul-themed parties. Many of whom created Saudi Arabia-inspired meme videos to fuel the project’s hype.`,
    creationDate: Date.now() - 86400000 * 9,
    readTime: 120,
  },
  {
    newsId: `0UAVlJhd3cpXyrQfwKrO`,
    title: `Bira 91 partners with Warner Bros. Consumer Products for House of the Dragon merchandise`,
    description: `Bira 91, in collaboration with Warner Bros. Consumer Products, has announced the launch of an exclusive merchandise collection inspired by the newly released HBO Original series House of the Dragon, the successor series to Game of Thrones. The exclusive House of the Dragon x Bira 91 merchandise celebrates the season of Fire and Blood and is dedicated to fans across India. The collection includes products inspired by the Seven Kingdoms and is perfect for fans to display their love for the world of Targaryens.`,
    creationDate: Date.now() - 86400000 * 10,
    readTime: 180,
  },
  {
    newsId: `0kQrxBak2CqhspJXqmsc`,
    title: `ESPN launches creator network to attract Gen Z`,
    description: `ESPN is launching ESPN Creator Network, providing up-and-coming content creators with access to ESPN’s sports properties and resources. The first iteration will feature 10 creators and focus on TikTok. It will begin in October and run for about four months. The creator network is a partnership with social-led content agency Blue Hour Studios. The ESPN Creator Network follows similar efforts by other publishers and social platforms that are seeking to engage with Gen Z by boosting support for content creators.`,
    creationDate: Date.now() - 86400000 * 12,
    readTime: 240,
  },
  {
    newsId: `0kuQo3CAFP6IOeKhQsuA`,
    title: `Companies Using Influencers to Hire People`,
    description: `Companies across the country continue to struggle to find workers to fill vacancies. Labor shortages themselves are a complex issue with many  factors, but today's brands have  surprisingly effective contacts when it comes to hiring. Whether the goal is to raise awareness, sell products, or hire the right employees, influencer marketing can open the door to genuine brand engagement with results.`,
    creationDate: Date.now() - 86400000 * 13,
    readTime: 120,
  },
  {
    newsId: `0lvEWzfNufPxYQLBWbvS`,
    title: `Social media influencer booked for cheating doctor of Rs 4.5 crore with medical college promise`,
    description: `A social media influencer has been booked for allegedly duping a homeopath of Rs 4.5 crore by promising to get a medical college sanctioned in his name and "saving him from arrest" in a non-existent Central Bureau of Investigation case, Nagpur police said on Thursday. The victim came in contact with the accused through a relative and spoke of his desire to start a homeopathy college, the Kotwali police station official said. "The accused extorted Rs 4.5 crore from the victim by claiming he had contacts with various departments in the Union and state governments. He also took money from the victim after finding out the latter was a guarantor for a bank loan," the official said.`,
    creationDate: Date.now() - 86400000 * 15,
    readTime: 180,
  },
  {
    newsId: `0v7yhLdLjS48dE0IHA6M`,
    title: `South Korea 'cryptocrash' boss faces arrest warrant`,
    description: `A spokesperson for the South Korean prosecutor's office told the BBC that arrest warrants had been issued for Kwon and five other individuals connected to the case. However, she declined to comment on how close authorities were to making the arrests.According to media reports Mr Kwon is believed to be in Singapore, which does not have an extradition agreement with South Korea.`,
    creationDate: Date.now() - 86400000 * 17,
    readTime: 240,
  },
  {
    newsId: `0w7sR87oceuFpXkpzMxH`,
    title: `VR headset that can actually kill you if you die in-game :Oculus Founder`,
    description: `In a blog post, Palmer Luckey the founder VR headset oculus said he was inspired by the Japanese novel series-turned-anime 'Sword Art Online'. In it, players are entrapped in an online role-playing game where death in the game implies death in the real world due to the lethal "NerveGear" headset they wear. “The idea of tying your real life to your virtual avatar has always fascinated me - you instantly raise the stakes to the maximum level and force people to fundamentally rethink how they interact with the virtual world and the players inside it,” Luckey said.`,
    creationDate: Date.now() - 86400000 * 18,
    readTime: 120,
  },
  {
    newsId: `0x5ecxioR5Y7laED9zyQ`,
    title: `Valorant Harbor Celebrated in Indian Culture with famous Gamerz`,
    description: `The launch party for Harbor saw the participation of famous Indian celebrities including Tanmay Bhat and Abish Mathew. They were joined by Ocean Sharma and a number of well-known Indian influencers, including Ujjwal Chaurasia (Techno Gamerz), Naman Mathur (MortaL), Tanmay Singh (Scout) and Shagufta Iqbal (Xyaa). Valorant pro players including Ganesh “SkRossi” Gangadhar, Rishab “Rakazone” Karanwal, Rohan “HydraFlick” Ledwani, and Sabyasachi "Antidote" Bose were also among those present. The event concluded with a performance from ARB4, Mangal Suvarnan, and Tienas, the music team that produced Harbor’s theme song, RAJA.`,
    creationDate: Date.now() - 86400000 * 20,
    readTime: 180,
  },
  {
    newsId: `0z1Q1Z2fF3Ghwi0427tS`,
    title: `Twitter is down, many users facing issues in accessing the social media site`,
    description: `Twitter was down this morning, making it difficult for many users to access their accounts. Since they are unable to view anything on the microblogging page, users are having problems accessing their Twitter feed. When the feed page initially loads, a popup with the message "Something Went Wrong, But Don't Worry - Try Again" displays. Users of apps appear to be able to access their feed but Web users are unable to do so.`,
    creationDate: Date.now() - 86400000 * 21,
    readTime: 240,
  },
  {
    newsId: `14BVrSWBCoijc3peinjY`,
    title: `Jasmin Bhasin’s Prettiest Looks In Pink Will Give You Sleepless Nights`,
    description: `The diva has proven her strength through both her acting prowess and her sense of style. Due to her glamorous online persona, the actor has a big fan base and is highly active on social media. Jasmin Bhasin appears to be a big fan of pink outfits according to her social media accounts. She frequently dresses in pink for photo sessions. Jasmin is stunning in every outfit, whether it is western or traditional.`,
    creationDate: Date.now() - 86400000 * 23,
    readTime: 120,
  },
];

export default data;