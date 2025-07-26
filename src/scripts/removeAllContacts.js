import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]); // Boş dizi yazarak tüm verileri sil
    console.log('Tüm kişiler başarıyla silindi.');
  } catch (error) {
    console.error('Kişiler silinirken hata oluştu:', error.message);
  }
};

removeAllContacts();
