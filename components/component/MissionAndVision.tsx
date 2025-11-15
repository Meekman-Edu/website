const MissionAndVision = () => {
  return (
    <article className="md:flex h-[400px]">
      <section className="bg-BrandAmber w-full md:w-1/2 p-4 sm:p-6">
        <h3 className="text-xl text-center text-primary font-bold">
          Our Vision
        </h3>
        <p className="mt-4 text-center ">To set the global standard.</p>
      </section>
      <section className="bg-gray-400 w-full md:w-1/2 p-4 sm:p-6">
        <h3 className="text-xl text-center text-primary font-bold">
          Our Mission
        </h3>
        <p className="mt-4 text-center max-w-lg">
          Our To provide the educational system with quality books which will
          not deviate from Government curriculum and make a supply at the
          specified delivery period.
        </p>
      </section>
    </article>
  );
};

export default MissionAndVision;
