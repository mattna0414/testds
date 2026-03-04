import type { PropsWithChildren } from 'react';

type ModalProps = PropsWithChildren<{
  open: boolean;
  title?: string;
  onClose?: () => void;
}>;

export function Modal({ open, title = 'Modal', onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="pds-modal-overlay" role="presentation" onClick={onClose}>
      <section
        className="pds-modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="pds-modal__header">
          <h2 className="pds-modal__title">{title}</h2>
          <button className="pds-modal__close" type="button" onClick={onClose} aria-label="Close modal">
            x
          </button>
        </header>
        <div className="pds-modal__content">{children}</div>
      </section>
    </div>
  );
}

export type { ModalProps };
