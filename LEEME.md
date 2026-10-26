# SonArte — Botonera de sonidos (prototipo)

App que corre **sola en el celular o tablet, SIN PC**. Todos tus sonidos a un toque:
efectos, música de fondo y "walk-ups" (la canción de cada jugador al bat). Pensada para
animadoras de fiestas, equipos de béisbol, eventos y transmisiones.

## Qué hace (prototipo actual)
- Rejilla de **botones con emoji + color**, estilo tecla 3D.
- **Páginas/categorías** (ej. Jugadores, Efectos, Música) — cambias con un toque.
- **Toca y suena al instante** en el propio dispositivo (o bocina Bluetooth conectada a él).
- **Música de fondo con *ducking***: marca un sonido como "música de fondo"; cuando disparas
  un efecto, la música baja sola y regresa al terminar.
- **Tramo + fundido**: usa solo un pedazo de una canción (del min X al Y) con entrada/salida suave.
  Perfecto para el walk-up de cada jugador.
- **Repetir (loop)** y botón **⏹ Detener** todo de golpe. **Volumen** general.
- **Sube tus propios audios** desde la misma app (MP3/WAV/M4A). Quedan guardados en el
  dispositivo (IndexedDB) y **funcionan offline**.
- Trae 3 sonidos de ejemplo (sintetizados) para probar sin subir nada.

## Probarlo
- **En la PC**: doble clic a `probar.bat` → abre en el navegador. También te muestra el link
  para abrirlo en el **celular** (misma Wi-Fi), ej. `http://192.168.x.x:8123/index.html`.
- **Modo editar**: botón **✏️ Editar** arriba → aparece ✎ en los botones y el **＋**. Ahí agregas
  sonidos, categorías, subes audios y defines tramo/fundido/loop/música.

## Para dejarlo como app "de verdad" en el celular (siguiente paso)
Hoy es un prototipo que se sirve local. Para que quede **instalado** en el cel (ícono, pantalla
completa, 100% offline) hay que **publicarlo una vez** en un hosting con https (ej. Netlify o
GitHub Pages); el cel entra una vez, se agrega a la pantalla de inicio, y ya funciona sin internet.
Ya trae lo necesario para ser PWA: `manifest.json`, `sw.js` e `icono.svg`.

## Límites honestos del prototipo
- En **iPhone**, si se bloquea la pantalla o se minimiza, el audio web puede cortarse (en un show
  la pantalla está encendida, así que no estorba).
- Pesa poco: ideal para **efectos + varias pistas**, no una discoteca entera. Para biblioteca
  enorme conviene app nativa.

## Ideas para la versión siguiente
- Buscar sonido por nombre, reordenar arrastrando, duplicar botón.
- Exportar/importar la botonera completa (respaldo y compartir entre dispositivos).
- Atenuado de música configurable, fundido cruzado entre pistas, cola de reproducción.
- Modo "una pista a la vez" (que una canción corte a la anterior) para los walk-ups.
- Temas de color por categoría/equipo, foto de fondo del botón (no solo emoji).
- Versión nativa (Capacitor) para publicar en Play Store / App Store.
