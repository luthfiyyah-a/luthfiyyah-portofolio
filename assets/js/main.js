(function () {
    if (!('IntersectionObserver' in window)) {
        document.documentElement.classList.remove('js');
        return;
    }

    // Section muncul halus, sekali saja.
    var reveal = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(function (el) { reveal.observe(el); });

    // Scroll-spy: tandai link nav untuk section yang melewati garis ~35% tinggi layar.
    var links = {};
    document.querySelectorAll('.nav-link').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            Object.keys(links).forEach(function (id) {
                links[id].classList.toggle('is-active', id === e.target.id);
            });
        });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(links).forEach(function (id) {
        var s = document.getElementById(id);
        if (s) spy.observe(s);
    });
})();

// Cadangan untuk browser lama: hanya satu entri pengalaman terbuka (browser baru sudah ditangani atribut name="experience").
(function () {
    var items = document.querySelectorAll('details[name="experience"]');
    items.forEach(function (d) {
        d.addEventListener('toggle', function () {
            if (!d.open) return;
            items.forEach(function (o) { if (o !== d) o.open = false; });
        });
    });
})();
