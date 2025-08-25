// utils/text.ts

/**
 * Removes all HTML tags from a string to prevent XSS attacks.
 * @param input - The string to sanitize
 * @returns The sanitized string without HTML tags
 */
export function sanitizeText(input: string): string {
  return input.replace(/<[^>]*>?/gm, "");
}
