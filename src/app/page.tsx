"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {Header} from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import atul2Image from "@/assets/atul-2.png";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker/>
      <ProductShowcase/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-[280px] flex-col items-start rounded-[32px] border border-slate-200 bg-white/95 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl md:bottom-6 md:left-auto md:right-6 md:max-w-[280px]"
      >
        <Link href="/about" className="group flex w-full items-center gap-3">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image src={atul2Image} alt="The Developer" fill className="object-cover" />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">The Developer</p>
            <p className="mt-1 text-base font-semibold text-slate-950 transition group-hover:text-black">Visit Atul's Portfolio</p>
          </div>
        </Link>
      </motion.div>
    </>
  ) 
}
