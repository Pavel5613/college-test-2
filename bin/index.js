#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';
import solution from "../src/solution.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  '..',
  fileName
), 'utf-8');

// BEGIN
solution(content)
const monstr = content.split('\n');
const yyy = monstr.slice(1, monstr.length);
console.log(`Всего монстров: ${yyy.length}`)

// END