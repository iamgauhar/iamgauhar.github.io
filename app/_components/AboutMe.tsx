'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-16 slide-up-and-fade">
                    I focus on building production-ready solutions that are
                    scalable, maintainable, and impactful — from smooth frontend
                    interfaces to solid backend systems.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I'm Mohammad Gauhar.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[550px]">
                            <p className="slide-up-and-fade">
                                I'm Full-Stack Web Developer with 1+ year of
                                professional experience, passionate about
                                turning ideas into creative, scalable, and
                                high-performing web solutions. While I work
                                across the stack, my strength lies in crafting
                                intuitive and responsive frontend experiences
                                using React.js and Tailwind CSS.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I focus on building applications that are not
                                only visually polished but also accessible,
                                performant, and aligned with real user and
                                business needs. Whether it's designing clean UI
                                components or developing robust backend APIs
                                with Node.js and MongoDB, I strive to deliver
                                solutions that are both elegant and effective.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
