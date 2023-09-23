#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  fileName
), 'utf-8');

// BEGIN
function lol(content){
  let arrayPower = []
  let arrayHealth = []
  let object = {}
  let step5Object = {}
  let resulttest5
const splitContent = content.trim().split('\r\n').slice(1)
console.log(`Количество существ ${splitContent.length}`)
splitContent.map((elen)=>{
  elen = elen.split('|')
  arrayPower.push(elen[2])
})
splitContent.map((elen)=>{
  elen = elen.split('|')
  let power = arrayPower.sort((a,b)=>b - a)
  if(elen[2] === power[0])console.log(`Cтоимость найма 10 самых сильных существ ${elen[7] * 10}`)
  if(elen[2] === power[1])console.log(`Cтоимость найма 20 вторых по силе существ ${elen[7]* 20}`)
  arrayHealth.push(elen[3])
})
splitContent.map((elen)=>{
  elen = elen.split('|')
  const health = arrayHealth.sort((a,b)=>b - a)
  if(elen[3] === health[0])console.log(`Cтоимость найма отряда самых толстых cуществ ${elen[7] * elen[4]}`)
  if(elen[3] === health[health.length -1])console.log(`Cтоимость найма отряда самых худых cуществ ${elen[7]* elen[4]}`)
})
splitContent.map((elen)=>{
  elen = elen.split('|')
  object[elen[1]] = elen[7] / elen[2]
})
let res = Object.entries(object).sort((a,b)=>a[1] - b[1])
console.log(`Cамый выгодный юнит${res[0][0]}`,`\nCамый невыгодный юнит${res[res.length - 1][0]}`)
splitContent.map((elen)=>{
  elen = elen.split('|')
  step5Object[elen[1]] =(Math.floor(10000 / elen[7])*elen[2])
  resulttest5 = Object.entries(step5Object).sort((a,b)=>a[1]-b[1]);
})
console.log(`Cамая сильная армия из${resulttest5[resulttest5.length -1][0]}c силой = ${resulttest5[resulttest5.length -1][1]}`)
}
(lol(content))