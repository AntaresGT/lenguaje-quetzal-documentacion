import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar la gramática de Quetzal
const quetzalGrammar = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../grammars/quetzal.tmLanguage.json'),
    'utf8'
  )
);

export const shikiConfig = {
  langs: [
    {
      id: 'quetzal',
      scopeName: 'source.quetzal',
      grammar: quetzalGrammar,
      aliases: ['qz']
    }
  ],
  themes: ['dracula', 'solarized-light'],
  defaultColor: false
};
