import React from 'react';
import styled from 'styled-components';

const CtaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
  filter: brightness(50%);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: transparent;
  color: white;
`;

const CtaTitle = styled.h2`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const CtaDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;

const CtaButton = styled.a`
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
`;

const Cta = () => {
  return (
    <CtaContainer>
      <BackgroundVideo autoPlay muted loop>
        <source src="/Assets/video.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </BackgroundVideo>
      <ContentContainer>
        <CtaTitle>Battez vous pour votre liberté !</CtaTitle>
        <CtaDescription>
          Faites équipe avec vos amis et affrontez des adversaires sur des champs de bataille épiques dans ce jeu de tir à la première personne gratuit.
        </CtaDescription>
        <CtaButton href="/Assets/RacoonInstaller.exe" download>Download</CtaButton>
      </ContentContainer>
    </CtaContainer>
  );
};

export default Cta;
