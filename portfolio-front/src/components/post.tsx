import { enhanceMarkdownWithImages, formatUpdatedAt } from '@/lib/utils'
import { Author, Image } from '@/types'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Separator } from './ui/separator'
import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import mocha from 'react-syntax-highlighter-catppuccin/mocha'
import { LayoutWithBars } from './blog-layout-bars'
import { BlogBreadcrumb } from './blog-breadcrumb'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type PostProps = {
  id: string
  updatedAt: string
  title: string
  authors: Author[]
  content: string
  images: Image[]
}

export const Post = ({
  id,
  updatedAt,
  title,
  authors,
  content,
  images,
}: PostProps) => {
  const contentWithImages = enhanceMarkdownWithImages(id, content, images)
  console.log(updatedAt)
  return (
    <LayoutWithBars>
      <BlogBreadcrumb param={Number(id)} />

      <header className="mt-20">
        <h1 className="text-2xl">{title}</h1>
        {authors.map((a) => (
          <div className="flex items-center space-x-1">
            <Avatar key={a.pictureUrl} className="size-10">
              <AvatarImage
                alt={`${a.firstName} ${a.lastName}`}
                src={a.pictureUrl}
              />
              <AvatarFallback>
                {`${a.firstName[0]?.toUpperCase()}${a.lastName[0]?.toUpperCase()}`}
              </AvatarFallback>
            </Avatar>
            <p key={a.id}>
              {a.firstName} {a.lastName}
            </p>
            <p className="text-sm">{formatUpdatedAt(updatedAt)}</p>
          </div>
        ))}
        <Separator orientation="horizontal" className="my-4" />
      </header>
      <main className="prose dark:prose-invert w-full max-w-3xl px-6 ">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <ReactSyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  style={mocha}
                >
                  {String(children).replace(/\n$/, '')}
                </ReactSyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {contentWithImages}
        </ReactMarkdown>
        <Separator orientation="horizontal" />
      </main>
    </LayoutWithBars>
  )
}
