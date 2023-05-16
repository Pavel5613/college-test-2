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
const splitContent = content.trim().split('\r\n').slice(1)
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
})
}
(lol(content))
// END
  // console.log(splitContent.length)