// import Header from '@/components/shared/Header'
// import TransformationForm from '@/components/shared/TransformationForm';
// import { transformationTypes } from '@/constants'
// import { getUserById } from '@/lib/actions/user.actions';
// import { auth } from '@clerk/nextjs/server';
// // import {auth} from '@clerk/nextjs'
// import { redirect } from 'next/navigation';

// const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
//   const {userId} = auth()
  
//     const transformation = transformationTypes[type];
//     if(!userId) redirect('/sign-in')
//     const user = await getUserById(userId)
//     console.log(user,"user")
//     // console.log("ya")
//   return (
//     <>
//       <Header 
//         title={transformation.title} 
//         subtitle={transformation.subTitle}
//       />
    
  
//       <section className="mt-10">
//         <TransformationForm  
//           action="Add"
//           userId={user?._id}
//           type={transformation.type as TransformationTypeKey}
//           creditBalance={user.creditBalance}
//         />
//       </section>
      
//     </>
//   )
// }

// export default AddTransformationTypePage


import React from 'react'

const AddTransformationTypePage = () => {
  return (
    <div> AddTransformationTypePage</div>
  )
}

export default AddTransformationTypePage