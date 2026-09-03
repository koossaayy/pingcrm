<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLocale
{
    public function handle(Request $request, Closure $next)
    {
        $locale = $this->resolveLocale($request);
        app()->setLocale($locale);
        session(['locale' => $locale]);

        return $next($request);
    }

    private function resolveLocale(Request $request): string
    {
        $supported = config('app.available_locales', ['en', 'fr', 'es']);

        // Pick one strategy: keep the full chain below, or trim it to the
        // single source that fits your app.

        // 1. User preference from the database (e.g. a users.locale column)
        if ($request->user()?->locale && in_array($request->user()->locale, $supported)) {
            return $request->user()->locale;
        }

        // 2. Session (set by the language-switcher route below)
        $sessionLocale = session('locale');
        if ($sessionLocale && in_array($sessionLocale, $supported)) {
            return $sessionLocale;
        }

        // 3. Browser Accept-Language header (automatic detection)
        $preferred = $request->getPreferredLanguage($supported);
        if ($preferred) {
            return $preferred;
        }

        // 4. App default
        return config('app.locale', 'en');
    }
}