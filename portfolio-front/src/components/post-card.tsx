import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from './ui/card'
import { Link } from '@tanstack/react-router'
import { formatUpdatedAt } from '@/lib/utils'
import { Author, Tag } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type PostCardProps = {
    id: number
    title: string
    abstract: string
    updatedAt: string
    tags: Tag[]
    authors: Author[]
}
export const PostCard = ({
    id,
    title,
    abstract,
    updatedAt,
    tags,
    authors,
}: PostCardProps) => {
    return (
        <>
            <Link
                to={'/publications/$postId'}
                params={{ postId: id.toString() }}
            >
                <Card className="p-4 bg-gray-950 bg-opacity-50 mb-2">
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="flex items-center">
                        {authors.map((a) => (
                            <Avatar key={a.pictureUrl} className="size-8 mr-2">
                                <AvatarImage
                                    alt={`${a.firstName} ${a.lastName}`}
                                    src={a.pictureUrl}
                                />
                                <AvatarFallback>
                                    {`${a.firstName[0]?.toUpperCase()}${a.lastName[0]?.toUpperCase()}`}
                                </AvatarFallback>
                            </Avatar>
                        ))}
                        {formatUpdatedAt(updatedAt)}
                    </CardDescription>
                    <CardContent>{abstract}</CardContent>
                    <CardFooter>
                        {tags.map((t) => (
                            <p className="mr-1" key={t}>
                                #{t.toLowerCase()}
                            </p>
                        ))}
                    </CardFooter>
                </Card>
            </Link>
        </>
    )
}
