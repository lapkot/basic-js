const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.epam.com',
 *  'work.epam.com',
 *  'epam.com'
 * ]
 *
 * The result should be the following:
 * {
 *   '.com': 3,
 *   '.com.epam': 3,
 *   '.com.epam.code': 1,
 *   '.com.epam.work': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.').reverse();
    
    let newDomain = `.${domain[0]}`;
    const subdomains = [newDomain];
    for (let h = 1; h < domain.length; h++) {
      newDomain = `${newDomain}.${domain[h]}`
      subdomains.push(newDomain);
    }
    
    for (let j = 0; j < subdomains.length; j++) {
      if (result[subdomains[j]]) {
        result[subdomains[j]] = result[subdomains[j]] + 1
      } else {
        result[subdomains[j]] = 1
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
