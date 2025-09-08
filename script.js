 const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    hamburger.addEventListener('click', () => {
      overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });


window.onload = function() {
  document.querySelector('.about').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.about').style.transition = 'opacity 1s';
    document.querySelector('.about').style.opacity = 1;
  }, 300);
};
window.onload = function() {
  document.querySelector('.header').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.header').style.transition = 'opacity 1s';
    document.querySelector('.header').style.opacity = 1;
  }, 300);
};
window.onload = function() {
  document.querySelector('.hero').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.hero').style.transition = 'opacity 1s';
    document.querySelector('.hero').style.opacity = 1;
  }, 300);
};

// Reveal boxes with animation when section loads
window.addEventListener("DOMContentLoaded", () => {
  const skillBoxes = document.querySelectorAll('.skill-box');
  skillBoxes.forEach((box, i) => {
    setTimeout(() => {
      box.classList.add('visible');
    }, 250 + i * 180); // Staggered fade-in
  });

  // Animate skill bar fill on load
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.style.width = percent + "%";
    });
  }, 800);
});

// Bar grows on hover, with glow
document.querySelectorAll('.skill-box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    const bar = box.querySelector('.skill-bar-fill');
    bar.style.boxShadow = "0 0 20px #fa2323";
    bar.style.transition = "width 1.3s cubic-bezier(.32,2,.55,.27), box-shadow 0.4s";
  });
  box.addEventListener('mouseleave', () => {
    const bar = box.querySelector('.skill-bar-fill');
    bar.style.boxShadow = "0 0 11px #e6000070";
    bar.style.transition = "width 1.2s cubic-bezier(.4,.77,.26,1.16), box-shadow 0.4s";
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.service-card').forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, 200 + i * 230);
  });
});


window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px) scale(0.98)";
    setTimeout(() => {
      card.style.transition = "transform 0.7s cubic-bezier(.32,2,.55,.27), opacity 0.68s";
      card.style.opacity = 1;
      card.style.transform = "translateY(0) scale(1)";
    }, 250 + i * 120);
  });
});