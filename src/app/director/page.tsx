"use client";

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
import directorImg from "@/public/director.jpg";

const DirectorPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-6 p-8">
        <FadeIn>
          <Title>代表者からのご挨拶</Title>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="max-w-2xl ">
              私たちのビジョンは、未来をよりよくするための革新的な変革を実現することです。私たちは、技術の力とともに、世界をより持続可能で効率的な場所に変え、人々の生活に革新的な価値を提供します
              <br />
              私たちの使命は、お客様、パートナー、そして社会に対する責任を全うし、持続可能な未来を築くことです。私たちは次のことを約束します。
            </p>
            <Image
              src={directorImg}
              alt="director"
              className="w-52 rounded-2xl object-cover"
            />
          </div>
        </FadeIn>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <p className="max-w-2xl ">
            私たちのビジョンは、未来をよりよくするための革新的な変革を実現することです。私たちは、技術の力とともに、世界をより持続可能で効率的な場所に変え、人々の生活に革新的な価値を提供します
            <br />
            私たちの使命は、お客様、パートナー、そして社会に対する責任を全うし、持続可能な未来を築くことです。私たちは次のことを約束します。
          </p>
          <p className="max-w-2xl ">
            私たちのビジョンは、未来をよりよくするための革新的な変革を実現することです。私たちは、技術の力とともに、世界をより持続可能で効率的な場所に変え、人々の生活に革新的な価値を提供します
            <br />
            私たちの使命は、お客様、パートナー、そして社会に対する責任を全うし、持続可能な未来を築くことです。私たちは次のことを約束します。
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DirectorPage;
