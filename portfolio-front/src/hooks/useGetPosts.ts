import { axiosInstance } from '@/api'
import { Post } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useGetPosts = () => {
  const {
    data: posts,
    isFetching: isFetchingPosts,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ['get-posts'],
    queryFn: async (): Promise<Post[] | []> => {
      const { data }: { data: Post[] } = await axiosInstance.get(`/posts`)
      if (!data) {
        return []
      }
      return data
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  return { posts, isFetchingPosts, refetchPosts }
}
