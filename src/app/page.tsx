import ThreeScene from './components/ThreeScene';

export default function Home() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-black text-white">
      <ThreeScene />
      <div className="absolute text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Future of Coding</h1>
        <p className="text-lg md:text-2xl">Exploring agentic software and immersive interfaces</p>
      </div>
    </section>
  );
}
