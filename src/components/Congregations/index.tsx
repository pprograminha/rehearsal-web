import { AiOutlineSortAscending } from "react-icons/ai"
import { Congregation } from "./Congregation"

export interface Congregation {
    _id: string,
    id: number,
    day: string,
    name_week_day: string,
    time: string,
    locality: {
        id: number,
        name: string,
        address: string,
        zip_code: string,
        music_manager_id: {
            id: number,
            name: string,
            type: string
        },
        city: string
    }
}

interface Congregations {
    documents: Congregation[]
}

export async function Congregations() {
    const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/data-yxjjc/endpoint/data/v1/action/find",
        {
            method: "POST",
            headers: {
                "api-key": process.env.API_KEY || "*",
            },
            body: JSON.stringify(  {
                dataSource: "rehearsal",
                database: "ccb_rehearsal_manager", 
                collection: "rehearsal", 
                filter: { "locality.name": { $regex: "", $options: "i" } }, 
                sort: { "locality.name": 1 }, 
            },
        )
        },
    ) 

    const { documents: congregations } = await response.json() as Congregations;

    return (
      <section >
        <header className="flex items-center justify-between p-2 pb-7"> 
            <span className="text-black/60 text-xs">Encontrados: <span className="_text-dark-blue font-semibold">{congregations.length}</span></span>
            <span className="text-black/60 text-xs flex items-center gap-1">Ordenar: 
                <span className="_text-dark-blue font-semibold">
                    <AiOutlineSortAscending size={20} />
                </span>
            </span>
        </header>
        <section className="h- overflow-auto">
            {congregations.map(congregation =>
                <Congregation key={congregation._id} congregation={congregation}/>
            )}
        </section>
      </section>
    )
  }
  