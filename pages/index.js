import Head from "next/head";
import RandomBox from "../components/randomBox";
import Button from "../components/button";
import BlurBox from "../components/blurBox";
import Link from "next/link"

// import { useState } from "react";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cars Type</title>
        <link rel="icon" href="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Oi&family=Press+Start+2P&family=Reggae+One&family=Train+One&family=Yatra+One&family=Zilla+Slab+Highlight&display=swap&family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-primary w-screen h-screen">
        <RandomBox />
        <BlurBox>
          <h1
            id="title"
            className="text-4xl font-press-start mb-10 text-blue-900"
          >
            Cars Type
          </h1>

          <Button value="Practice" />
          <Link href="/create"><a><Button value="Create Room" /></a></Link>
          <Link href="/join"><a><Button value="Join Room" /></a></Link>
        </BlurBox>
      </main>
    </div>
  );
}
