import Image from "next/image";
import image1 from "@/images/about.jpeg";
import LearnMoreButton from "../button/LearnMoreButton";

const About = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4  pt-20">
      <div className="w-full md:w-1/2">
        <Image
          src={image1}
          alt="About Meekman"
          width={500}
          height={500}
          className="mx-auto rounded-md object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 text-black space-y-6">
        <h2 className="text-center md:text-left text-[32px] leading-12 text-primary font-bold">
          About Us
        </h2>

        <p className="text-[18px] leading-8 px-2 md:px-0">
          Meekman is a leading <b>Book Publishing Company</b> dedicated to
          delivering <b>innovative solutions</b> that meet the evolving needs of
          our clients. With a strong commitment to excellence, we specialize in
          providing services designed to enhance performance, drive efficiency,
          and create value.
          <br />
          <br />
          Our team of experts brings years of experience and a passion for
          innovation to every project, ensuring that we remain at the forefront
          of industry trends.
          <br />
          <br />
          <b>At Meekman,</b> customer satisfaction is our top priority. We pride
          ourselves on building long-lasting relationships through trust,
          reliability, and outstanding service.
        </p>

        <LearnMoreButton />
      </div>
    </section>
  );
};

export default About;
