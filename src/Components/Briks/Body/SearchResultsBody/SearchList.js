import React from 'react'
import ListQ from '../../../Common/Lists/Questions/ListQ'
import RedmineList from './RedmineList/RedmineList'

export default function SearchList({filter, questions}) {
    return (
        filter==='Search' ? <ListQ questions={questions}/> : <RedmineList questions={questions}/>
    )
}
