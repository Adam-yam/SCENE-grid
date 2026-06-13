/* ═══════════════════════════════════════════════════════════
   SCENE-grid — app.js
═══════════════════════════════════════════════════════════ */

/* ── Locale ─────────────────────────────────────────────── */
const Locale = (function () {
  const S = {
    ko: {
      'sub':         '빠른 설정 버튼에 맞게\n이미지를 정확히 분할하세요.',
      'note':        'GalaxyStore - GoodLock QuickStar 전용 ｜ by Adam',
      'launch':      '시작하기',
      'p1.title':    '빠른 설정창 영역 그리드 구성',
      'p1.desc':     '패널 크기를 설정하고, 각 버튼 영역을 드래그해서 지정하세요.',
      'p1.rows':     '세로',
      'p1.cols':     '가로',
      'p1.more':     '직접 입력',
      'p1.make':     '표 만들기',
      'p1.clear':    '초기화',
      'p1.hint':     '드래그로 영역을 선택하고, 선택된 영역을 클릭하면 취소됩니다.',
      'p2.title':    '이미지 가져오기',
      'p2.desc':     '분할할 이미지를 불러오세요.',
      'p2.drop':     '이미지를 드래그하거나',
      'p2.browse':   '파일 선택',
      'p2.paste':    '또는 PC버전에서 Ctrl+V로 사진을 불러오세요',
      'p3.title':    '영역 선택',
      'p3.desc':     '그리드 비율에 맞게 잘라낼 영역을 잡아주세요.',
      'p3.cut':      '잘라내기 & 계속',
      'p4.title':    '분할 결과',
      'p4.desc':     '결과를 확인하고 ZIP으로 내려받으세요.',
      'p4.map':      '분할 지도',
      'p4.pick':     '타일 유형',
      'p4.pickbody': '<strong>버튼 박스 · 미디어 · 밝기 · 볼륨</strong>에 해당하는 타일을 선택하세요. (투명도 처리에 사용됩니다)',
      'p4.caution':  '⭐ 미디어 플레이어는 음악 재생 중 음악 앨범 표시 등 이미지가 표시됩니다. 버튼 박스는 확장 시 이미지도 확대됩니다. (기본 화면에서는 상관없음)',
      'p4.guide':    '적용 방법',
      'p4.guidebody':'ZIP 압축 해제 후 <strong>[GoodLock ▶ QuickStar ▶ 패널 스타일 편집]</strong>에서 각 타일에 이미지를 하나씩 설정해주세요.',
      'go':          '다음',
      'back':        '이전',
      'home':        '처음으로',
      'save':        'ZIP파일로 저장',
      'step':        '단계',
    },
    en: {
      'sub':         'Slice your image to fit\nthe One UI Quick Settings buttons.',
      'note':        'Samsung Galaxy One UI · GoodLock QuickStar only',
      'launch':      'Get started',
      'p1.title':    'Build grid',
      'p1.desc':     'Set the panel size and drag to define each button region.',
      'p1.rows':     'Rows',
      'p1.cols':     'Cols',
      'p1.more':     'Custom',
      'p1.make':     'Build',
      'p1.clear':    'Clear',
      'p1.hint':     'Drag to select a region. Click a selected region to remove it.',
      'p2.title':    'Import image',
      'p2.desc':     'Load the image you want to slice.',
      'p2.drop':     'Drop image here, or',
      'p2.browse':   'Browse file',
      'p2.paste':    'or paste with Ctrl+V',
      'p3.title':    'Select area',
      'p3.desc':     'Drag the handles to set the crop area.',
      'p3.cut':      'Cut & continue',
      'p4.title':    'Result',
      'p4.desc':     'Review the slices and download as ZIP.',
      'p4.map':      'Slice map',
      'p4.pick':     'Tile types',
      'p4.pickbody': 'Mark tiles for <strong>Button box · Media · Brightness · Volume</strong>. (Used for transparency adjustment)',
      'p4.caution':  "⚠ Media player tiles are not recommended — the image won't show during playback. Button boxes may stretch when expanded.",
      'p4.guide':    'How to apply',
      'p4.guidebody':'Extract the ZIP on your phone, then open <strong>GoodLock → QuickStar → Edit Panel Style</strong> and apply each image to its tile.',
      'go':          'Next',
      'back':        'Back',
      'home':        'Start over',
      'save':        'Save ZIP',
      'step':        'of 4',
    },
    ja: {
      'sub':         'One UI クイック設定ボタンに合わせて\n画像をきれいに分割します。',
      'note':        'Samsung Galaxy One UI · GoodLock QuickStar 専用',
      'launch':      'はじめる',
      'p1.title':    'グリッド設定',
      'p1.desc':     'パネルサイズを設定し、各ボタン領域をドラッグで指定してください。',
      'p1.rows':     '縦',
      'p1.cols':     '横',
      'p1.more':     'カスタム',
      'p1.make':     '作成',
      'p1.clear':    'リセット',
      'p1.hint':     'ドラッグで領域を選択。選択済み領域をクリックで削除。',
      'p2.title':    '画像インポート',
      'p2.desc':     '分割する画像を読み込んでください。',
      'p2.drop':     '画像をドロップ、または',
      'p2.browse':   'ファイル選択',
      'p2.paste':    'またはCtrl+Vで貼り付け',
      'p3.title':    '範囲選択',
      'p3.desc':     'グリッド比率に合わせてトリミング範囲を選んでください。',
      'p3.cut':      'カット & 続行',
      'p4.title':    '分割結果',
      'p4.desc':     '結果を確認してZIPで保存してください。',
      'p4.map':      '分割マップ',
      'p4.pick':     'タイルタイプ',
      'p4.pickbody': '<strong>ボタンボックス · メディア · 輝度 · 音量</strong>のタイルを選択してください。（透明度調整に使用）',
      'p4.caution':  '⚠ メディアプレーヤーは再生中に画像が表示されないため非推奨。ボタンボックスは展開時に画像も拡大される場合があります。',
      'p4.guide':    '適用方法',
      'p4.guidebody':'ZIPを解凍後、<strong>GoodLock → QuickStar → パネルスタイル編集</strong>で各タイルに画像を適用してください。',
      'go':          '次へ',
      'back':        '戻る',
      'home':        '最初から',
      'save':        'ZIP保存',
      'step':        '/ 4',
    },
  };

  const LABELS = { ko:'한국어', en:'English', ja:'日本語' };
  const KEY = 'cg.lang';
  const FB  = 'ko';
  let cur = localStorage.getItem(KEY) || FB;
  if (!S[cur]) cur = FB;

  const get = k => S[cur]?.[k] ?? S[FB][k] ?? k;

  function apply(l) {
    cur = l; localStorage.setItem(KEY, l);
    document.documentElement.lang = l;
    document.querySelectorAll('[data-t]').forEach(el => { const v=get(el.dataset.t); if(v!=null) el.textContent=v; });
    document.querySelectorAll('[data-th]').forEach(el => { const v=get(el.dataset.th); if(v!=null) el.innerHTML=v; });
    document.querySelectorAll('[data-tp]').forEach(el => { const v=get(el.dataset.tp); if(v!=null) el.placeholder=v; });
    document.querySelectorAll('[data-tpre]').forEach(el => { const v=get(el.dataset.tpre); if(v!=null) el.textContent=v; });
    document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('on', b.dataset.l===l));
    document.querySelectorAll('.l-label').forEach(el => el.textContent=LABELS[l]||l);
    // update step counter
    document.querySelectorAll('.tb-step').forEach(el => {
      const m = el.dataset.phase;
      if (m) el.textContent = `${m} ${get('step')}`;
    });
  }

  function mount() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const w = btn.closest('.lang-wrap'), was = w.classList.contains('open');
        document.querySelectorAll('.lang-wrap').forEach(x=>x.classList.remove('open'));
        if (!was) w.classList.add('open');
      });
    });
    document.querySelectorAll('.lang-opt').forEach(o => {
      o.addEventListener('click', e => {
        e.stopPropagation(); apply(o.dataset.l);
        document.querySelectorAll('.lang-wrap').forEach(x=>x.classList.remove('open'));
      });
    });
    document.addEventListener('click', () =>
      document.querySelectorAll('.lang-wrap').forEach(x=>x.classList.remove('open'))
    );
  }

  return { get, apply, mount, cur: ()=>cur };
})();

