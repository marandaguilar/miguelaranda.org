# Spec: Portafolio de proyectos en miguelaranda.org

_Actualizada: 2026-11-14_

## Problema

Puede que agencias, colegas o dueños de negocio le pasen proyectos a Miguel. Quien llega al sitio hoy:

- Ve dos socios (Miguel Aranda y Maximiliano Márquez) cuando ahora el sitio es solo de Miguel.
- Ve los servicios antes que el trabajo hecho. Para saber de qué es capaz Miguel hay que bajar dos secciones.
- Ve tres proyectos sin imagen, sin un dato que se recuerde y sin la parte técnica que busca quien sabe del tema.

Las referencias son rowquintero.com (cada proyecto abre con un dato medible) y giovanni-aranda.com/projects (cada proyecto dice qué resuelve). El pedido es: «Solo los proyectos, lo que resuelves».

## Usuarios

| Usuario | Proporción | Qué busca | Qué lo convence |
| --- | --- | --- | --- |
| Dueño de negocio que no sabe de tecnología | Mayoría | Saber si Miguel le resuelve un problema parecido al suyo | Un problema reconocible, lo que se hizo y un resultado concreto, sin tecnicismos |
| Agencia o colega técnico que podría subcontratar | Minoría | Calibrar qué tan capaz es Miguel | La línea de tecnología, el alcance (cuántas apps, idiomas, panel) y que los proyectos existan |

Quien mantiene el contenido es Miguel, editando el HTML a mano.

## Requisitos funcionales

### Identidad: solo Miguel

- **FR-001** Ningún texto visible, atributo (`title`, `aria-label`, `alt`), metadato (`<title>`, `description`, Open Graph) ni enlace (`tel:`, `wa.me`) del sitio contiene «Maximiliano», «Márquez», «Marquez» ni el número 449 512 6933.
- **FR-002** El título de la página y el `og:title` dicen «Miguel Aranda — Sistemas y digitalización».
- **FR-003** La portada no tiene tarjeta de presentación: abre con el titular «Apps, tiendas y sistemas para tu negocio» bajo el vidrio acanalado, los dos botones (WhatsApp y «Ver proyectos») y las pantallas de los proyectos flotando. El nombre de Miguel aparece en el menú y en Sobre mí.
- **FR-004** Todo el texto va en primera persona del singular: «hago», «construí», «cuéntame», «escríbeme». Ninguna frase queda en plural ni en impersonal.
- **FR-005** El cierre y el pie muestran un solo contacto: WhatsApp y llamada al 449 990 2477 y el correo miguel@miguelaranda.org.

### Proyectos primero

- **FR-006** El orden de las secciones es: portada, **Sobre mí**, **Proyectos**, servicios, cómo trabajo, contacto, pie. La portada no se presenta con el nombre («Soy Miguel Aranda»): eso va en Sobre mí, sin foto, en tono profesional para agencias.
- **FR-007** El «Ver más» de la portada lleva a Proyectos. El texto del botón habla de proyectos, por ejemplo «Ver proyectos».
- **FR-008** El menú se queda pegado arriba al bajar y dice, en este orden: Sobre mí, Proyectos, Servicios, Cómo trabajo, Contacto. Resalta la sección actual.
- **FR-009** La sección de servicios se acorta. Cada servicio queda con nombre y una sola frase.
- **FR-010** La sección «Cómo trabajo» conserva sus cinco pasos y sus cuatro promesas: primera plática sin costo, precio cerrado, avances semanales y soporte después de entregar. Cada descripción mide como mucho dos líneas a 1280 px de ancho.

### Ficha de cada proyecto

