import React, { ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';


{/*Here "?" that the property or prop is optional*/}
interface MeetingModelProps {
    isOpen : boolean;
    onClose: () => void;
    title : string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    image?: string;
    buttonIcon?: string;
}

const MeetingModel = ({isOpen, onClose, title, className, children, handleClick, buttonText, image, buttonIcon} : MeetingModelProps) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          className='flex bg-dark-1 text-white flex-col border-none px-6 py-9 w-full max-w-[520px]'
        >
          <div className='flex flex-col gap-6'>
            
            {image && (
              <div className='flex justify-center'>
                <Image 
                  src={image}
                  alt='image'
                  height={72}
                  width={72}
                />
              </div>
            )}
            
            <h1
              className={cn('text-3xl font-bold leading-[42px]', className)}
            >{title}</h1>
            
            {children}
            
            <Button 
              className={
                'bg-blue-700 focus-visible:ring-0 focus-visible:ring-offset-0'
              }
              onClick={handleClick}
            >
              {buttonIcon && (
                <Image 
                  src={buttonIcon}
                  alt='icon'
                  height={13}
                  width={13}
                />
              )}{" "}
              &nbsp; {/* Here "&nbsp;" is used for putting an extra space in case there is an buttonIcon */}
              {buttonText || 'Schedule Meeting'}
            </Button>

          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default MeetingModel