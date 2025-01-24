const LearnMoreSection = () => {
  const sections = ["About", "Blog", "Something Else", "TBD"];

  return (
    <div className="md:mt-20 mt-0">
      <h2 className="text-xl font-bold mb-4">Learn more</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-36">
        {sections.map((text, i) => (
          <div
            key={i}
            className="relative h-20 w-56  rounded-xl overflow-hidden cursor-pointer opacity-90 transition-opacity"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover px-3 bg-center"
              style={{ backgroundImage: "url('/blog.png')" }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Text (on top) */}
            <div className="relative z-10 font-bold flex items-center justify-center h-full text-white brightness-110">
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnMoreSection;
