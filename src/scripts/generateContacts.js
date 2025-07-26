import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (count = 5) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < count; i++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log(`${count} kişi başarıyla eklendi.`);
  } catch (error) {
    console.error('Kişiler oluşturulurken hata:', error.message);
  }
};

generateContacts(5);
