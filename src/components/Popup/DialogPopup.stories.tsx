// 버튼 눌렀을 경우 팝업 띄우기
import React, {useState} from 'react';

import type {Meta, StoryObj} from '@storybook/react';
import {CheckCircle, AlertCircle, Info} from 'lucide-react';

import DialogPopup from '@/components/layout/popup/DialogPopup';

const meta = {
	// title: 'Common(공통)/popup/DialogPopup',
	title: 'Components/popup/DialogPopup',
	component: DialogPopup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DialogPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 팝업 (정보 팝업)
function BasicDialogPopupComponent() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
			>
				정보 팝업
			</button>

			<DialogPopup
				isOpen={isOpen}
				onOpenChange={setIsOpen}
				title="시스템 공지"
				description="현재 시스템 상태 정보입니다."
				icon={Info}
				iconColor="text-blue-600"
				headerBgColor="bg-blue-50"
				confirmButtonText="확인"
				confirmButtonColor="bg-blue-500 hover:bg-blue-600"
				onConfirm={() => {
					setIsOpen(false);
				}}
			>
				<div className="space-y-3 text-sm">
					<div className="p-3 bg-gray-50 rounded-lg">
						<p className="font-semibold text-gray-900">점검 안내</p>
						<p className="text-gray-600 mt-1">
							2024년 1월 15일 야간 시간에 시스템 점검이 예정되어 있습니다.
						</p>
					</div>
					<div className="p-3 bg-gray-50 rounded-lg">
						<p className="font-semibold text-gray-900">영향 범위</p>
						<p className="text-gray-600 mt-1">모든 서비스가 일시적으로 중단될 수 있습니다.</p>
					</div>
				</div>
			</DialogPopup>
		</>
	);
}

/**
 * 기본 팝업 - 정보
 *
 * 시스템 공지사항 등을 표시하는 정보 팝업입니다.
 */
export const BasicDialog: Story = {
	args: {
		isOpen: false,
		onOpenChange: () => {},
		title: '',
	},
	render: () => <BasicDialogPopupComponent />,
};

// 확인 팝업
function ConfirmDialogComponent() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
			>
				확인 팝업
			</button>

			<DialogPopup
				isOpen={isOpen}
				onOpenChange={setIsOpen}
				title="작업 완료"
				description="요청하신 작업이 정상적으로 완료되었습니다."
				icon={CheckCircle}
				iconColor="text-green-600"
				headerBgColor="bg-green-50"
				confirmButtonText="확인"
				confirmButtonColor="bg-green-500 hover:bg-green-600"
				onConfirm={() => setIsOpen(false)}
			>
				<div className="text-center py-4">
					<p className="text-sm text-gray-600">
						모든 데이터가 성공적으로 저장되었습니다.
					</p>
				</div>
			</DialogPopup>
		</>
	);
}

/**
 * 확인 팝업
 *
 * 작업 완료를 알리는 성공 팝업입니다.
 */
export const ConfirmDialog: Story = {
	args: {
		isOpen: false,
		onOpenChange: () => {},
		title: '',
	},
	render: () => <ConfirmDialogComponent />,
};

// 경고 팝업
function WarningDialogComponent() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleConfirm = async () => {
		setIsLoading(true);
		await new Promise(resolve => setTimeout(resolve, 2000));
		setIsLoading(false);
		setIsOpen(false);
	};

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
			>
				경고 팝업
			</button>

			<DialogPopup
				isOpen={isOpen}
				onOpenChange={setIsOpen}
				title="삭제 확인"
				description="이 작업은 되돌릴 수 없습니다."
				icon={AlertCircle}
				iconColor="text-red-600"
				headerBgColor="bg-red-50"
				warningMessage="선택한 항목이 영구적으로 삭제됩니다. 정말로 계속하시겠습니까?"
				warningBgColor="bg-red-50 border-red-200"
				confirmButtonText="삭제"
				confirmButtonColor="bg-red-500 hover:bg-red-600"
				isConfirmLoading={isLoading}
				onConfirm={handleConfirm}
				onInteractOutside={e => e.preventDefault()}
			>
				<div className="text-sm text-gray-600">
					<p>이 작업으로 인해 다음이 발생합니다:</p>
					<ul className="list-disc list-inside mt-2 space-y-1">
						<li>모든 관련 데이터가 삭제됩니다</li>
						<li>삭제된 데이터는 복구할 수 없습니다</li>
						<li>관리자 로그에 기록됩니다</li>
					</ul>
				</div>
			</DialogPopup>
		</>
	);
}

/**
 * 경고 팝업
 *
 * 삭제 등의 중요한 작업을 확인하는 경고 팝업입니다.
 */
export const WarningDialog: Story = {
	args: {
		isOpen: false,
		onOpenChange: () => {},
		title: '',
	},
	render: () => <WarningDialogComponent />,
};

// 커스텀 헤더 색상
function CustomColorDialogComponent() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg"
			>
				커스텀 색상 팝업
			</button>

			<DialogPopup
				isOpen={isOpen}
				onOpenChange={setIsOpen}
				title="특별 이벤트"
				description="특별 이벤트 참여 안내입니다."
				icon={CheckCircle}
				iconColor="text-purple-600"
				headerBgColor="bg-purple-50"
				confirmButtonText="참여하기"
				confirmButtonColor="bg-purple-500 hover:bg-purple-600"
				onConfirm={() => setIsOpen(false)}
			>
				<div className="text-center py-4">
					<p className="text-sm text-gray-600">
						이번 달 특별 이벤트에 참여하시겠습니까?
					</p>
				</div>
			</DialogPopup>
		</>
	);
}

/**
 * 커스텀 색상
 *
 * 헤더와 버튼 색상을 커스터마이징한 팝업입니다.
 */
export const CustomColorDialog: Story = {
	args: {
		isOpen: false,
		onOpenChange: () => {},
		title: '',
	},
	render: () => <CustomColorDialogComponent />,
};