export function getBoolean(str: string | undefined, defaultVal?: boolean) {
  try {
    if (str === '' || typeof str === 'undefined')
      throw new Error(`'${str}' is not a boolean`);
    return !!JSON.parse(str.toLowerCase());
  } catch (error) {
    if (typeof defaultVal !== 'undefined') {
      return defaultVal;
    }
    throw new Error(`'${str}' is not a boolean`);
  }
}

export function getNumber(str: string | undefined) {
  if (str === '' || typeof str === 'undefined')
    throw new Error(`'${str}' is not a number`);
  const num = JSON.parse(str);
  if (typeof num === 'number') {
    return num;
  }
  throw new Error(`'${str}' is not a number`);
}

export function getString(str: string | undefined) {
  try {
    if (str === '' || typeof str === 'undefined')
      throw new Error(`'${str}' is not a string`);
    return str;
  } catch (error) {
    throw new Error(`'${str}' is not a string`);
  }
}

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const addressRegex = new RegExp(/^(0x)?[0-9a-fA-F]{40}$/);
export const checkAddress = (address: string) => {
  return addressRegex.test(address);
};
