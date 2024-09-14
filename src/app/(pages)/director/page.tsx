"use client";

import Container from "@/components/parts/Container";
import PageContainer from "@/components/parts/PageContainer";
import FadeIn from "@/components/animation/FadeIn";
import Title from "@/components/parts/Title";
import Image from "next/image";
import directorImg from "@/public/director.jpg";
import SentenceDiv from "@/components/parts/SentenceDiv";
import SentenceP from "@/components/parts/SentenceP";
import { directorSentences } from "@/app/constants";

const DirectorPage = () => {
  return (
    <Container>
      <PageContainer>
        <FadeIn>
          <Title>代表者からのご挨拶</Title>
        </FadeIn>
        <FadeIn>
          <SentenceDiv>
            <SentenceP>
              私たちのビジョンは、未来をよりよくするための革新的な変革を実現することです。私たちは、技術の力とともに、世界をより持続可能で効率的な場所に変え、人々の生活に革新的な価値を提供します
              <br />
              私たちの使命は、お客様、パートナー、そして社会に対する責任を全うし、持続可能な未来を築くことです。私たちは次のことを約束します。
            </SentenceP>
            <Image
              src={directorImg}
              alt="director"
              className="w-52 rounded-2xl object-cover"
            />
          </SentenceDiv>
        </FadeIn>
        <SentenceDiv>
          {directorSentences.map((item, index) => (
            <SentenceP key={index}>{item} </SentenceP>
          ))}
        </SentenceDiv>
      </PageContainer>
    </Container>
  );
};

export default DirectorPage;
