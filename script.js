/* ===== DATOS (edita aquí). Las imágenes se cargan desde el mismo nivel que este archivo (<nombre>.jpg) ===== */
const M=['Palanca','Plano inclinado','Cuña','Torno','Polea','Rueda'];
const E=['Fuerza de las personas','Energía eléctrica','Combustible','Energía eólica (viento)','Energía hidráulica (agua)'];
const F=['Poner en movimiento un objeto que estaba en reposo','Detener un objeto que se mueve','Cambiar la dirección del movimiento','Cambiar la rapidez de un cuerpo','Cambiar la forma de un cuerpo'];
const q=(t,a,img)=>({t,a,img});
const MAG=['A. Longitud','B. Masa','C. Volumen','D. Peso'];
const WB=['Sol','Combustibles','Viento','Máquinas simples'];

const S=[
{n:'El Club de las Máquinas Simples',s:'Máquinas',intro:'Las máquinas simples tienen un solo punto de apoyo, pocas piezas y solo funcionan con la energía de las personas. Observa cada ilustración y elige qué máquina simple representa.',
 parts:[{opts:M,items:[q('A. Cuchillo','Cuña','cuchillo'),q('B. Rampa para silla de ruedas','Plano inclinado','rampa'),q('C. Sube y baja','Palanca','subebaja'),q('D. Pedal de bicicleta','Torno','pedal'),q('E. Alicate','Palanca','alicate'),q('F. Pozo de agua','Polea','pozo'),q('G. Rueda de bicicleta','Rueda','rueda')]}]},

{n:'El Gran Reto de las Magnitudes Físicas',s:'Magnitudes',intro:'Lee cada situación misteriosa y elige la magnitud correcta.',
 parts:[{opts:MAG,items:[q('Es el espacio que ocupa un cuerpo.','C. Volumen'),q('Es la distancia que existe entre dos puntos.','A. Longitud'),q('Es la cantidad de materia que tiene un cuerpo.','B. Masa'),q('Es la fuerza que ejerce la gravedad sobre un cuerpo.','D. Peso')]},
        {h:'Pregunta de reflexión',open:'Menciona dos beneficios que obtenemos al realizar mediciones.'}]},

{n:'Laboratorio de Materiales: ¿Cómo reaccionan a la fuerza?',s:'Materiales',intro:'Clasifica cada ejemplo según cómo reacciona ante una fuerza. Toca un ejemplo y luego su columna, o arrástralo.',
 parts:[{cols:[['Cuerpos elásticos','Recuperan su forma inicial cuando se deja de aplicar la fuerza.'],['Cuerpos plásticos','No recuperan su forma cuando se deja de aplicar la fuerza.'],['Cuerpos rígidos','Cambian de forma cuando la fuerza es muy grande.']],
         items:[['Liga',0],['Globo de hule',0],['Plastilina',1],['Barro',1],['Hierro',2],['Piedra',2]]}]},

{n:'¡Energía en Movimiento!',s:'Energía',intro:'¿Qué tipo de energía hace funcionar a cada una de estas máquinas o aparatos?',
 parts:[{opts:E,items:[q('1. Motocicleta','Combustible','moto'),q('2. Licuadora','Energía eléctrica','licuadora'),q('3. Patineta','Fuerza de las personas','patineta'),q('4. Molino de viento','Energía eólica (viento)','molinoviento'),q('5. Molino de agua','Energía hidráulica (agua)','molinoagua')]}],
 note:'💡 Dato curioso: ¿Sabías que el Sol es la fuente primaria principal de energía que da vida y calor a toda la Tierra?'},

{n:'Mini-Cuestionario Exprés',s:'Mini-quiz',intro:'Tres retos rápidos sobre fuerzas, energía y máquinas.',
 parts:[{h:'1. Efecto de la fuerza',opts:F,items:[q('Una niña empuja una caja que estaba quieta y la caja comienza a deslizarse.',F[0]),q('Un ciclista aprieta los frenos y su bicicleta reduce la velocidad hasta detenerse.',F[1]),q('Una pelota rebota contra una pared y cambia la dirección en la que se mueve.',F[2]),q('Al apretar una lata vacía, una persona cambia su forma.',F[4]),q('Un carrito ya está avanzando y una persona lo empuja para que vaya más rápido. ¿Qué efecto produce la fuerza?',F[3])]},
        {h:'2. Completa las oraciones',opts:WB,items:[q('Las máquinas con un solo punto de apoyo y pocas piezas se llaman ______.','Máquinas simples'),q('La fuente principal de calor y luz de nuestro planeta es el ______.','Sol'),q('La gasolina y el carbón que liberan energía al quemarse son ______.','Combustibles'),q('Los molinos aprovechan la fuerza del ______.','Viento')]},
        {h:'Repaso: efectos de las fuerzas',opts:F,items:[q('a. Una niña empuja un carrito de supermercado que estaba quieto y este empieza a avanzar.',F[0]),q('b. Un patinador presiona el freno de su patineta hasta detenerse.',F[1]),q('c. Una corriente de aire desvía el vuelo de una cometa hacia un lado.',F[2]),q('d. Al presionar plastilina con los dedos, esta cambia de forma.',F[4]),q('e. Un carrito ya está avanzando y una persona lo empuja para que vaya más rápido. ¿Qué efecto produce la fuerza?',F[3])]}]},

{n:'Adivina la máquina simple',s:'Adivina',intro:'Lee cada pista y elige la máquina simple que corresponde.',
 parts:[{opts:M,items:[q('1. En el parque, un sube y baja tiene una barra que gira alrededor de un punto de apoyo. ¿Qué máquina simple representa?','Palanca'),q('2. Una rampa para silla de ruedas ayuda a subir un desnivel. ¿Qué máquina simple representa?','Plano inclinado'),q('3. El cuchillo es un ejemplo de una herramienta cuya parte afilada corta. ¿Qué máquina simple representa?','Cuña'),q('4. Al pedalear una bicicleta, el pedal hace girar un eje. ¿Qué máquina simple representa?','Torno')]}]},

{n:'Efectos de las fuerzas en acción',s:'Fuerzas',intro:'Lee cada situación y elige el efecto que produce la fuerza.',
 parts:[{opts:F,items:[q('1. Una pelota está quieta y Sofía la patea. ¿Qué efecto produce la fuerza?',F[0],'pelota'),q('2. Un carrito avanza y Diego lo empuja hacia un lado para cambiar su recorrido. ¿Qué efecto produce la fuerza?',F[2],'carrito'),q('3. Al moldear plastilina con las manos, cambia su forma. ¿Qué efecto produce la fuerza?',F[4]),q('4. Un carrito ya está avanzando y una persona lo empuja para que vaya más rápido. ¿Qué efecto produce la fuerza?',F[3])]}]}
];

