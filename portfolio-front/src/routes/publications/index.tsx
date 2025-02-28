import { createFileRoute } from '@tanstack/react-router'
import loading from '../../assets/loading/loading.svg'
import { useGetPosts } from '@/hooks/useGetPosts'
import { PostCard } from '@/components/post-card'
import { LayoutWithBars } from '@/components/blog-layout-bars'
import { BlogFooter } from '@/components/blog-footer'
import { Separator } from '@/components/ui/separator'
import { Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import { ListTypeMenubar } from '@/components/list-type-menubar'

export type ListType = 'posts' | 'tags' | 'series'

export const Route = createFileRoute('/publications/')({
    component: BlogIndex,
})

function BlogIndex() {
    const [listType, setListType] = useState<ListType>('posts')
    const { posts, isFetchingPosts } = useGetPosts()

    return (
        <div className="bg-black-100 bg-opacity-50 ">
            <div className="min-h-[110vh] p-4 flex flex-col space-y-4">
                <LayoutWithBars>
                    <Separator className="mt-16" />
                    <h2 className="text-3xl font-black mb-2 mt-10">
                        Welcome to my blog section!
                    </h2>
                    <h4 className="text-base">
                        Here I'll be writing about my journey as a developer and
                        data analyst. Sharing my code and some of my projects
                    </h4>
                    <div
                        className="w-full flex items-center justify-start pt-4 space-x-2"
                        id="my-social-links"
                    >
                        <h4 className="mr-2 text-base">My social links:</h4>
                        <a
                            href="https://github.com/peruzzoarthur/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="hover:text-purple-100 transition-transform duration-200 ease-in-out hover:rotate-12" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/arthur-peruzzo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="hover:text-purple-100 transition-transform duration-200 ease-in-out hover:rotate-12" />
                        </a>
                    </div>
                    <Separator className="my-10" />
                    <ListTypeMenubar listType={listType} setListType={setListType} />
                    {isFetchingPosts ? (
                        <div className="flex justify-center items-center">
                            <img
                                src={loading}
                                alt="loading"
                                className="w-6 h-6"
                            />
                        </div>
                    ) : (
                        posts &&
                        posts.map((post) => (
                            <PostCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                abstract={post.abstract}
                                updatedAt={post.updatedAt}
                                tags={post.tags}
                                authors={post.authors}
                            />
                        ))
                    )}
                </LayoutWithBars>
            </div>
            <BlogFooter />
        </div>
    )
}
