import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const FirstVideo = () => {
  const VideoRef = useRef(null);
  useGSAP(() => {
    gsap.set(".first-vd-wrapper", {
      marginTop: "-150vh",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200% top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".hero-section", {
      delay: 0.5 ,
      opacity: 0,
      ease: "power1.inOut",
    });
    tl.to(".first-vd-wrapper", {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });

    VideoRef.current.onloadedmetadata = () => {
      tl.to(
        VideoRef.current,
        {
          currentTime: VideoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);
  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={VideoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd"
        />
      </div>
    </section>
  );
};

export default FirstVideo;