- **FR-011** Aparecen tres proyectos, en este orden: NoPain, Gamba, HoraMed.
- **FR-011a** Debajo de las tres fichas, un bloque «Otros proyectos» más chico y **sin imagen**, con Vivian (chat con personajes de IA con memoria de largo plazo, en Telegram y web, con modelos locales; Node.js, Ollama, SQLite con búsqueda semántica) y TicketAI (tickets con IA: convierte una descripción en un ticket ordenado y busca tickets parecidos ya resueltos; Spring Boot, Angular, PostgreSQL, MongoDB, RabbitMQ). Cada uno lleva nombre, una línea de qué es, una descripción de 2 o 3 frases y la línea de rol y tecnología. Sin enlace.
- **FR-012** Cada ficha tiene, en este orden:
  1. **Dato destacado**: una frase de 2 a 6 palabras, en tipo grande, con un resultado, un alcance o una restricción. No puede ser un adjetivo («moderno», «rápido»).
  2. **Nombre** del proyecto. Sin etiqueta de estado («En uso», «En pruebas», «En desarrollo»): Miguel la descartó el 2026-11-14.
  3. **El problema**: una o dos frases sobre cómo se hacía antes o qué se perdía, en palabras del dueño del negocio.
  4. **Lo que hice**: dos o tres frases sobre la solución, describiendo qué hace el usuario, no qué tecnología se usó.
  5. **Línea de rol**, según la regla de autoría (RN-002).
  6. **Tecnología**: una línea en letra chica con 3 a 6 tecnologías. Es para el público técnico.
  7. **Enlace** al sitio en vivo, si existe y responde.
  8. **Una foto** (FR-014).
- **FR-013** El contenido de partida de cada ficha es el de esta tabla. Antes de publicar, Miguel confirma o corrige cada dato destacado (RN-005).

| Proyecto | Dato destacado (propuesto) | Problema | Lo que hice | Rol | Tecnología | Enlace |
| --- | --- | --- | --- | --- | --- | --- |
| NoPain | «3 apps, un mismo expediente» | Clínicas de fisioterapia con expedientes en papel. El paciente no sigue su rutina en casa y nadie sabe cómo le fue. | El fisio atiende y receta ejercicios, el paciente hace su rutina en casa y reporta, y la clínica ve todo desde un panel. | «Soy cofundador.» | React Native, Expo, Laravel, React, Inertia | nopain.mx |
| Gamba | «El pedido llega completo» | La tienda recibía los pedidos por WhatsApp en diez mensajes sueltos, con fotos y preguntas de precio. | Catálogo pensado para el celular: el cliente arma su carrito y lo manda completo por WhatsApp, listo para surtir. Por dentro, la tienda lleva su inventario en el mismo sistema. | «Participé en el rediseño de la tienda.» | Next.js, React, Tailwind | Sin enlace (lo pidió Miguel el 2026-11-14) |
| HoraMed | «Avisa hasta que confirmas» | Olvidar una toma de medicina o darte cuenta tarde de que se acabó. Y quien cuida a un familiar no sabe si ya se la tomó. | Escaneas la receta y la app arma los horarios, insiste a la hora de cada toma y te dice cuántos días te quedan de cada medicina. El cuidador sigue todo desde su propia app en el iPad. | «Supervisé el desarrollo y el producto.» | Apps para Android, iPhone y iPad | Sin enlace mientras siga en pruebas |

### Fotos

