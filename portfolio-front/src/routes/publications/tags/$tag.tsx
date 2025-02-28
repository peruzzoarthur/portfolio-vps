import { createFileRoute } from '@tanstack/react-router'
import loading from '../../../assets/loading/loading.svg'
import { BlogFooter } from '@/components/blog-footer'
import { useGetPosts } from '@/hooks/useGetPosts'
import { LayoutWithBars } from '@/components/blog-layout-bars'
import { PostCard } from '@/components/post-card'
import { Tag } from '@/types'
import { BlogBreadcrumb } from '@/components/blog-breadcrumb'

export const Route = createFileRoute('/publications/tags/$tag')({
    component: PostsByTag,
})

function PostsByTag() {
    const { tag } = Route.useParams()
    const { posts, isFetchingPosts } = useGetPosts()
    const filteredPosts = posts?.filter((p) =>
        p.tags.includes(tag.toUpperCase() as Tag)
    )
    return (
        <div className=" bg-black-100 bg-opacity-50">
            <div className="min-h-[110vh] p-4 flex flex-col space-y-4">
                <LayoutWithBars>
                    <BlogBreadcrumb param={tag.toUpperCase() as Tag} />
                    <h2 className="text-2xl mb-2 mt-10">Posts</h2>
                    {isFetchingPosts ? (
                        <div className="flex justify-center items-center">
                            <img
                                src={loading}
                                alt="loading"
                                className="w-6 h-6"
                            />
                        </div>
                    ) : (
                        filteredPosts &&
                        filteredPosts.map((post) => (
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