/* ===== LÓGICA ===== */
const app=document.getElementById('app'),nav=document.getElementById('nav');
const MSG=['Todavía no. Lee otra vez con calma e inténtalo de nuevo.','¡Casi! Fíjate bien en la imagen o en la pista y prueba otra opción.','No es esa. Recuerda lo que estudiaste en clase y vuelve a intentarlo.'];
let tries=0,pts=0;const st=[];
const el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const say=(fb,ok,t)=>{fb.textContent=t;fb.className='fb '+(ok?'good':'bad')};
const wrong=fb=>say(fb,false,MSG[tries++%MSG.length]);

function mark(i,ok){const s=st[i];s.d++;if(ok)pts++;s.c.textContent=s.d+' / '+s.t;if(s.d===s.t){s.win.hidden=false;nav.children[i].classList.add('ok')}}

function quizItem(i,it,opts){
  const d=el('div','item'),o=el('div','opts'),fb=el('p','fb'),miss=0;fb.setAttribute('aria-live','polite');
  if(it.img){const im=el('img');im.src=it.img+'.jpg';im.alt=it.t;im.onerror=()=>im.remove();d.append(im)}
  d.append(el('p','q',it.t));
  opts.forEach(x=>{const b=el('button','opt',x);b.type='button';b.onclick=()=>{
    if(x===it.a){b.classList.add('good');o.querySelectorAll('button').forEach(k=>k.disabled=true);d.classList.add('done');say(fb,true,'¡Correcto! 🎉');mark(i,!miss)}
    else{miss=1;b.classList.add('bad');b.disabled=true;wrong(fb)}};o.append(b)});
  d.append(o,fb);return d}

function sortPart(i,p){
  const w=el('div'),pool=el('div','pool'),zones=el('div','zones'),fb=el('p','fb');let sel=null;fb.setAttribute('aria-live','polite');
  const place=(c,z)=>{
    if(c.dataset.c===z.dataset.c){z.querySelector('.drop').append(c);c.disabled=true;c.draggable=false;c.classList.remove('sel');c.classList.add('good');sel=null;say(fb,true,'¡Correcto! 🎉');mark(i,!c.dataset.m)}
    else{c.dataset.m=1;c.classList.add('shake');setTimeout(()=>c.classList.remove('shake'),400);wrong(fb)}};
  p.cols.forEach(([h,t],k)=>{const z=el('div','zone');z.dataset.c=k;z.append(el('h4','',h),el('p','def',t),el('div','drop'));
    z.onclick=()=>sel&&place(sel,z);z.ondragover=e=>e.preventDefault();
    z.ondrop=e=>{e.preventDefault();const c=pool.querySelector('[data-id="'+e.dataTransfer.getData('text')+'"]');c&&place(c,z)};zones.append(z)});
  p.items.forEach(([t,k],n)=>{const c=el('button','chip',t);c.type='button';c.dataset.c=k;c.dataset.id=n;c.draggable=true;
    c.ondragstart=e=>e.dataTransfer.setData('text',n);
    c.onclick=()=>{pool.querySelectorAll('.sel').forEach(x=>x.classList.remove('sel'));sel=c;c.classList.add('sel')};pool.append(c)});
  w.append(pool,zones,fb);return w}

