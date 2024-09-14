"use client";

import Container from "./Container";
import Image from "next/image";
import { clients } from "@/app/constants";
import FadeIn, { FadeInStagger } from "../animation/FadeIn";

const Client = () => {
  return (
    <div className="mt-24 rounded-[50px] bg-gray-950 py-20">
      <Container>
        <FadeIn>
          <div className="flex items-center gap-x-8">
            <h2 className="text-center text-white text-sm font-semibold tracking-wider ">
              こちらの企業も導入しています。
            </h2>
            <div className="h-px flex-auto bg-neutral-700 "></div>
          </div>
        </FadeIn>
        <FadeInStagger faster>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 lg:grid-cols-4 gap-10">
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt="client"></Image>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Client;