/* ── State ──────────────────────────────────────────────── */
const CG = {
  rows:0, cols:0, regions:[],
  source:null, frame:null,
  canvas:null, pad:0,
  tiles:[],
};

/* ═══════════════════════════════════════════════════════════
   GRID BUILDER
═══════════════════════════════════════════════════════════ */
const Grid = (function(){
  const PAL = [
    {fill:'rgba(255,255,255,0.07)',stroke:'rgba(255,255,255,0.55)',glow:'rgba(255,255,255,0.18)'},
  ];
  let occ=[], anchor=null, live=false, hovSet=new Set();
  const pal = r => PAL[(r.id-1)%PAL.length];
  const atEl = el => { const c=el?.closest?.('.cell'); return c?{r:+c.dataset.r,c:+c.dataset.c}:null; };
  const atPt = (x,y) => atEl(document.elementFromPoint(x,y));

  function initOcc(r,c){ occ=Array.from({length:r},()=>new Array(c).fill(0)); }
  function stamp(reg,v){ reg.cells.forEach(([r,c])=>occ[r][c]=v); }
  function box(r1,c1,r2,c2){ const o=[]; for(let r=Math.min(r1,r2);r<=Math.max(r1,r2);r++) for(let c=Math.min(c1,c2);c<=Math.max(c1,c2);c++) o.push([r,c]); return o; }
  function anyOcc(r0,c0,r1,c1){ for(let r=r0;r<=r1;r++) for(let c=c0;c<=c1;c++) if(occ[r][c]) return true; return false; }

  function clamp(r1,c1,r2,c2){
    const rL=Math.min(r1,r2),rH=Math.max(r1,r2),cL=Math.min(c1,c2),cH=Math.max(c1,c2);
    let ar=rH; while(ar>=rL&&anyOcc(rL,cL,ar,cH)) ar--;
    let ac=cH; if(ar>=rL) while(ac>=cL&&anyOcc(rL,cL,ar,ac)) ac--;
    const sA=(ar>=rL&&ac>=cL)?(ar-rL+1)*(ac-cL+1):0;
    let bc=cH; while(bc>=cL&&anyOcc(rL,cL,rH,bc)) bc--;
    let br=rH; if(bc>=cL) while(br>=rL&&anyOcc(rL,cL,br,bc)) br--;
    const sB=(br>=rL&&bc>=cL)?(br-rL+1)*(bc-cL+1):0;
    let uR,uC;
    if(!sA&&!sB){uR=rL;uC=cL;}else if(sA>=sB){uR=ar;uC=ac;}else{uR=br;uC=bc;}
    return {r2:r2>=r1?uR:rL+(rH-uR),c2:c2>=c1?uC:cL+(cH-uC)};
  }

  function paint(){
    document.querySelectorAll('#cellGrid .cell').forEach(el=>{
      const r=+el.dataset.r,c=+el.dataset.c;
      el.classList.remove('hov'); el.innerHTML='';
      el.style.background=el.style.boxShadow='';
      const id=occ[r][c]; if(!id) return;
      const reg=CG.regions.find(x=>x.id===id); if(!reg) return;
      const p=pal(reg); el.style.background=p.fill;
      const sh=[],W=2;
      if(r===reg.r0)           sh.push(`inset 0 ${W}px 0 0 ${p.stroke}`);
      if(r===reg.r0+reg.rs-1)  sh.push(`inset 0 -${W}px 0 0 ${p.stroke}`);
      if(c===reg.c0)           sh.push(`inset ${W}px 0 0 0 ${p.stroke}`);
      if(c===reg.c0+reg.cs-1)  sh.push(`inset -${W}px 0 0 0 ${p.stroke}`);
      if(sh.length) el.style.boxShadow=sh.join(',')+`,0 0 10px 1px ${p.glow}`;
      if(r===reg.r0&&c===reg.c0){
        const n=document.createElement('span'); n.className='c-num'; n.style.color=p.stroke; n.textContent=reg.id; el.appendChild(n);
      }
    });
    document.getElementById('toP2').disabled=CG.regions.length===0;
  }

  function setHov(cells){
    hovSet.forEach(el=>el.classList.remove('hov')); hovSet.clear();
    cells.forEach(([r,c])=>{ const el=document.querySelector(`.cell[data-r="${r}"][data-c="${c}"]`); if(el){el.classList.add('hov');hovSet.add(el);} });
  }

  function remove(id){
    const i=CG.regions.findIndex(x=>x.id===id); if(i<0) return;
    stamp(CG.regions[i],0); CG.regions.splice(i,1); paint();
  }

  function readN(sId,iId){ const s=document.getElementById(sId); return s.value==='other'?parseInt(document.getElementById(iId).value,10):parseInt(s.value,10); }

  function build(){
    const rows=readN('rowSel','rowN'),cols=readN('colSel','colN');
    if(!rows||!cols||rows<1||cols<1) return;
    CG.regions=CG.regions.filter(r=>r.r0+r.rs<=rows&&r.c0+r.cs<=cols);
    CG.rows=rows; CG.cols=cols; initOcc(rows,cols); CG.regions.forEach(r=>stamp(r,r.id));
    const wrap=document.getElementById('cellGrid'); wrap.innerHTML='';
    const g=document.createElement('div'); g.className='cell-grid';
    g.style.gridTemplateColumns=`repeat(${cols},var(--cw))`;
    g.style.gridTemplateRows=`repeat(${rows},var(--cw))`;
    for(let r=0;r<rows;r++) for(let c=0;c<cols;c++){
      const el=document.createElement('div'); el.className='cell'; el.dataset.r=r; el.dataset.c=c; g.appendChild(el);
    }
    wrap.appendChild(g);
    document.getElementById('hint').style.display='block';
    g.addEventListener('pointerdown',down); g.addEventListener('pointermove',move); g.addEventListener('pointerup',up); g.addEventListener('pointerleave',up);
    paint();
  }

  function wipe(){ CG.regions=[]; initOcc(CG.rows,CG.cols); paint(); }

  function down(e){
    const pt=atPt(e.clientX,e.clientY); if(!pt) return; e.preventDefault();
    if(occ[pt.r][pt.c]){remove(occ[pt.r][pt.c]);return;}
    e.currentTarget.setPointerCapture(e.pointerId); anchor={r:pt.r,c:pt.c}; live=true; setHov([[pt.r,pt.c]]);
  }
  function move(e){
    if(!live||!anchor) return; e.preventDefault();
    const pt=atPt(e.clientX,e.clientY); if(!pt) return;
    const {r2,c2}=clamp(anchor.r,anchor.c,pt.r,pt.c); setHov(box(anchor.r,anchor.c,r2,c2));
  }
  function up(e){
    if(!live||!anchor) return; live=false;
    const pt=atPt(e.clientX,e.clientY); let r2=anchor.r,c2=anchor.c;
    if(pt){const cl=clamp(anchor.r,anchor.c,pt.r,pt.c);r2=cl.r2;c2=cl.c2;}
    setHov([]);
    const rL=Math.min(anchor.r,r2),rH=Math.max(anchor.r,r2),cL=Math.min(anchor.c,c2),cH=Math.max(anchor.c,c2);
    if(rL>rH||cL>cH){anchor=null;return;}
    const nextId=CG.regions.length?Math.max(...CG.regions.map(x=>x.id))+1:1;
    const reg={id:nextId,r0:rL,c0:cL,rs:rH-rL+1,cs:cH-cL+1,cells:box(anchor.r,anchor.c,r2,c2)};
    CG.regions.push(reg); stamp(reg,nextId); paint(); anchor=null;
  }

  function toggleCustom(sId,iId){
    const s=document.getElementById(sId),i=document.getElementById(iId);
    s.addEventListener('change',()=>{i.hidden=s.value!=='other';if(s.value==='other')i.focus();});
  }

  function init(){
    toggleCustom('rowSel','rowN'); toggleCustom('colSel','colN');
    document.getElementById('btnBuild').addEventListener('click',build);
    document.getElementById('btnWipe').addEventListener('click',wipe);
    build();
  }
  return {init,wipe};
})();

