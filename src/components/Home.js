import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  height: 100vh;
`;

const AdditionalBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/Assets/background.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.7; /* Ajustez l'opacité selon vos préférences */
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 60rem;
  position: relative;
  z-index: 1;
  color: #e0c200;

  h1 {
    font-size: 7rem; /* Ajustez la taille du titre selon vos besoins */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem; /* Ajustez la taille du paragraphe selon vos besoins */
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 1rem;
      font-size: 1.6rem; /* Ajustez la taille de la liste selon vos besoins */
    }
  }
}`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start; /* Alignez les éléments en haut plutôt qu'au centre */
  margin: 4rem 0;
  z-index: 1; /* Assurez-vous que les cartes apparaissent au-dessus de l'image de fond */
`;

const FeatureCard = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: rgba(255, 255, 255, 0.9); /* Couleur blanche avec opacité réduite */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: black;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: black;
  }
`;

const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #1a1a1a;
  border-radius: 10px;
  margin-top: 4rem;
  width: 100%; /* Ajoutez cette ligne pour occuper toute la largeur */
`;

const CtaContent = styled.div`
  text-align: center;
  max-width: 60rem;
  width: 100%; /* Ajoutez cette ligne pour occuper toute la largeur */

  h2 {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: white;
    margin-bottom: 2rem;
  }

  button {
    background-color: #ffd300;
    color: #141414;
    padding: 1.5rem 3rem;
    border-radius: 0.8rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #e0c200;
    }
  }
`;

const Home = () => {
    const navigate = useNavigate();
  
    const handleCtaButtonClick = () => {
      navigate('/cta');
    };
  return (
    <HomeContainer>
      <AdditionalBackgroundImage />
      <HeroContent>
        <h1>Welcome to RacoonFPS!</h1>
        <p>Join millions of players around the world and dive into the action.</p>
      </HeroContent>
      <FeaturesContainer>
        <FeatureCard>
          <h2>Competitive Matches</h2>
          <p>
            Prove your skills in our ranked mode and climb the leaderboards.
            Matches are intense and require strategy and teamwork.
          </p>
        </FeatureCard>
        <FeatureCard>
          <h2>Immersive Gameplay</h2>
          <p>
            Audio and visuals are highly detailed and immersive. You will love them !
          </p>
        </FeatureCard>
        <FeatureCard>
          <h2>Homemade !</h2>
          <p>
            This game is made by a team of 5 students. We hope you will enjoy it !
          </p>
        </FeatureCard>
      </FeaturesContainer>
      <CtaContainer>
        <CtaContent>
          <h2>Ready to Play?</h2>
          <p>
            Download now and join the world of RacoonFPS !
          </p>
          <button onClick={handleCtaButtonClick}>Play Now</button>
        </CtaContent>
      </CtaContainer>
    </HomeContainer>
  );

};

export default Home;