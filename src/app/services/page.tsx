"use client";

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Title from "@/components/Title";
import React from "react";

const ServicePage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-6 p-4">
        <FadeIn>
          <Title>簡単なレポートアプリです</Title>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="mx-w-2xl">
              シンプルなレポート作成
              高度な技術やデザインスキルが不要。直感的なインターフェースで、わずか数分でプロフェッショナルなレポートを作成できます。
            </p>
            <p className="mx-w-2xl">
              シンプルなレポート作成
              高度な技術やデザインスキルが不要。直感的なインターフェースで、わずか数分でプロフェッショナルなレポートを作成できます。
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="mx-w-2xl">
              シンプルなレポート作成
              高度な技術やデザインスキルが不要。直感的なインターフェースで、わずか数分でプロフェッショナルなレポートを作成できます。
            </p>
            <p className="mx-w-2xl">
              シンプルなレポート作成
              高度な技術やデザインスキルが不要。直感的なインターフェースで、わずか数分でプロフェッショナルなレポートを作成できます。
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
};

export default ServicePage;
