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
      const params = new URLSearchParams(
        getSearchParamsFromUrl(asPath)
      );
    
      // 🔥 FIX: map page → current
      if (params.get("page")) {
        params.set("current", params.get("page")!);
        params.delete("page");
      }
    
      return params.toString();
    },
    
    writeUrl: (url: string, { replaceUrl }: any) => {
      const method = router[replaceUrl ? "replace" : "push"];
    
      const params = new URLSearchParams(url);
    
      // 🔥 FIX: map current → page
      if (params.get("current")) {
        params.set("page", params.get("current")!);
        params.delete("current");
      }
    
      const finalParams = Object.fromEntries(params.entries());
    
      method(
        { pathname: basePathUrl, query: finalParams },
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