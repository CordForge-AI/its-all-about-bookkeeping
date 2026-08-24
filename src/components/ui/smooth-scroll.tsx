import { ReactLenis } from "lenis/react";
import React, { forwardRef } from "react";

const SmoothScroll = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <ReactLenis root>
      <div ref={ref}>
        <article>
          <section className="text-sand h-screen w-full bg-teal-950 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#fbf2eb1a_1px,transparent_1px),linear-gradient(to_bottom,#fbf2eb1a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h2 className="2xl:text-7xl text-6xl px-8 font-heading text-center tracking-tight leading-[120%]">
              We Know Exactly What <br /> Your Books Need. Scroll 👇
            </h2>
          </section>

          <section className="bg-sand text-teal-950 grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#357489_1px,transparent_1px),linear-gradient(to_bottom,#357489_1px,transparent_1px)] bg-[size:54px_54px] opacity-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h2 className="2xl:text-7xl text-4xl px-8 font-heading text-center tracking-tight leading-[120%]">
              We Handle the Books.
              <br /> You Handle the Business.
            </h2>
          </section>

          <section className="text-sand h-screen w-full bg-teal-950 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#fbf2eb1a_1px,transparent_1px),linear-gradient(to_bottom,#fbf2eb1a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h2 className="2xl:text-7xl text-5xl px-8 font-heading text-center tracking-tight leading-[120%]">
              Thanks for scrolling.
              <br /> Ready to get started? ☝️
            </h2>
          </section>
        </article>
      </div>
    </ReactLenis>
  );
});

SmoothScroll.displayName = "SmoothScroll";

export default SmoothScroll;
