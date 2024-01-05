import { fetchRevenue } from '../lib/data';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { lusitana, spacemono, turret } from '../ui/fonts';

export default async function page (){

    const revenue = await fetchRevenue()
    console.log(revenue)
    return  <div>

<main>
<h1 className={`${turret.className}  text-center text-4xl font-bold text-green-300 ` }> Noisk8</h1>

<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {/* 
    <p className={`${turret.className}  text-center text-3xl  text-green-300 ` }> Woman in a box with her head in her box
Speaks french when spoken like a tourist french
Hey classic coca-cola </p> */}
</div>

<div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols4 lg:grid-cols-8'>
    <RevenueChart revenue={revenue} />


</div>
</main>

    </div>
}

