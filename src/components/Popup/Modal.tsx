import { useEffect, useMemo, useState, type PropsWithChildren } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type ModalProps = PropsWithChildren<{
  open: boolean;
  title?: string;
  onClose?: () => void;
}>;

export function Modal({ open, title = 'Modal', onClose, children }: ModalProps) {
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  const isControlled = useMemo(() => typeof onClose === 'function', [onClose]);
  const resolvedOpen = isControlled ? open : internalOpen;

  return (
    <Dialog
      open={resolvedOpen}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          onClose?.();
        }
        if (!isControlled) {
          setInternalOpen(nextOpen);
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {typeof children === 'string' ? <DialogDescription>{children}</DialogDescription> : null}
        </DialogHeader>
        {typeof children === 'string' ? null : <div className="text-sm text-muted-foreground">{children}</div>}
        <DialogClose className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          x
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export type { ModalProps };