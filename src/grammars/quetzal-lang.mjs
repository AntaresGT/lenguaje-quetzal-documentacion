// src/grammars/quetzal-lang.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const quetzalGrammar = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'quetzal.tmLanguage.json'), 'utf8')
)

export const quetzalLang = {
  /** scopeName debe coincidir con el de tu .tmLanguage */
  scopeName: 'source.quetzal',
  /** alias para las vallas ```qz */
  aliases: ['qz', 'quetzal'],
  /** el JSON de la gramática */
  ...quetzalGrammar,
};
