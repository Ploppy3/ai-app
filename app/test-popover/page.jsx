'use client';
import React from 'react';
import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton } from '../../components/Popover/Popover';
import { useDisclosure } from '../../hooks/useDisclosure';
import Button from '../../components/Button/Button';

export default function TestPopoverPage() {
    const { isOpen, open, close } = useDisclosure();

    return (
        <div className="p-20 flex flex-col items-center gap-10 min-h-screen bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Popover Verification</h1>

            <div className="flex gap-4">
                {/* Controlled with useDisclosure */}
                <div className="p-4 border rounded bg-white">
                    <h2 className="text-lg font-semibold mb-2">Controlled (useDisclosure)</h2>
                    <Popover isOpen={isOpen} onClose={close} placement="bottom">
                        <PopoverTrigger>
                            <Button onClick={() => (isOpen ? close() : open())}>
                                {isOpen ? 'Close' : 'Open'} Controlled
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 p-4">
                            <PopoverCloseButton />
                            <div className="font-medium text-lg mb-2">Controlled Popover</div>
                            <p className="text-gray-600">
                                This popover is controlled by useDisclosure.
                            </p>
                            <div className="mt-4 flex justify-end">
                                <Button size="sm" variant="ghost" onClick={close}>Dismiss</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Uncontrolled */}
                <div className="p-4 border rounded bg-white">
                    <h2 className="text-lg font-semibold mb-2">Uncontrolled</h2>
                    <Popover placement="right">
                        <PopoverTrigger>
                            <Button colorPalette="gray">
                                Open Uncontrolled
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-56 p-4">
                            <div className="font-semibold border-b pb-2 mb-2">Self-managed State</div>
                            <p className="text-sm">
                                This popover manages its own open/closed state internally.
                            </p>
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Match Width */}
                <div className="p-4 border rounded bg-white">
                    <h2 className="text-lg font-semibold mb-2">Match Width</h2>
                    <Popover placement="bottom-start" matchWidth>
                        <PopoverTrigger>
                            <Button className="w-full justify-between">
                                Full Width Trigger
                                <span className="ml-2">▼</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-4">
                            <div className="text-center">same width as trigger</div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
}
