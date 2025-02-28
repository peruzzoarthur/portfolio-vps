import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { ListType } from '@/routes/publications'
import React from 'react'

type ListTypeMenubarProps = {
    listType: ListType
    setListType: React.Dispatch<React.SetStateAction<ListType>>
}
export const ListTypeMenubar = ({
    listType,
    setListType,
}: ListTypeMenubarProps) => {
    return (
        <Menubar className="bg-black-100 bg-opacity-10 items-center justify-center mb-2">
            <MenubarMenu>
                <MenubarTrigger
                    className={
                        listType === 'tags' ? 'font-bold' : 'font-normal'
                    }
                    onClick={() => setListType('tags')}
                >
                    Tags
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger
                    className={
                        listType === 'series' ? 'font-bold' : 'font-normal'
                    }
                    onClick={() => setListType('series')}
                >
                    Series
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger
                    className={
                        listType === 'posts' ? 'font-bold' : 'font-normal'
                    }
                    onClick={() => setListType('posts')}
                >
                    Posts
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}
