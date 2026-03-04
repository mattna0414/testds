// components/layout/DialogPopup.tsx
'use client';
import React from 'react';

import {LucideIcon} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';

export interface DialogPopupProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	description?: string;
	icon?: LucideIcon;
	iconColor?: string;
	headerBgColor?: string;
	warningMessage?: string;
	warningBgColor?: string;
	children?: React.ReactNode;
	cancelButtonText?: string;
	confirmButtonText?: string;
	confirmButtonColor?: string;
	onConfirm?: () => void | Promise<void>;
	isConfirmDisabled?: boolean;
	isConfirmLoading?: boolean;
	onInteractOutside?: (e: Event) => void;
}

const DialogPopup = React.forwardRef<HTMLDivElement, DialogPopupProps>(
	(
		{
			isOpen,
			onOpenChange,
			title,
			description,
			icon: Icon,
			iconColor = 'text-orange-600',
			headerBgColor = 'bg-orange-50',
			warningMessage,
			warningBgColor = 'bg-amber-50 border-amber-200',
			children,
			cancelButtonText = '취소',
			confirmButtonText = '확인',
			confirmButtonColor = 'bg-orange-500 hover:bg-orange-600',
			onConfirm,
			isConfirmDisabled = false,
			isConfirmLoading = false,
			onInteractOutside,
		},
		ref
	) => {
		const handleConfirm = async () => {
			if (onConfirm) {
				await onConfirm();
			}
		};

		return (
			<Dialog open={isOpen} onOpenChange={onOpenChange}>
				<DialogContent
					ref={ref}
					className="sm:max-w-[520px] max-h-[90%] p-0 gap-0 overflow-hidden"
					onInteractOutside={onInteractOutside}
				>
					{/* Header */}
					<DialogHeader className={`px-6 pt-6 pb-4 border-b ${headerBgColor}`}>
						<DialogTitle className="flex items-center gap-2 text-lg">
							{Icon && <Icon className={`size-5 ${iconColor}`} />}
							{title}
						</DialogTitle>
						{description && (
							<div className="text-left pt-2 space-y-2">
								<DialogDescription className="text-sm leading-relaxed">
									{description}
								</DialogDescription>
							</div>
						)}
					</DialogHeader>

					{/* Warning Message */}
					{warningMessage && (
						<div className={`px-6 pt-6 pb-0`}>
							<div className={`p-3 rounded-lg ${warningBgColor}`}>
								<p className="text-sm text-amber-800">
									<span className="font-semibold">⚠️ 주의사항</span>
									<br />
									{warningMessage}
								</p>
							</div>
						</div>
					)}

					{/* Content */}
					<div className="flex flex-col gap-4 px-6 py-6">
						{children}
					</div>

					{/* Footer */}
					<DialogFooter className="flex gap-2 px-6 py-4 border-t bg-muted/30">
						<DialogClose asChild>
							<Button
								type="button"
								variant="outline"
								className="flex-1 cursor-pointer"
							>
								{cancelButtonText}
							</Button>
						</DialogClose>

						<Button
							type="button"
							className={`flex-1 cursor-pointer ${confirmButtonColor}`}
							disabled={isConfirmDisabled || isConfirmLoading}
							onClick={handleConfirm}
						>
							{isConfirmLoading ? '처리 중...' : confirmButtonText}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	}
);

DialogPopup.displayName = 'DialogPopup';
export default DialogPopup;