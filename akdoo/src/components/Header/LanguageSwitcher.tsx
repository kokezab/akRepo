import { locales } from "@/i18n";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const t = useTranslations("Languages");

  return (
    <div className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block">
      {
        locales.map((locale) => (
          <Link href={`/${locale}`} locale={locale} key={locale}
                className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
          >
            <span>{t(locale)}</span>
          </Link>
        ))
      }
    </div>
  );
}
