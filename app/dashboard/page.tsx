import { fetchCardData, fetchLatestInvoices, fetchRevenue } from '../lib/data';
import { Card } from '../ui/dashboard/cards';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { lusitana, spacemono, turret } from '../ui/fonts';


export default async function page (){


    
const revenue = await fetchRevenue()
const latestInvoices = await  fetchLatestInvoices ()
const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
      return  <div>

<main>
<h1 className={`${turret.className}  text-center text-4xl font-bold text-green-300 ` }> Noisk8</h1>

<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>

<Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />

        {/* 
    <p className={`${turret.className}  text-center text-3xl  text-green-300 ` }> Woman in a box with her head in her box
Speaks french when spoken like a tourist french
Hey classic coca-cola </p> */}
</div>

<div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols4 lg:grid-cols-8'>
    <RevenueChart revenue={revenue} />
    <LatestInvoices latestInvoices={latestInvoices} />


</div>
</main>

    </div>
}

