import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-700">:`(</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-slate-400">Type not Found</p>
            <p className="mb-4 text-lg font-light text-slate-400">Back to the homepage and try another pokemon type. </p>
            <Link href="/" className='hover:shadow-xl hover:transition-all text-slate-600 hover:text-slate-800 p-2 rounded-full px-5'>
                Back to Home
            </Link>
        </div>   
    </div>
  )
}