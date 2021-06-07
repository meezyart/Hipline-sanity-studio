import { PatchEvent, set, unset } from 'part:@sanity/form-builder/patch-event'
import client from 'part:@sanity/base/client'
import FormField from 'part:@sanity/components/formfields/default'
import React, { useState, useEffect } from 'react'
import SearchableSelect from 'part:@sanity/components/selects/searchable'

export const FileSearchableSelect = React.forwardRef(
  ({ onFocus, onBlur, onChange, type, value, level, markers, readOnly }, ref) => {
    const [inputValue, setInputValue] = useState(null)
    const [isFetching, setIsFetching] = useState(false)
    const [hits, setHits] = useState([])
    const [files, setFiles] = useState([])

    useEffect(() => {
      setIsFetching(true)
      client
        .fetch(
          "*[_type == 'sanity.fileAsset'] { originalFilename, url, size } | order(originalFilename)"
        )
        .then(results => {
          setIsFetching(false)
          setFiles(results)
        })
    }, [])

    function handleChange({ props }) {
      const { originalFilename, url } = props
      onChange(PatchEvent.from(set({ name: originalFilename, url })))
      setInputValue(null)
    }

    function handleOpen() {
      search('')
    }

    function handleBlur() {
      onBlur()
    }

    function handleFocus() {
      onFocus()
    }

    function handleSearch(query) {
      search(query)
    }

    function handleClear() {
      onChange(PatchEvent.from(unset()))
    }

    function formatSize(size) {
      const kb = Math.round(size / 1000)
      const mb = kb > 1000 ? size / 1000000 : null
      const roundedMb = mb ? Math.round(mb * 100) / 100 : null
      return roundedMb ? roundedMb + ' mb' : kb + ' kb'
    }

    function search(query) {
      setInputValue(query)
      setHits(
        files
          .filter(
            ({ originalFilename }) =>
              originalFilename.toLowerCase().indexOf(query.toLowerCase()) > -1
          )
          .map(({ size, originalFilename, url }) => (
            <div style={{ display: 'flex' }} url={url} originalFilename={originalFilename}>
              <div>{originalFilename}</div>
              <div
                style={{
                  fontSize: 11,
                  opacity: 0.75,
                  marginLeft: 'auto',
                  flexShrink: 0,
                  whiteSpace: 'nowrap'
                }}
              >
                {formatSize(size)}
              </div>
            </div>
          ))
      )
    }

    function renderItem(originalFilename) {
      return originalFilename
    }

    return (
      <FormField markers={markers} label={type.title} level={level} description={type.description}>
        <SearchableSelect
          placeholder="Type to search…"
          title={inputValue}
          onOpen={handleOpen}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSearch={handleSearch}
          onChange={handleChange}
          onClear={handleClear}
          value={value}
          inputValue={inputValue === null ? value?.name : inputValue}
          renderItem={renderItem}
          isLoading={isFetching}
          items={hits}
          ref={ref}
          readOnly={readOnly}
        />
        {value?.url && (
          <a
            target="_blank"
            href={value.url}
            style={{
              display: 'block',
              background: 'whitesmoke',
              padding: 6,
              margin: '6px 0 0 0',
              fontSize: '.75em',
              border: '1px solid rgba(0,0,0,.1)',
              color: 'inherit'
            }}
          >
            {value.url.replace('https://cdn.sanity.io', '')}
          </a>
        )}
      </FormField>
    )
  }
)
