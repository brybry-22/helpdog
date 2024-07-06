const dogImage = document.getElementById('dogImage');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    const offsetX = mouseX / window.innerWidth - 0.5;
    const offsetY = mouseY / window.innerHeight - 0.5;

    gsap.to(dogImage, {
        duration: 0.5,
        x: offsetX * 50,
        y: offsetY * 50,
        rotation: offsetX * 10,
        scale: 1 + Math.abs(offsetX * 0.1),
        ease: 'power2.out'
    });
});