- **FR-014a** Imágenes acordadas el 2026-11-14: NoPain usa el nuevo inicio de su app para fisioterapeutas en iPad (la próxima cita, la agenda de hoy y los pendientes, con datos ficticios) y, encima, el nuevo inicio de la app del paciente en claro (su rutina del día, la racha y la semana). El celular solo tapa la tarjeta de abajo a la derecha, nunca la agenda. No se usa la pantalla del ejercicio porque el video trae marca de agua de terceros. Gamba muestra su tienda en la computadora, sin celular, y al frente un bidón de 5 L con su logo (foto de producto generada con IA a partir del logo real y de un bidón genérico, recortada sin fondo, WebP de 30 KB o menos). HoraMed muestra solo su app de iPad, rediseñada con HTML y CSS en verde oscuro (fondo verde bosque, acentos esmeralda, sin rellenos pastel) a partir de una captura de Miguel. Los marcos de los dispositivos son delgados, del mismo grosor en los cuatro lados, y ninguna pantalla se recorta. La sección Sobre mí va **sin foto de Miguel**. El vidrio azul con rayas va en la portada; detrás de cada ficha regresa el mismo vidrio, pero muy transparente y sin borde, desvanecido hacia la página, con la luz en el tono del proyecto (azul NoPain, rosa Gamba, verde HoraMed). El contacto cierra sobre fondo oscuro.
- **FR-014** La meta es una foto por ficha: una captura de la pantalla principal del proyecto o una foto del proyecto en uso, con texto alternativo que diga qué se ve («Pantalla del paciente con su rutina del día»).
- **FR-015** Una ficha sin foto se ve completa: el texto ocupa el ancho y no queda un hueco, un marco vacío ni un ícono de imagen rota.
- **FR-016** La portada (la primera pantalla) muestra las pantallas de los proyectos flotando bajo el vidrio. La de HoraMed (iPad) se dibuja con HTML y CSS; arriba del pliegue solo cargan la captura de Gamba y la de la app del paciente de NoPain, de 60 KB o menos cada una. Las imágenes de las fichas se cargan al bajar.
- **FR-017** Las fotos se cargan solo cuando la ficha está por entrar a la pantalla, y cada una se entrega en un tamaño acorde al ancho en que se muestra.

### La spec no se publica

- **FR-018** La carpeta `.docs/` y los archivos internos del repositorio (`README.md`, `.gitignore`) no se sirven en miguelaranda.org. Se listan en `.assetsignore`.

## Cómo se ve el éxito

