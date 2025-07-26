import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2); // JSON formatına çevir
    await fs.writeFile(PATH_DB, data, 'utf-8');             // Dosyaya yaz
  } catch (error) {
    console.error('Dosyaya yazılırken hata oluştu:', error.message);
  }
};
