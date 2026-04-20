import { SearchBox } from '@elastic/react-search-ui'

export default function HeaderSearch() {
  return (
    <SearchBox
      autocompleteSuggestions={true}
      searchAsYouType={true}
    />
  )
}