- [ ] **SC-001** (FR-001) _Dado_ el sitio desplegado, _cuando_ Miguel busca `Maximiliano|Márquez|Marquez|5126933|512 6933|512&nbsp;6933` en `index.html` y en el HTML que devuelve https://miguelaranda.org/, _entonces_ no hay ninguna coincidencia. Lo comprueba Miguel con `grep` y con `curl`.
- [ ] **SC-002** (FR-002) _Dado_ el sitio desplegado, _cuando_ se pega la URL en WhatsApp o en el depurador de Open Graph de Facebook, _entonces_ la vista previa dice «Miguel Aranda — Sistemas y digitalización». Lo comprueba Miguel.
- [ ] **SC-003** (FR-003) _Dado_ un visitante en la portada, _cuando_ la carga en el celular y en la computadora, _entonces_ ve el titular, los dos botones y las pantallas de los proyectos, y en la página no hay tarjeta ni el texto «Gírala». Lo comprueba Miguel a ojo y con `grep Gírala index.html`.
- [ ] **SC-004** (FR-004) _Dado_ el texto visible de la página, _cuando_ Miguel busca las formas en plural (`hacemos|construimos|trabajamos|cuéntanos|escríbenos|te damos|seguimos|nos `), _entonces_ no hay ninguna. Lo comprueba con `grep` y leyendo la página entera.
- [ ] **SC-005** (FR-005) _Dado_ el cierre y el pie, _cuando_ un visitante toca WhatsApp y llamada en el celular, _entonces_ los dos abren el 449 990 2477, y no hay ningún otro número en la página. Lo comprueba Miguel en un teléfono.
- [ ] **SC-006** (FR-006, FR-007) _Dado_ un visitante en la portada, _cuando_ toca «Ver proyectos», _entonces_ la página baja hasta la sección Proyectos, que viene antes que servicios. Lo comprueba Miguel.
- [ ] **SC-007** (FR-008) _Dado_ un visitante que baja por la página, _cuando_ llega a cada sección, _entonces_ el menú muestra Sobre mí, Proyectos, Servicios, Cómo trabajo y Contacto en ese orden y resalta la sección en la que está. Lo comprueba Miguel a 375 px y a 1280 px.
- [ ] **SC-008** (FR-009) _Dado_ la sección de servicios, _cuando_ Miguel la lee, _entonces_ cada servicio tiene nombre y una sola frase. Lo comprueba contando las frases.
- [ ] **SC-009** (FR-010) _Dado_ la sección «Cómo trabajo» a 1280 px, _cuando_ Miguel la revisa, _entonces_ hay cinco pasos, las cuatro promesas siguen ahí y ninguna descripción pasa de dos líneas. Lo comprueba a ojo.
- [ ] **SC-010a** (FR-011a) _Dado_ la sección Proyectos, _cuando_ Miguel baja después de HoraMed, _entonces_ ve «Otros proyectos» con Vivian y TicketAI, sin imágenes ni enlaces, en letra más chica que las fichas. Lo comprueba Miguel en computadora y celular.
- [ ] **SC-010** (FR-011, FR-012) _Dado_ la sección Proyectos, _cuando_ Miguel revisa cada ficha, _entonces_ hay tres fichas en el orden NoPain, Gamba, HoraMed, y cada una tiene sus partes en el orden de FR-012 (el enlace y la foto solo si existen). Lo comprueba con una lista por ficha.
- [ ] **SC-011** (FR-012) _Dado_ el dato destacado de cada ficha, _cuando_ Miguel cuenta las palabras, _entonces_ cada uno tiene de 2 a 6 y nombra un resultado, un alcance o una restricción, no un adjetivo. Lo comprueba Miguel.
- [ ] **SC-012** (FR-012, FR-013) _Dado_ un dueño de negocio que no sabe de tecnología, _cuando_ lee una ficha que elige al azar, _entonces_ puede explicar con sus palabras qué problema se resolvió sin preguntar qué significa algo. Lo comprueba Miguel con una persona no técnica (un familiar o un cliente).
- [ ] **SC-013** (FR-013) _Dado_ el contenido final, _cuando_ Miguel lo revisa antes de publicar, _entonces_ ningún dato dice «por confirmar» y Miguel aprobó cada uno. Lo comprueba con `grep "por confirmar"` en `index.html`.
- [ ] **SC-014** (FR-012) _Dado_ el enlace de cada ficha, _cuando_ se abre, _entonces_ responde con 200 y es el proyecto correcto. Lo comprueba Miguel con `curl -I` y abriéndolo.
- [ ] **SC-015** (FR-014) _Dado_ un lector de pantalla (VoiceOver), _cuando_ llega a una foto, _entonces_ lee un texto que describe lo que se ve, distinto del nombre del proyecto. Lo comprueba Miguel con VoiceOver en iPhone o Mac.
- [ ] **SC-016** (FR-015) _Dado_ una ficha sin foto (o con la foto borrada a propósito para la prueba), _cuando_ se carga la página, _entonces_ la ficha no muestra un hueco ni un ícono roto. Lo comprueba Miguel quitando temporalmente una imagen.
- [ ] **SC-017** (FR-016) _Dado_ la portada a 375×667 y a 1280×800, _cuando_ se carga, _entonces_ la pestaña Network de DevTools descarga a lo mucho dos imágenes (Gamba y la app del paciente de NoPain, de 60 KB o menos cada una) antes de bajar. Lo comprueba Miguel con DevTools.
- [ ] **SC-018** (FR-017) _Dado_ un celular simulado (Lighthouse, móvil), _cuando_ se audita la página, _entonces_ Performance da 90 o más, LCP es de 2.5 s o menos, CLS de 0.1 o menos, y ninguna foto pesa más de 150 KB en su versión más grande. Lo comprueba Miguel con Lighthouse y con el listado de archivos.
- [ ] **SC-019** (FR-018) _Dado_ el sitio desplegado, _cuando_ se piden `https://miguelaranda.org/README.md` y `https://miguelaranda.org/.docs/spec-portafolio-proyectos.md`, _entonces_ los dos responden 404. Se comprueba con `curl` primero con `README.md`, antes de subir `.docs/`: si `README.md` sigue respondiendo 200, `.docs/` no se sube.

## Flujos principales

