import { BlogBreadcrumb } from '@/components/blog-breadcrumb'
import { BlogFooter } from '@/components/blog-footer'
import { LayoutWithBars } from '@/components/blog-layout-bars'
import { Button } from '@/components/ui/button'
import { useGetUsedTags } from '@/hooks/useGetUsedTags'
import { Link, createFileRoute } from '@tanstack/react-router'
import loading from '../../../assets/loading/loading.svg'

export const Route = createFileRoute('/publications/tags/')({
    component: PostTags,
})

function PostTags() {
    const { usedTags, isFetchingUsedTags } = useGetUsedTags()

    return (
        <div className="h-[100vh] flex flex-col bg-black-100 bg-opacity-50">
            <LayoutWithBars>
                <BlogBreadcrumb param="Tags" />
                <div className="flex-grow flex flex-col items-center justify-center">
                    <h3 className="text-3xl mb-4">Tags</h3>
                    {isFetchingUsedTags ? (
                        <img src={loading} alt="loading" className="w-6 h-6" />
                    ) : (
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                            {usedTags &&
                                usedTags.map((tag) => (
                                    <Button variant="ghost" key={tag}>
                                        <Link
                                            to="/publications/tags/$tag"
                                            params={{ tag: tag.toLowerCase() }}
                                        >
                                            #{tag.toLowerCase()}
                                        </Link>
                                    </Button>
                                ))}
                        </div>
                    )}
                </div>
            </LayoutWithBars>
            <BlogFooter />
        </div>
    )
}
