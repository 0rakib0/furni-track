import Card from '@/components/deshbord/card'
import OrdersTable from '@/components/orders_Table/OrdersTable'
import PageTitle from '@/components/PageTitle/PageTitle'
import RoutCard from '@/components/RoutCard/RoutCard'
import React from 'react'

function OrderManagement() {
  
  const orderRout = [
    {name:'📝 Add Order', path:'/add-order', id:'1'},
    {name:'📄 View Orders', path:'/', id:'2'},
    {name:'📈 Orders Report', path:'/', id:'3'},
    {name:'📆 Delivery Calendar', path:'/', id:'4'},
  ]

  return (
    <div>
      <PageTitle></PageTitle>
      {/* all routs about  orders*/}
      <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2'>
        {
          orderRout.map(rout =><RoutCard key={rout.id} name={rout.name} path={rout.path}></RoutCard>)
        }
      </div>

        {/* Pending Orders */}

        <OrdersTable title="🧾Pendding Orders"></OrdersTable>
    </div>
  )
}

export default OrderManagement