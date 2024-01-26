import React, { useState, useTransition } from 'react'
import Image from 'next/image';
import TabButton from '../tabButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-awesome-reveal';
import fundoItems from '../../../../public/assets/fundoItems.png';

const PRESENTE = [
    {
        title: "Quarto",
        id: "Quarto",
        content: (
            <div>
            </div>
        )
    },
    {
        title: "Sala",
        id: "Sala",
        content: (
            <div className="flex items-center justify-center">
                <div className="p-10 -ml-2 md:-ml-2 xl:-ml-2">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li>
                            <img src={fundoItems.src} alt="fundoItem" className="w-24 m-7" />
                        </li>
                        <li>
                            <img src={fundoItems.src} alt="fundoItem" className="w-24 m-7" />
                        </li>
                        <li>
                            <img src={fundoItems.src} alt="fundoItem" className="w-24 m-7" />
                        </li>
                        <li>
                            <img src={fundoItems.src} alt="fundoItem" className="w-24 m-7" />
                        </li>
                    </ul>
                    <br />
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li>
                            <img src={fundoItems.src} alt="fundoItem" className="w-24 m-7" />
                        </li>
                        <li>
                            <img src={fundoItems.src} alt="fundoItem" className="w-24 m-7" />
                        </li>
                        <li>
                            <img src={fundoItems.src} alt="fundoItem" className="w-24 m-7" />
                        </li>
                        <li>
                            <img src={fundoItems.src} alt="fundoItem" className="w-24 m-7" />
                        </li>
                    </ul>
                </div>
            </div>

        )
    },
    {
        title: "Cozinha",
        id: "Cozinha",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Banheiro",
        id: "Banheiro",
        content: (
            <div>

            </div>
        )
    },
    {
        title: "Aleatório",
        id: "Aleatório",
        content: (
            <div>

            </div>
        )
    },
]

const Presentes = () => {
    const [tab, setTab] = useState("Sala");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <div className="sm:mt-0 xl:mt-20 lg:mt-20 xl:-ml-40 lg:-ml-40">
            <div className="mt-8 flex justify-center ml-2 sm:ml-2 items-center sm:text-sm lg:text-3xl xl:text-3xl">
                <Fade
                    cascade={true}
                    duration={500}
                >
                    <div className="mt-8 flex">
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Sala")}
                            active={tab === "Sala"}
                        >
                            {" "}
                            <span className="">
                                Sala
                            </span>
                            <br />
                            {" "}

                        </TabButton>
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Cozinha")}
                            active={tab === "Cozinha"}
                        >
                            {" "}
                            <span className="">Cozinha</span> <br />  {" "}

                        </TabButton>


                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Quarto")}
                            active={tab === "Quarto"}
                        >
                            {" "}
                            <span className="">Quarto</span>
                            <br />  {" "}

                        </TabButton>
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Banheiro")}
                            active={tab === "Banheiro"}
                        >
                            {" "}
                            <span className="">Banheiro</span> <br />  {" "}

                        </TabButton>
                    </div>
                </Fade>
            </div>
            {PRESENTE.find((t) => t.id === tab)?.content}
        </div>
    )
}

export default Presentes;
