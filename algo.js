/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 export default function levenshteinDistance(a, b) {
  // Create empty edit distance matrix for all possible modifications of
  // substrings of a to substrings of b.
