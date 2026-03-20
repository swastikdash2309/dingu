import { useEffect, useState } from 'react';
import '@/App.css';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import HeartBackground from './components/HeartBackground';
import MonthCard from './components/MonthCard';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);
  const [openCards, setOpenCards] = useState([]);

  useEffect(() => {
    const fireHeartConfetti = () => {
      const scalar = 2;
      const heart = confetti.shapeFromPath({
        path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
      });

      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0.8,
        decay: 0.94,
        startVelocity: 30,
        shapes: [heart],
        scalar,
      };

      const shoot = () => {
        confetti({
          ...defaults,
          particleCount: 30,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: ['#FFB7C5', '#FFB3D9', '#E6E6FA', '#FF1493'],
        });
      };

      setTimeout(shoot, 0);
      setTimeout(shoot, 200);
      setTimeout(shoot, 400);
      setTimeout(shoot, 600);
      setTimeout(shoot, 800);
    };

    fireHeartConfetti();
  }, []);

  const handleCardToggle = (monthNumber, isOpen) => {
    if (isOpen) {
      setOpenCards(prev => [...prev, monthNumber]);
      setShouldPlayMusic(true);
    } else {
      setOpenCards(prev => prev.filter(num => num !== monthNumber));
    }
  };

  useEffect(() => {
    if (openCards.length === 0) {
      setShouldPlayMusic(false);
    }
  }, [openCards]);

  const months = [
    {
      number: 1,
      title: 'Month One',
      text: "heyyy my strawberry shortake i cant believe its been 3 months w u and honestly its been the best time of my life no sugarcoating i genuinely mean that with everything in me but yeah i love you so much and the day i asked u to be my girlfriend was the biggest milestone for me bcs ur the first girl i have ever asked out and ever loved this much and it was an unreal feeling trying to describe the sheer joy i felt that day bcs since sept i'd been waiting for that moment and for it to come to life was like my dreams coming true bcs when i first started liking i used to visualise us being together and it was as if i knew it was gna happen because i truly think the stars aligned and this was j meant to happen all along i know our first month we barely got to see each other but our bond will never change regardless of the situation so cheers to the best first month of dating u my love.",
      image: 'https://customer-assets.emergentagent.com/job_aeff1b60-5045-4516-9a6b-db0a437d9d09/artifacts/ga25ej17_WhatsApp%20Image%202026-02-11%20at%2023.06.24.jpeg',
    },
    {
      number: 2,
      title: 'Month Two',
      text: "and babe the second month i know was rocky bcs i got tonsillitis so i was out of school for what felt like ages but i think we made up for it with that date late jan which was one of the cutest dates ever like i remember i was late bcs i had no car and had to uber so i kinda left u hanging for a bit but we got donuts at wtp which was so cute my babes and then we walked together to jewels of india and that was so wholesome like we held hands the whole way there and then i remember i tested ur trust w me and walked straight into the escalator going down which was so cute omg and then ofc the 'movie' and us buying coke and popcorn which we ate so much of righttt to the way i said lets recreate the kiss scene and then proceeded to make out for 45 mins awww it was the hottest cutest thing ever and like they way we looked into each other's eyes cuddled it all felt like a dream and ofc how can i ever forget the hickey that was my first time ever giving a hickey to anyone so that meant so much that it was u my pookie and then after the movie was done we cabbed to meet mehr and we started making out but that creepy ahh was looking and at us hahah but it was sososo hot omg yet again the best 2nd month of dating u baby",
      image: 'https://customer-assets.emergentagent.com/job_aeff1b60-5045-4516-9a6b-db0a437d9d09/artifacts/havqk12k_WhatsApp%20Image%202026-03-20%20at%2010.56.56.jpeg',
    },
    {
      number: 3,
      title: 'Month Three',
      text: "and now february comes around and i know this month wasnt the best for either of us babe but its all about ups and downs it's what makes us right but regardless this month was genuinely one of the best months of my life school was so fun w u eating strawberries together was so cute and we j made each other so happy it was one of the best feelings ever from us flirting and trolling each other in cs with the ink and the leg locking and the random paper stuff i'd put in ur hair and write on ur hands and us side-eying each other in the hallways and holding hands in assembly when the lights went out and me j admiring u forever and ever bcs ur j the most beautiful human to exist\n\nand ofc the week before valentines day was legit the sweetest thing ever first time i've ever asked a girl to be my valentine and it was w YOUUUU so again im reiterating this it truly meant so much to me and then ofc valentines day came around and that day was the best day of my life the valentines day gifts we got for eactother(and i still havent given u mine yet 😭) and i will never get over the amount of effort u put in for me whilst BEING IN THE HOSTEL YOU deserve an oscar babe i love you soo much and i absolutely loved everything u got me and i'll actually never get over that moment hahahah\n\nand ofc babe the actual date we got to the cinema and i j love being in ur presence makes me the happiest ever its so uplighting and healthy and then ofc then came the tickle fights to u then sitting on me (so hottt) and that was mad aura from you to us looking at eachother in the cutest way possible to making out for ages and then ofc all the tmi stuff was cute af and we loved every second of it ofc the redbul spills lmaooo and then us going to in the cab and u laying on my lap and me babying u was a moment to die for and then ofc us eating kfc and the dreaded cab drive home knowing it all was over but that day was something unforgetable and im so grateful we got to experience that and smile that it happened right and then me laying on ur lap to and vice versa while we kissed the last few minutes of the ride home and j like that valentines day 26 comes to wrap and it was gen the best with the bestest person everrrr awwwww thank u for everything babe i love you so much",
      image: 'https://customer-assets.emergentagent.com/job_aeff1b60-5045-4516-9a6b-db0a437d9d09/artifacts/ahwrq0vs_WhatsApp%20Image%202026-03-20%20at%2010.57.43.jpeg',
    },
  ];

  return (
    <div className="App">
      <HeartBackground />
      
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-testid="hero-section"
      >
        <motion.h1
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-romantic-accent drop-shadow-lg mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          data-testid="main-title"
        >
          happy 3 months my babyyy
        </motion.h1>
      </motion.section>

      <section className="max-w-6xl mx-auto px-4 py-16 space-y-16 md:space-y-24 relative z-10" data-testid="months-section">
        {months.map((month, index) => (
          <MonthCard
            key={month.number}
            monthNumber={month.number}
            title={month.title}
            text={month.text}
            imageUrl={month.image}
            reverse={index % 2 !== 0}
            onToggle={handleCardToggle}
          />
        ))}
      </section>

      <motion.section
        className="max-w-4xl mx-auto px-4 py-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        data-testid="final-message"
      >
        <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 text-center">
          <h3 className="font-heading text-4xl md:text-5xl text-romantic-accent mb-6">
            Forever & Always
          </h3>
          <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
            lastly babe i know how hard it is for both of us that im leaving but rest assured we'll cherish these last few months together and make the best use our time and i want to reiterate again that i know that long distance will definitely work out for us in the end we j got to persevere and im very certain we'll make it thru like we always do so this is a small hurdle that we have to overcome and i know it wont change a single thing about or dynamic and i'll hold on to u forever bcs ur genuinely 1 in 8 billion babe and all of my friends are so happy that i have u in my life bcs there truly is no one other like u and i'll always love you forever and ever.
          </p>
          <div className="mt-8 flex justify-center">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#D8B4F8" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>
      </motion.section>

      <div className="h-32" />

      <MusicPlayer shouldPlay={shouldPlayMusic} />
    </div>
  );
}

export default App;
