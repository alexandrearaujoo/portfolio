export const fallbackLng = 'en';
export const languages = [fallbackLng, 'pt'];
export const defaultNS = 'translation';

export function getOptions(
  lng = fallbackLng,
  ns: string | Array<string> = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
}
