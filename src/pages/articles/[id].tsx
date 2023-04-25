import Image from "next/image";
import { park } from "../../../assets/Images";

export default function ArticlePage() {
  return (
    <article style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 40 }}>
        Torres del Paine National Park, Chile{" "}
      </h1>
      <Image src={park} width={500} height={500} alt="" />
      <section style={{ marginTop: 40 }}>
        There&apos;s no better way to experience Patagonia&apos;s rugged natural
        beauty than in Torres del Paine National Park. The UNESCO Biosphere
        Reserve is home to its namesake granite towers (the park&apos;s name is
        an amalgam of the Spanish word for “towers” and the Tehuelche word for
        “blue”), as well as sparkling lagoons and otherworldly glaciers.
      </section>
    </article>
  );
}
