import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {getSubjectColor} from '@/lib/utils';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";

interface Companion {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
}

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className='font-bold text-3xl mb-4'>{title}</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className='text-lg'>Subject</TableHead>
            <TableHead className='text-lg'>Duration</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {companions?.length ? (
            companions.map((companion) => (
              <TableRow key={companion.id}>
                <TableCell className="font-medium">
                  <Link href={`/companions/${companion.id}`}>
                    <div className='flex items-center gap-2'>
                        <div className='size-[72px] flex items-center justify-center rounded-lg max-md:hidden' style={{backgroundColor: getSubjectColor(companion.subject)}}>
                            <Image 
                            src={`/icons/${companion.subject}.svg`} 
                            alt={companion.subject} 
                            width={30} height={30}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-bold text-2xl'>
                                {companion.name}
                            </p>
                            <p className='text-lg'>
                                {companion.topic}
                            </p>
                        </div>
                    </div>
                  </Link>
                </TableCell>


                <TableCell>
                    <div className='subject-badge w-fit max-md:hidden'>
                        {companion.subject}
                    </div>
                    <div className='flex items-center justify-center rounded-lg w-fit p-2 md:hidden' style={{backgroundColor: getSubjectColor(companion.subject)}}>
                        <Image 
                        src={`/icons/${companion.subject}.svg`} 
                        alt={companion.subject} 
                        width={18} height={18} 
                        />
                    </div>
                </TableCell>



                <TableCell>
                    <div className='flex items-center gap-2 w-full justify-end'>
                        <p className='text-2xl'>{companion.duration} {' '}
                            <span className='max-md:hidden'>mins</span>
                        </p>
                        <Image 
                        src="/icons/clock.svg" 
                        alt="Duration" 
                        width={14} height={14} 
                        className='md:hidden'/>
                    </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center text-muted-foreground">
                No companions found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