**Dueño de negocio, desde el celular.** Llega por un enlace en WhatsApp → ve la portada con el titular y las pantallas de los proyectos → toca «Ver proyectos» → lee el dato y el problema de cada ficha → reconoce un problema parecido al suyo → baja hasta Contacto → toca WhatsApp.
- _Error:_ el WhatsApp no está instalado (computadora). `wa.me` abre WhatsApp Web. El teléfono y el correo siguen visibles al lado.

**Agencia o colega técnico, desde la computadora.** Llega por recomendación → va directo a Proyectos → lee el alcance y la línea de tecnología → abre el enlace en vivo de NoPain → vuelve y escribe por correo o por WhatsApp.
- _Error:_ el sitio en vivo no responde. La ficha ya se sostiene sola con la foto y el texto, y el enlace se quita en la siguiente revisión (RN-006).

**Miguel agrega o cambia un proyecto.** Copia una ficha existente en `index.html`, cambia el texto, pone la foto optimizada (RN-004), revisa SC-010 a SC-018 y hace push. Cloudflare Pages publica.

## Reglas de negocio

- **RN-001 Solo Miguel.** El sitio no nombra a ninguna otra persona: ni socios, ni colaboradores, ni compañeros, ni agencias.
- **RN-002 Autoría honesta sin nombres.** Si Miguel no hizo un proyecto él solo, la ficha no lo presenta como si fuera solo suyo:
  - NoPain: «Soy cofundador.»
  - Gamba: una frase que empieza con «Participé en…».
  - HoraMed: la línea dice lo que Miguel hizo (supervisión y producto) y no dice que él lo programó.
- **RN-003 Proyectos excluidos.** No aparecen Bida Rush (ni nada relacionado con Jumex), InmuneFarma ni ningún proyecto de la revista de SDM Robotics.
- **RN-004 Fotos sin datos reales.** Ninguna foto muestra datos de pacientes, clientes, recetas, teléfonos ni correos reales. Las capturas de NoPain y HoraMed se toman con datos de demostración.
- **RN-005 Ningún dato sin confirmar.** Antes de publicar, Miguel confirma cada dato destacado y cada afirmación sobre NoPain, HoraMed y Gamba. Ningún texto marcado «por confirmar» llega a producción.
- **RN-006 Enlaces vivos.** Un proyecto lleva enlace solo si el sitio responde y es público. Si deja de responder, se quita el enlace y la ficha se queda.
- **RN-007 Lenguaje.** Las partes 1 a 5 de la ficha no llevan nombres de tecnologías ni siglas técnicas. La tecnología va solo en la línea 6.

## Requisitos no funcionales

