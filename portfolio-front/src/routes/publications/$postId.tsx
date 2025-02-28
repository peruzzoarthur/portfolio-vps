import { createFileRoute } from '@tanstack/react-router'
import loading from '../../assets/loading/loading.svg'
import { Post } from '@/components/post'
import { useGetPostById } from '@/hooks/useGetPostById'
import { BlogFooter } from '@/components/blog-footer'

export const Route = createFileRoute('/publications/$postId')({
  component: PostById,
})

function PostById() {
  const { postId } = Route.useParams()
  const { post, isFetchingPost } = useGetPostById(Number(postId))

  return (
    <>
      <div className="min-h-[100vh] flex flex-col space-y-4 bg-black-100 bg-opacity-50">
        {isFetchingPost ? (
          <div className="flex justify-center items-center mt-6">
            <img src={loading} alt="loading" className="w-6 h-6" />
          </div>
        ) : (
          post && (
            <>
              <Post
                id={post.id.toString()}
                updatedAt={post.updatedAt}
                title={post.title}
                authors={post.authors}
                content={post.content}
                images={post.images}
              />
              <BlogFooter />
            </>
          )
        )}
      </div>
    </>
  )
}
