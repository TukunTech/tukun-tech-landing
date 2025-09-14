document.addEventListener('DOMContentLoaded', () => {
  const serviceCopy = {
    atencion: {
      title: 'Atención médica',
      text: 'Monitoreo desde cualquer lugar! Nuestro diseño compacto y trasportable lo hace un perfecto acompañante.'
    },
    disponibilidad: {
      title: 'Disponibilidad',
      text: 'Sistema con tiempos de respuesta rápidos ante cualquier anomalía. Contamos con comunicación directa con ambulancias.'
    },
    monitoreo: {
      title: 'Monitoreo',
      text: 'Guardamos los signos vitales para tener un hisotrial el cual permita tener un seguimiento a tu médico.'
    },
    cardiaca: {
      title: 'Salud cardíaca',
      text: 'Consulta tus datos en tiempo real desde el dispositivo de tu preferencia, contamos con soporte en Web y Andrioid. '
    },
    oxigeno: {
      title: 'Oxígeno',
      text: 'Control de saturación de oxígeno en tiempo real.'
    },
    reportes: {
      title: 'Reportes',
      text: 'Informes descargables y compartibles con tu especialista.'
    }
  };

  const icons     = document.querySelectorAll('.services-icons li');
  const overlay   = document.querySelector('.device-overlay');
  const closeBtn  = document.querySelector('.device-close');
  const deviceWrap= document.querySelector('.device-wrap');
  const titleEl   = document.querySelector('.device-title');
  const textEl    = document.querySelector('.device-text');

  if (overlay && titleEl && textEl) {
    function openOverlay(key) {
      const data = serviceCopy[key];
      if (!data) return;
      titleEl.textContent = data.title;
      textEl.textContent  = data.text;
      overlay.setAttribute('open', '');
      overlay.setAttribute('aria-hidden', 'false');
      closeBtn?.focus();
    }

    function closeOverlay() {
      overlay.removeAttribute('open');
      overlay.setAttribute('aria-hidden', 'true');
    }

    icons.forEach(li => {
      li.addEventListener('click', () => {
        icons.forEach(el => {
          el.classList.remove('is-active');
          el.removeAttribute('aria-selected');
        });
        li.classList.add('is-active');
        li.setAttribute('aria-selected', 'true');
        const key = li.getAttribute('data-service');
        openOverlay(key);
      });
    });

    closeBtn?.addEventListener('click', closeOverlay);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.hasAttribute('open')) closeOverlay();
    });

    deviceWrap?.addEventListener('click', (e) => {
      if (overlay.hasAttribute('open') && !overlay.contains(e.target)) closeOverlay();
    });
  }

  document.querySelectorAll('[data-stagger]').forEach(container => {
    const sel = container.getAttribute('data-stagger');
    container.querySelectorAll(sel).forEach((el, i) => {
      if (!el.hasAttribute('data-animate')) el.setAttribute('data-animate', 'up');
      el.style.transitionDelay = `${Math.min(i * 90, 450)}ms`;
    });
  });

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', ev => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);

      if (target) {
        ev.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${id}`);
      }
    });
  });
});
