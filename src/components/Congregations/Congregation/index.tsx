import { Congregation } from ".."

interface CongregationProps  {
    congregation: Congregation
}

export function Congregation({
    congregation
}: CongregationProps) {
  return (
    <ul role="list" className="p-6 divide-y divide-slate-200 border-b-2 mb-2">
      <li className="flex py-4 first:pt-0 last:pb-0">
        <div className="ml-3 font-normal  overflow-hidden">
          <h1 className="_text-light-blue text-sm font-bold uppercase mb-5">{congregation.locality.name}</h1>
          <p className="text-sm"><strong>Encarregado: </strong>{congregation.locality.music_manager_id.name}</p>
          <p className="text-sm text-slate-900 truncate"><strong>Dia do mes: </strong>
            <span className="capitalize">
                {congregation.day} {congregation.name_week_day}
            </span>
          </p>
          <p className="text-sm text-slate-900 truncate"><strong>Horario: </strong> {congregation.time}</p>
        </div>
      </li>
    </ul>
  )
}
