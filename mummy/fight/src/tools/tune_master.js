const {execFile}=require('child_process'),fs=require('fs');
const file=process.argv[2],iters=+process.argv[3]||5,reps=+process.argv[4]||2;
let tune=fs.existsSync('tune.json')?JSON.parse(fs.readFileSync('tune.json','utf8')):{};
const run=(wi,nw)=>new Promise((res,rej)=>execFile('node',[require('path').join(__dirname,'tune_worker.js'),file,'tune_in.json',String(wi),String(nw),String(reps)],{maxBuffer:1e7,timeout:3600e3},(e,out)=>e?rej(e):res(JSON.parse(out))));
(async()=>{
  for(let it=0;it<iters;it++){
    fs.writeFileSync('tune_in.json',JSON.stringify(tune));
    const t0=Date.now();
    const parts=await Promise.all([run(0,2),run(1,2)]);
    const res={};for(const p of parts)for(const k in p){res[k]=res[k]||[0,0];res[k][0]+=p[k][0];res[k][1]+=p[k][1];}
    const wr={};let lines=[];
    for(const k in res){wr[k]=res[k][0]/Math.max(1,res[k][1]);}
    const vals=Object.values(wr),spread=Math.max(...vals)-Math.min(...vals);
    for(const k of Object.keys(wr).sort((a,b)=>wr[b]-wr[a]))lines.push(k+':'+(wr[k]*100).toFixed(0)+'%('+((tune[k]&&tune[k].dmg)||1).toFixed(2)+')');
    fs.appendFileSync('tune.log',`iter ${it} ${((Date.now()-t0)/1000).toFixed(0)}s spread ${(spread*100).toFixed(0)}\n${lines.join(' ')}\n`);
    for(const k in wr){const cur=(tune[k]&&tune[k].dmg)||1;const gain=1.0/(1+it*0.35);let nx=cur*Math.exp(gain*(0.5-wr[k]));nx=Math.max(0.5,Math.min(2.0,nx));tune[k]={dmg:+nx.toFixed(3)};}
    fs.writeFileSync('tune.json',JSON.stringify(tune));
  }
  fs.appendFileSync('tune.log','done\n');
})();
