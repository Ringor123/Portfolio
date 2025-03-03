/**
 * Notification component for displaying toast messages.
 * Features:
 * - Animated entrance and exit using Headless UI transitions
 * - Different icons for success and error states
 * - Dismissible with click
 * - Fixed positioning with z-index to appear above other content
 * - Responsive layout for different screen sizes
 * - Semi-transparent background with backdrop blur
 */

import { Fragment } from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'
import { useAppStore } from '../stores/useAppStore'

export default function Notification() {

  const {notification, closeNotification: resetNotification} = useAppStore()

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={notification.show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-yellow-main/80 backdrop-blur-sm shadow-lg ring-1 ring-black/5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {notification.error ? 
                    (<XCircleIcon className='h-6 w-6 text-red-main' />) : 
                    (<CheckCircleIcon className='h-6 w-6 text-green-main' />)
                  }
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-lg font-bold text-slate-800">Notification</p>
                  <p className="mt-1 text-base text-slate-700">{notification.text}</p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex rounded-md p-1.5 text-slate-700 hover:bg-red-main/10 hover:text-red-main transition-colors duration-200"
                    onClick={resetNotification}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}