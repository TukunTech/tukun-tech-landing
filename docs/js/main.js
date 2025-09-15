document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    es: {
      brand: "TUKUNTECH",
      "nav.product": "PRODUCTO",
      "nav.plans": "PLANES",
      "nav.about": "NOSOTROS",
      "nav.home": "INICIO",

      "hero.title": "CUIDA LO QUE <br> MÁS TE IMPORTA",
      "hero.subtitle": "Cuida tu salud con la mejor <br> tecnología y de la manera más fácil.",
      "hero.cta.discover": "DESCUBRE MÁS",
      "hero.cta.contact": "CONTACTAR »",
      "hero.proof.title": "10K DOWNLOAD",
      "hero.proof.text": "Más de 10mil usuarios confían y trabajan con nuestra aplicación",

      "services.title": "NUESTROS<br>SERVICIOS",
      "services.note": "Pensamos en ti para brindar la mejor calidad de servicio.",

      "plans.title": "PLANES",
      "plans.monthly": "PLAN MENSUAL",
      "plans.annual": "PLAN ANUAL",

      "plans.individual.name": "PLAN<br>INDIVIDUAL",
      "plans.individual.desc": "Ideal para usuarios que desean un control personal de su estado de salud.",
      "plans.individual.f1": "Acceso a 1 dispositivo",
      "plans.individual.f2": "Monitoreo en tiempo real",
      "plans.individual.f3": "Alertas inmediatas",
      "plans.individual.f4": "Historial constante",

      "plans.family.name": "PLAN<br>FAMILIAR",
      "plans.family.desc": "Ideal para familias que desean acompañar y monitorear de forma preventiva a sus seres queridos.",
      "plans.family.f1": "Acceso hasta 4 dispositivos",
      "plans.family.f2": "Monitoreo en tiempo real",
      "plans.family.f3": "Alertas inmediatas",
      "plans.family.f4": "Historial constante",

      "mv.mission.title": "MISION",
      "mv.mission.text": "Ser la solución líder en monitoreo de salud basada en IoT, transformando la forma en que se brinda atención médica al brindar una vigilancia continua, precisa y proactiva que permita a los profesionales de la salud salvar vidas, mejorar la calidad de la atención y reducir la dependencia de los métodos tradicionales en todo el mundo.",
      "mv.vision.title": "VISION",
      "mv.vision.text": "Ser la solución líder en monitoreo de salud basada en IoT, transformando la forma en que se brinda atención médica al brindar una vigilancia continua, precisa y proactiva que permita a los profesionales de la salud salvar vidas, mejorar la calidad de la atención y reducir la dependencia de los métodos tradicionales en todo el mundo.",

      "team.title": "NUESTRO EQUIPO",
      "team.adriana.bio": "Soy Adriana Palomares, tengo 22 años y soy estudiante de Ingeniería de Software en la UPC. Disfruto explorando nuevas tecnologías, especialmente la programación. También me apasionan los animales, en especial los perros.",
      "team.erick.bio": "Estoy en séptimo ciclo de Ingeniería de Software. Me gustan los videojuegos e ir al gimnasio. Soy responsable, centrado y con muchas ganas de aprender sobre IA y programación web.",
      "team.fabio.bio": "Estudiante de Ingeniería de Software. Me considero proactivo, con buenas habilidades de trabajo en equipo y liderazgo. Disfruto trabajando en equipo para ofrecer calidad.",
      "team.oscar.bio": "Estudiante de Ingeniería de Software con enfoque proactivo en la resolución de problemas. Experiencia con C++, HTML, CSS, JavaScript y Python en diversos proyectos tecnológicos.",
      "team.rafael.bio": "Séptimo ciclo de Ingeniería de Software. Me gustan los videojuegos y el gimnasio. Soy centrado, responsable y me interesa aprender IA y tecnologías web.",

      "video.title": "VIDEO<br>ABOUT<br>THE TEAM",
      "video.copy": "Nuestro equipo en TukunTech está compuesto por personas dedicadas y apasionadas que trabajan juntas para garantizar el éxito de nuestra misión. En este video, conocerá a las personas detrás de nuestras innovadoras soluciones de monitoreo de la salud y aprenderá cómo nos esforzamos por marcar la diferencia en la atención médica con tecnología de vanguardia y trabajo en equipo.",

      "footer.contact": "CONTÁCTANOS",
      "footer.signup": "Inscripción",
      "footer.faq": "Preguntas Frecuentes",
      "footer.rights": "Todos los derechos reservados."
    },
    en: {
      brand: "TUKUNTECH",
      "nav.product": "PRODUCT",
      "nav.plans": "PLANS",
      "nav.about": "ABOUT",
      "nav.home": "HOME",

      "hero.title": "PROTECT WHAT <br> MATTERS MOST",
      "hero.subtitle": "Take care of your health with the best <br> technology, in the simplest way.",
      "hero.cta.discover": "LEARN MORE",
      "hero.cta.contact": "CONTACT »",
      "hero.proof.title": "10K DOWNLOADS",
      "hero.proof.text": "Over 10,000 users trust and work with our app",

      "services.title": "OUR<br>SERVICES",
      "services.note": "We designed everything around you to deliver the best service quality.",

      "plans.title": "PLANS",
      "plans.monthly": "MONTHLY PLAN",
      "plans.annual": "ANNUAL PLAN",

      "plans.individual.name": "INDIVIDUAL<br>PLAN",
      "plans.individual.desc": "Perfect for users who want personal control over their health status.",
      "plans.individual.f1": "Access to 1 device",
      "plans.individual.f2": "Real-time monitoring",
      "plans.individual.f3": "Instant alerts",
      "plans.individual.f4": "Continuous history",

      "plans.family.name": "FAMILY<br>PLAN",
      "plans.family.desc": "Ideal for families to support and monitor loved ones preventively.",
      "plans.family.f1": "Access up to 4 devices",
      "plans.family.f2": "Real-time monitoring",
      "plans.family.f3": "Instant alerts",
      "plans.family.f4": "Continuous history",

      "mv.mission.title": "MISSION",
      "mv.mission.text": "To be the leading IoT-based health monitoring solution, transforming healthcare delivery with continuous, precise and proactive monitoring that enables professionals to save lives, improve care quality and reduce reliance on traditional methods worldwide.",
      "mv.vision.title": "VISION",
      "mv.vision.text": "To be the leading IoT-based health monitoring solution, transforming healthcare delivery with continuous, precise and proactive monitoring that enables professionals to save lives, improve care quality and reduce reliance on traditional methods worldwide.",

      "team.title": "OUR TEAM",
      "team.adriana.bio": "I am Adriana Palomares, 22 years old and a Software Engineering student at UPC. I enjoy exploring new technologies, especially programming. I am also passionate about animals, especially dogs.",
      "team.erick.bio": "I am in my seventh semester of Software Engineering. I like video games and going to the gym. I am responsible, focused, and eager to learn about AI and web development.",
      "team.fabio.bio": "Software Engineering student. I consider myself proactive, with good teamwork and leadership skills. I enjoy working in teams to deliver quality results.",
      "team.oscar.bio": "Software Engineering student with a proactive approach to problem solving. Experience with C++, HTML, CSS, JavaScript, and Python in various tech projects.",
      "team.rafael.bio": "Seventh semester Software Engineering student. I enjoy video games and the gym. I am focused, responsible, and interested in learning AI and web technologies.",

      "video.title": "VIDEO<br>ABOUT<br>THE TEAM",
      "video.copy": "Our TukunTech team is made up of dedicated, passionate people working together to ensure our mission’s success. In this video, meet the minds behind our innovative health monitoring solutions and see how we aim to make a difference in healthcare with cutting-edge technology and teamwork.",

      "footer.contact": "CONTACT US",
      "footer.signup": "Sign up",
      "footer.faq": "FAQ",
      "footer.rights": "All rights reserved."
    }
  };

  const servicesCopyI18n = {
    es: {
      atencion: { title: 'Atención médica', text: '¡Monitoreo desde cualquier lugar! Nuestro diseño compacto y transportable lo hace un acompañante perfecto.' },
      disponibilidad: { title: 'Disponibilidad', text: 'Respuestas rápidas ante cualquier anomalía. Comunicación directa con ambulancias.' },
      monitoreo: { title: 'Monitoreo', text: 'Guardamos los signos vitales para tener un historial que permita el seguimiento con tu médico.' },
      cardiaca: { title: 'Salud cardíaca', text: 'Consulta tus datos en tiempo real desde tu dispositivo preferido. Soporte en Web y Android.' },
      oxigeno: { title: 'Oxígeno', text: 'Control de saturación de oxígeno en tiempo real.' },
      reportes: { title: 'Reportes', text: 'Informes descargables y compartibles con tu especialista.' }
    },
    en: {
      atencion: { title: 'Medical care', text: 'Monitor from anywhere! Compact, portable design makes it the perfect companion.' },
      disponibilidad: { title: 'Availability', text: 'Fast response to any anomaly. Direct communication with ambulances.' },
      monitoreo: { title: 'Monitoring', text: 'We store vital signs to build a history that enables your doctor to follow up.' },
      cardiaca: { title: 'Heart health', text: 'View your data in real time on your preferred device. Support on Web and Android.' },
      oxigeno: { title: 'Oxygen', text: 'Real-time oxygen saturation tracking.' },
      reportes: { title: 'Reports', text: 'Downloadable, shareable reports for your specialist.' }
    }
  };

  const DEFAULT_LANG = 'es';
  const saved = localStorage.getItem('lang');
  const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
  const initialLang = (saved || (browserLang === 'es' || browserLang === 'en' ? browserLang : DEFAULT_LANG));

  function applyI18n(lang) {
    document.documentElement.setAttribute('lang', lang);
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      const value = dict?.[key];
      if (value) node.innerHTML = value;
    });

    const btn = document.getElementById('lang-switch');
    if (btn) {
      btn.textContent = lang === 'es' ? 'ESP' : 'EN';
      btn.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
    }

    localStorage.setItem('lang', lang);
  }

  const getServiceCopy = (lang, key) =>
    servicesCopyI18n[lang]?.[key] || servicesCopyI18n[DEFAULT_LANG]?.[key];

  applyI18n(initialLang);

  document.getElementById('lang-switch')?.addEventListener('click', () => {
    const current = localStorage.getItem('lang') || initialLang;
    const next = current === 'es' ? 'en' : 'es';
    applyI18n(next);
  });

  const icons = document.querySelectorAll('.services-icons li');
  const overlay = document.querySelector('.device-overlay');
  const closeBtn = document.querySelector('.device-close');
  const deviceWrap = document.querySelector('.device-wrap');
  const titleEl = document.querySelector('.device-title');
  const textEl = document.querySelector('.device-text');

  function openOverlay(key) {
    if (!overlay || !titleEl || !textEl) return;
    const lang = (localStorage.getItem('lang') || initialLang);
    const data = getServiceCopy(lang, key);
    if (!data) return;
    titleEl.textContent = data.title;
    textEl.textContent = data.text;
    overlay.setAttribute('open', '');
    overlay.setAttribute('aria-hidden', 'false');
    closeBtn?.focus();
  }

  function closeOverlay() {
    if (!overlay) return;
    overlay.removeAttribute('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  if (icons.length && overlay && titleEl && textEl) {
    icons.forEach(li => {
      li.addEventListener('click', () => {
        icons.forEach(el => {
          el.classList.remove('is-active');
          el.removeAttribute('aria-selected');
        });
        li.classList.add('is-active');
        li.setAttribute('aria-selected', 'true');
        const key = li.getAttribute('data-service');
        if (key) openOverlay(key);
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
    if (!sel) return;
    container.querySelectorAll(sel).forEach((el, i) => {
      if (!el.hasAttribute('data-animate')) el.setAttribute('data-animate', 'up');
      el.style.transitionDelay = `${Math.min(i * 90, 450)}ms`;
    });
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('is-visible'));
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', ev => {
      const id = (link.getAttribute('href') || '').slice(1);
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
