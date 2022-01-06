import * as React from 'react';

const SearchContext = React.createContext({
    searchStr: 'SearchValue...',
    reset: () => {}
});
export default SearchContext;
