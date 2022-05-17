


import React, {useState} from "react";
import Link from "next/link";
import {Icon, Search} from "semantic-ui-react"


const searchBar = () => {
    
    return (
        <Search
      onBlur={() => {
        results.length > 0 && setResults([]);
        loading && setLoading(false);
        setText("");
      }}
      loading={loading}
      value={text}
      resultRenderer={ResultRenderer}
      results={results || null}
      onSearchChange={handleChange}
      placeholder="Find other users"
      minCharacters={1}
      onResultSelect={(e, data) => Router.push(`/${data.result.email}`)}
    />
    )
}
