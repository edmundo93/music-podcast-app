'use client'

import React, { useContext, useEffect, useState } from 'react'
import '@app-styles/utils/layout.css'
import Tag from '@app-components/ui/tag'
import Search from '@app-components/search/search'
import { PodcastsContext } from '@/contexts/podcast-context/podcasts.context'
import { PodcastItemI } from '@/api/data/Podcast'
import { matchVariables } from '@/utils/stringOperators'
import { updateFilteredPodcasts } from '@/contexts/podcast-context/podcasts.actions'

const SearchSection = () => {
  const { dispatch, podcasts } = useContext(PodcastsContext)
  const [search, setSearch] = useState<string>('')
  const [numResults, setNumResults] = useState<number>(0)

  useEffect(() => {
    if (!search) {
      updateFilteredPodcasts(dispatch, podcasts)
      setNumResults(0)
    } else {
      filterResults()
    }
  }, [search, podcasts])

  const filterResults = () => {
    const results = podcasts.filter(
      (podcast: PodcastItemI) =>
        matchVariables(podcast.title.label, search) ||
        matchVariables(podcast['im:artist'].label, search)
    )

    updateFilteredPodcasts(dispatch, results)
    setNumResults(results.length)
  }

  return (
    <div className="row row-aligned-end all-width" data-testid="search-section">
      <Tag value={numResults} mode="primary" />
      <Search
        value={search}
        setValue={setSearch}
        placeholder={'Filter podcasts...'}
      />
    </div>
  )
}

export default SearchSection
