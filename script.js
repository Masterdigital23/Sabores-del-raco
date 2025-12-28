// ---------- CAMBIO DE SECCIONES ----------
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const heroButtons = document.querySelectorAll('[data-go]');

function mostrarSeccion(id) {
  sections.forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === id);
  });

  // 🔹 Actualizar hash en la URL (para que se vea /#menu, /#delivery, etc.)
  if (history.pushState) {
    history.pushState(null, '', `#${id}`);
  } else {
    window.location.hash = `#${id}`;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Links del navbar
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.dataset.section;
        if (target) mostrarSeccion(target);
    });
});

// Botones de inicio ("Ver carta", "Pedir delivery")
heroButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.go;
        if (target) mostrarSeccion(target);
    });
});

// ========== SLIDER AUTOMÁTICO EVENTOS ==========
const slides = document.querySelectorAll('.eventos-slide');
let slideIndex = 0;

function cambiarSlideEventos() {
  if (!slides.length) return;
  slides.forEach(s => s.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

if (slides.length) {
  slides[0].classList.add('active');
  setInterval(cambiarSlideEventos, 4000);
}




// ---------- DATOS DE PRODUCTOS PARA DELIVERY ----------
const platos = [
    // CHURRASCOS / ASS XL (precio único)
    { id: 'churrasco_italiano',  nombre: 'Churrasco italiano XL',  precio: 4500 },
    { id: 'churrasco_chacarero', nombre: 'Churrasco chacarero XL', precio: 4500 },
    { id: 'churrasco_barrosluco', nombre: 'Churrasco barros luco XL', precio: 4500 },
    { id: 'churrasco_americano', nombre: 'Churrasco americano XL', precio: 4500 },
    { id: 'churrasco_pobre',     nombre: 'Churrasco a lo pobre XL', precio: 4500 },
    { id: 'churrasco_brasileño', nombre: 'Churrasco brasileño XL',  precio: 4500 },
    { id: 'churrasco_chemilco',  nombre: 'Churrasco chemilco XL',   precio: 4500 },
    { id: 'churrasco_napolitano',nombre: 'Churrasco napolitano XL', precio: 4500 },
    { id: 'churrasco_campestre', nombre: 'Churrasco campestre XL',  precio: 4500 },
    { id: 'churrasco_campallazo',nombre: 'Churrasco campallazo XL', precio: 4500 },

    // HAMBURGUESAS ARTESANALES
    { id: 'hamb_raco',    nombre: 'Hamburguesa Raco 200g',    precio: 5900 },
    { id: 'hamb_rancia',  nombre: 'Hamburguesa Rancia 200g',  precio: 5900 },
    { id: 'hamb_clasica', nombre: 'Hamburguesa Clásica 200g', precio: 5900 },

    // PROMOS HAMBURGUESAS / CHURRASCOS (2x)
    { id: 'hamb_raco_2x',    nombre: '2x Hamburguesa Raco',    precio: 11000 },
    { id: 'churrasco_xl_2x', nombre: '2x Churrascos / Ass XL', precio: 8800 },

    // VIENESAS / COMPLETOS XL
    { id: 'hotdog_xl',   nombre: 'Hotdog XL',   precio: 1500 },
    { id: 'italiano_xl', nombre: 'Italiano XL', precio: 2500 },
    { id: 'completo_xl', nombre: 'Completo XL', precio: 2500 },
    { id: 'dinamico_xl', nombre: 'Dinámico XL', precio: 2500 },

    // PAPAS FRITAS
    { id: 'papas_chica',    nombre: 'Papas fritas chica',    precio: 3000 },
    { id: 'papas_mediana',  nombre: 'Papas fritas mediana',  precio: 5000 },
    { id: 'papas_familiar', nombre: 'Papas fritas familiar', precio: 8000 },

    // SALCHIPAPAS
    { id: 'salchi_chica',    nombre: 'Salchipapas chica',    precio: 3900 },
    { id: 'salchi_mediana',  nombre: 'Salchipapas mediana',  precio: 6900 },
    { id: 'salchi_familiar', nombre: 'Salchipapas familiar', precio: 9000 },

    // PAPAS SUPREMAS
    { id: 'suprema_tocino_ind', nombre: 'Papas suprema tocino individual',      precio: 6000 },
    { id: 'suprema_champi_ind', nombre: 'Papas suprema champiñón individual',   precio: 6000 },
    { id: 'suprema_trad_ind',   nombre: 'Papas suprema tradicional individual', precio: 6000 },
    { id: 'suprema_tocino_2',   nombre: 'Papas suprema tocino para 2',          precio: 9500 },
    { id: 'suprema_champi_2',   nombre: 'Papas suprema champiñón para 2',       precio: 9500 },
    { id: 'suprema_trad_2',     nombre: 'Papas suprema tradicional para 2',     precio: 9500 },
    { id: 'suprema_tocino_fam', nombre: 'Papas suprema tocino familiar',        precio: 15000 },
    { id: 'suprema_champi_fam', nombre: 'Papas suprema champiñón familiar',     precio: 15000 },
    { id: 'suprema_trad_fam',   nombre: 'Papas suprema tradicional familiar',   precio: 15000 },

    // CHORRILLANAS
    { id: 'chorrillana_ind', nombre: 'Chorrillana individual', precio: 6000 },
    { id: 'chorrillana_2',   nombre: 'Chorrillana para 2',    precio: 9500 },
    { id: 'chorrillana_fam', nombre: 'Chorrillana familiar',  precio: 15000 },
];

// ---------- BEBIDAS ----------
const bebidas = [
    { id: 'bebida_express', nombre: 'Bebida express',         precio: 800  },
    { id: 'lata',           nombre: 'Bebida en lata',         precio: 1500 },
    { id: 'ret_125',        nombre: 'Bebida retornable 1,25L',precio: 2000 },
    { id: 'lemon',          nombre: 'Limonada Lemon',         precio: 1500 },
    { id: 'agua_gas',       nombre: 'Agua con gas',           precio: 1000 },
    { id: 'agua_sin',       nombre: 'Agua sin gas',           precio: 1000 }
];

// ---------- PINTAR OPCIONES EN DELIVERY ----------
const contPlatos  = document.getElementById('platos-delivery');
const contBebidas = document.getElementById('bebidas-delivery');

function crearCheckbox(item, grupo) {
    const wrapper = document.createElement('label');
    wrapper.style.display = 'block';
    wrapper.style.marginBottom = '6px';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.dataset.grupo  = grupo;
    input.value          = item.id;
    input.dataset.nombre = item.nombre;
    input.dataset.precio = item.precio;

    const texto = document.createTextNode(
        ` ${item.nombre} - $${item.precio.toLocaleString('es-CL')}`
    );

    wrapper.appendChild(input);
    wrapper.appendChild(texto);
    return wrapper;
}

if (contPlatos && contBebidas) {
    platos.forEach(p => contPlatos.appendChild(crearCheckbox(p, 'plato')));
    bebidas.forEach(b => contBebidas.appendChild(crearCheckbox(b, 'bebida')));
}

// ---------- CÁLCULO DE TOTAL ----------
const totalDisplay = document.getElementById('total-display');

function calcularTotal() {
    let total = 0;
    document.querySelectorAll('#delivery input[type="checkbox"]:checked')
        .forEach(chk => {
            total += Number(chk.dataset.precio || 0);
        });
    if (totalDisplay) {
        totalDisplay.textContent = `$${total.toLocaleString('es-CL')}`;
    }
}

document.addEventListener('change', e => {
    if (e.target.matches('#delivery input[type="checkbox"]')) {
        calcularTotal();
    }
});

// ---------- ENVÍO A WHATSAPP (JEFA) ----------
const btnWhatsapp = document.getElementById('btn-whatsapp');

if (btnWhatsapp) {
    btnWhatsapp.addEventListener('click', () => {
        const nombre    = document.getElementById('nombre')?.value.trim()    || '';
        const telefono  = document.getElementById('telefono')?.value.trim()  || '';
        const direccion = document.getElementById('direccion')?.value.trim() || '';
        const notas     = document.getElementById('notas')?.value.trim()     || '';

        if (!nombre || !telefono || !direccion) {
            alert('Por favor completa nombre, teléfono y dirección.');
            return;
        }

        const seleccionPlatos  = [];
        const seleccionBebidas = [];

        document.querySelectorAll('#delivery input[type="checkbox"]:checked')
            .forEach(chk => {
                const linea = `${chk.dataset.nombre} ($${Number(chk.dataset.precio).toLocaleString('es-CL')})`;
                if (chk.dataset.grupo === 'plato') {
                    seleccionPlatos.push(linea);
                } else {
                    seleccionBebidas.push(linea);
                }
            });

        if (seleccionPlatos.length === 0 && seleccionBebidas.length === 0) {
            alert('Selecciona al menos un plato o bebida.');
            return;
        }

        const totalTexto = totalDisplay ? totalDisplay.textContent : '$0';
        let mensaje = `Hola Sabores del Raco XL!%0AQuiero hacer un pedido delivery:%0A%0A`;
        mensaje += `👤 Nombre: ${nombre}%0A📱 Teléfono: ${telefono}%0A📍 Dirección: ${direccion}%0A%0A`;

        if (seleccionPlatos.length) {
            mensaje += `🍔 Platos:%0A- ${seleccionPlatos.join('%0A- ')}%0A%0A`;
        }
        if (seleccionBebidas.length) {
            mensaje += `🥤 Bebidas:%0A- ${seleccionBebidas.join('%0A- ')}%0A%0A`;
        }

        if (notas) {
            mensaje += `📝 Notas: ${notas}%0A%0A`;
        }

        // 🔹 Detalle especial para colaciones del día
        const detalleColacion = document.getElementById('detalle-colacion')?.value.trim() || '';
        if (detalleColacion) {
            mensaje += `🍽️ Detalle colaciones:%0A${detalleColacion.replace(/ /g, '%0A')}%0A%0A`;
        }

        mensaje += `💰 Total estimado: ${totalTexto}%0A`;

        const numeroJefa = '56974876990';
        const url = `https://wa.me/${numeroJefa}?text=${mensaje}`;
        window.open(url, '_blank');
    });
}

// ---------- INICIALIZACIÓN COMPLETA ----------
document.addEventListener('DOMContentLoaded', () => {
  // Ocultar preloader cuando todo esté listo
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 800); // ajusta el tiempo si quieres más o menos

  // 🔹 lógica de secciones
  const hash = window.location.hash.replace('#', '');
  const inicial = hash || 'inicio';
  mostrarSeccion(inicial);

  
});





    // ========== CONFIGURADOR COLACIONES ==========
    const btnToggleColacion = document.getElementById('toggle-colacion');
    const colacionConfig = document.getElementById('colacion-config');
    const btnAgregarColacion = document.getElementById('btn-agregar-colacion');

    if (btnToggleColacion && colacionConfig) {
        btnToggleColacion.addEventListener('click', () => {
            const expanded = colacionConfig.style.display === 'block';
            colacionConfig.style.display = expanded ? 'none' : 'block';
            btnToggleColacion.textContent = expanded ? '▶' : '▼';
        });
    }

    if (btnAgregarColacion) {
        btnAgregarColacion.addEventListener('click', () => {
            const plato = document.getElementById('colacion-plato')?.value;
            const agregados = Array.from(document.querySelectorAll('input[name="colacion-agregado"]:checked')).map(cb => cb.value);
            const ensaladas = Array.from(document.querySelectorAll('input[name="colacion-ensalada"]:checked')).map(cb => cb.value);
            const contador = document.getElementById('contador-agregados');
            
            if (!plato) {
                alert('⚠️ Selecciona el plato principal');
                return;
            }
            if (agregados.length !== 2) {
                contador.style.color = '#ef4444';
                contador.innerHTML = `❌ Elige <strong>EXACTAMENTE 2 agregados</strong> (${agregados.length}/2)`;
                setTimeout(() => {
                    contador.style.color = '#facc15';
                    contador.innerHTML = `Agregados: ${agregados.length}/2`;
                }, 3000);
                return;
            }

            // ✅ FORMATO MEJORADO
            const platoNombre = plato.charAt(0).toUpperCase() + plato.slice(1).replace(/-/g, ' ');
            const ensaladaNombre = ensaladas.map(e => e.charAt(0).toUpperCase() + e.slice(1).replace(/-/g, ' ')).join(', ') || 'Sin ensalada';
    
            const detalle = `${platoNombre} + ${agregados.map(a => a.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())).join(', ')} + ${ensaladaNombre}`;
            
            const textarea = document.getElementById('detalle-colacion');
            if (textarea) {
                textarea.value += (textarea.value ? '\n' : '') + `• ${detalle}`;
                textarea.scrollTop = textarea.scrollHeight;
            }
            
            // ✅ SUMAR COLACIÓN AL TOTAL AUTOMÁTICO
            const colacionCheckbox = document.createElement('input');
            colacionCheckbox.type = 'checkbox';
            colacionCheckbox.id = `colacion_${Date.now()}`; // ID único por cada colación
            colacionCheckbox.dataset.nombre = 'Colación del día (personalizada)';
            colacionCheckbox.dataset.precio = 6000;
            colacionCheckbox.dataset.grupo = 'plato';
            colacionCheckbox.checked = true;
            colacionCheckbox.style.display = 'none'; // Invisible pero suma

            document.getElementById('platos-delivery')?.appendChild(colacionCheckbox);
            calcularTotal(); // Actualiza total INMEDIATAMENTE

            // Reset form + feedback visual
            document.getElementById('colacion-plato').value = '';
            document.querySelectorAll('input[name="colacion-agregado"], input[name="colacion-ensalada"]').forEach(cb => cb.checked = false);
            if (contador) {
                contador.innerHTML = '✅ Colación agregada | Agregados: 0/2';
                contador.style.color = '#22c55e';
            }
            
            alert('✅ Colación agregada al detalle del pedido');
        });
    }

    // CONTADOR + BLOQUEO AUTOMÁTICO (2 agregados máximo)
    document.querySelectorAll('input[name="colacion-agregado"]').forEach(cb => {
        cb.addEventListener('change', () => {
            const checked = document.querySelectorAll('input[name="colacion-agregado"]:checked');
            const contador = document.getElementById('contador-agregados');
            
            if (checked.length > 2) {
                // DESMARCAR exceso automáticamente
                checked[2].checked = false;
                if (contador) {
                    contador.innerHTML = '❌ Máximo 2 agregados';
                    contador.style.color = '#ef4444';
                    setTimeout(() => {
                        contador.innerHTML = `Agregados: 2/2`;
                        contador.style.color = '#22c55e';
                    }, 2000);
                }
                return;
            }
            
            if (contador) {
                contador.innerHTML = `Agregados: ${checked.length}/2`;
                contador.style.color = checked.length === 2 ? '#22c55e' : '#facc15';
            }
        });
    });
