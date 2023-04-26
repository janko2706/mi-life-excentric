import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Container } from './styles';
import OfficePicture from '../../Assets/Pictures/office.jpeg';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className='progress-bar'
        style={{ scaleY: scrollYProgress }}
      />
      <Container>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.45, 0.36, 0.22, 0.98] }}
          className='firstText'
        >
          Bring Your <span>Dreams</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.45, 0.36, 0.22, 0.98] }}
          className='officePic'
          style={{ backgroundImage: `url(${OfficePicture})` }}
        />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          exit={{ x: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.45, 0.36, 0.22, 0.98] }}
          className='secondText'
        >
          to <span>Reality</span>
        </motion.div>
      </Container>
      <motion.div
        initial={{ x: '100%' }}
        exit={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: [0.77, 0.16, 0.64, 0.91] }}
        style={{ background: 'var(--eggplant)', height: '100%' }}
      >
        <Container>
          <div className='textCont'>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='title'
            >
              The Company
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='text'
            >
              Mi Life Design je tvrtka posvećena dizajnu interijera i
              eksterijera svih životnih prostora. Kreativni dvojac Ivana Bogović
              i Mate Tokić predvode tim stručnjaka iz područja dizajna,
              arhitekture i građevine čime našim klijentima omogućujemo
              sveobuhvatnu uslugu prilikom realizacije projekata. Iza našeg
              dugogodišnjeg rada stoje mnogobrojni projekti kako u Hrvatskoj
              tako i u inozemstvu. Nastojeći stvarati što originalnije i
              jedinstvene projekte.
            </motion.p>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='title'
            >
              The Ideal Solution
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='text'
            >
              <ol type='a' style={{ marginLeft: '6px' }}>
                <li>Izrada osnovnog tlocrta s pozicijama namještaja</li>
                <li>
                  Izrada vizualizacije u Sketchup-u (renderirano u Lumionu)
                </li>
                <li>Izrada nacrta namještaja</li>
                <li>
                  Izrada nacrta novih pozicija elektroinstalacija (nacrt
                  rasvjete, nacrt prekidača, nacrt utičnica, nacrt ozvučenja)
                </li>
                <li>Izrada sheme slaganja pločica</li>
                <li>
                  Izrada troškovnika te odabir svih elemenata dizajna (rasvjete,
                  podova, zidne boje, kupovnog namještaja, zavjesa, tepiha,
                  dekoracije)
                </li>
                <li>
                  Ukoliko se radi o projektu uređenja eksterijera, uz sve
                  navedeno, izrađuju se i tehnički nacrti staza, stepeništa te
                  škarpi potrebnih za nivelaciju dvorišta i njihovo odjeljivanje
                  u zone te izbor biljnog materijala predviđenog u projektu
                </li>
              </ol>
            </motion.p>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='title'
            >
              Detailed Design
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='text'
            >
              Izvedbeno rješenje vrsta je usluge koju nudimo klijentima nakon
              odrađenog idejnog rješenja. Prvenstveno je namijenjena klijentima
              koji imaju nedostatak vremena ili iskustva u provođenju
              građevinskih, stolarskih i drugih radova. Izvedbeno rješenje
              obuhvaća: kompletno praćenje i nadzor nad svim radovima i
              zahvatima na projektu, odabir i organizaciju izvođača radova te
              koordinaciju njihova rada. Naš tim obuhvaća niz iskusnih
              stručnjaka iz svih područja potrebnih za finalnu realizaciju
              projekta čime Vam u potpunosti olakšavamo ovo po mnogima izazovno
              iskustvo.
            </motion.p>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='title'
            >
              Contact
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='text'
            >
              Mail: info@mi-life-design.com
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='text'
            >
              Ivana Bogovic: + 385 99 31 50 511
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='text'
            >
              Mate Tokic: + 385 98 774 610
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='text'
            >
              Ured: + 385 1 2385 441
            </motion.p>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='title'
            >
              Social Media
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='text'
            >
              <a href='https://www.facebook.com/milifedesign.hr/'>
                <AiOutlineFacebook />
                Facebook
              </a>
            </motion.p>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.45, 0.36, 0.22, 0.98] }}
              className='text'
              style={{ paddingBottom: '2rem' }}
            >
              <a href='https://www.instagram.com/mi_life_design/'>
                <AiOutlineInstagram />
                Instagram
              </a>
            </motion.p>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default About;
