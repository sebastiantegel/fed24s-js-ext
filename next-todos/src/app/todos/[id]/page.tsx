import { Button } from "@/components/Button";

const TodoPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <>
      <span>The todo page: {id}</span>
      <div>
        <Button />
      </div>
    </>
  );
};

export default TodoPage;