/* ═══════════════════════════════════════════════════════════
   IMPORTER
═══════════════════════════════════════════════════════════ */
const Importer = (function(){
  function load(file){
    if(!file||!file.type.startsWith('image/')) return;
    const fr=new FileReader();
    fr.onload=e=>{
      const img=new Image();
      img.onload=()=>{
        CG.source=img;
        document.getElementById('thumbImg').src=e.target.result;
        document.getElementById('thumbWrap').style.display='block';
        document.getElementById('toP3').disabled=false;
      };
      img.src=e.target.result;
    };
    fr.readAsDataURL(file);
  }
  function init(){
    const fp=document.getElementById('filePicker');
    document.getElementById('btnBrowse').addEventListener('click',()=>fp.click());
    fp.addEventListener('change',()=>{if(fp.files[0])load(fp.files[0]);fp.value='';});
    const dz=document.getElementById('dropZone');
    dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('drag');});
    dz.addEventListener('dragleave',()=>dz.classList.remove('drag'));
    dz.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('drag');const f=e.dataTransfer.files[0];if(f)load(f);});
    document.addEventListener('paste',e=>{
      if(!document.getElementById('phase2').classList.contains('on')) return;
      const items=e.clipboardData?.items; if(!items) return;
      for(const it of items){if(it.type.startsWith('image/')){load(it.getAsFile());break;}}
    });
  }
  return {init};
})();

