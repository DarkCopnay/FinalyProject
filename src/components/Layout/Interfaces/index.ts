import React from 'react'

export interface PageTemplateProps {
    Layout: React.ComponentType<object>
    Content: React.ComponentType;
}

export interface RootLayoutProps {
    children: React.ReactNode
}