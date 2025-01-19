import { PostCreateForm } from "@/components/posts/post-create-form";
import { PostList } from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";
// import { Chip } from "@nextui-org/react";
interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <div className="mb-3 relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-1 h-7 text-small rounded-full shadow-lg shadow-warning/40 bg-warning text-warning-foreground">
          <h1 className="flex-1 text-inherit text-lg font-bold p-3 capitalize">
            {slug}
          </h1>
        </div>

        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
