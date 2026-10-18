// usage: node tune_worker.js <html> <tune.json> <workerIdx> <nWorkers> <reps>
const fs=require('fs'),vm=require('vm');
const [,,file,tuneFile,wi,nw,reps]=process.argv;
const code=fs.readFileSync(file,'utf8').split('<script>')[1].split('</script>')[0];
const tune=JSON.parse(fs.readFileSync(tuneFile,'utf8'));
vm.runInNewContext(code+`
onMatchEnd=()=>{};
Object.assign(TUNE,${JSON.stringify(tune)});
const WPS=[];for(const [j,v] of Object.entries(JOBS))if(!v.hidden)for(const w of v.weapons)if(!(TUNE[w]&&TUNE[w].fixed))WPS.push([j,w]);
const res={};for(const [j,w] of WPS)res[w]=[0,0];
let k=0;
for(let a=0;a<WPS.length;a++)for(let b=a+1;b<WPS.length;b++)for(let r=0;r<${+reps||2};r++){
  if((k++)%${+nw}!==${+wi})continue;
  const A=WPS[a],B=WPS[b],sw=r%2===1;
  const ca={name:'A',job:A[0],weapon:A[1],stats:{atk:2,spd:2,hp:2,def:2,mp:2}},cb={name:'B',job:B[0],weapon:B[1],stats:{atk:2,spd:2,hp:2,def:2,mp:2}};
  newGame(sw?cb:ca,sw?ca:cb,'normal');G.cpuBoth=true;
  for(let i=0;i<60*60*12&&!G.over;i++)step();
  const ia=sw?1:0,ib=1-ia;
  res[A[1]][0]+=G.wins[ia];res[A[1]][1]+=G.wins[ia]+G.wins[ib];
  res[B[1]][0]+=G.wins[ib];res[B[1]][1]+=G.wins[ia]+G.wins[ib];
}
console.log(JSON.stringify(res));
`,{console,Math,Date,JSON,Object,Array,Map,Set,String,Number,isFinite,parseInt,Error,setTimeout,performance:{now:()=>Date.now()},URLSearchParams});
