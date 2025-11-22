"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SeminarsWorkshopsSection() {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    // Intro paragraph animation
    gsap.from(introRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    // Cards animation using ScrollTrigger
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="w-full px-6 py-16 bg-white mx-auto max-w-6xl">
      {/* Hero Tagline */}
      <article className="flex items-center gap-4">
        <div className="text-left w-full md:w-1/2">
          <h1
            ref={heroRef}
            className="text-2xl md:text-3xl font-bold  mb-6 text-primary"
          >
            Empowering Educators. Inspiring Learners. Transforming Schools.
          </h1>

          {/* Marketing-Focused Intro */}
          <p ref={introRef} className="md:text-lg  mb-12">
            At Meekman Books & Educational Services, we believe that quality
            education thrives when teachers, pupils, and school leaders are
            empowered with the right knowledge and tools. Our seminars and
            workshops are designed to elevate learning outcomes, strengthen
            instructional quality, and drive impactful school transformation.
          </p>
        </div>
      </article>

      {/* SEO-Optimized Content */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Teacher Training Workshops",
            text: "Our teacher-focused seminars provide practical guidance on classroom management, curriculum delivery, modern teaching techniques, and subject-specific mastery. Ideal for schools seeking to enhance teacher performance and student engagement.",
          },
          {
            title: "Pupil Development Programs",
            text: "We conduct engaging student workshops on study skills, reading improvement, exam readiness, leadership, and motivation—helping learners build confidence, discipline, and strong academic habits.",
          },
          {
            title: "School Administrator Seminars",
            text: "Our leadership and management workshops help administrators adopt modern tools, strategic planning methods, and best practices that improve school operations and long-term educational success.",
          },
        ].map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="p-6 bg-gray-50 rounded-2xl shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              {card.title}
            </h2>
            <p className="text-gray-600 text-base">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
