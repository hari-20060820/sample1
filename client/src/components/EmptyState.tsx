export function EmptyState({title,detail}:{title:string;detail:string}){
  return (
    <div className="border border-dashed border-red-600/30 rounded-lg p-10 text-center bg-black/50">
      <h2 className="text-2xl font-black italic text-white">{title}</h2>
      <p className="mt-2 text-stone-400">{detail}</p>
    </div>
  );
}
