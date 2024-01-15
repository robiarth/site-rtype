import React from 'react';

import styled from 'styled-components';


const FeatureContainer = styled.div`

  padding: 4rem 0;

  display: flex;

  flex-wrap: wrap;

  justify-content: space-between;

  align-items: center;

`;


const FeatureCard = styled.div`

  flex-basis: calc(33.333% - 2rem);

  margin-bottom: 2rem;

  background-color: #141414;

  padding: 2rem;

  border-radius: 0.5rem;

  color: white;

  text-align: center;


  h3 {

    font-size: 1.8rem;

    margin-bottom: 1rem;

  }


  p {

    font-size: 1.1rem;

    margin-bottom: 2rem;

  }

`;


const Features = () => {

  return (

    <FeatureContainer>

      <FeatureCard>

        <h3>Radiant Powers</h3>

        <p>

          Harness the powers of unique agents from across the globe as you

          battle for control over a world transformed by the unstable

          power of radianite.

        </p>

      </FeatureCard>

      <FeatureCard>

        <h3>Competitive 5v5</h3>

        <p>

          Play as a team of five and strategize together to dominate the

          enemy team in a competitive, tactical FPS environment.

        </p>

      </FeatureCard>

      <FeatureCard>

        <h3>Free to Play</h3>

        <p>

          VALORANT is free to play, and offers a fair and competitive

          experience for all players, regardless of their purchase

          history.

        </p>

      </FeatureCard>

    </FeatureContainer>

  );

};


export default Features;