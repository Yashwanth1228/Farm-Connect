class APIConnector {
  async onSearch(requestState: any, queryConfig: any) {
    const updatedState = {
      ...requestState,
      resultsPerPage: requestState.resultsPerPage || 3,
    };
  
    const res = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requestState: updatedState,
        queryConfig,
      }),
    });
  
    const response = await res.json();
  
    const current = updatedState.current || 1;
    const resultsPerPage = updatedState.resultsPerPage;
  
    return {
      results: response.results,
      totalResults: response.totalResults,
      totalPages: response.totalPages,
      facets: response.facets,
    
      resultSearchTerm: requestState.searchTerm || "",
      wasSearched: true,
      rawResponse: response,
    
      requestId: String(Date.now()),
    };
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

  // ✅ ADD THESE TWO (REQUIRED)
  onResultClick() {
    // optional: track analytics
  }

  onAutocompleteResultClick() {
    // optional: track analytics
  }
}

export default APIConnector;