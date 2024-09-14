"use client";

import Container from "@/components/parts/Container";
import PageContainer from "@/components/parts/PageContainer";
import FadeIn from "@/components/animation/FadeIn";
import Title from "@/components/parts/Title";
import SentenceDiv from "@/components/parts/SentenceDiv";
import SentenceP from "@/components/parts/SentenceP";
import { aboutSentences } from "@/app/constants";

const AboutPage = () => {
  return (
    <Container>
      <PageContainer>
        <FadeIn>
          <Title>私たちのビジョンと使命</Title>
        </FadeIn>
        {aboutSentences.map((item, index) => (
          <FadeIn key={index}>
            <SentenceDiv>
              <SentenceP>{item}</SentenceP>
            </SentenceDiv>
          </FadeIn>
        ))}
      </PageContainer>
    </Container>
  );
};

export default AboutPage;
