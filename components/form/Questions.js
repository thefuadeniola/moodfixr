import React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { baseMoods } from '@/constants/data'
import SliderComponent from './Slider'
import { useFormContext } from '@/context/formContext'
import Link from 'next/link'
import Image from 'next/image'

const Questions = ({ base }) => {
    const { question, setQuestion } = useFormContext()

    const fetchSpecificMood = () => {
        for (let i = 0; i < baseMoods.length; i++) {
            if (baseMoods[i].base === base) {
                return baseMoods[i].questions
            }
        }
    }

    const specificQuestions = fetchSpecificMood()

    return (
        <div className='flex flex-col'>
            <div className="w-full max-w-md mx-auto mt-8">
                <Listbox
                    as="div"
                    className="space-y-1"
                    value={question}
                    onChange={setQuestion}
                >
                    {({ open }) => (
                        <>
                            <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
                                {`You are ${base.toLowerCase()} because:`}
                            </Listbox.Label>
                            <div className="relative">
                                <span className="inline-block w-full rounded-md shadow-sm">
                                    <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                        <span className="block truncate">{question}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <svg
                                                className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                                <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </Listbox.Button>
                                </span>

                                <Transition
                                    show={open}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                                >
                                    <Listbox.Options
                                        static
                                        className="max-h-60 rounded-md py-1 text-base leading-6 shadow-sm overflow-auto focus:outline-none sm:text-sm sm:leading-5 z-10"
                                    >
                                        {Object.entries(specificQuestions).map((entry) => (
                                            <Listbox.Option key={entry[0]} value={entry[1]}>
                                                {({ selected, active }) => (
                                                    <div
                                                        className={`${active
                                                            ? "text-white bg-blue-600"
                                                            : "text-gray-900"
                                                            } cursor-default select-none relative py-2 pl-8 pr-4`}
                                                    >
                                                        <span
                                                            className={`${selected ? "font-semibold" : "font-normal"
                                                                } block truncate`}
                                                        >
                                                            {entry[1]}
                                                        </span>
                                                        {selected && (
                                                            <span
                                                                className={`${active ? "text-white" : "text-blue-600"
                                                                    } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                            >
                                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path
                                                                        fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
            </div>
            {question !== 'Choose an option' &&
                <>
                    <SliderComponent />
                    <Link href='/mood/shs' className='flex justify-center mt-10'>
                        <button className='flex flex-row bg-primary-blue-200 justify-center items-center button space-x-2 px-6 py-2 shadow-sm'>
                            <h1 className='font-bold'>Fetch some fixes</h1>
                            <Image src='/assets/wrench.png' alt='wrench' className='object-contain' height={32} width={32} />
                        </button>
                    </Link>

                </>

            }
        </div>

    )
}

export default Questions