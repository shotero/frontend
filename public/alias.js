export const page = {
  state: {
    title: document.title,
    url: window.location.href,
  },
  get: document.querySelector,
  getAll: document.querySelectorAll,
  append: (el, children) => el.append(...children),
  listen: document.addEventListener,
  toggle: (el, className) => el.classList.toggle(className),
  scrollTo: (el) => el.scrollIntoView({ behavior: 'smooth' }),
  create: (html) => {
    return Object.assign(document.createElement('template'), {
      innerHTML: html.trim(),
    }).content;
  },
};

export const form = {
  validate: (form) => form.checkValidity(),
  getValues: (form) => {
    const data = new FormData(form);
    return Object.fromEntries(data);
  },
};
