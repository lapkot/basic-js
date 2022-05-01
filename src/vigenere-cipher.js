const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(reversed) {
    this.reversed = reversed;
  }

  getKey(msg, keyword) {
    let key = keyword;
    while (msg.length > key.length) {
      key += keyword;
    }
    return key;
  }

  encrypt(plainText, keyword) {
    if (!plainText || !keyword) {
      throw new Error('Incorrect arguments!');
    }

    let encrypted = "";
    const message = plainText.toUpperCase();
    const key = this.getKey(plainText, keyword.toUpperCase());
    let index = 0;
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode < 'A'.charCodeAt(0) || charCode > 'Z'.charCodeAt(0)) {
        encrypted += String.fromCharCode(charCode);
      } else {
        let encryptedChar = (charCode + key.charCodeAt(index)) % 26;
        encryptedChar += 'A'.charCodeAt(0);
        encrypted += String.fromCharCode(encryptedChar);
        index++;
      }
    }
    return this.reversed === false ? Array.from(encrypted).reverse().join('') : encrypted;
  }

  decrypt(encrypted, keyword) {
    if (!encrypted || !keyword) {
      throw new Error('Incorrect arguments!');
    }
    const key = this.getKey(encrypted, keyword.toUpperCase());
    let decrypted = '';
    let index = 0;
    for (let i = 0; i < encrypted.length; i++) {
      const charCode = encrypted.charCodeAt(i);
      if (charCode < 'A'.charCodeAt(0) || charCode > 'Z'.charCodeAt(0)) {
        decrypted += String.fromCharCode(encrypted[i].charCodeAt(0));
      } else {
        let descriptedChar = (encrypted.charCodeAt(i) - key.charCodeAt(index) + 26) % 26;
        descriptedChar += 'A'.charCodeAt(0);
        decrypted += String.fromCharCode(descriptedChar);
        index++;
      }
    }
    return this.reversed === false ? Array.from(decrypted).reverse().join('') : decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
