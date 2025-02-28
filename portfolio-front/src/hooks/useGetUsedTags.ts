import { axiosInstance } from '@/api'
import { Tag } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useGetUsedTags = () => {
    const {
        data: usedTags,
        isFetching: isFetchingUsedTags,
        refetch: refetchUsedTags,
    } = useQuery({
        queryKey: ['get-used-tags'],
        queryFn: async (): Promise<Tag[] | []> => {
            const { data }: { data: Tag[] } =
                await axiosInstance.get(`/posts/used-tags`)
            if (!data) {
                return []
            }
            return data
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })

    return { usedTags, isFetchingUsedTags, refetchUsedTags }
}
