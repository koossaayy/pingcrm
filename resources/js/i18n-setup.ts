import { createI18n } from 'vue-i18n';

const modules = import.meta.glob<{ default: Record<string, string> }>(
    '../../lang/*.json',
    { eager: true },
);

const messages: Record<string, Record<string, string>> = {};
for (const path in modules) {
    const locale = path.match(/\/([^/]+)\.json$/)?.[1];
    if (locale) {
        messages[locale] = modules[path].default;
    }
}

// Start from the visitor's saved choice, else their browser language,
// else the project's primary language. SSR-safe: both checks are guarded.
const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null;
const browser = typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : null;
const initialLocale = [stored, browser].find((l) => l && l in messages) ?? 'en';

const i18n = createI18n({
  legacy: false,
  // Templates use $t(): make the global available regardless of the
  // vue-i18n major's default for this flag.
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages,
});

export default i18n;