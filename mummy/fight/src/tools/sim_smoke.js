const fs=require('fs'),vm=require('vm');
const code=fs.readFileSync(process.argv[2]||'src/mami-fight.html','utf8').split('<script>')[1].split('</script>')[0];
vm.runInNewContext(code+`
onMatchEnd=()=>{};
const WPS=[];for(const [j,v] of Object.entries(JOBS))if(!v.hidden)for(const w of v.weapons)WPS.push([j,w]);
const st={errs:[],slides:0,reloads:0,booms:0,done:0,n:0,mk:{}};
const os=startMove;startMove=function(f,k){if(k==='SL')st.slides++;return os(f,k);};
const orl=startReload;startReload=function(f){st.reloads++;return orl(f);};
const ob=projBoom;projBoom=function(p){st.booms++;return ob(p);};
for(let t=0;t<WPS.length*2;t++){
  const [j1,w1]=WPS[t%WPS.length],[j2,w2]=WPS[(t*5+3)%WPS.length];
  newGame({name:'A',job:j1,weapon:w1,stats:{atk:2,spd:2,hp:2,def:2,mp:2}},{name:'B',job:j2,weapon:w2,stats:{atk:2,spd:2,hp:2,def:2,mp:2}},'hard');G.cpuBoth=true;
  try{for(let i=0;i<60*60*10&&!G.over;i++){step();for(const f of G.f){if(!isFinite(f.x)||!isFinite(f.hp))throw new Error('nan '+j1+w1);if(f.moveKey)st.mk[f.moveKey]=1;}}}catch(e){st.errs.push(j1+'/'+w1+' vs '+j2+'/'+w2+': '+e.message+' '+(e.stack||'').split('\\n')[1]);}
  st.n++;if(G.over)st.done++;
}
st.mk=Object.keys(st.mk).join(',');
console.log(JSON.stringify(st));
`,{console,Math,Date,JSON,Object,Array,Map,Set,String,Number,isFinite,parseInt,Error,setTimeout,performance:{now:()=>Date.now()},URLSearchParams});