/* ═══════════════════════════════════════════════════════════
   CROPPER
═══════════════════════════════════════════════════════════ */
const Cropper = (function(){
  const HIT=14,HS=9,MIN=20;
  let cv,cx,sc=1,grab=null,orig=null;
  const hitPx=()=>HIT/sc, hsPx=()=>HS/sc;
  const CUR={nw:'nw-resize',n:'n-resize',ne:'ne-resize',e:'e-resize',se:'se-resize',s:'s-resize',sw:'sw-resize',w:'w-resize',move:'move'};

  function pts(f){return{nw:[f.x,f.y],n:[f.x+f.w/2,f.y],ne:[f.x+f.w,f.y],e:[f.x+f.w,f.y+f.h/2],se:[f.x+f.w,f.y+f.h],s:[f.x+f.w/2,f.y+f.h],sw:[f.x,f.y+f.h],w:[f.x,f.y+f.h/2]};}
  function getH(mx,my){const f=CG.frame,hit=hitPx();for(const[k,[hx,hy]]of Object.entries(pts(f)))if(Math.abs(mx-hx)<=hit&&Math.abs(my-hy)<=hit)return k;if(mx>=f.x&&mx<=f.x+f.w&&my>=f.y&&my<=f.y+f.h)return 'move';return null;}

  function draw(){
    const f=CG.frame,W=cv.width,H=cv.height;
    cx.clearRect(0,0,W,H); cx.drawImage(CG.source,0,0);
    cx.fillStyle='rgba(0,0,0,0.52)';
    cx.fillRect(0,0,W,f.y); cx.fillRect(0,f.y+f.h,W,H-f.y-f.h);
    cx.fillRect(0,f.y,f.x,f.h); cx.fillRect(f.x+f.w,f.y,W-f.x-f.w,f.h);
    cx.strokeStyle='#fff'; cx.lineWidth=1.5; cx.strokeRect(f.x,f.y,f.w,f.h);
    cx.strokeStyle='rgba(255,255,255,0.2)'; cx.lineWidth=0.7;
    for(let i=1;i<3;i++){
      const x=f.x+f.w*i/3,y=f.y+f.h*i/3;
      cx.beginPath();cx.moveTo(x,f.y);cx.lineTo(x,f.y+f.h);cx.stroke();
      cx.beginPath();cx.moveTo(f.x,y);cx.lineTo(f.x+f.w,y);cx.stroke();
    }
    const hs=hsPx(); cx.fillStyle='#fff'; cx.strokeStyle='#555'; cx.lineWidth=Math.max(0.5,1/sc);
    for(const[hx,hy]of Object.values(pts(f))){cx.beginPath();cx.rect(hx-hs,hy-hs,hs*2,hs*2);cx.fill();cx.stroke();}
  }

  function toImg(e){const r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)/sc,y:(e.clientY-r.top)/sc};}

  function applyDrag(mx,my){
    const{x:ox,y:oy,f:snap}=orig,dx=mx-ox,dy=my-oy;
    const asp=(11*CG.cols)/(10*CG.rows);
    let{x,y,w,h}=snap;const g=grab;
    if(g==='move'){x=snap.x+dx;y=snap.y+dy;}
    else if(g==='nw'){const fx=snap.x+snap.w,fy=snap.y+snap.h;w=Math.max(MIN,fx-(snap.x+dx));h=w/asp;x=fx-w;y=fy-h;}
    else if(g==='ne'){const fy=snap.y+snap.h;w=Math.max(MIN,snap.w+dx);h=w/asp;y=fy-h;}
    else if(g==='se'){w=Math.max(MIN,snap.w+dx);h=w/asp;}
    else if(g==='sw'){const fx=snap.x+snap.w;w=Math.max(MIN,fx-(snap.x+dx));h=w/asp;x=fx-w;}
    else if(g==='n'){const fy=snap.y+snap.h,cx2=snap.x+snap.w/2;h=Math.max(MIN,fy-(snap.y+dy));w=h*asp;y=fy-h;x=cx2-w/2;}
    else if(g==='s'){const cx2=snap.x+snap.w/2;h=Math.max(MIN,snap.h+dy);w=h*asp;x=cx2-w/2;}
    else if(g==='e'){const cy2=snap.y+snap.h/2;w=Math.max(MIN,snap.w+dx);h=w/asp;y=cy2-h/2;}
    else if(g==='w'){const fx=snap.x+snap.w,cy2=snap.y+snap.h/2;w=Math.max(MIN,fx-(snap.x+dx));h=w/asp;x=fx-w;y=cy2-h/2;}
    CG.frame={x,y,w,h}; draw();
  }

  function onDown(e){const{x,y}=toImg(e),h=getH(x,y);if(!h)return;e.preventDefault();grab=h;orig={x,y,f:{...CG.frame}};cv.setPointerCapture(e.pointerId);}
  function onMove(e){const{x,y}=toImg(e);if(grab){e.preventDefault();applyDrag(x,y);}else cv.style.cursor=CUR[getH(x,y)]||'crosshair';}
  function onUp(){grab=null;orig=null;}

  function init(){
    cv=document.getElementById('cropCv'); cx=cv.getContext('2d');
    const src=CG.source,W=src.naturalWidth,H=src.naturalHeight;
    const mW=Math.min(880,window.innerWidth-64),mH=Math.min(560,window.innerHeight-260);
    sc=Math.min(1,mW/W,mH/H);
    cv.width=W;cv.height=H;cv.style.width=Math.round(W*sc)+'px';cv.style.height=Math.round(H*sc)+'px';
    const asp=(11*CG.cols)/(10*CG.rows);
    let cw,ch; if(W/H>=asp){ch=H;cw=ch*asp;}else{cw=W;ch=cw/asp;}
    CG.frame={x:(W-cw)/2,y:(H-ch)/2,w:cw,h:ch};
    cv.removeEventListener('pointerdown',onDown); cv.removeEventListener('pointermove',onMove); cv.removeEventListener('pointerup',onUp);
    cv.addEventListener('pointerdown',onDown); cv.addEventListener('pointermove',onMove); cv.addEventListener('pointerup',onUp);
    draw();
  }

  function commit(){
    const src=CG.source,f=CG.frame;
    const oW=Math.max(1,Math.round(f.w)),oH=Math.max(1,Math.round(f.h));
    const k=oH/(10*CG.rows),pad=Math.max(1,Math.round(k*0.5));
    const off=document.createElement('canvas'); off.width=oW+2*pad; off.height=oH+2*pad;
    const oc=off.getContext('2d'); oc.clearRect(0,0,off.width,off.height);
    const sx=Math.max(0,f.x),sy=Math.max(0,f.y),sx2=Math.min(src.naturalWidth,f.x+f.w),sy2=Math.min(src.naturalHeight,f.y+f.h);
    if(sx2>sx&&sy2>sy) oc.drawImage(src,sx,sy,sx2-sx,sy2-sy,(sx-f.x)+pad,(sy-f.y)+pad,sx2-sx,sy2-sy);
    CG.canvas=off; CG.pad=pad;
  }

  return{init,commit};
})();

