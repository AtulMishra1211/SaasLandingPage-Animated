"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import atul2Image from "@/assets/atul-2.png";

const stats = [
  { label: "Projects", value: "5+" },
  { label: "DSA Problems ", value: "500+" },
  { label: "Experience", value: "1 yrs" },
];

const skills = [
  "Next.js",
  "Node.js",
  "MongoDB",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Full Stack Web Development",
];

const timeline = [
     {
        year: "2025",
        title: "Software Development Engineer",
        company: "Kazam Energy",
        description: "Built and shipped 15+ production pages for the B2C EV charging platform using Next.js and TypeScript, driving 6.8K+ monthly visitors and 10.3K+ page views with steady ∼10% month-over-month growth",

    },
    {
        year: "2025",
        title: "Programmer Analyst",
        company: "Cognizant",
        description: "Developed and optimized low-latency software modules adhering to OOP principles using Java",


    },
   
  {
    year: "2024",
    title: "ML Intern",
    company: "DRDO",
    description: "Trained YOLOv5s/YOLOv8s models on 1,200+ labeled images, achieving 92% mAP. Integrated servo motor with Arduino for automated moving-target tracking.",
  },
 
  {
    year: "2024",
    title: "Front-end Engineer",
    company: "Elevatifier.io",
    description: "Built performant React applications with polished interactions and a strong focus on accessibility and performance.",
  },
];

const projects: Array<{ title: string; subtitle: string; codeUrl?: string; liveUrl?: string }> = [
  {
    title: "Kazam.energy Website",
    subtitle: "Designed 20+ pages and revamped the complete website with a common overlay form and a common backend.",
    codeUrl: "",
    liveUrl: "https://kazam.energy/",
  },
  {
    title: "Saas Landing Page - Animated",
    subtitle: "Developed a fully responsive SaaS landing page (Next.js 14, Framer Motion) with parallax animations, achieving 95+ Lighthouse scor",
    codeUrl: "https://github.com/AtulMishra1211/SaasLandingPage-Animated",
    liveUrl: "https://saas-landing-page-animated.vercel.app/",
  },
  {
    title: "Momato - Food Ordering App",
    subtitle: "Developed a responsive frontend enabling restaurant discovery and real-time menu search using Swiggy API.",
    codeUrl: "https://github.com/AtulMishra1211/Momato",
    liveUrl: "https://venerable-buttercream-5c9a5d.netlify.app/",
  },
  {
    title: "Real-Time Object Detection & Classification",
    subtitle: "Trained YOLOv5s/YOLOv8s models on 1,200+ labeled images, achieving 92% mAP. Integrated servo motor with Arduino for automated moving-target tracking.",
    codeUrl: "https://github.com/AtulMishra1211/Real-Time-Object-Detection-and-Classification",
    liveUrl: "https://drive.google.com/file/d/1Qf6LpKndXMiXMDky38KB0NAVxdnL4emR/view?usp=sharing",
  },
];

const profileImage = atul2Image;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[40px] bg-white p-8 shadow-xl shadow-slate-200/70 md:p-14"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_20%),radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.1),_transparent_20%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.95fr] items-center">
              <div className="space-y-6">
                <span className="tag inline-flex">Portfolio</span>
                <h1 className="section-title text-left">Atul&apos;s creative portfolio and product story.</h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-700">
                  A polished about page built to highlight your experience, signature projects, and the motion-led interface style that matches the rest of your landing page.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
                  <a
                    href="/Atul's_Resume.pdf"
                    download
                    className="btn btn-primary w-full text-center sm:w-auto"
                  >
                    Download Resume
                  </a>
                  <a
                    href="mailto:atulm1341@gmail.com"
                    className="btn btn-text w-full text-center sm:w-auto"
                  >
                    Contact Me
                  </a>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                      <p className="mt-3 text-3xl font-semibold text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 p-4"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 h-[520px] md:h-[600px]">
                  <Image
                    src={profileImage}
                    alt="Atul image"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-end justify-center opacity-0 transition duration-300 ease-out group-hover:opacity-100">
                    <div className="w-full rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/70">Fast facts</p>
                      <p className="mt-3 text-sm leading-6 text-white/80">
                        Product-first thinking, modern interface systems, and motion details that keep every screen feeling fresh.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200/60"
          >
            <span className="tag">Resume highlights</span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">Experience & expertise</h2>
            <p className="mt-4 text-slate-700 leading-7">
              A curated snapshot of the work, roles, and skills that have shaped my craft.
            </p>
            <div className="mt-10 space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.year}</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-950">{item.title}</h3>
                    </div>
                    <p className="text-sm font-medium text-slate-600">{item.company}</p>
                  </div>
                  <p className="mt-4 text-slate-700 leading-7">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200/60"
          >
            <div className="flex flex-col gap-6">
              <div>
                <span className="tag">Skillset</span>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">Core strengths</h2>
                <p className="mt-4 text-slate-700 leading-7">
                  A modern stack, polished motion, and a strong sense of digital storytelling.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="tag bg-slate-100 text-slate-900 border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-950">Contact</h3>
                <p className="mt-4 text-slate-700 leading-7">
                  Want to work together or see the full resume? Send a note and I&apos;ll reply fast.
                </p>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <a
                    href="mailto:atulm1341@gmail.com"
                    className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-left transition hover:shadow-lg hover:shadow-slate-200"
                  >
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
                    <p className="mt-2 font-semibold text-slate-950">atulm1341@gmail.com</p>
                  </a>
                  <a
                    href="tel:9839468684"
                    className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-left transition hover:shadow-lg hover:shadow-slate-200"
                  >
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Phone</p>
                    <p className="mt-2 font-semibold text-slate-950">9839468684</p>
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-950">Recent projects</h3>
                <div className="grid gap-4 mt-6">
                  {projects.map((project) => (
                    <div key={project.title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 pb-20 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Project</p>
                      <h4 className="mt-2 text-lg font-semibold text-slate-950">{project.title}</h4>
                      <p className="mt-3 text-slate-700 leading-6">{project.subtitle}</p>
                      <div className="pointer-events-none absolute inset-x-5 bottom-5 flex translate-y-6 justify-center gap-3 opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="pointer-events-auto rounded-full border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
                          >
                            Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="pointer-events-auto rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                          >
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
