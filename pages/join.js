import RandomBox from "../components/randomBox";
import BlurBox from "../components/blurBox";
import Button from "../components/button";
import Head from "next/head";
export default function Join() {
  return (
    <div>
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
            className="text-4xl font-press-start mb-10 text-blue-900">
            Cars Type
          </h1>

          <input className="w-96 font-press-start text-2xl text-center text-blue-900 rounded-full bg-btn_transparent backdrop-blur-md px-10 py-10 mb-5" type="text" placeholder="Player Name" name="" id="" />

          <input className="w-96 font-press-start text-2xl text-center text-blue-900 rounded-full bg-btn_transparent backdrop-blur-md px-10 py-10 mb-5" type="text" placeholder="Room Id" name="" id="" />
          <Button value="Join Room" />
        </BlurBox>
      </main>
    </div>
  );
}
