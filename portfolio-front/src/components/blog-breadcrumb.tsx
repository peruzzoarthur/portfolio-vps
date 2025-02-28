import { Link } from '@tanstack/react-router'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from './ui/breadcrumb'
import { Tag } from '@/types'

type BlogBreadcrumbProps = {
    param: string | number | Tag
}

export const BlogBreadcrumb = ({ param }: BlogBreadcrumbProps) => {
    return (
        <Breadcrumb className="p-2">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link to="/publications">Publications</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {Object.values(Tag).includes(param as Tag) && (
                    <>
                        <BreadcrumbItem>
                            <Link to="/publications/tags">Tags</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </>
                )}
                <BreadcrumbItem>
                    {typeof param === 'number' && (
                        <BreadcrumbPage>Post #{param}</BreadcrumbPage>
                    )}
                    {typeof param === 'string' &&
                        !Object.values(Tag).includes(param as Tag) && (
                            <BreadcrumbPage>{param}</BreadcrumbPage>
                        )}
                    {Object.values(Tag).includes(param as Tag) && (
                        <BreadcrumbPage>{param.toString().toLowerCase()}</BreadcrumbPage>
                    )}
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
