import React, { useState, useTransition } from 'react';
import TabButton from '../tabButton';
import { Fade } from 'react-awesome-reveal';
import { PRESENTE } from '../../constant/PresenteData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Presentes = () => {
    const [tab, setTab] = useState("Sala");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <div className="">
            <div className="mt-5 flex justify-center sm:ml-2 items-center sm:text-lg md:text-[30px] lg:text-3xl xl:text-3xl ">

                <div className="flex -m-6">
                    <TabButton className="font-Playfair "
                        selectTab={() => handleTabChange("Sala")}
                        active={tab === "Sala"}
                    >
                        {" "}
                        <span className="font-bold">
                            Sala
                        </span>
                        <br />
                        {" "}

                    </TabButton>
                    <span className="">
                        ·
                    </span>
                    <TabButton className="font-Playfair "
                        selectTab={() => handleTabChange("Cozinha")}
                        active={tab === "Cozinha"}
                    >
                        {" "}
                        <span className="ml-1 font-bold">Cozinha</span> <br />  {" "}

                    </TabButton>
                    <span className="">
                        ·
                    </span>
                    <TabButton className="font-Playfair "
                        selectTab={() => handleTabChange("Quarto")}
                        active={tab === "Quarto"}
                    >
                        {" "}
                        <span className="ml-1 font-bold">Quarto</span>
                        <br />  {" "}

                    </TabButton>
                    <span className="">
                        ·
                    </span>
                    <TabButton className="font-Playfair "
                        selectTab={() => handleTabChange("Banheiro")}
                        active={tab === "Banheiro"}
                    >
                        {" "}
                        <span className="ml-1 font-bold">Banheiro</span> <br />  {" "}

                    </TabButton>
                </div>
            </div>
            {PRESENTE.find((t) => t.id === tab)?.content}
        </div>
    )
}

export default Presentes;
