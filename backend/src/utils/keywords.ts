export const cleanKeywords = (
  keywords: string,
  type: 'positive' | 'negative',
) => {
  if (!keywords) return;

  const REGEX_REMOVE_PARENTHESIS = /([()])/g;
  const REGEX_REMOVE_TAGS = /<\b(.*?)>/g;

  const cKeywords = keywords
    .replace(REGEX_REMOVE_PARENTHESIS, '')
    .replace(REGEX_REMOVE_TAGS, '')
    .split(',')
    .filter((k) => k.trim())
    .map((k) => ({
      keyword: k.trim().split(':').shift(),
      type,
    }));

  return cKeywords;
};
