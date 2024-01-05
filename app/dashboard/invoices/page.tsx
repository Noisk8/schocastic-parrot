import Search from "@/app/ui/search";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import Pagination from "@/app/ui/invoices/pagination";
import Table from "@/app/ui/invoices/table"
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from 'react'
import { turret } from "@/app/ui/fonts";


export default function page (){
    return (
<div className="w-full">
<div className="flex w-full items-center justify-between">
    <h1 className={`${turret.className} text-2xl font-bold text-green-400 } `}> Invoices </h1>
</div>

<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">

    <Search placeholder="busque papi" />
    <CreateInvoice /> 
</div>

<div className="mt-5 flex w-full justify-center">


</div>

</div>


    );
}
