import { LoremIpsum } from "react-lorem-ipsum";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center my-6 font-semibold">
        Welcome to Next.js StarWars Website
      </h1>
      <p className="mb-5 ">{LoremIpsum()}</p>
      <p className="mb-5 ">{LoremIpsum()}</p>
      <p className="mb-5 ">{LoremIpsum()}</p>
    </div>
  );
}
