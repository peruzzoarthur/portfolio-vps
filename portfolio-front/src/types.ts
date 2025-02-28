export type Post = {
    id: number
    title: string
    authors: Author[]
    content: string
    abstract: string
    images: Image[]
    publishedAt: string
    createdAt: string
    updatedAt: string
    tags: Tag[]
}

export type Author = {
    id: string
    firstName: string
    lastName: string
    pictureUrl: string
}

export type Image = {
    filename: string
    id: number
    data: {
        type: string
        data: number[]
    }
}

export enum Tag {
    AWS = 'AWS',
    GIS = 'GIS',
    IAC = 'IAC',
    NEST = 'NEST',
    POSTGRES = 'POSTGRES',
    PRISMA = 'PRISMA',
    PYTHON = 'PYTHON',
    REACT = 'REACT',
    TERRAFORM = 'TERRAFORM',
    TEST = 'TEST',
    TYPEORM = 'TYPEORM',
    TYPESCRIPT = 'TYPESCRIPT',
}
