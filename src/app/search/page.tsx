import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}
export default function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">{term}</h1>
      </div>
    </div>
  );
}
