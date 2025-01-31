import { Card } from "./Card"
import { Item } from "../types/types"

type MainProps = {
  data: Item[]
}

const Main = ({data}: MainProps) => {

    return (
      <main className="flex-grow w-[70%] mx-auto">
        <h2 className="text-center py-8 text-orange-400 font-extrabold text-4xl md:text-5xl w-full">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 ">
        {data.map((a) => (
            <Card data={a} key={a.id} />
        ))}
        </div>
      </main>
    )
  }

export default Main