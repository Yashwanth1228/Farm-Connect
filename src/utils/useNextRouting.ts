// /utils/useNextRouting.ts
import { useRouter } from "next/router";
import { useMemo } from "react";

export const useNextRouting = (config: any, basePathUrl: string) => {
  const router = useRouter();
  const { asPath } = router;

  const getSearchParamsFromUrl = (url: string) => {
    return url.match(/\?(.+)/)?.[1] || "";
  };

  const routingOptions = {
    readUrl: () => {
      return getSearchParamsFromUrl(asPath);
    },
    writeUrl: (url: string, { replaceUrl }: any) => {
      const method = router[replaceUrl ? "replace" : "push"];

      const params = Object.fromEntries(
        new URLSearchParams(url).entries()
      );

      method(
        { query: { ...router.query, ...params } },
        undefined,
        { shallow: true }
      );
    },
    routeChangeHandler: (callback: any) => {
      const handler = (fullUrl: string) => {
        if (fullUrl.includes(basePathUrl)) {
          callback(getSearchParamsFromUrl(fullUrl));
        }
      };

      router.events.on("routeChangeComplete", handler);

      return () => {
        router.events.off("routeChangeComplete", handler);
      };
    }
  };

  return useMemo(() => {
    return {
      ...config,
      routingOptions
    };
  }, [router.isReady]);
};