- **Sin build.** Sigue siendo HTML estático, publicado en Cloudflare Pages con cada push a `main`. Las fotos ya optimizadas se versionan en el repositorio.
- **Rendimiento.** Lighthouse móvil: Performance de 90 o más, LCP de 2.5 s o menos y CLS de 0.1 o menos (SC-018). Cada foto pesa 150 KB o menos en su versión más grande, y el total de fotos no pasa de 600 KB.
- **Accesibilidad.** Contraste AA en todo el texto, también sobre el panel oscuro del contacto y el texto gris secundario (#646D81 sobre #F6F8FB da 4.9:1). Texto alternativo en cada foto; el iPad de HoraMed, que es HTML, se anuncia como una sola imagen con su descripción. Con `prefers-reduced-motion`, nada se anima.
- **Responsive.** Sin desbordes a 320 px, 375 px, 768 px y 1280 px. A 375 px, la foto va arriba o abajo del texto, nunca en una columna angosta al lado.
- **Movimiento.** Al abrir, la portada aparece en orden (etiqueta, titular, texto, botones y pantallas). Después solo flotan las pantallas y la luz se mueve detrás del vidrio. Nada más se anima: ni aparición de secciones al bajar ni índice flotante. El menú pegado (FR-008) sustituye al índice.

## Edge cases

| Caso | Comportamiento esperado |
| --- | --- |
| Un proyecto todavía no tiene foto | La ficha se ve completa sin imagen (FR-015) y se publica igual |
| Un enlace en vivo se cae | Se quita el enlace (RN-006). El resto de la ficha no cambia |
| El dato destacado no tiene una cifra real | Se usa un alcance o una restricción («3 apps, un mismo expediente»), nunca una cifra inventada |
| HoraMed sale de pruebas y tiene enlace público | Se agrega el enlace a su ficha. No hay etiqueta de estado que cambiar |
| Un dato de la tabla de FR-013 resulta falso | No se publica. Miguel da el dato correcto (RN-005) |
| Una foto con datos reales se cuela | Se sustituye antes del push. Si ya se publicó, se reemplaza y se borra el archivo del repositorio (RN-004) |
| El navegador no soporta AVIF/WebP | Se muestra la versión JPEG |
| Alguien comparte la URL antes de que se actualice la caché de la vista previa | La vista previa vieja puede seguir mostrando los dos nombres. Se fuerza el refresco con el depurador de Open Graph (SC-002) |
| Un servicio de la lista se queda sin una frase propia al acortar | Se fusiona con otro servicio o se quita. No queda un servicio con solo el título |

## Fuera de alcance

- Una página de detalle por proyecto (`/proyectos/<nombre>`). Todo va en la portada.
- Filtros, búsqueda o categorías de proyectos.
- Testimonios de clientes.
- Bida Rush/Jumex, InmuneFarma y los proyectos de la revista de SDM Robotics.
- Una versión en inglés del sitio.
- Video o galerías de más de una foto por proyecto.

## Stack detectado

- `index.html` único con CSS y JS en línea (vanilla). Sin `package.json`, sin build. Fuentes Geist y Geist Mono desde Google Fonts. Las fotos van en `img/`, en AVIF con JPEG o WebP de respaldo y dos anchos cada una.
- Hosting: Cloudflare Workers con archivos estáticos («Workers Builds: miguelaranda-org», según el check de GitHub), que publica la raíz del repositorio con cada push a `main`. Por eso `.assetsignore` sí aplica. Hasta 2026-11-14 servía también los archivos internos (`README.md` y `.gitignore` respondían 200).
- Herramientas locales disponibles para preparar fotos: ImageMagick (`magick`), `avifenc` y `cwebp`.

## Paquetes recomendados

Lo único que pide algo externo es preparar las fotos (FR-017, SC-018). Se hace una vez en la máquina de Miguel. Nada se agrega al sitio.

| Opción | Mantenimiento | Pros | Contras |
| --- | --- | --- | --- |
| **ImageMagick + `avifenc` + `cwebp`** (ya instalados) | Activos (libavif: push 2026-11) | Sin instalar nada. Cubre AVIF, WebP y JPEG por anchos con un script corto | Hay que recordar los flags de cada uno |
| `sharp-cli` (npx, sobre sharp/libvips) | sharp: 32.8k ★, push 2026-11. sharp-cli: 229 ★, release 2026-09 | Un comando para los tres formatos y varios anchos, rápido | sharp-cli tiene menos de 500 ★ (no cumple el umbral, aunque se apoya en sharp) |
| `@squoosh/cli` | Sin publicar desde 2023-01 | — | Abandonado. Descartado |

**Recomendación:** usar las herramientas ya instaladas, con un script de una línea por formato guardado en `.docs/` junto a esta spec. No hace falta ningún paquete nuevo. La carga diferida y los tamaños por ancho los hace el propio HTML (`loading="lazy"`, `srcset`, `<picture>`), sin librerías.

## Pendientes para Miguel

1. Correr Lighthouse móvil sobre el sitio publicado (SC-018).
2. Comprobar SC-019 después del push.
3. Revisar con VoiceOver las descripciones de las fotos (SC-015) y probar WhatsApp y llamada desde un teléfono (SC-005).
4. Cuando HoraMed tenga enlace público, agregarlo a su ficha.
