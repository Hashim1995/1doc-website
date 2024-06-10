import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["az",],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)x
  defaultLocale: "az",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [   '/',
     // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(de|en)/:path*',

  // Set a cookie to remember the previous locale for
  // all requests that have a locale prefix
  '/(de|en)/:path*',"/((?!_next|.*\\..*).*)",],
};