import React, { useState, useTransition } from 'react'
import TabButton from '../tabButton';

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
            <div>

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
        <div className="sm:mt-0 xl:mt-32 lg:mt-32 flex justify-center items-center xl:-ml-40 lg:-ml-40">
            <div className="mt-8 flex flex-row sm:text- lg:text-4xl xl:text-4xl justify-start">
                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Sala")}
                    active={tab === "Sala"}
                >
                    {" "}
                    <span>Sala</span> <br />  {" "}

                </TabButton>
                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Cozinha")}
                    active={tab === "Cozinha"}
                >
                    {" "}
                    <span>Cozinha</span> <br />  {" "}

                </TabButton>


                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Quarto")}
                    active={tab === "Quarto"}
                >
                    {" "}
                    <span>Quarto</span> <br />  {" "}

                </TabButton>
                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Banheiro")}
                    active={tab === "Banheiro"}
                >
                    {" "}
                    <span>Banheiro</span> <br />  {" "}

                </TabButton>
                <TabButton className="text-black font-Playfair"
                    selectTab={() => handleTabChange("Aleatório")}
                    active={tab === "Aleatório"}
                >
                    {" "}
                    <span>Aleatório</span> <br />  {" "}

                </TabButton>

            </div>
            {PRESENTE.find((t) => t.id === tab)?.content}
        </div>
    )
}

export default Presentes;
