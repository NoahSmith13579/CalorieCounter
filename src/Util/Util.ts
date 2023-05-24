/**
 * Capitalizes the first letter of a string
 * @param {string} str
 * @returns
 */
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { capitalizeFirstLetter };
