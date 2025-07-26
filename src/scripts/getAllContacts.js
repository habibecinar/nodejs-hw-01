import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Kişiler alınırken hata oluştu:', error.message);
    return [];
  }
};
// Top-level await sorununa karşı async fonksiyonla çalıştır
const run = async () => {
  const allContacts = await getAllContacts();
  console.log('Tüm kişiler:', allContacts);
};

run();
