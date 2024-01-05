import { Suspense } from 'react';
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from '../lib/data';
import { Card } from '../ui/dashboard/cards';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { lusitana, spacemono, turret } from '../ui/fonts';
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';


export default async function page (){


const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
      return  <div>

<main>
<h1 className={`${turret.className}  text-center pb-8 text-4xl font-bold text-green-500 ` }> Noisk8</h1>

<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>

<Suspense fallback={<CardSkeleton />} >
<Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
</Suspense>
        {/* 
    <p className={`${turret.className}  text-center text-3xl  text-green-300 ` }> Woman in a box with her head in her box
Speaks french when spoken like a tourist french
Hey classic coca-cola </p> */}
</div>

<div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols4 lg:grid-cols-8'>
    <Suspense fallback={<RevenueChartSkeleton/>}>
    <RevenueChart />
    </Suspense>
    <Suspense fallback={<LatestInvoicesSkeleton/>}>
    <LatestInvoices  />
    </Suspense>


</div>
</main>

    </div>
}

