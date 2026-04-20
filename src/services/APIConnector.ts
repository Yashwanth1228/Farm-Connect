// /services/APIConnector.ts
class APIConnector {
    async onSearch(requestState: any, queryConfig: any) {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requestState, queryConfig }),
      });
  
      return res.json();
    }
  
    async onAutocomplete(requestState: any, queryConfig: any) {
      const res = await fetch("/api/autocomplete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requestState, queryConfig }),
      });
  
      return res.json();
    }
  }
  
  export default APIConnector;