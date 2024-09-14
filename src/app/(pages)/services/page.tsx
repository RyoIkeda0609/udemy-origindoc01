"use client";

import Container from "@/components/parts/Container";
import PageContainer from "@/components/parts/PageContainer";
import FadeIn from "@/components/animation/FadeIn";
import Title from "@/components/parts/Title";
import SentenceDiv from "@/components/parts/SentenceDiv";
import SentenceP from "@/components/parts/SentenceP";
import { servicesSentences } from "@/app/constants";

const ServicePage = () => {
  return (
    <Container>
      <PageContainer>
        <FadeIn>
          <Title>簡単なレポートアプリです</Title>
        </FadeIn>
        {servicesSentences.map((item, index) => (
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

export default ServicePage;
