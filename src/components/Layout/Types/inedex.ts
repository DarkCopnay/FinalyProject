import React from 'react'

export type AppProps = {
    Routes?: React.FC<{Components: object}>,
    Components?: object
}

export type UrlsType = {
    home: string,
    market: string,
    register: string
    login: string,
}