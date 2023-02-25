const data = [
  {
    id: 1,
    title: 'Death Note',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    description: `Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.

    For his own amusement, Ryuk drops his "Death Note" into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.
    
    Aware of the terrifying godlike power that has fallen into his hands, Light—under the alias "Kira"—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.`,
    genre: 'Supernatural / Suspense / Psychological'
  },
  {
    id: 2,
    title: 'Ghost In The Shell',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/10/82594.jpg',
    description: `In the year 2029, Niihama City has become a technologically advanced metropolis. Due to great improvements in cybernetics, its citizens are able to replace their limbs with robotic parts. The world is now more interconnected than ever before, and the city's Public Security Section 9 is responsible for combating corruption, terrorism, and other dangerous threats following this shift toward globalization.

    The strong-willed Major Motoko Kusanagi of Section 9 spearheads a case involving a mysterious hacker known only as the "Puppet Master," who leaves a trail of victims stripped of their memories. Like many in this futuristic world, the Puppet Master's body is almost entirely robotic, giving them incredible power.
    
    As Motoko and her subordinates follow the enigmatic criminal's trail, other parties—including Section 6—start to get involved, forcing her to confront the extremely complicated nature of the case. Pondering about various philosophical questions, such as her own life's meaning, Motoko soon realizes that the one who will provide these answers is none other than the Puppet Master themself.`,
    genre: 'Action / Mystery / Sci - fi / Suspense / Psychological'
  },
  {
    id: 3,
    title: 'Gintama',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/10/73274.jpg',
    description: `Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan's surrender to powerful aliens known as the "Amanto," those aspirations now seem unachievable. With the once-influential shogunate rebuilt as a puppet government, a new law is passed that promptly prohibits all swords in public.

    Enter Gintoki Sakata, an eccentric silver-haired man who always carries around a wooden sword and maintains his stature as a samurai despite the ban. As the founder of Yorozuya, a small business for odd jobs, Gintoki often embarks on endeavors to help other people—though usually in rather strange and unforeseen ways.
    
    Assisted by Shinpachi Shimura, a boy with glasses supposedly learning the way of the samurai; Kagura, a tomboyish girl with superhuman strength and an endless appetite; and Sadaharu, their giant pet dog who loves biting on people's heads, the Yorozuya encounter anything from alien royalty to scuffles with local gangs in the ever-changing world of Edo.`
  },
  {
    id: 4,
    title: 'Code Geass: Hangyaku no Lelouch',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/5/50331.jpg',
    description: `In the year 2010, the Holy Empire of Britannia is establishing itself as a dominant military nation, starting with the conquest of Japan. Renamed to Area 11 after its swift defeat, Japan has seen significant resistance against these tyrants in an attempt to regain independence.

    Lelouch Lamperouge, a Britannian student, unfortunately finds himself caught in a crossfire between the Britannian and the Area 11 rebel armed forces. He is able to escape, however, thanks to the timely appearance of a mysterious girl named C.C., who bestows upon him Geass, the "Power of Kings." Realizing the vast potential of his newfound "power of absolute obedience," Lelouch embarks upon a perilous journey as the masked vigilante known as Zero, leading a merciless onslaught against Britannia in order to get revenge once and for all.`,
    genre: 'Action / Drama / Sci - Fi / Mecha / Military'
  },
  {
    id: 5,
    title: 'Spirited Away',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
    description: `Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way.

    Vivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home.`,
    genre: 'Adventure/ Supernatural/ Mythology'
  },
  {
    id: 6,
    title: 'Blood C',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/2/31649.jpg',
    description: `Peaceful schoolgirl by day, fearsome monster slayer by night, Saya Kisaragi is leading a split life. Equipped with a ceremonial sword given to her by her father for sacred tasks, she vanquishes every monster who dares threaten her quiet little village. But all too soon, Saya's reality and everything she believes to be true is tested, when she overhears the monsters speak of a broken covenant—something she knows nothing about. And then, unexpectedly, a strange dog appears; it asks her to whom she promised to protect the village, curious as to what would happen if she were to break that promise. Tormented by unexplainable visions and her world unraveling around her, we travel with Saya through her struggle to find a way to the truth in a village where nothing is as it seems.`,
    genre: 'Action / Horror / Mystery / Supernatural / Gore'
  },
  {
    id: 7,
    title: 'Blood: The Last Vampire',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/9/18913.jpg',
    description: `Teropterids are evil beasts which pose as humans and live only to drink human blood. Fortunately for the human world there are groups dedicated to destroying them. A brooding and mysterious girl named Saya is the best teropterid slayer there is, and now, in 1960s Japan, she is sent to a U. S. army base which may be infested...`,
    genre: `Horror / Supernatural / Gore`
  },
  {
    id: 8,
    title: 'Vampire Hunter D: Bloodlust',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/9/21432.jpg',
    description: `The story revolves around D, the infamous "dhampir" (born of a vampire father and a human mother) outcast and renowned vampire hunter. His prowess at hunting the creatures of the night allowing his acceptance among humans, he is called upon to locate Charlotte Elbourne, the lovely daughter of an affluent family who has been mysteriously kidnapped.

    When the sun sets, the hunt goes on! Charlotte's father offers a rich bounty, be she dead or alive, a task D willingly accepts, even with notorious Markus brothers and their gang of bounty hunters seeking the prize as well. Amidst the chase and unknown to all lurks, a sinister evil which has been secretly manipulating their every move and has set a chilling trap that none will expect and few will survive. With the tables turned and the secrets revealed, the hunters could quickly become the hunted!`,
    genre: `Action / Drama/ Fantasy/ Horror / Sci - Fi`
  },
  {
    id: 9,
    title: 'Parasyte: The Maxim',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/3/73178.jpg',
    description: `All of a sudden, they arrived: parasitic aliens that descended upon Earth and quickly infiltrated humanity by burrowing into the brains of vulnerable targets. These insatiable beings acquire full control of their host and are able to morph into a variety of forms in order to feed on unsuspecting prey.

    Sixteen-year-old high school student Shinichi Izumi falls victim to one of these parasites, but it fails to take over his brain, ending up in his right hand instead. Unable to relocate, the parasite, now named Migi, has no choice but to rely on Shinichi in order to stay alive. Thus, the pair is forced into an uneasy coexistence and must defend themselves from hostile parasites that hope to eradicate this new threat to their species.`,
    genre: 'Action / Horror / Sci - Fi / Gore / Psychological'
  },
  {
    id: 10,
    title: 'Another',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/4/75509.webp',
    description: `In class 3-3 of Yomiyama North Junior High, transfer student Kouichi Sakakibara makes his return after taking a sick leave for the first month of school. Among his new classmates, he is inexplicably drawn toward Mei Misaki—a reserved girl with an eyepatch whom he met in the hospital during his absence. But none of his classmates acknowledge her existence; they warn him not to acquaint himself with things that do not exist. Against their words of caution, Kouichi befriends Mei—soon learning of the sinister truth behind his friends' apprehension.

    The ominous rumors revolve around a former student of the class 3-3. However, no one will share the full details of the grim event with Kouichi. Engrossed in the curse that plagues his class, Kouichi sets out to discover its connection to his new friend. As a series of tragedies arise around them, it is now up to Kouichi, Mei, and their classmates to unravel the eerie mystery—but doing so will come at a hefty price.`,
    genre: 'Horror / Mystery / Supernatural / Gore'
  },
  {
    id: 11,
    title: 'Hellsing Ultimate',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/6/7333.jpg',
    description: `There exist creatures of darkness and evil that plague the night, devouring any human unfortunate enough to be caught in their grasp. On the other side is Hellsing, an organization dedicated to destroying these supernatural forces that threaten the very existence of humanity. At its head is Integra Fairbrook Wingates Hellsing, who commands a powerful military and spends her life fighting the undead.

    Integra's vast army, however, pales in comparison with her ultimate weapon: the vampire Alucard, who works against his own kind as an exterminator for Hellsing. With his new vampire servant, Seras Victoria, at his side, Alucard must battle not only monsters, but all those who stand to oppose Hellsing, be they in the guise of good or evil.
    
    In a battle for mankind's survival, Hellsing Ultimate proves that appearances are not all they may seem, and sometimes the greatest weapon can come in the form of one's worst nightmare.`,
    genre: 'Action / Horror / Supernatural / Gore / Military'
  },
  {
    id: 12,
    title: 'Deadman Wonderland',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/9/75299.jpg',
    description: `It looked like it would be a normal day for Ganta Igarashi and his classmates—they were preparing to go on a class field trip to a certain prison amusement park called Deadman Wonderland, where the convicts perform dangerous acts for the onlookers' amusement. However, Ganta's life is quickly turned upside down when his whole class gets massacred by a mysterious man in red. Framed for the incident and sentenced to death, Ganta is sent to the very jail he was supposed to visit.

    But Ganta's nightmare is only just beginning.
    
    The young protagonist is thrown into a world of sadistic inmates and enigmatic powers, to live in constant fear of the lethal collar placed around his neck that is slowed only by winning in the prison's deathly games. Ganta must bet his life to survive in a ruthless place where it isn't always easy to tell friend from foe, all while trying to find the mysterious "Red Man" and clear his name, in Deadman Wonderland.`,
    genre: 'Action / Horror / Sci - Fi / Supernatural / Gore / Survival'
  },
  {
    id: 13,
    title: `Tokyo Ghoul`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/5/64449.jpg',
    description: `A sinister threat is invading Tokyo: flesh-eating "ghouls" who appear identical to humans and blend into their population. Reserved college student Ken Kaneki buries his nose in books and avoids the news of the growing crisis. However, the appearance of an attractive woman named Rize Kamishiro shatters his solitude when she forwardly asks him on a date.

    While walking Rize home, Kaneki discovers she isn't as kind as she first appeared, and she has led him on with sinister intent. After a tragic struggle, he later awakens in a hospital to learn his life was saved by transplanting the now deceased Rize's organs into his own body.
    
    Kaneki's body begins to change in horrifying ways, and he transforms into a human-ghoul hybrid. As he embarks on his new dreadful journey, Kaneki clings to his humanity in the evolving bloody conflict between society's new monsters and the government agents who hunt them.`,
    genre: `Action / Fantasy / Horror / Gore / Psychological`
  },
  {
    id: 14,
    title: `Steins;Gate`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
    description: `Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.

    However, when Rintarou decides to attend neuroscientist Kurisu Makise's conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN.
    
    Due to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.`,
    genre: 'Drama / Sci - Fi / Suspense / Psychological'
  },
  {
    id: 15,
    title: `Mirai Nikki`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/13/33465.jpg',
    description: `Yukiteru Amano is a shy middle schooler who regularly keeps track of what he does in his daily life by writing down all of his activities on his phone—a digital diary. Despite having no friends at school, Yukiteru is frequently seen talking to his supposedly imaginary friends Deus Ex Machina, the god of time and space; and Deus' servant, Mur Mur.

    One day, Yukiteru wakes up and discovers that certain events of his day are preemptively displayed on his cellphone. While initially dismissing it as a coincidence, he slowly realizes that the incidents written in his phone actually take place in the near future. After spending the day benefiting from this new asset, Yukiteru learns that his classmate Yuno Gasai possesses a similar diary.
    
    As the two team up to defeat an odd pursuer and head back to their respective homes, Deus Ex Machina explains that they—alongside 10 other contestants—have been drawn into a survival game whose victor will become the deity's successor. With no other options, Yukiteru and Yuno must use their cellphones—now called "Future Diaries"—to survive this unforgiving battle royale.`,
    genre: 'Action / Supernatural / Suspense / Gore / Psychological / Survival'
  },
  {
    id: 16,
    title: `Death Parade`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/5/71553.jpg',
    description: `After death, either Heaven or Hell awaits most humans. But for a select few, death brings them to Quindecim—a bar where only pairs of people who die at the same time can enter. Attending the bar is an enigmatic figure known as Decim, who also acts as the arbiter. He passes judgment on those who wind up at Quindecim by challenging them to a life-threatening game. These games determine if the patron's soul will reincarnate into a new life, or be sent into the void, never to be seen again.

    From darts and bowling to fighting games, the true nature of each patron slowly comes to light as they wager their souls. Though his methods remain unchanged, the sudden appearance of a black-haired amnesiac causes Decim to reevaluate his own rulings.`,
    genre: 'Drama / Supernatural / Suspense / Psychological'
  },
  {
    id: 17,
    title: `Howl's Moving Castle`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/5/75810.jpg',
    description: `That jumbled piece of architecture, that cacophony of hissing steam and creaking joints, with smoke billowing from it as it moves on its own... That castle is home to the magnificent wizard Howl, infamous for both his magical prowess and for being a womanizer—or so the rumor goes in Sophie Hatter's small town. Sophie, as the plain daughter of a hatmaker, does not expect much from her future and is content with working hard in the shop.

    However, Sophie's simple life takes a turn for the exciting when she is ensnared in a disturbing situation, and the mysterious wizard appears to rescue her. Unfortunately, this encounter, brief as it may be, spurs the vain and vengeful Witch of the Waste—in a fit of jealousy caused by a past discord with Howl—to put a curse on the maiden, turning her into an old woman.
    
    In an endeavor to return to normal, Sophie must accompany Howl and a myriad of eccentric companions—ranging from a powerful fire demon to a hopping scarecrow—in his living castle, on a dangerous adventure as a raging war tears their kingdom apart.`,
    genre: `Adventure / Drama / Fantasy`
  }
]

export default data