/* ═══════════════════════════════════════════════════════════
   RESULTS
═══════════════════════════════════════════════════════════ */
const Results = (function(){
  const RING=['#4f8ef7','#f7834f','#34c97a','#f7d24f','#c97af7','#f7524f','#4ff7d9','#f74fb0'];

  function sliceUp(){
    const img=CG.canvas,{rows,cols,regions}=CG;
    const k=img.height/(10*rows+1),pad=CG.pad;
    CG.tiles=regions.map(reg=>{
      const x1=reg.c0,x2=reg.c0+reg.cs,y1=reg.r0,y2=reg.r0+reg.rs;
      const lG=x1===0?0:(11*x1+0.5)*k,rG=x2===cols?11*cols*k:(11*x2-0.5)*k;
      const tG=y1===0?0:(10*y1+0.5)*k,bG=y2===rows?10*rows*k:(10*y2-0.5)*k;
      const px=Math.round(lG+pad),py=Math.round(tG+pad),pw=Math.max(1,Math.round(rG-lG)),ph=Math.max(1,Math.round(bG-tG));
      const c=document.createElement('canvas'); c.width=pw; c.height=ph;
      c.getContext('2d').drawImage(img,px,py,pw,ph,0,0,pw,ph);
      return c;
    });
  }

  function drawMap(){
    const wrap=document.getElementById('mapCv'); wrap.innerHTML='';
    const img=CG.canvas,{rows,cols,regions}=CG;
    const k=img.height/(10*rows+1),pad=CG.pad;
    const pW=img.width-2*pad,pH=img.height-2*pad;
    const MAX=360,sc=Math.min(MAX/pW,MAX/pH);
    const W=Math.round(pW*sc),H=Math.round(pH*sc);
    const cv=document.createElement('canvas'); cv.width=W; cv.height=H;
    const cx=cv.getContext('2d');

    function pill(px,py,pw,ph,r){cx.beginPath();if(cx.roundRect)cx.roundRect(px,py,pw,ph,r);else{cx.moveTo(px+r,py);cx.arcTo(px+pw,py,px+pw,py+ph,r);cx.arcTo(px+pw,py+ph,px,py+ph,r);cx.arcTo(px,py+ph,px,py,r);cx.arcTo(px,py,px+pw,py,r);cx.closePath();}}

    regions.forEach((reg,i)=>{
      const col=RING[(reg.id-1)%RING.length];
      const x1=reg.c0,x2=reg.c0+reg.cs,y1=reg.r0,y2=reg.r0+reg.rs;
      const lG=x1===0?0:(11*x1+0.5)*k,rG=x2===cols?11*cols*k:(11*x2-0.5)*k;
      const tG=y1===0?0:(10*y1+0.5)*k,bG=y2===rows?10*rows*k:(10*y2-0.5)*k;
      const px=lG*sc,py=tG*sc,pw=(rG-lG)*sc,ph=(bG-tG)*sc,rad=Math.min(pw,ph)/2;
      cx.save();pill(px,py,pw,ph,rad);cx.clip();cx.drawImage(img,pad,pad,pW,pH,0,0,W,H);cx.restore();
      cx.strokeStyle="rgba(255,255,255,0.12)";cx.lineWidth=1;pill(px,py,pw,ph,rad);cx.stroke();
      const lx=px+pw/2,ly=py+ph/2,lbl=String(i+1),fs=Math.max(10,Math.min(22,ph*.4,pw*.4));
      cx.font=`bold ${fs}px sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
      const tw=cx.measureText(lbl).width,bp=Math.max(3,fs*.25),bw=tw+bp*2,bh=fs+bp*2;
      cx.fillStyle='rgba(0,0,0,0.68)';cx.beginPath();cx.roundRect?cx.roundRect(lx-bw/2,ly-bh/2,bw,bh,5):cx.rect(lx-bw/2,ly-bh/2,bw,bh);cx.fill();
      cx.fillStyle='#fff';cx.fillText(lbl,lx,ly);
      const tile=document.querySelector(`.tile[data-i="${i}"]`);
      if(tile?.classList.contains('on')){cx.font=`bold ${Math.max(7,Math.min(14,fs*.85))}px sans-serif`;cx.fillStyle='#ffd60a';cx.textAlign='left';cx.textBaseline='middle';cx.fillText('★',lx+bw/2+3,ly);}
    });
    wrap.appendChild(cv);
  }

  function drawTiles(){
    const row=document.getElementById('tileRow'); row.innerHTML='';
    CG.tiles.forEach((tile,i)=>{
      const card=document.createElement('div'); card.className='tile'; card.dataset.i=i;
      const THUMB=58,sc=Math.min(THUMB/Math.max(1,tile.width),THUMB/Math.max(1,tile.height));
      const tw=Math.max(1,Math.round(tile.width*sc)),th=Math.max(1,Math.round(tile.height*sc));
      const t=document.createElement('canvas'); t.width=tw;t.height=th;t.getContext('2d').drawImage(tile,0,0,tw,th);
      const n=document.createElement('span'); n.className='tile-n'; n.textContent='#'+(i+1);
      card.appendChild(t); card.appendChild(n); row.appendChild(card);
      card.addEventListener('click',()=>{card.classList.toggle('on');drawMap();});
    });
  }

  async function exportZip(){
    const zip=new JSZip();
    for(let i=0;i<CG.tiles.length;i++){
      const card=document.querySelector(`.tile[data-i="${i}"]`);
      const marked=card?.classList.contains('on')??false;
      const src=CG.tiles[i];
      const exp=document.createElement('canvas'); exp.width=src.width; exp.height=src.height;
      const ec=exp.getContext('2d');
      ec.fillStyle='#fff';ec.fillRect(0,0,src.width,src.height);ec.drawImage(src,0,0);
      if(!marked){
        const id=ec.getImageData(0,0,src.width,src.height),d=id.data;
        for(let j=0;j<d.length;j+=4){d[j]=Math.round(d[j]*.74336+48.96);d[j+1]=Math.round(d[j+1]*.74336+48.96);d[j+2]=Math.round(d[j+2]*.74336+48.96);}
        ec.putImageData(id,0,0);
      }
      const blob=await new Promise(res=>exp.toBlob(res,'image/png'));
      zip.file(`tile_${i+1}.png`,blob);
    }
    const b=await zip.generateAsync({type:'blob'});
    const url=URL.createObjectURL(b),a=document.createElement('a');
    a.href=url;a.download='scene-grid.zip';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
  }

  function init(){sliceUp();drawMap();drawTiles();}
  return{init,exportZip};
})();

/* ═══════════════════════════════════════════════════════════
   ROUTER
═══════════════════════════════════════════════════════════ */
(function(){
  let phase=1,mute=false;
  const push=s=>{if(!mute)history.pushState(s,'');};

  function showWelcome(){document.getElementById('welcome').style.display='flex';document.getElementById('workspace').style.display='none';}
  function showWork(){document.getElementById('welcome').style.display='none';document.getElementById('workspace').style.display='flex';}

  function go(n){
    phase=n;
    [1,2,3,4].forEach(i=>{const el=document.getElementById('phase'+i);if(el)el.classList.toggle('on',i===n);});
    // update topbar step
    document.querySelectorAll('.tb-step').forEach(el=>{
      el.dataset.phase=n;
      el.textContent=`${n} ${Locale.get('step')}`;
    });
    if(n===3) Cropper.init();
    if(n===4) Results.init();
    push({v:'ws',p:n});
  }

  function reset(){
    CG.regions=[];CG.source=null;CG.frame=null;CG.canvas=null;CG.tiles=[];
    const tw=document.getElementById('thumbWrap');if(tw)tw.style.display='none';
    const tp=document.getElementById('toP3');if(tp)tp.disabled=true;
    Grid.wipe();phase=1;showWelcome();push({v:'welcome'});
  }

  document.addEventListener('DOMContentLoaded',()=>{
    Locale.mount(); Locale.apply(Locale.cur());
    Grid.init(); Importer.init();

    document.getElementById('btnLaunch').addEventListener('click',()=>{showWork();go(1);});
    document.getElementById('toP2').addEventListener('click',()=>go(2));
    document.getElementById('toP1b').addEventListener('click',()=>go(1));
    document.getElementById('toP3').addEventListener('click',()=>go(3));
    document.getElementById('toP2b').addEventListener('click',()=>go(2));
    document.getElementById('btnCut').addEventListener('click',()=>{Cropper.commit();go(4);});
    document.getElementById('toP3b').addEventListener('click',()=>go(3));
    document.getElementById('btnExport').addEventListener('click',()=>Results.exportZip());
    document.querySelectorAll('.js-reset').forEach(el=>el.addEventListener('click',reset));

    history.replaceState({v:'welcome'},'');
    window.addEventListener('popstate',e=>{
      const s=e.state||{v:'welcome'}; mute=true;
      try{if(s.v==='ws'){showWork();go(s.p||1);}else{showWelcome();phase=1;}}
      finally{mute=false;}
    });

    go(1);
  });
})();
