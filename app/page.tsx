import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="fixed left-0 right-0 h-16 border-b backdrop-blur-md z-50"></header>

      <div className="relative h-screen flex justify-center items-center">
        <Image
          src="/stars.jpg"
          alt="Stars"
          fill
          priority
          className="object-cover -z-50"
        />

        <div className="text-center">
          <h1 className="text-4xl">
            This is your pathway to all things space related!
          </h1>

          <p>Discover your interest in space</p>
        </div>
      </div>
    </>
  );
}
