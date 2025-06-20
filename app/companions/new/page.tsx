import CompanionForm from '@/components/ui/CompanionForm'
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { newCompanionPermissions } from '@/lib/actions/companion.action';
import Image from 'next/image';
import Link from 'next/link';
const NewCompanion = async () => {
  const { userId } = await auth();
  
  if(!userId) redirect('/sign-in');

  const canCreateCompanion = await newCompanionPermissions();



  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      {canCreateCompanion ? (
      <article className='w-full gap-4 flex flex-col '>
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
      ) : (
        <article className='companion-limit'>
          <Image src="/images/limit.svg" alt="Limit" width={360} height={230} />
          <div className='cta-badge'>
            Upgrade your plan
          </div>
          <h1>You have reached your companion limit</h1>
          <p>Upgrade your plan to create more companions and access premium features</p>
          <Link href="/subscription" className='btn-primary w-full justify-center'>Upgrade Now</Link>
        </article>
      )
    }
    </main>
  )
}

export default NewCompanion
