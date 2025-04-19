
window.onload = () => {
  const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

  // Dance animation (slow side-to-side)
  tl.to("#dancers", {
    duration: 30,
    x: 20,
    yoyo: true,
    repeat: 1
  })

  // Flower handover
  .to("#flower", { opacity: 1, duration: 2, delay: 1 })

  // Zoom out and show text
  .to("#dance-scene", { scale: 0.8, duration: 2, transformOrigin: "center" })
  .to(".final-text", { opacity: 1, scale: 1.2, duration: 3 });
};