function openPart(i,p){
  const d=el('div','item'),fb=el('p','fb'),a=el('input'),b=el('input'),btn=el('button','check','Revisar'),miss=0;btn.type='button';
  d.append(el('p','q',p.open));
  [a,b].forEach((x,k)=>{x.placeholder='Beneficio '+(k+1);x.maxLength=120;d.append(x)});
  btn.onclick=()=>{const u=a.value.trim(),v=b.value.trim();
    if(u.length<5||v.length<5||u.toLowerCase()===v.toLowerCase()){miss=1;say(fb,false,'Escribe dos beneficios distintos, cada uno con una idea completa.')}
    else{say(fb,true,'¡Buen trabajo! Tu docente revisará tus ideas. ✅');if(!d.classList.contains('done')){d.classList.add('done');mark(i,!miss)}}};
  d.append(btn,fb);return d}

function show(i){ // abre la sección i (cierra las demás); si ya estaba abierta, la cierra
  const was=!document.getElementById('s'+i).hidden;
  if(i===S.length)results();
  S.concat([0]).forEach((_,k)=>{const open=k===i&&!was;document.getElementById('s'+k).hidden=!open;
    nav.children[k].classList.toggle('open',open);nav.children[k].setAttribute('aria-expanded',open)});
  if(!was)window.scrollTo({top:0,behavior:'smooth'})}

S.forEach((s,i)=>{
  const b=el('button','tab');b.type='button';b.append(el('b','',i+1),el('span','',s.s));b.title=s.n;
  b.setAttribute('aria-controls','s'+i);b.onclick=()=>show(i);nav.append(b);
  const sec=el('section','sec'),c=el('span','count'),win=el('p','win','🏆 ¡Sección completada!');let t=0;
  sec.id='s'+i;sec.hidden=true;win.hidden=true;
  sec.append(c,el('h2','',(i+1)+'. '+s.n),el('p','intro',s.intro));
  s.parts.forEach(p=>{
    if(p.h)sec.append(el('h3','',p.h));
    if(p.items&&p.opts){t+=p.items.length;p.items.forEach(it=>sec.append(quizItem(i,it,p.opts)))}
    else if(p.cols){t+=p.items.length;sec.append(sortPart(i,p))}
    else if(p.open){t++;sec.append(openPart(i,p))}});
  if(s.note)sec.append(el('div','note',s.note));
  c.textContent='0 / '+t;st.push({d:0,t,c,win});
  const f=el('div','foot'),prev=el('button','go','← Anterior'),next=el('button','go','Siguiente →');
  prev.type=next.type='button';prev.onclick=()=>show(i-1);next.onclick=()=>show(i+1);
  f.append(i>0?prev:el('span'),next);
  sec.append(win,f);app.append(sec)});

/* ===== RESULTADOS ===== */
const TOT=st.reduce((a,x)=>a+x.t,0),rb=el('button','tab');rb.type='button';rb.append(el('b','','🏁'),el('span','','Nota'));rb.title='Resultados';rb.setAttribute('aria-controls','s'+S.length);rb.onclick=()=>show(S.length);nav.append(rb);
const rs=el('section','sec'),rbox=el('div','result'),again=el('button','go','🔁 Volver a intentar'),rprev=el('button','go','← Anterior');
rs.id='s'+S.length;rs.hidden=true;again.type=rprev.type='button';again.onclick=()=>location.reload();rprev.onclick=()=>show(S.length-1);
rs.append(el('h2','','Tu nota'),rbox,again);const rf=el('div','foot');rf.append(rprev,el('span'));rs.append(rf);app.append(rs);
function results(){const done=st.reduce((a,x)=>a+x.d,0),n=Math.round(pts/TOT*100);rbox.replaceChildren(
  el('p','grade',n+' / 100'),
  el('p','q',n>=90?'¡Excelente trabajo! 🌟':n>=70?'¡Muy bien! 👏':'¡Sigue practicando, tú puedes! 💪'),
  el('p','',pts+' aciertos al primer intento de '+TOT+' ejercicios.'),
  done<TOT?el('p','fb bad','Te faltan '+(TOT-done)+' ejercicios por completar. Vuelve a las secciones para terminarlos.'):el('p','fb good','¡Completaste todos los ejercicios!'))}
show(0);
