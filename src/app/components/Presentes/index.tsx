import React, { useState, useTransition } from 'react';
import TabButton from '../tabButton';
import { Fade } from 'react-awesome-reveal';
import { PRESENTE } from '../../constant/PresenteData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Presentes = ({ onClick }:any) => {
    const [tab, setTab] = useState("Sala");
    const [isPending, startTransition] = useTransition();
    
    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <div className="sm:mt-0 xl:mt-14 lg:mt-14 xl:-ml-40 lg:-ml-40">
            <div className="mt-5 flex justify-center ml-2 sm:ml-2 items-center sm:text-sm lg:text-3xl xl:text-3xl">
                <Fade
                    cascade={true}
                    duration={500}
                >
                    <div className="mt-8 flex -m-6">
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
                        ·
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Cozinha")}
                            active={tab === "Cozinha"}
                        >
                            {" "}
                            <span className="ml-1">Cozinha</span> <br />  {" "}

                        </TabButton>
                        ·
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Quarto")}
                            active={tab === "Quarto"}
                        >
                            {" "}
                            <span className="ml-1">Quarto</span>
                            <br />  {" "}

                        </TabButton>
                        ·
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Banheiro")}
                            active={tab === "Banheiro"}
                        >
                            {" "}
                            <span className="ml-1">Banheiro</span> <br />  {" "}

                        </TabButton>
                    </div>
                </Fade>
            </div>
            {PRESENTE.find((t) => t.id === tab)?.content}
        </div>
    )
}

export default Presentes;
