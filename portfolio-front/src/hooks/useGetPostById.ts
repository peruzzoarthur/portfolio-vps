import { axiosInstance } from '@/api'
import { Post } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useGetPostById = (postId: number) => {
  const {
    data: post,
    isFetching: isFetchingPost,
    refetch: refetchPost,
  } = useQuery({
    queryKey: ['get-post', postId],
    queryFn: async (): Promise<Post | null> => {
      const { data }: { data: Post } = await axiosInstance.get(
        `/posts/${postId}`
      )
      if (!data) {
        return null
      }
      return data
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
  return { post, isFetchingPost, refetchPost }
}
