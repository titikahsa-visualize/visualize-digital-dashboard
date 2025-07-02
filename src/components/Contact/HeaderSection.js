export default function HeaderSection() {
  return (
    <div className="text-center mt-12">
      <h2 className="text-4xl md:text-5xl font-extrabold">
        <span className="text-white">Get </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-sky-400">
          in touch
        </span>
      </h2>
      <p className="mt-3 text-gray-300 text-sm md:text-base font-medium">
        Please send us your requirements and we'll get back to you at the earliest.
      </p>
    </div>
  );
}