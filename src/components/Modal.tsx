import { useEffect, type ReactNode } from "react";
import Button from "./Button";
import { X } from "lucide-react";

interface IModal {
    title?:string
    isOpen: boolean;
    closeModal(): void
    children: ReactNode
}

function Modal({ title, isOpen, closeModal, children }: IModal) {

  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  if (!isOpen) return null;

    return (
        <div className="fixed inset-0 px-4 bg-gray-600/50" onClick={closeModal}>
            <div className="h-full w-full flex justify-center items-center">
                <div className="bg-white px-4  py-6 md:px-8 md:py-10 rounded w-full max-w-lg" onClick={e => e.stopPropagation()}>
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <Button outline handleClick={closeModal}><X/></Button>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal