import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <Button className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeftIcon onClick={() => navigate(-1)} />
          </Button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-700 font-bold ">{title}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
