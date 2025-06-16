import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>
        Start Learning your way.
      </div>  

      <h2 className='text-3xl font-bold'>
        Build and Personalize Learning Companions
      </h2>

      <p>
        Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.
      </p>

      <Image src="/images/cta.svg" alt="CTA" width={362} height={232} />

      <Link href="/companions/new" className="btn-primary flex items-center gap-2 mt-4">
        <Image
          src="/icons/plus.svg"
          alt="Plus Icon"
          width={12}
          height={12}
        />
        <span>Build a New Companion</span>
      </Link>
    </section>
  );
};

export default CTA;
