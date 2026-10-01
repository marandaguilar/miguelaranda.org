(() => {
  const bar = (width = '65%', tiny = false) => `<span class="sk-bar${tiny ? ' tiny' : ''}" style="--w:${width}"></span>`;
  const head = title => `<div class="mock-head"><span class="mock-label">${title}</span>${bar('20%', true)}</div>`;
  const card = () => `<div class="sk-card"><span class="sk-photo"></span>${bar()}${bar('40%', true)}</div>`;
  const inventoryRow = (qty, low = false) => `<div class="inventory-row"><span class="sk-photo"></span>${bar('70%')}<span class="stock-pill${low ? ' low' : ''}">${qty}</span></div>`;

  const samples = {
    catalogo: () => `<div class="mock">${head('Catálogo')}<div class="mock-body catalog-grid">${card()}${card()}${card()}</div></div>`,
    qr: () => `<div class="mock">${head('Menú con QR')}<div class="mock-body qr-layout"><div class="qr-code"></div><div class="qr-menu">${bar('75%')}<div class="sk-card">${bar('80%')}${bar('45%', true)}</div><div class="sk-card">${bar('70%')}${bar('50%', true)}</div></div></div></div>`,
    tienda: () => `<div class="mock">${head('Tienda en línea')}<div class="mock-body store-layout"><div class="store-products">${card()}${card()}</div><div class="sk-card store-cart"><span class="mock-label">Pedido</span>${bar('85%')}${bar('55%', true)}<span class="sk-action"></span></div></div></div>`,
    mapa: () => `<div class="mock">${head('Perfil del negocio')}<div class="mock-body map-layout"><div class="map-view"></div><div class="sk-card map-details"><span class="mock-label">Tu negocio</span>${bar('85%')}${bar('60%', true)}${bar('75%', true)}<span class="sk-action"></span></div></div></div>`,
    inventario: () => `<div class="mock">${head('Inventario')}<div class="mock-body inventory-layout"><div class="inventory-table">${inventoryRow('24')}${inventoryRow('12')}${inventoryRow('5', true)}</div><div class="inventory-side"><div class="sk-card">${bar('75%', true)}<strong>41</strong></div><div class="sk-card">${bar('65%', true)}<strong>1 bajo</strong></div></div></div></div>`,
    citas: () => `<div class="mock">${head('Agenda')}<div class="mock-body appointment-layout"><div class="calendar"><span class="mock-label">Octubre</span><div class="calendar-grid">${Array.from({length:28}, () => '<span></span>').join('')}</div></div><div class="appointments"><div class="sk-card"><span class="mock-label">09:00</span>${bar('70%', true)}</div><div class="sk-card"><span class="mock-label">11:30</span>${bar('55%', true)}</div><div class="sk-card"><span class="mock-label">16:00</span>${bar('65%', true)}</div></div></div></div>`,
    sistemas: () => `<div class="mock">${head('Panel de trabajo')}<div class="mock-body dashboard-layout"><div class="dashboard-metrics"><div class="sk-card">${bar('70%', true)}<strong>24</strong></div><div class="sk-card">${bar('70%', true)}<strong>08</strong></div><div class="sk-card">${bar('70%', true)}<strong>32</strong></div></div><div class="dashboard-rows">${inventoryRow('En curso')}${inventoryRow('Completado')}</div></div></div>`,
    apps: () => `<div class="mock">${head('App móvil')}<div class="mock-body phone-layout"><div class="phone">${bar('45%', true)}<span class="sk-photo"></span>${bar('85%')}${bar('60%', true)}</div><div class="phone-side">${bar('80%')}${bar('65%', true)}<div class="sk-card">${bar('85%')}${bar('55%', true)}</div><div class="sk-card">${bar('70%')}${bar('45%', true)}</div></div></div></div>`
  };

  const pos = { tab:'vender', count:2, total:95, paid:false, tickets:2, lastTotal:95 };
  const posTabs = [['vender','Vender'],['productos','Productos'],['pedidos','Pedidos'],['tickets','Tickets'],['resumen','Resumen']];
  function posBody() {
    if (pos.tab === 'vender') {
      if (pos.paid) return `<strong>Venta cobrada</strong><div class="mini-pos-list"><div><span>Ticket generado</span><strong>$${pos.lastTotal}</strong></div><button type="button" data-pos-new="1">Nueva venta <span>→</span></button></div>`;
      return `<strong>Vender</strong><div class="mini-pos-sale"><div class="mini-pos-products"><button type="button" data-pos-add="35" aria-label="Agregar producto de $35"><span class="sk-photo"></span>${bar('75%', true)}<small>$35 +</small></button><button type="button" data-pos-add="60" aria-label="Agregar producto de $60"><span class="sk-photo"></span>${bar('70%', true)}<small>$60 +</small></button></div><div class="mini-pos-order"><strong>Pedido · ${pos.count}</strong>${bar('85%')}${bar('55%', true)}<strong>Total $${pos.total}</strong><button type="button" class="mock-blue" data-pos-pay="1" ${pos.total ? '' : 'disabled'}>Cobrar</button></div></div>`;
    }
    if (pos.tab === 'productos') return `<strong>Productos</strong><div class="mini-pos-list"><div><span>${bar('60%')}</span><strong>$35</strong></div><div><span>${bar('65%')}</span><strong>$60</strong></div><div><span>${bar('55%')}</span><strong>$25</strong></div></div>`;
    if (pos.tab === 'pedidos') return `<strong>Pedidos</strong><div class="mini-pos-list"><button type="button" data-pos-order="80"><span>Pedido #103</span><strong>Pendiente · $80</strong></button><button type="button" data-pos-order="120"><span>Pedido #104</span><strong>Pendiente · $120</strong></button></div>`;
    if (pos.tab === 'tickets') return `<strong>Tickets</strong><div class="mini-pos-list"><div><span>Último ticket</span><strong>$${pos.lastTotal}</strong></div><div><span>Ticket #102</span><strong>$68</strong></div><div><span>Tickets generados</span><strong>${pos.tickets}</strong></div></div>`;
    return `<strong>Resumen</strong><div class="mini-pos-summary"><div class="sk-card">Tickets<strong>${pos.tickets}</strong>${bar('65%', true)}</div><div class="sk-card">Última venta<strong>$${pos.lastTotal}</strong>${bar('55%', true)}</div></div>`;
  }
  function renderPos() {
    return `<div class="mini-pos"><div class="mini-pos-nav" role="group" aria-label="Pantallas del punto de venta">${posTabs.map(([id,label]) => `<button type="button" data-pos-tab="${id}" ${pos.tab === id ? 'aria-current="page"' : ''}>${label}</button>`).join('')}</div><div class="mini-pos-body">${posBody()}</div></div>`;
  }

  document.querySelectorAll('.service-group').forEach(group => {
    const buttons = [...group.querySelectorAll('[data-sample]')];
    const screen = group.querySelector('[data-screen]');
    const caption = group.querySelector('[data-caption]');
    const counter = group.querySelector('[data-counter]');
    let current = 0;
    let timer;
    function show(index, fade = true) {
      current = (index + buttons.length) % buttons.length;
      const selected = buttons[current];
      buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === current)));
      caption.textContent = selected.querySelector('strong').textContent;
      counter.textContent = `${current + 1} / ${buttons.length}`;
      clearTimeout(timer);
      if (!fade || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        screen.innerHTML = selected.dataset.sample === 'pos' ? renderPos() : samples[selected.dataset.sample]();
        screen.classList.remove('is-changing');
        return;
      }
      screen.classList.add('is-changing');
      timer = setTimeout(() => {
        screen.innerHTML = selected.dataset.sample === 'pos' ? renderPos() : samples[selected.dataset.sample]();
        screen.classList.remove('is-changing');
      }, 95);
    }
    buttons.forEach((button, index) => button.addEventListener('click', () => show(index)));
    group.querySelector('[data-prev]').addEventListener('click', () => show(current - 1));
    group.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
    screen.addEventListener('click', event => {
      const control = event.target.closest('button');
      if (!control) return;
      if (control.dataset.posTab) pos.tab = control.dataset.posTab;
      if (control.dataset.posAdd) { pos.count++; pos.total += Number(control.dataset.posAdd); }
      if (control.dataset.posPay && pos.total) { pos.paid = true; pos.tickets++; pos.lastTotal = pos.total; pos.tab = 'tickets'; }
      if (control.dataset.posNew) { pos.count = 0; pos.total = 0; pos.paid = false; pos.tab = 'vender'; }
      if (control.dataset.posOrder) { pos.count = 2; pos.total = Number(control.dataset.posOrder); pos.paid = false; pos.tab = 'vender'; }
      screen.innerHTML = renderPos();
    });
    show(0, false);
    if (group.dataset.group === 'control' && location.hash === '#poss') show(0, false);
    window.addEventListener('hashchange', () => {
      if (group.dataset.group === 'control' && location.hash === '#poss') show(0, false);
    });
  });
})();
