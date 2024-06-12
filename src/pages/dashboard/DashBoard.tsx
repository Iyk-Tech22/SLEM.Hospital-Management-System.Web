import { DashboardStats } from "@/data/constant";
import { currencyFormater } from "@/utils/currencyFormater";


export default function DashBoard() {
  return (
    <div className="flex flex-col space-y-5">
        <header>
          <ul className="w-full flex justify-between items-center">
            {
              DashboardStats.map(data => (
                  <li key={data.name} className="flex items-center space-x-3 px-8 py-6 rounded-md bg-white shadow-md" >
                    <div>
                      <data.icon className="text-primaryOrange" size={25}/>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-primaryBlue">{data.name}</p>
                      <small className="text-base text-primaryPurple font-medium">
                        {
                          data.name.toLowerCase() === "hospital earning" ?
                            currencyFormater(data.stats) : data.stats
                        }
                      </small>
                    </div>
                  </li>
              ))
            }
          </ul>
        </header>
    </div>
  )
}
