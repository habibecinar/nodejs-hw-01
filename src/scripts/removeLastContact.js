import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Silinecek kişi yok.');
      return;
    }
    contacts.pop(); // Son kişiyi çıkar
    await writeContacts(contacts); // Güncellenmiş diziyi kaydet
    console.log('Son kişi başarıyla silindi.');
  } catch (error) {
    console.error('Kişi silinirken hata oluştu:', error.message);
  }
};

removeLastContact();
