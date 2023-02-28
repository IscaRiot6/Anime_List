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
  },
  {
    id: 18,
    title: 'Vinland Saga',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
    description: `Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, "You have no enemies, nobody does. There is nobody who it's okay to hurt," as he grew, Thorfinn knew that nothing was further from the truth.

    The war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the vikings, it seems, is the era of war and death that rages on.`,
    genre: 'Action / Adventure / Drama / Historical / Gore'
  },
  {
    id: 19,
    title: 'Ergo Proxy',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/11/6259.jpg',
    description: `Within the domed city of Romdo lies one of the last human civilizations on Earth. Thousands of years ago, a global ecological catastrophe doomed the planet; now, life outside these domes is virtually impossible. To expedite mankind's recovery, "AutoReivs," humanoid-like robots, have been created to assist people in their day-to-day lives. However, AutoReivs have begun contracting an enigmatic disease called the "Cogito Virus," which grants them self-awareness. Re-l Mayer, the granddaughter of Romdo's ruler, is assigned to investigate this phenomenon alongside her AutoReiv partner, Iggy. But what begins as a routine investigation quickly spirals into a conspiracy as Re-l is confronted by humanity's darkest sins.

    Elsewhere in Romdo, an AutoReiv specialist by the name of Vincent Law must also face his demons when surreal events begin occurring around him. Re-l, Iggy, Vincent, and the child AutoReiv named Pino will form an unlikely faction as they struggle to uncover Romdo's mysteries and discover the true purpose of the mythical beings called "Proxies."`,
    genre: 'Mystery / Sci - Fi / Psychological'
  },
  {
    id: 20,
    title: 'Boku no Hero Academia',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    description: `The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.

    Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor!
    
    Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this year's freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what it really means to be a hero.
    `,
    genre: 'Action'
  },
  {
    id: 21,
    title: 'Ponyo',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/7/8970.jpg',
    description: `A goldfish sneaks away from home and floats off on the back of a jellyfish. After getting stuck in a glass jar, she drifts to the shore where she is freed by Sousuke, a five-year-old boy who lives with his mother Lisa in a house by the sea while his father Koichi works on a fishing boat. After healing a cut on Sousuke's finger by licking it, the goldfish is named Ponyo by her new friend.

    Unknown to Sousuke, Ponyo already has a name and a family. Her father Fujimoto, a sorcerer who forsook his humanity to live underwater, searches frantically for his daughter Brunhilde. When found and captured, Ponyo rejects her birth name and declares that she wants to become a human. Using the power received from Sousuke's blood, she grows arms and legs and escapes to the surface once more. But the magic released into the ocean causes an imbalance in nature, causing the Moon to start falling out of orbit and the tides to grow dangerously stronger. Reunited with Ponyo, Sousuke must pass an ancient test to restore order in the world and let his companion live on as a human.`,
    genre: 'Adventure / Fantasy'
  },
  {
    id: 22,
    title: 'Casshern Sins',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/8/23336.jpg',
    description: `In a distant future, Earth has become a wasteland and humanity as we know it has died out. All that remains are sentient robots. They were supposed to be able to live forever—until the one called Luna died and the Ruin started. Their bodies will rust, and there is nothing that can be done to fix it. Now the robots are left only to contemplate their deaths, kept going only by the rumor that if they eat the one called Casshern, they will gain immortality.

    Casshern knows nothing about his past, why he exists, or what he is, but he must find out, or he will face the constant torment of being hunted by robots who don't want to die. Casshern leaves death wherever he goes, but he must face it if he is to find out the truth of this world.
    `,
    genre: 'Action / Adventure / Drama / Sci - Fi / Psychological'
  },
  {
    id: 23,
    title: 'Trigun',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/7/20310.jpg',
    description: `Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: he's a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title "The Humanoid Typhoon." He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs.

    With his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash's agonizing past will be unraveled and his morality and principles pushed to the breaking point.`,
    genre: 'Action / Adventure / Sci - Fi'
  },
  {
    id: 24,
    title: 'Cowboy Bebop',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
    description: `Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.

    Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.
    
    While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.`,
    genre: 'Action / Sci - Fi'
  },
  {
    id: 25,
    title: 'Samurai Champloo',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1375/121599.jpg',
    description: `Fuu Kasumi is a young and clumsy waitress who spends her days peacefully working in a small teahouse. That is, until she accidentally spills a drink all over one of her customers! With a group of samurai now incessantly harassing her, Fuu desperately calls upon another samurai in the shop, Mugen, who quickly defeats them with his wild fighting technique, utilizing movements reminiscent to that of breakdancing. Unfortunately, Mugen decides to pick a fight with the unwilling ronin Jin, who wields a more precise and traditional style of swordfighting, and the latter proves to be a formidable opponent. The only problem is, they end up destroying the entire shop as well as accidentally killing the local magistrate's son.

    For their crime, the two samurai are captured and set to be executed. However, they are rescued by Fuu, who hires the duo as her bodyguards. Though she no longer has a place to return to, the former waitress wishes to find a certain samurai who smells of sunflowers and enlists the help of the now exonerated pair to do so. Despite initially disapproving of this idea, the two eventually agree to assist the girl in her quest; thus, the trio embark upon an adventure to find this mysterious warrior—that is, if Fuu can keep Mugen and Jin from killing each other.
    
    Set in an alternate Edo Period of Japan, Samurai Champloo follows the journey of these three eccentric individuals in an epic quest full of action, comedy, and dynamic sword fighting, all set to the beat of a unique hip-hop infused soundtrack.`,
    genre: 'Action / Adventure / Historical / Comedy'
  },
  {
    id: 26,
    title: 'Afro Samurai',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/3/15874.jpg',
    description: `When he was a young boy, Afro witnessed his father be cut down in a duel at the hands of a man known only as Justice. After taking the life of Afro's father, Justice cast aside his Number Two headband and took the Number One to claim its godly powers as his own.

    Years later, having obtained the Number Two headband which grants him the right to challenge the Number One, Afro moves forward in his hunt for revenge on the man who murdered his father. There is just one thing that stands in his way—everyone else in the world! Though the Number One can only be challenged by the Number Two, the Number Two can be challenged by anyone. As his enemies gather to try and take the title of Number Two, Afro must fight through a myriad of foes and obstacles if he hopes to reach the Number One and claim vengeance once and for all.`,
    genre: 'Action / Adventure / Gore'
  },
  {
    id: 27,
    title: 'Ninja Scroll',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1834/116568.jpg',
    description: `Jubei Kibagami wanders feudal Japan as an itinerant swordsman-for-hire. After a past betrayal left him masterless, he has no more patience for warring political factions and their schemes. Unfortunately, both past and political intrigue collide when he meets and saves a female ninja named Kagero from a man with the ability to make his body as hard as stone.

    The sole survivor of a ninja clan, Kagero continues her team's last mission: investigate a mysterious plague that wiped out an entire village. Jubei wants nothing to do with this, but the stone-like man's allies, a group of ninja with supernatural powers known as the Devils of Kimon, make that option difficult. To make matters worse, a government spy poisons Jubei, promising him an antidote if he can unravel the true intentions of the Devils of Kimon and their connection to the plague. The trail leads to shadow leaders, a plot to overthrow the government, and a man that Jubei thought he would never see again.`,
    genre: `Adventure / Fantasy / Horror / Supernatural / Historical`
  },
  {
    id: 28,
    title: 'Dororo',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1879/100467.jpg',
    description: `The greedy samurai lord Daigo Kagemitsu's land is dying, and he would do anything for power, even renounce Buddha and make a pact with demons. His prayers are answered by 12 demons who grant him the power he desires by aiding his prefecture's growth, but at a price. When Kagemitsu's first son is born, the boy has no limbs, no nose, no eyes, no ears, nor even skin—yet still, he lives.

    This child is disposed of in a river and forgotten. But as luck would have it, he is saved by a medicine man who provides him with prosthetics and weapons, allowing for him to survive and fend for himself. The boy lives and grows, and although he cannot see, hear, or feel anything, he must defeat the demons that took him as sacrifice. With the death of each one, he regains a part of himself that is rightfully his. For many years he wanders alone, until one day an orphan boy, Dororo, befriends him. The unlikely pair of castaways now fight for their survival and humanity in an unforgiving, demon-infested world.`,
    genre: `Action / Adventure / Supernatural / Historical / Mythology`
  },
  {
    id: 29,
    title: 'Shigurui',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1440/115872.jpg',
    description: `At the beginning of the Edo Era, when people enjoyed a time of peace, Lord Tokugawa Tadanaga holds a fighting tournament. In the past, matches were fought with wooden swords. This time, real swords will be used.

    One-armed Fujiki Gennosuke and blind Irako Seigen will fight each other in this match. Both are disciples of Iwamoto Kogan, who is known as Japan's greatest swordsman. Each of them are determined to prove himself the successor of Iwamoto's school. However, there can only be one champion.
    
    So begins a story of intertwining fates, conflict, and strange destinies.`,
    genre: 'Action / Drama / Gore / Historical / Psychological'
  },
  {
    id: 30,
    title: 'Dorohedoro',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1740/104786.jpg',
    description: `Hole—a dark, decrepit, and disorderly district where the strong prey on the weak and death is an ordinary occurrence—is all but befitting of the name given to it. A realm separated from law and ethics, it is a testing ground to the magic users who dominate it. As a race occupying the highest rungs of their society, the magic users think of the denizens of Hole as no more than insects. Murdered, mutilated, and made experiments without a second thought, the powerless Hole dwellers litter the halls of Hole's hospital on a daily basis.

    Possessing free access to and from the cesspool, and with little challenge to their authority, the magic users appear indomitable to most—aside for a few. Kaiman, more reptile than man, is one such individual. He hunts them on a heedless quest for answers with only a trusted pair of bayonets and his immunity to magic. Cursed by his appearance and tormented by nightmares, magic users are his only clue to restoring his life to normal. With his biggest obstacle being his stomach, his female companion Nikaidou, who runs the restaurant Hungry Bug, is his greatest ally.
    
    Set in a gritty world of hellish design, Dorohedoro manages a healthy blend of comedy and lightheartedness with death and carnage. Taking plenty of twists and turns while following the lives of Hole's residents, it weaves a unique world of unearthly origin and dreary appearance not for the squeamish or easily disturbed.`,
    genre: 'Action / Fantasy / Horror / Comedy / Gore'
  },
  {
    id: 31,
    title: 'Chainsaw Man',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
    description: `Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.

    Remarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.`,
    genre: `Action / Fantasy /Gore`
  },
  {
    id: 32,
    title: `JoJo's Bizarre Adventure`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/3/40409.jpg',
    description: `The year is 1868; English nobleman George Joestar and his son Jonathan become indebted to Dario Brando after being rescued from a carriage incident. What the Joestars don't realize, however, is that Dario had no intention of helping them; he believed they were dead and was trying to ransack their belongings. After Dario's death 12 years later, George—hoping to repay his debt—adopts his son, Dio.

    While he publicly fawns over his new father, Dio secretly plans to steal the Joestar fortune. His first step is to create a divide between George and Jonathan. By constantly outdoing his foster brother, Dio firmly makes his place in the Joestar family. But when Dio pushes Jonathan too far, Jonathan defeats him in a brawl.
    
    Years later, the two appear to be close friends to the outside world. But trouble brews again when George falls ill, as Jonathan suspects that Dio is somehow behind the incident—and it appears he has more tricks up his sleeve.`,
    genre: 'Action / Adventure / Supernatural'
  },
  {
    id: 33,
    title: 'Igano Kabamaru',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/9/62909.jpg',
    description: `After the death of Saizou, Kabamaru's horribly strict grandfather and Iga ninja teacher (sensei), an old lady, Ran Ookubo, claims that she received a letter from him asking her to take care of his grandson. So Kabamaru runs off with Lady Ookubo to the big city Tokyo to gorge on yakisoba, ramen, chow mein, and attend a regular school—which turns out to have weird quirks of its own.`,
    genre: 'Action / Adventure / Comedy'
  },
  {
    id: 34,
    title: 'Oruchuban Ebichu',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/4/79591.jpg',
    description: `Ebichu the hamster seems like the perfect house pet: she cleans, shops, cooks, does laundry, and anything to please her master, known only as "Office Lady" (OL). Unfortunately, OL and her unfaithful boyfriend, combined with Ebichu's uncontrollable exuberance and love for ice cream, often earn her severe and bloody punishment. However, Ebichu doesn't seem to mind the abuse if she achieves her goal of making her beloved master a little bit happier.`,
    genre: 'Comedy / Gag Humor'
  },
  {
    id: 35,
    title: 'Rurouni Kenshin',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1346/119505.jpg',
    description: `In the final years of the Bakumatsu era lived a legendary assassin known as Hitokiri Battousai. Feared as a merciless killer, he was unmatched throughout the country, but mysteriously disappeared at the peak of the Japanese Revolution. It has been ten peaceful years since then, but the very mention of Battousai still strikes terror into the hearts of war veterans.

    Unbeknownst to them, Battousai has abandoned his bloodstained lifestyle in an effort to repent for his sins, now living as Kenshin Himura, a wandering swordsman with a cheerful attitude and a strong will. Vowing never to kill again, Kenshin dedicates himself to protecting the weak. One day, he stumbles across Kaoru Kamiya at her kendo dojo, which is being threatened by an impostor claiming to be Battousai. After receiving help from Kenshin, Kaoru allows him to stay at the dojo, and so the former assassin temporarily ceases his travels.
    
    Rurouni Kenshin: Meiji Kenkaku Romantan tells the story of Kenshin as he strives to save those in need of saving. However, as enemies from both past and present begin to emerge, will the reformed killer be able to uphold his new ideals?
    `,
    genre: 'Action / Adventure / Historical / Comedy'
  },
  {
    id: 36,
    title: 'Bleach',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
    description: `Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.

    However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 37,
    title: 'One Piece',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    description: `Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.

    Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 38,
    title: 'Prison School',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1286/112161.jpg',
    description: `Located on the outskirts of Tokyo, Hachimitsu Private Academy is a prestigious all-girls boarding school, famous for its high-quality education and disciplined students. However, this is all about to change due to the revision of the school's most iconic policy, as boys are now able to enroll as well.

    At the start of the first semester under this new decree, a mere five boys have been accepted, effectively splitting the student body into a ratio of two hundred girls to one boy. Kiyoshi, Gakuto, Shingo, Andre, and Jo are quickly cast away without having a chance to make any kind of a first impression. Unable to communicate with their fellow female students, the eager boys set their sights on a far more dangerous task: peeping into the girls' bath!
    
    It's only after their plan is thoroughly decimated by the infamous Underground Student Council that the motley crew find their freedom abruptly taken from them, as they are thrown into the school's prison with the sentence of an entire month as punishment. Thus begins the tale of the boys' harsh lives in Prison School, a righteous struggle that will ultimately test the bonds of friendship and perverted brotherhood.`,
    genre: 'Comedy / Gag Humor'
  },
  {
    id: 39,
    title: 'Akame ga Kill!',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1429/95946.jpg',
    description: `Night Raid is the covert assassination branch of the Revolutionary Army, an uprising assembled to overthrow Prime Minister Honest, whose avarice and greed for power has led him to take advantage of the child emperor's inexperience. Without a strong and benevolent leader, the rest of the nation is left to drown in poverty, strife, and ruin. Though the Night Raid members are all experienced killers, they understand that taking lives is far from commendable and that they will likely face retribution as they mercilessly eliminate anyone who stands in the revolution's way.

    This merry band of assassins' newest member is Tatsumi, a naïve boy from a remote village who had embarked on a journey to help his impoverished hometown and was won over by not only Night Raid's ideals, but also their resolve. Akame ga Kill! follows Tatsumi as he fights the Empire and comes face-to-face with powerful weapons, enemy assassins, challenges to his own morals and values, and ultimately, what it truly means to be an assassin with a cause.
    `,
    genre: 'Action / Fantasy / Gore'
  },
  {
    id: 40,
    title: 'Magi: Sinbad no Bouken',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78783.jpg',
    description: `In the small, impoverished Tison Village of the Parthevia Empire, a boy, Sinbad, is born to the jaded ex-soldier Badr and his kind-hearted wife Esra. His birth creates a radiant surge throughout the rukh, a declaration of a singularity to those who stand at the pinnacle of magical might: the "Child of Destiny" is here. Despite his country being plagued by economic instability and the repercussions of war, Sinbad leads a cheerful life—until a stranger's arrival shatters his peaceful world, and tragedy soon befalls him.

    Years later, mysterious edifices called "dungeons" have been erected all over the world. Rumored to contain great power and treasures, these dungeons piqued the interest of adventurers and armies alike; though to this day, none have returned therefrom. Sinbad, now 14, has grown into a charming and talented young boy. Inspired by the shocking events of his childhood and by his father's words, he yearns to begin exploring the world beyond his village. As though orchestrated by fate, Sinbad meets an enigmatic traveler named Yunan. Stirred by Sinbad's story and ambitions, Yunan directs him to a dungeon which he claims holds the power Sinbad needs to achieve his goals—the "power of a king."
    
    Magi: Sinbad no Bouken tells the epic saga of Sinbad's early life as he travels the world, honing his skill and influence, while gathering allies and power to become the High King of the Seven Seas.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 41,
    title: 'Naruto',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
    description: `Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.

    Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 42,
    title: 'Naruto: Shippuuden',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg',
    description: `It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.

    Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 43,
    title: 'Hunter x Hunter',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1305/132237.jpg',
    description: `Hunters are specialized in a wide variety of fields, ranging from treasure hunting to cooking. They have access to otherwise unavailable funds and information that allow them to pursue their dreams and interests. However, being a hunter is a special privilege, only attained by taking a deadly exam with an extremely low success rate.

    Gon Freecss, a 12-year-old boy with the hope of finding his missing father, sets out on a quest to take the Hunter Exam. Along the way, he picks up three companions who also aim to take the dangerous test: the revenge-seeking Kurapika, aspiring doctor Leorio Paladiknight, and a mischievous child the same age as Gon, Killua Zoldyck.
    
    As the four aspiring hunters embark on a perilous adventure, they fight for their dreams while defying the odds.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 44,
    title: 'Hunter x Hunter: Original Video Animation',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1/137.jpg',
    description: `After reuniting with Gon and his friends, Kurapika explained to them the risks he bears because of his abilities. Believing that his target of revenge is no longer alive and the search for his fallen comrade's eyes could truly begin, Kurapika soon after receives a message informing him that all the Spiders still lived. After much discussion between his friends, Gon, Kurapika and company decided to hunt after the one Spider member who's ability could ultimately result in Kurapika's defeat and death. Based on the manga by Togashi Yoshihiro.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 45,
    title: 'Hunter x Hunter: Greed Island',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1902/122320.jpg',
    description: `After the battle with the Spiders, the search for Ging continues as Gon and Killua decided to once again attempt to purchase the rare game "Greed Island." However, Gon came up with a better plan, which was to volunteer to complete the game for the billionaire who owned it. But some training must be done, as Gon and Killua's abilities are still at a developing stage and "Greed Island" is no simple game for anyone to play with. It is the infamous game that could easily lead to one's death. Based on the manga by Togashi Yoshihiro.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 46,
    title: 'Hunter x Hunter: Greed Island Final',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1/139.jpg',
    description: `Continuing with their adventure at Greed Island, Gon and Killua train furiously under the guidance of Biscuit for better preparation at attempting the game. With their abilities vastly improving and the threat of player killers menacing Greed Island, Gon and company continue the game despite the dangers that they will face with the game activities and encounters with other players. Based on the manga by Togashi Yoshihiro.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 47,
    title: 'Hunter x Hunter (2011)',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
    description: `Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.

    Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.
    
    During the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.`,
    genre: 'Action / Adventure / Fantasy'
  },
  {
    id: 48,
    title: 'Banana Fish',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1190/93472.jpg',
    description: `Aslan Jade Callenreese, known as Ash Lynx, was a runaway picked off the streets of New York City and raised by the infamous godfather of the mafia, Dino Golzine. Now 17 years old and the boss of his own gang, Ash begins investigating the mysterious "Banana Fish"—the same two words his older brother, Griffin, has muttered since his return from the Iraq War. However, his inquiries are hindered when Dino sends his men after Ash at an underground bar he uses as a hideout.

    At the bar, Skip, Ash's friend, introduces him to Shunichi Ibe and his assistant, Eiji Okumura, who are Japanese photographers reporting on American street gangs. However, their conversation is interrupted when Shorter Wong, one of Ash's allies, calls to warn him about Dino. Soon, Dino's men storm the bar, and in the ensuing chaos kidnap Skip and Eiji. Now, Ash must find a way to rescue them and continue his investigation into Banana Fish, but will his history with the mafia prevent him from succeeding?`,
    genre: 'Action / Adventure / Drama / Suspense / Crime / Psychological'
  },
  {
    id: 49,
    title: 'Tokyo Revengers',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1839/122012.jpg',
    description: `Takemichi Hanagaki's second year of middle school was the highest point in his life. He had respect, a gang of friends he could count on, and even a girlfriend. But that was twelve years ago. Today, he's a nobody: a washed-up nonentity made fun of by children and always forced to apologize to his younger boss. A sudden news report on the Tokyo Manji Gang's cruel murder of the only girlfriend he ever had alongside her brother only adds insult to injury. Half a second before a train ends his pitiful life for good, Takemichi flashes back to that same day 12 years ago, when he was still dating Hinata Tachibana.

    After being forced to relive the very same day that began his downward spiral, Takemichi meets Hinata's younger brother. Without thinking, he admits to his seeming death before flashing back to the past. Takemichi urges him to protect his sister before inexplicably returning to the future. Miraculously, he is not dead. Stranger still, the future has changed. It seems as though Takemichi can alter the flow of time. Given the chance to prevent his ex-girlfriend's tragic death at the hands of the Tokyo Manji Gang, Takemichi decides to fly through time to change the course of the future.`,
    genre: 'Action / Drama / Supernatural'
  },
  {
    id: 50,
    title: 'Monster',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/10/18793.jpg',
    description: `Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to his hospital director's daughter, is well on his way to ascending the hospital hierarchy. That is until one night, a seemingly small event changes Dr. Tenma's life forever. While preparing to perform surgery on someone, he gets a call from the hospital director telling him to switch patients and instead perform life-saving brain surgery on a famous performer. His fellow doctors, fiancée, and the hospital director applaud his accomplishment; but because of the switch, a poor immigrant worker is dead, causing Dr. Tenma to have a crisis of conscience.

    So when a similar situation arises, Dr. Tenma stands his ground and chooses to perform surgery on the young boy Johan Liebert instead of the town's mayor. Unfortunately, this choice leads to serious ramifications for Dr. Tenma—losing his social standing being one of them. However, with the mysterious death of the director and two other doctors, Dr. Tenma's position is restored. With no evidence to convict him, he is released and goes on to attain the position of hospital director.
    
    Nine years later when Dr. Tenma saves the life of a criminal, his past comes back to haunt him—once again, he comes face to face with the monster he operated on. He must now embark on a quest of pursuit to make amends for the havoc spread by the one he saved.`,
    genre: 'Drama / Mystery / Suspense / Psychological'
  },
  {
    id: 51,
    title: 'Psycho-Pass',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/5/43399.jpg',
    description: `Justice, and the enforcement of it, has changed. In the 22nd century, Japan enforces the Sibyl System, an objective means of determining the threat level of each citizen by examining their mental state for signs of criminal intent, known as their Psycho-Pass. Inspectors uphold the law by subjugating, often with lethal force, anyone harboring the slightest ill-will; alongside them are Enforcers, jaded Inspectors that have become latent criminals, granted relative freedom in exchange for carrying out the Inspectors' dirty work.

    Into this world steps Akane Tsunemori, a young woman with an honest desire to uphold justice. However, as she works alongside veteran Enforcer Shinya Kougami, she soon learns that the Sibyl System's judgments are not as perfect as her fellow Inspectors assume. With everything she has known turned on its head, Akane wrestles with the question of what justice truly is, and whether it can be upheld through the use of a system that may already be corrupt.`,
    genre: 'Action / Sci - Fi / Suspense / Psychological'
  },
  {
    id: 52,
    title: 'Psycho-Pass 2',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1197/100616.jpg',
    description: `A year and a half after the events of the original sci-fi psychological thriller, Akane Tsunemori continues her work as an inspector—enforcing the Sibyl System's judgments. Joining her are new enforcers and junior inspector Mika Shimotsuki, a young woman blindly and inflexibly loyal to Sibyl. As Akane ponders both the nature of her job and the legitimacy of Sibyl's verdicts, a disturbing new menace emerges.

    A mysterious figure has discovered a way to control the Crime Coefficient—a number compiled from mental scans that allows Sibyl to gauge psychological health and identify potential criminals. Through these means, he is able to murder an enforcer, leaving behind a cryptic clue: "WC?" scrawled in blood on a wall.
    
    Akane and the rest of Division 01 soon find themselves playing a deadly game against their new foe, coming face-to-face with a conspiracy threatening not only the authority of the Sibyl System, but the very foundation of Akane's own convictions.`,
    genre: 'Action / Sci - Fi / Suspense / Psychological'
  },
  {
    id: 53,
    title: 'Psycho-Pass: The Movie',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/8/71793.jpg',
    description: `Due to the incredible success of the Sibyl System, Japan has begun exporting the technology to other countries with the hope that it will one day be used all around the world. In order to test its effectiveness in a foreign location, the war-torn state of the South East Asian Union (SEAUn) decides to implement the system, hoping to bring peace and stability to the town of Shambala Float and keep the population in check.

    However, a group of anti-Sibyl terrorists arrive in Japan, and the Ministry of Welfare's Public Safety Bureau discovers significant evidence that the invaders are being aided by Shinya Kougami, a former Enforcer who went rogue. Because of their past relationship, Akane Tsunemori is sent to SEAUn to bring him back, but with their last meeting years in the past, their reunion might not go quite as planned.`,
    genre: 'Action / Sci - Fi / Suspense / Military'
  },
  {
    id: 54,
    title: 'Psycho-Pass: Sinners of the System Case.1 - Crime and Punishment',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1623/96878.jpg',
    description: `A runaway vehicle driven by Izumi Yasaka, en route to the Public Safety Bureau building, is reported shortly before it crashes into the building. Izumi is a counselor who recently ran away while working at a latent criminal isolation and rehabilitation facility known as Sanctuary.

    Before Inspectors Mika Shimotsuki and Akane Tsunemori get to interrogate the suspect, a sudden request is issued from the facility to promptly bring Izumi back. Interpreted as a direct order from the Chief and the board at Sanctuary, the Inspectors obey, but insist that Izumi be escorted back personally. Tsunemori intends to investigate further with the rest of the team at the Bureau.
    
    Now Inspector Shimotsuki has finally been given the opportunity she had been waiting for—to be the primary investigator on an important case. This case follows Shimotsuki and her team of Enforcers as they uncover the secrets of Sanctuary.`,
    genre: 'Action / Sci - Fi / Suspense / Psychological'
  },
  {
    id: 55,
    title: 'Psycho-Pass: Sinners of the System Case.2 - First Guardian',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1357/96879.jpg',
    description: `Enforcer Teppei Sugou, former ace pilot of the National Defence Army's 15th Integrated Task Force, is visited by a scout from the Ministry of Foreign Affairs and invited to rejoin the military. While considering the offer, he recalls his last months of service.

    His last mission, Operation Foot Stamp, had been a highly classified military strike against the Southeast Asian Union. The operation quickly went south for the ground forces, and Sugou's First Guardian drone was ordered in as air support to drop emergency supplies for the ground units and then return to base. Following orders against his own judgement, Sugou abandoned his comrades on the field.
    
    Many lives were lost during the operation, including Itsuki Ootomo, Sugou's commanding officer. However, three months later, following a massacre at the Ministry of Defence, Otomo was spotted at the scene on camera. Now a suspect in an act of terrorism, Sugou cooperates with Enforcer Tomomi Masaoka and Criminal Investigation Department's Division 01 as they hunt his former mentor down.`,
    genre: 'Action / Sci - Fi / Suspense / Psychological'
  },
  {
    id: 56,
    title: 'Psycho-Pass: Sinners of the System Case.3 - Onshuu no Kanata ni',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1819/97220.jpg',
    description: `Shinya Kougami continues to wander the Southeast Asian Union (SEAUn) away from the eyes of the Sibyl System in Japan. While traveling through the Tibet-Himalayan Alliance Kingdom, Kougami encounters Guillermo Garcia—commander of a paramilitary group attempting to unite the local factions and bring peace to the war-torn nation. Wary of joining another mercenary group, Kougami declines to join his cause, but agrees to be driven to the nearby Tibetan capital by one of Garcia's men.

    However, Kougami's plan to remain uninvolved is short-lived when a bus of refugees are ambushed by armed guerrillas. Among them is a half-Japanese, half-Tibetan girl named Tenzing Wangchuck. Impressed with Kougami's fighting prowess as he single-handedly takes the attackers out, Wangchuck requests him to teach her how to fight so she can take revenge against the warlord who murdered her family.
    
    Knowing first-hand that there is no turning back to the person you were once you take a human life, Kougami is initially reluctant to accept her request. But faced with the girl's desire for vengeance that mirrors the haunting abyss inside his own heart, will he train her?`,
    genre: 'Action / Sci - Fi / Suspense / Psychological'
  },
  {
    id: 57,
    title: 'Psycho-Pass 3',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1406/104344.jpg',
    description: `Thanks to the Sibyl System, the mental states of society can now be measured on a numerical scale. Using these "crime coefficients," a culprit can be apprehended before they ever commit a crime. But is it a perfect system? For Inspectors Kei Mikhail Ignatov and Arata Shindou, that remains to be seen, as their career with the Public Safety Bureau's Crime Investigation Department has only just begun.

    Shindou and Ignatov are assigned to investigate the crash of a ship carrying immigrants, but they begin to suspect that it was no mere accident. Meanwhile, a mysterious group called Bifrost is observing them from the shadows, but they are not the only ones who have taken an interest in the two new Inspectors.`,
    genre: 'Action / Sci - Fi / Suspense / Psychological'
  },
  {
    id: 58,
    title: 'Durarara!!',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/10/71772.jpg',
    description: `In Tokyo's downtown district of Ikebukuro, amidst many strange rumors and warnings of anonymous gangs and dangerous occupants, one urban legend stands out above the rest—the existence of a headless "Black Rider" who is said to be seen driving a jet-black motorcycle through the city streets.

    Mikado Ryuugamine has always longed for the excitement of the city life, and an invitation from a childhood friend convinces him to move to Tokyo. Witnessing the Black Rider on his first day in the city, his wishes already seem to have been granted. But as supernatural events begin to occur, ordinary citizens like himself, along with Ikebukuro's most colorful inhabitants, are mixed up in the commotion breaking out in their city.`,
    genre: 'Action / Mystery / Supernatural'
  },
  {
    id: 59,
    title: `Attack on Titan`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    description: `Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.

    After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.`,
    genre: 'Action / Drama / Suspense / Gore / Military / Survival'
  },
  {
    id: 60,
    title: `Attack on Titan Season 2`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/4/84177.jpg',
    description: `For centuries, humanity has been hunted by giant, mysterious predators known as the Titans. Three mighty walls—Wall Maria, Rose, and Sheena—provided peace and protection for humanity for over a hundred years. That peace, however, was shattered when the Colossal Titan and Armored Titan appeared and destroyed the outermost wall, Wall Maria. Forced to retreat behind Wall Rose, humanity waited with bated breath for the Titans to reappear and destroy their safe haven once more.

    In Shingeki no Kyojin Season 2, Eren Yeager and others of the 104th Training Corps have just begun to become full members of the Survey Corps. As they ready themselves to face the Titans once again, their preparations are interrupted by the invasion of Wall Rose—but all is not as it seems as more mysteries are unraveled. As the Survey Corps races to save the wall, they uncover more about the invading Titans and the dark secrets of their own members.`,
    genre: 'Action / Drama / Suspense / Gore / Military / Survival'
  },
  {
    id: 61,
    title: `Attack on Titan Season 3`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1173/92110.jpg',
    description: `Still threatened by the "Titans" that rob them of their freedom, mankind remains caged inside the two remaining walls. Efforts to eradicate these monsters continue; however, threats arise not only from the Titans beyond the walls, but from the humans within them as well.

    After being rescued from the Colossal and Armored Titans, Eren Yaeger devotes himself to improving his Titan form. Krista Lenz struggles to accept the loss of her friend, Captain Levi chooses Eren and his friends to form his new personal squad, and Commander Erwin Smith recovers from his injuries. All seems well for the soldiers, until the government suddenly demands custody of Eren and Krista. The Survey Corps' recent successes have drawn attention, and a familiar face from Levi's past is sent to collect the wanted soldiers. Sought after by the government, Levi and his new squad must evade their adversaries in hopes of keeping Eren and Krista safe.
    
    Eren and his fellow soldiers are not only fighting for their survival against the terrifying Titans, but also against the terror of a far more conniving foe: their fellow humans.`,
    genre: 'Action / Drama / Gore / Military / Survival'
  },
  {
    id: 62,
    title: `Attack on Titan Season 3 Part 2`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1517/100633.jpg',
    description: `Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless "Titans" takes the stage once again.

    Returning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them.
    
    Shingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement.`,
    genre: 'Action / Drama / Gore / Military / Survival'
  },
  {
    id: 63,
    title: `Attack on Titan: The Final Season`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
    description: `Gabi Braun and Falco Grice have been training their entire lives to inherit one of the seven Titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps.

    Having finally reached the Yeager family basement and learned about the dark history surrounding the Titans, the Survey Corps has at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls.
    
    In Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom.`,
    genre: 'Action / Drama / Gore / Military / Survival'
  },
  {
    id: 64,
    title: `Attack on Titan: The Final Season Part 2`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1948/120625.jpg',
    description: `Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and Eldia—but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny.

    Meanwhile, the long-feuding nations of Marley and Eldia utilize both soldiers and Titans in a brutal race to eliminate the other. Reiner Braun uses his own powers in a desperate bid to hold off Eren's own militaristic force, and his fellow Eldians—children Falco Grice and Gabi Braun—struggle to survive in the unfolding chaos.
    
    Elsewhere, Eren's childhood friends Mikasa Ackerman and Armin Arlert remain imprisoned alongside Eren's former Survey Corps companions, all disturbed by Eren's monstrous transformation. Under the blind belief that Eren still secretly harbors good intentions, Mikasa and the others enter the fray in an attempt to save their friend's very soul.
    `,
    genre: 'Action / Drama / Gore / Military / Survival'
  },
  {
    id: 65,
    title: `Attack on Titan: The Final Season Part 3`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1279/131078.jpg',
    description: `N/A`,
    genre: 'Action / Drama / Gore / Military / Survival'
  },
  {
    id: 66,
    title: `Kabukichou Sherlock`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1657/111622.jpg',
    description: `In Shinjuku ward's east side lies Kabukichou, a vibrant city of chaos that glows brilliantly with neon lights but also hides unseen darkness. Employed at a university hospital on the west side, John H. Watson is looking for someone who can assist him with an odd case. His search leads him to the Pipe Cat, an underground bar that serves as a meetup venue and job board for some of the best detectives in Shinjuku, the most prominent among them being Sherlock Holmes.

    Upon finding the bar and meeting the peculiar investigators, John learns that they are pursuing a case involving Jack the Ripper, an infamous serial killer. Due to subsequent events, John ends up driving Sherlock to the crime scene of a murder supposedly carried out by Jack the Ripper. Even though John is only there to enlist Sherlock's help with his case, he witnesses Sherlock brilliantly uncover the truth behind the crime scene. However, he begins to realize that Sherlock is not only a genius detective but also an eccentric character.
    
    As John continues to request Sherlock to assist him with his case, he finds himself spiraling into the detective lifestyle of solving cases beyond the minds of ordinary civilians. Through this work, John begins to see the true colors of the chaotic city that is Kabukichou and starts to unravel the unsettling mystery behind his own case.`,
    genre: 'Drama / Mystery / Comedy'
  },
  {
    id: 67,
    title: `Baki`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1979/93135.jpg',
    description: `After emerging victorious from a brutal underground tournament, Baki Hanma continues on his path to defeat his father, Yuujirou, the strongest man in the world. However, he gets no time to rest when the tournament runner, Tokugawa Mitsunari, visits him at school. He reveals to Baki that five incredibly dangerous death row inmates from around the world—all skilled in martial arts—have simultaneously escaped confinement and are heading to Tokyo, each wishing to finally know the taste of defeat. Tokugawa warns that, due to his well-known strength, Baki is bound to encounter them sooner or later, and he will not be their only target.

    Adapting the first saga of the second manga series, Baki centers on the all-out war between the esteemed martial artists of Japan and those of the dark underground world.`,
    genre: 'Action / Martial Arts / Gore'
  },
  {
    id: 68,
    title: `Kengan Ashura`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1421/100770.jpg',
    description: `Business deals are usually made through meetings and contracts; but in the world of Kengan Ashura, businesses resort to other means to make their decisions: by hiring gladiators. Yabako Sandrovich's Kengan Ashura depicts a world brimming with action, violence, and martial arts—one where powerful gladiators have fought in grand arenas since the Edo Period to settle the disputes of wealthy businesses and merchants.

    Ouma Tokita, who is nicknamed "The Ashura," is a fighter trying to prove himself as the strongest. Hideki Nogi, a member of the Nogi Group, hires Ouma to fight for him and makes Kazuo Yamashita, an average middle-aged man, his manager. The duo is thrown into fights facilitated by the Kengan Association. Their journey will be full of ruthless battles with other fighters aiming for the same goal. Do they have what it takes to be the best?`,
    genre: 'Action / Martial Arts / Gore'
  },
  {
    id: 69,
    title: `Akira`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1408/114012.jpg',
    description: `Japan, 1988. An explosion caused by a young boy with psychic powers tears through the city of Tokyo and ignites the fuse that leads to World War III. In order to prevent any further destruction, he is captured and taken into custody, never to be heard from again. Now, in the year 2019, a restored version of the city known as Neo-Tokyo—an area rife with gang violence and terrorism against the current government—stands in its place. Here, Shoutarou Kaneda leads "the Capsules," a group of misfits known for riding large, custom motorcycles and being in constant conflict with their rivals "the Clowns."

    During one of these battles, Shoutarou's best friend Tetsuo Shima is caught up in an accident with an esper who finds himself in the streets of Tokyo after escaping confinement from a government institution. Through this encounter, Tetsuo begins to develop his own mysterious abilities, as the government seeks to quarantine this latest psychic in a desperate attempt to prevent him from unleashing the destructive power that could once again bring the city to its knees`,
    genre:
      'Action / Adventure / Horror / Sci - Fi / Dystopia / Supernatural / Gore / Military'
  },
  {
    id: 70,
    title: `Aku no Hana`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/8/50559.jpg',
    description: `Takao Kasuga, a high school student fascinated by poetry, reveres Charles Baudelaire and even decorates his room with the poet's portrait. On a normal day, Takao forgets his copy of The Flowers of Evil in the classroom. When returning to retrieve it, he steals the sports garments of Nanako Saeki—a model student who Takao calls his muse and a femme fatale.

    Deeply ashamed of his act which he sees as a sin and what others see as a crime, Takao realizes with horror that Sawa Nakamura, his classmate and social outcast, knows about his theft. Blackmailed by her, Takao is now forced to partake in Sawa's disturbing fantasies, lest she reveals his deeds to everyone. Caught in a negative spiral of increasingly traumatic experiences, will Takao be able to break free from Sawa's thorns and atone for his sins?`,
    genre: 'Drama / Psychological'
  },
  {
    id: 71,
    title: `Akudama Drive`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1468/109172.jpg',
    description: `The bustling metropolis of Kansai, where cybernetic screens litter the neon landscape, may seem like a technological utopia at first glance. But in the dark alleys around the brightly-lit buildings, an unforgiving criminal underbelly still exists in the form of fugitives known as "Akudama."

    No stranger to these individuals, Kansai police begin the countdown to the public execution of an infamous Akudama "Cutthroat," guilty of killing 999 people. However, a mysterious message is sent to several elite Akudama, enlisting them to free Cutthroat for a substantial amount of money. An invisible hand seeks to gather these dangerous personas in one place, ensuring that the execution is well underway to becoming a full-blown bloodbath.`,
    genre: 'Action / Sci - Fi / Gore'
  },
  {
    id: 72,
    title: `Baccano!`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/3/14547.jpg',
    description: `During the early 1930s in Chicago, the transcontinental train, Flying Pussyfoot, is starting its legendary journey that will leave a trail of blood all over the country. At the same time in New York, the ambitious scientist Szilard and his unwilling aide Ennis are looking for missing bottles of the immortality elixir. In addition, a war between the mafia groups is getting worse. On board the Advena Avis, in 1711, alchemists are about to learn the price of immortality.

    Based on the award-winning light novels of the same name, Baccano! follows several events that initially seem unrelated, both in time and place, but are part of a much bigger story—one of alchemy, survival, and immortality. Merging these events together are the kindhearted would-be thieves, Isaac and Miria, connecting various people, all of them with their own hidden ambitions and agendas, and creating lifelong bonds and consequences for everyone involved.`,
    genre: 'Action / Mystery / Supernatural / Comedy / Historical / Crime'
  },
  {
    id: 73,
    title: `Aoi Bungaku Series`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/10/17471.jpg',
    description: `A high school student seeks solace in narcotics to escape the dispiritedness that has come over his life. As he goes through the different stages of his life, it culminates in the questioning of his existence in the world.

    Sakura no Mori no Mankai no Shita
    The adaptation of Ango Sakaguchi's literary work deals with the love story of a woman abducted by a mountain bandit.
    
    Kokoro
    While trying to fill the void in his life, a university student in Tokyo encounters a charismatic older man, whom he addresses as "Sensei," who offers him advice on life. However, the man is apprehensive to share his life experience, deepening the student's curiosity. Through this peculiar relationship, the student comes to ponder about the distance between him and his family and the growing desolation in his heart filled with ego and guilt.
    
    Hashire, Melos!
    The story portrays the unbreakable bond between two friends, Melos and Selinuntius, and their faith in protecting each other, all while dangling on a thread which hovers over death and misery.
    
    Kumo no Ito
    Kandata is a coldhearted criminal who, while being punished in Hell for his misdeeds, is noticed by the Buddha Shakyamuni. Despite maintaining a record of committing ruthless atrocities, Kandata had once shown mercy to a spider he encountered in the forest by letting it live. Moved by this, Shakyamuni offers him redemption by dropping a spider's thread into the searing pits of Hell, and it is up to Kandata to seize the opportunity.
    
    Jigokuhen
    Yoshihide is a great painter in the land ruled by Horikawa, a tyrant. Offered a commission to paint the "Buddhist Hell" by the lord, Yoshihide declines, as he cannot paint anything he has not witnessed himself. In an attempt to make Yoshihide understand the magnitude of his request, the lord tortures his subjects to provide inspiration for the artist, descending his domain into utter despair and darkness.`,
    genre: 'Drama / Suspense / Historical / Psychological'
  },
  {
    id: 74,
    title: `Itou Junji: Collection`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/7/88366.jpg',
    description: `In the light of day and in the dead of night, mysterious horrors await in the darkest shadows of every corner. They are unexplainable, inescapable, and undefeatable. Be prepared, or you may become their next victim.

    Sit back in terror as traumatizing tales of unparalleled terror unfold. Tales, such as that of a cursed jade carving that opens holes all over its victims' bodies; deep nightmares that span decades; an attractive spirit at a misty crossroad that grants cursed advice; and a slug that grows inside a girl's mouth. Tread carefully, for the horrifying supernatural tales of the Itou Junji: Collection are not for the faint of heart.`,
    genre: 'Horror / Mystery / SUpernatural / Drama / Psychological'
  },
  {
    id: 75,
    title: `Baccano! Specials`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/7/9129.jpg',
    description: `In 1929, Ladd Russo spared Graham Specter's life and earned his unwavering loyalty. Three years later, Graham is infuriated upon learning that Ladd was pushed off the train after the events aboard the Flying Pussyfoot. As a man of bizarre yet passionate philosophies, he plans to make an offering to Ladd by kidnapping Eve Genoard and subsequently capturing Jacuzzi Splot, who has been living in the Genoard mansion with his gang.

    Meanwhile, Jacuzzi and his gang take in an unfamiliar woman, Elmer C. Albatross pays a visit to the prison to meet an old friend, and Czeslaw Meyer runs into the man he hoped he would never see again.
    
    These seemingly separate storylines merge, tying up several loose ends and revealing the whole truth of the anomaly that occurred aboard the Advena Avis in 1711.`,
    genre: 'Action / Comedy / Mystery / Supernatural / Crime / Historical'
  },
  {
    id: 76,
    title: `Black Lagoon`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1906/121592.jpg',
    description: `Salaryman Rokurou Okajima spends his days trying to climb his company's corporate ladder, until one day when a business negotiation in Thailand goes awry. During the botched deal, he falls hostage to the Lagoon Company—a band of ruthless pirate mercenaries. Left to the whims of his captors after his managers refuse to pay his ransom, Rokurou does the unthinkable: instead of begging for his life, he joins the very crew who kidnapped him.

    Now a member of the group, Rokurou must adjust to his new residence in the dissolute hellscape known as Roanapur, a city where corruption and crime run rampant, and even the smallest slipup could cost him his life. If not for one of the many crime syndicates on the island, Rokurou also constantly finds himself at odds with his brash, gunslinging colleague, Revy.
    
    As Rokurou struggles to abandon his past—and with more than just the profits from the Lagoon Company's illegal trading on the line—he must quickly find the resolve to make tough decisions in high-stress situations while keeping his humanity intact.`,
    genre: 'Action / Crime'
  },
  {
    id: 77,
    title: `Black Lagoon: The Second Barrage`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/3/83748.jpg',
    description: `Rokurou "Rock" Okajima has joined the Lagoon Company, a pirate mercenary group which operates out of Roanapur, Thailand. Despite his initial protests, this filthy slum of depraved souls and merciless criminals now serves as the former salaryman's home. Stranded, with nothing left of his past life but the clothes on his back and his inner morality, Rock is forced to perform jobs alongside the other members of the Lagoon crew. Berated for his lack of spine as he wades through the underbelly of society, he must decide whether to continue on amidst the gunfire and ruthlessness or risk everything he has in an attempt to be free. Whether he chooses the comfort of a familiar land or the freedom of being an outlaw, his decision will have lasting consequences on the crew who gave him a home.`,
    genre: 'Action / Crime'
  },
  {
    id: 78,
    title: `Black Lagoon: Roberta's Blood Trail`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/8/75529.jpg',
    description: `Crime never sleeps in Roanapur, and neither does Roberta—a devoted maid and skilled guerilla soldier in service to the Venezuelan Lovelace family. After the assassination of her superior by the US Secret Service, Roberta returns to the city of debauchery in search of vengeance and his killer's head.

    Meanwhile, young Fernando Garcia Lovelace, the new heir to his father's estate, tails Roberta to Thailand alongside his bodyguard, Fabiola Iglesias. He enlists the help of the Lagoon Company, with the objective of deterring Roberta's warpath and bringing her back to the family. However, with the continued bloodshed and mounting tensions between Roberta, island crime factions, and the US military, it will take a significant amount of strategy—and weaponry—to stop her relentless quest for revenge.`,
    genre: 'Action / Crime'
  },
  {
    id: 79,
    title: `Wicked City`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/2/50021.jpg',
    description: `There is Earth, our familiar world, and then there is the Black World, a parallel dimension that very few people are aware of. For centuries, a pact between the two worlds has been observed to maintain peace, and terms must be negotiated and renewed soon to continue relative harmony.

    This time around, there is a militant faction that will stop at nothing to prevent the signing of a new treaty for inter-dimensional peace. Two agents of the elite organization known as the Black guards—defenders of the balance between the two worlds—are charged with ensuring the success of the treaty.
    
    Director Yoshiaki Kawajiri (Ninja Scroll) blends stylish eroticism, graphic horror and pulse-pounding action as these two race to consummate the peace treaty in time.`,
    genre: 'Action / Adventure / Drama / Gore / Mythology'
  },
  {
    id: 80,
    title: `Blade of the Immortal`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/2/74074.jpg',
    description: `Manji is an infamous swordsman in feudal Japan who is known as the "Hundred Man Killer," as he has killed one hundred innocent men. However, there is something far more frightening than his ominous reputation: the fact that he is immortal. This is the handiwork of eight-hundred-year-old nun Yaobikuni, who placed bloodworms capable of healing almost any wound in Manji's body.

    To atone for his crimes, Manji resolves to kill one thousand evil men. Yaobikuni agrees to this proposal, saying that if he succeeds, she will undo his curse of immortality. Soon after this promise, Manji meets Rin Asano, a 16-year-old girl who requests Manji's assistance in killing those who slaughtered her parents.
    
    Initially reluctant, Manji refuses Rin's desperate plea. However, owing to her evident lack of strength, Manji changes his mind and agrees to protect Rin for four years. With this partnership set in stone, the two embark on a perilous journey of bloodshed, vengeance, and redemption, each to fulfill their own life's cause.`,
    genre: 'Action / Adventure / Supernatural / Historical'
  },
  {
    id: 81,
    title: `Mugen no Juunin: Immortal`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1054/110054.jpg',
    description: `Manji is an infamous swordsman in feudal Japan who is known as the "Hundred Man Killer," as he has killed one hundred innocent men. However, there is something far more frightening than his ominous reputation: the fact that he is immortal. This is the handiwork of eight-hundred-year-old nun Yaobikuni, who placed bloodworms capable of healing almost any wound in Manji's body.

    To atone for his crimes, Manji resolves to kill one thousand evil men. Yaobikuni agrees to this proposal, saying that if he succeeds, she will undo his curse of immortality. Soon after this promise, Manji meets Rin Asano, a 16-year-old girl who requests Manji's assistance in killing those who slaughtered her parents.
    
    Initially reluctant, Manji refuses Rin's desperate plea. However, owing to her evident lack of strength, Manji changes his mind and agrees to protect Rin for four years. With this partnership set in stone, the two embark on a perilous journey of bloodshed, vengeance, and redemption, each to fulfill their own life's cause.`,
    genre: 'Action / Adventure / Supernatural / Historical'
  },
  {
    id: 82,
    title: `Paprika`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1929/93629.jpg',
    description: `The world of dreams can be an incredible window into the psyche, showing one's deepest desires, aspirations, and repressed memories. One hopeful tech lab has been developing the "DC Mini," a device with the power to delve into the dreams of others. Atsuko Chiba and Kosaku Tokita have been tirelessly working to develop this technology with the hopes of using it to deeply explore patients' minds and help cure them of their psychological disorders.

    However, having access to the deepest corners of a person's mind comes with a tremendous responsibility. In the wrong hands, the DC Mini could be used as a form of psychological terrorism and cause mental breakdowns in the minds of targets. When this technology is stolen and people around them start acting strangely, Atsuko and Kosaku know they have a serious problem on their hands. Enlisting the help of Officer Konakawa, who has been receiving this experimental therapy, they search both the real and dream worlds for their mental terrorist.`,
    genre:
      'Avant Garde / Fantasy / Sci - Fi / Horror / Mystery / Supernatural / Suspense'
  },
  {
    id: 83,
    title: `Serial Experiments Lain`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1718/91550.jpg',
    description: `Lain Iwakura, an awkward and introverted fourteen-year-old, is one of the many girls from her school to receive a disturbing email from her classmate Chisa Yomoda—the very same Chisa who recently committed suicide. Lain has neither the desire nor the experience to handle even basic technology; yet, when the technophobe opens the email, it leads her straight into the Wired, a virtual world of communication networks similar to what we know as the internet. Lain's life is turned upside down as she begins to encounter cryptic mysteries one after another. Strange men called the Men in Black begin to appear wherever she goes, asking her questions and somehow knowing more about her than even she herself knows. With the boundaries between reality and cyberspace rapidly blurring, Lain is plunged into more surreal and bizarre events where identity, consciousness, and perception are concepts that take on new meanings.

    Written by Chiaki J. Konaka, whose other works include Texhnolyze, Serial Experiments Lain is a psychological avant-garde mystery series that follows Lain as she makes crucial choices that will affect both the real world and the Wired. In closing one world and opening another, only Lain will realize the significance of their presence.`,
    genre:
      'Avant Garde / Psychological / Drama / Mystery / Sci - Fi / Supernatural'
  },
  {
    id: 84,
    title: `Perfect Blue`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/11/79127.jpg',
    description: `J-pop idol group CHAM! has spent the last two years entertaining its fans. Sadly, all good things must come to an end, and CHAM! must see one of its members, Mima Kirigoe, leave the group to pursue her acting career. While Mima's choice is met with a mixed response, she hopes her fans will continue to support her.

    However, Mima's life begins to change drastically after her departure from the group. Wanting to shed her pop-idol image, she takes on a role in a crime drama series, and her career as an actress gradually becomes more demanding and taxing for both Mima and her manager, Rumi Hidaka. To add to Mima's growing unease, an obsessed fan who is incapable of accepting that Mima has quit being an innocent idol, begins stalking her; a new anonymous website begins to impersonate her life with intricate detail; and CHAM! also appears to be doing better without her. One by one, each disturbing development drives Mima to become increasingly unhinged and unable to distinguish reality from fantasy.`,
    genre: 'Avant Garde / Drama / Horror / Psychological'
  },
  {
    id: 85,
    title: `Neon Genesis Evangelion`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1314/108941.jpg',
    description: `Fifteen years after a cataclysmic event known as the Second Impact, the world faces a new threat: monstrous celestial beings called "Angels" invade Tokyo-3 one by one. Mankind is unable to defend themselves against the Angels despite utilizing their most advanced munitions and military tactics. The only hope for human salvation rests in the hands of NERV, a mysterious organization led by the cold Gendou Ikari. NERV operates giant humanoid robots dubbed "Evangelions" to combat the Angels with state-of-the-art advanced weaponry and protective barriers known as Absolute Terror Fields.

    Years after being abandoned by his father, Shinji Ikari, Gendou's 14-year-old son, returns to Tokyo-3. Shinji undergoes a perpetual internal battle against the deeply buried trauma caused by the loss of his mother and the emotional neglect he suffered at the hands of his father. Terrified to open himself up to another, Shinji's life is forever changed upon meeting 29-year-old Misato Katsuragi, a high-ranking NERV officer who shows him a free-spirited maternal kindness he has never experienced.
    
    A devastating Angel attack forces Shinji into action as Gendou reveals his true motive for inviting his son back to Tokyo-3: Shinji is the only child capable of efficiently piloting Evangelion Unit-01, a new robot that synchronizes with his biometrics. Despite the brutal psychological trauma brought about by piloting an Evangelion, Shinji defends Tokyo-3 against the angelic threat, oblivious to his father's dark machinations.`,
    genre:
      'Avant Garde / Action / Drama / Sci - Fi / Suspense / Mecha / Psychological'
  },
  {
    id: 86,
    title: `Neon Genesis Evangelion: The End of Evangelion`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1404/98182.jpg',
    description: `Shinji Ikari is left emotionally comatose after the death of a dear friend. With his son mentally unable to pilot the humanoid robot Evangelion Unit-01, Gendou Ikari's NERV races against the shadow organization SEELE to see who can enact their ultimate plan first. SEELE desires to create a godlike being by fusing their own souls into an Evangelion unit, while Gendou wishes to revert all of humanity into one primordial being so that he can be reunited with Yui, his deceased wife.

    SEELE unleashes its military forces in a lethal invasion of NERV headquarters. As SEELE's forces cut down NERV's scientists and security personnel, Asuka Langley Souryuu pilots Evangelion Unit-02 in a desperate last stand against SEELE's heaviest weaponry.
    
    The battle rages on, and a depressed Shinji hides deep within NERV's headquarters. With the fate of the world resting in Shinji's hands, Captain Misato Katsuragi hunts for the teenage boy as society crumbles around them.`,
    genre: 'Avant Garde / Drama / Sci - Fi / Psychological / Mecha'
  },
  {
    id: 87,
    title: `Princess Mononoke`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/7/75919.jpg',
    description: `When an Emishi village is attacked by a fierce demon boar, the young prince Ashitaka puts his life at stake to defend his tribe. With its dying breath, the beast curses the prince's arm, granting him demonic powers while gradually siphoning his life away. Instructed by the village elders to travel westward for a cure, Ashitaka arrives at Tatara, the Iron Town, where he finds himself embroiled in a fierce conflict: Lady Eboshi of Tatara, promoting constant deforestation, stands against Princess San and the sacred spirits of the forest, who are furious at the destruction brought by the humans. As the opposing forces of nature and mankind begin to clash in a desperate struggle for survival, Ashitaka attempts to seek harmony between the two, all the while battling the latent demon inside of him. Princess Mononoke is a tale depicting the connection of technology and nature, while showing the path to harmony that could be achieved by mutual acceptance.`,
    genre: ' Action, Adventure, Fantasy'
  },
  {
    id: 88,
    title: `Fate/Zero`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1887/117644.jpg',
    description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.`,
    genre: 'Action / Fantasy / Supernatural'
  },
  {
    id: 89,
    title: `Fate/Zero 2nd Season`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1522/117645.jpg',
    description: `As the Fourth Holy Grail War rages on with no clear victor in sight, the remaining Servants and their Masters are called upon by Church supervisor Risei Kotomine, in order to band together and confront an impending threat that could unravel the Grail War and bring about the destruction of Fuyuki City. The uneasy truce soon collapses as Masters demonstrate that they will do anything in their power, no matter how despicable, to win.

    Seeds of doubt are sown between Kiritsugu Emiya and Saber, his Servant, as their conflicting ideologies on heroism and chivalry clash. Meanwhile, an ominous bond forms between Kirei Kotomine, who still seeks to find his purpose in life, and one of the remaining Servants. As the countdown to the end of the war reaches zero, the cost of winning begins to blur the line between victory and defeat.`,
    genre: 'Action / Fantasy / Supernatural'
  },
  {
    id: 90,
    title: `JoJo's Bizarre Adventure: Stardust Crusaders`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/11/55267.jpg',
    description: `Years after an ancient evil was salvaged from the depths of the sea, Joutarou Kuujou sits peacefully within a Japanese jail cell. He's committed no crime yet demands he not be released, believing he's been possessed by an evil spirit capable of harming those around him. Concerned for her son, Holly Kuujou asks her father, Joseph Joestar, to convince Joutarou to leave the prison. Joseph informs his grandson that the "evil spirit" is in fact something called a "Stand," the physical manifestation of one's fighting spirit which can adopt a variety of deadly forms. After a fiery brawl with Joseph's friend Mohammed Avdol, Joutarou is forced out of his cell and begins learning how to control the power of his Stand.

    However, when a Stand awakens within Holly and threatens to consume her in 50 days, Joutarou, his grandfather, and their allies must seek out and destroy the immortal vampire responsible for her condition. They must travel halfway across the world to Cairo, Egypt and along the way, do battle with ferocious Stand users set on thwarting them. If Joutarou and his allies fail in their mission, humanity is destined for a grim fate.`,
    genre: 'Action / Adventure / Drama / Supernatural'
  },
  {
    id: 91,
    title: `JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/11/75045.jpg',
    description: `Joutarou Kuujou and his allies have finally made it to Egypt, where the immortal Dio awaits. Upon their arrival, the group gains a new comrade: Iggy, a mutt who wields the Stand "The Fool." It's not all good news however, as standing in their path is a new group of Stand users who serve Dio, each with a Stand representative of an ancient Egyptian god. As their final battle approaches, it is a race against time to break Joutarou's mother free from her curse and end Dio's reign of terror over the Joestar family once and for all.`,
    genre: 'Action / Adventure / Drama / Supernatural'
  },
  {
    id: 92,
    title: `JoJo's Bizarre Adventure: Diamond is Unbreakable`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/3/79156.jpg',
    description: `The year is 1999. Morioh, a normally quiet and peaceful town, has recently become a hotbed of strange activity. Joutarou Kuujou, now a marine biologist, heads to the mysterious town to meet Jousuke Higashikata. While the two may seem like strangers at first, Jousuke is actually the illegitimate child of Joutarou's grandfather, Joseph Joestar. When they meet, Joutarou realizes that he may have more in common with Jousuke than just a blood relation.

    Along with the mild-mannered Kouichi Hirose and the boisterous Okuyasu Nijimura, the group dedicates themselves to investigating recent disappearances and other suspicious occurrences within Morioh. Aided by the power of Stands, the four men will encounter danger at every street corner, as it is up to them to unravel the town's secrets, before another occurs.`,
    genre: 'Action / Adventure / Supernatural'
  },
  {
    id: 93,
    title: `JoJo's Bizarre Adventure: Golden Wind`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1572/95010.jpg',
    description: `In the coastal city of Naples, corruption is teeming—the police blatantly conspire with outlaws, drugs run rampant around the youth, and the mafia governs the streets with an iron fist. However, various fateful encounters will soon occur.

    Enter Giorno Giovanna, a 15-year-old boy with an eccentric connection to the Joestar family, who makes a living out of part-time jobs and pickpocketing. Furthermore, he is gifted with the unexplained Stand ability to give and create life—growing plants from the ground and turning inanimate objects into live animals, an ability he has dubbed "Gold Experience." Fascinated by the might of local gangsters, Giorno has dreamed of rising up in their ranks and becoming a "Gang-Star," a feat made possible by his encounter with Bruno Bucciarati, a member of the Passione gang with his own sense of justice.
    
    JoJo no Kimyou na Bouken: Ougon no Kaze follows the endeavors of Giorno after joining Bruno's team while working under Passione, fending off other gangsters and secretly plotting to overthrow their mysterious boss.`,
    genre: 'Action / Adventure / Supernatural / Crime'
  },
  {
    id: 94,
    title: `JoJo's Bizarre Adventure: Stone Ocean`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1896/119844.jpg',
    description: `Conspiring forces frame Jolyne Kuujou for a reckless crime, landing her in the infamous Green Dolphin Street Jail. Much like her father Joutarou, Jolyne is brash, brave, and just; she rails against her unfair sentence and quickly discovers the sinister circumstances that led to her incarceration.

    A gift from her absent father grants Jolyne the power of Stone Free, a supernatural ability known as a Stand that allows her to unravel her body into string. Jolyne uses Stone Free to battle her way through the prison, recruiting new allies—Ermes Costello and Foo Fighters—to assist in her investigation. Together, the fearless women fight to uncover the menace behind Whitesnake, an enemy Stand responsible for the increasingly dangerous prisoners who are after Jolyne's life.
    
    Through Jolyne, the Joestar lineage confronts the legacy of its one true enemy. Jolyne and her friends race to stop a disastrous plot and put an end to a culminating evil.`,
    genre: 'Action / Adventure / Supernatural'
  },
  {
    id: 95,
    title: `JoJo's Bizarre Adventure: Stone Ocean Part 2`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1051/121959.jpg',
    description: `Thrown into solitary confinement after a daring rescue attempt, Jolyne Kuujou fights to uncover the sinister plot of Whitesnake, an enemy Stand whose mysterious wielder remains unknown to her.

    Whitesnake's user is actually Enrico Pucci, priest and chaplain of Green Dolphin Street Prison. Pucci shares a deep connection with a villain who once plagued the Joestar bloodline, making his feud with Jolyne and her father, Joutarou, a personal one. Intent on executing the master plan of his deceased friend, Pucci uses the prison and its inmates to fulfill his nefarious schemes.
    
    Assisted by fellow prisoners, like Ermes Costello and Foo Fighters, Jolyne battles several enemy Stand users. As the ramifications of Pucci's plot spread beyond the confines of the prison and begin to threaten the rest of the world, Jolyne embraces her family lineage and risks her life to put an end to evil.`,
    genre: 'Action / Adventure / Supernatural'
  },
  {
    id: 96,
    title: `JoJo's Bizarre Adventure: Stone Ocean Part 3`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1233/128920.jpg',
    description: `After finally escaping the confines of Green Dolphin Street Jail, Jolyne Kuujou—alongside her companions Ermes Costello and Emporio Alniño—pursues the villainous priest Enrico Pucci across the state of Florida. Jolyne's allies, Weather Report and Narciso Anasui, struggle to catch up with her in order to help bring an end to Pucci's plot. As both parties pursue the priest, they must battle against Pucci's band of enemy Stand users.

    While Jolyne's comrades fight for their lives, Pucci races to the Kennedy Space Center. There he hopes to enact his ultimate goal, one he believes God has entrusted to him. He aims to fulfill the will of the Joestars' blood enemy Dio Brando and—by robbing humanity of free will and making them slaves to fate—to create a world where all humans are blissfully happy.
    
    Unable to rely on the aid of her comatose father Joutarou, Jolyne must weaponize all she has learned in prison to confront Pucci in a climactic battle while the world itself hangs in the balance.`,
    genre: 'Action / Adventure / supernatural'
  }
]

export default data
